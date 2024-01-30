// CUSTOMIZE
const compendiumID = 'swpf-core-rules.swpf-gear'; // YOU CAN REPLACE THIS FOR ANOTHER COMPENDIUM LABEL
const compendiumIDptbr = 'swpf-core-rules-ptbr.swpf-gear'; // YOU CAN REPLACE THIS FOR ANOTHER COMPENDIUM LABEL
const suffix = '⭐';
const craftFolder = 'Craft - Masterwork';

const version = 'v0.9';

/* Masterwork
TODO

Weapons 
+1 AP. Masterwork melee and ranged weapons add 300 gp to the cost.

Masterwork arrows, bolts, or other ammunition subtract 1 point of Range penalty at Long or Extreme Range, and cost six additional gold pieces per unit. Masterwork ammunition loses its bonus after use even if recovered.

Armor and shields
reduce the Minimum Strength requirement by one die type, to a minimum of d4. Shields cost an extra 300 gp, while armor costs an extra 150 gp per piece.

*/

const icon = "icons/tools/smithing/anvil.webp";
let coreRules = false;
if (game.modules.get("swpf-core-rules")?.active) { coreRules = true; }

if ( canvas.tokens.controlled[0]===undefined ) {
  main();
} else {
  main();
}

async function main() {
  const itemsEnglish = await getCompendiumEntities( compendiumID ); 
  const itemsPtbr = await getCompendiumEntities( compendiumIDptbr ); 
  let items; 

  if (itemsEnglish && itemsPtbr) {
    items = [...itemsEnglish, ...itemsPtbr];
  } else if (itemsEnglish) {
    items = itemsEnglish;
  } else if (itemsPtbr) {
    items = itemsPtbr;
  }
  
  let itemsList = '';
  for (item of items ) {
    itemsList += `<option value="${item.name}">"${item.name}"</option>`
  }
  
  let template = `

      <h2>Instructions</h2>
      <p>Choose the item in the field. A Mastework version will be created in to the world.</p>
      
      <table>
      <tbody>
      
      <tr align=center>
      <td>
          <b>Gear List</b> 
      </td>  
      </tr>
      
      <tr align=center>
      <td>
          <input list="aeTypes" id="aeType" name="aeType">
          <datalist id="aeTypes">
            ${itemsList}
          </datalist>        
      </td>   
      </tr>

      </tbody>
      </table>      

      </br>   
      <h3>Options</h3>
      <input type = "checkbox" id = "shareItem" name = "shareItem" checked>
      <label for = "shareItem"> Share with Players? </ label>        
  `;
  
  new Dialog({
    title: `Masterwork Forge for Savage Pathfinder - ${version}`,
    content: template,
    buttons: {
      ok: {
        label: `<i class="fas fa-magic"></i> Craft`,
        callback: async (html) => {
          let itemLabel = html.find("#aeType")[0].value;
          let shareItem = html.find("#shareItem")[0].checked;
          
          let item = await getItem( items, itemLabel );
          if(!item) {
            ui.notifications.warn('You must select an item!');
            return;
          }
          const itemData = await forgeMasterwork( item.toObject(), shareItem );
          const forgedItem = await Item.createDocuments([itemData]);                
          game.items.get(forgedItem[0].id).sheet.render(true);
        // END CALLBACK  
        },
      }
    },
    default: "ok"
  }).render(true);
}

// -------------------------------------------------------
// Functions
// v0.1
async function getCompendiumEntities( compendiumIDarg ) {
  const compendium = await game.packs.find(p=>p.metadata.id==compendiumIDarg);
  
  if (!compendium) {
    console.warn( "The compendium couldn't be found." );
    return;
  }
  const AllItems = await compendium.getDocuments();
  const items = await AllItems.filter(p=> (p.type=='armor' || p.type=='weapon' || p.type=='shield' || (p.type=='gear' && p.system.isAmmo) ) );
  return items;
}

async function getItem(items, itemLabel ) {
  return items.find(item => item.name === itemLabel );
}

// v0.4
async function forgeMasterwork( data, shareItem ) {
  let description = '';
  if ( data.type=='shield') {
    const minStr = parseInt( data.system.minStr.toLowerCase().replace('d', '') );
    if (minStr>=4) {
      data.system.minStr = `d${minStr-2}`;
    }
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>Armor and shields reduce the Minimum Strength requirement by one die type, to a minimum of d4.</p>          
    <p>Shields cost an extra 300 gp, while armor costs an extra 150 gp per piece.</p>          
    </div>
	<h2>Item Description</h2>
	`;     
    data.system.description = description + data.system.description;
    data.system.price = data.data.price + 300;    
  } else if ( data.type=='armor') {
    const minStr = parseInt( data.system.minStr.toLowerCase().replace('d', '') );
    if (minStr>=4) {
      data.system.minStr = `d${minStr-2}`;
    }
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>Armor and shields reduce the Minimum Strength requirement by one die type, to a minimum of d4.</p>          
    <p>Shields cost an extra 300 gp, while armor costs an extra 150 gp per piece.</p>          
    </div>
	<h2>Item Description</h2>
	`;     
    data.system.description = description + data.system.description;
    data.system.price = data.data.price + 150;       
  } else if ( data.type=='weapon') {
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>+1 AP. Masterwork melee and ranged weapons add 300 gp to the cost.</p>          
    </div>
	<h2>Item Description</h2>
	`;     
    data.system.description = description + data.system.description;
    data.system.price = data.system.price + 300;    
    data.system.ap = parseInt(data.system.ap) + 1;    
  } else if (data.type=='shield') {
    const minStr = parseInt( data.system.minStr.toLowerCase().replace('d', '') );
    if (minStr>=4) {
      data.system.minStr = `d${minStr-2}`;
    }
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>Armor and shields reduce the Minimum Strength requirement by one die type, to a minimum of d4.</p>          
    <p>Shields cost an extra 300 gp, while armor costs an extra 150 gp per piece.</p>          
    </div>
	<h2>Item Description</h2>
	`;     
    data.system.description = description + data.system.description;
    data.system.price = data.system.price + 150;    
  } else if ( data.type=='gear' && data.system.isAmmo ) { // AMMUNITION
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>Masterwork arrows, bolts, or other ammunition subtract 1 point of Range penalty at Long or Extreme Range, and cost six additional gold pieces per unit.</p>          
    <p>Masterwork ammunition loses its bonus after use even if recovered.</p>          
    </div>
	<h2>Item Description</h2>
	`;	
    data.system.description = description + data.system.description;
    data.system.price = data.system.price + 6;   
	
	data.system.actions.additional[foundry.utils.randomID()] = {
		"name": "Ammunition Masterwork",
		"type": "skill",
		"skillMod": "+1"
	}

  }
  
  data.name = `${suffix} ${data.name}`;
  if (shareItem) {
    data.ownership.default = 2;
  }
  
  const folder = await getFolder(craftFolder, 'Item');
  data.folder = folder;
  return data;
}

// Folder v0.1
async function getFolder(folderName, folderType) {
  let folder;
  if( game.folders.filter(f => f.type === folderType).find(f => f.name === folderName)===undefined) {
    folder = await Folder.create( {
      name: folderName,
      type: folderType
    } );
  } else {
    folder = game.folders.find( f => f.name === folderName);
  }
  return folder;
} 