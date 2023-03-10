// CUSTOMIZE
const compendiumLabel = 'Savage Pathfinder Gear'; // YOU CAN REPLACE THIS FOR ANOTHER COMPENDIUM LABEL
const suffix = '⭐';
const craftFolder = 'Craft - Special Materials';

/* Special Materials
TODO
- multi compendium for advanced


ADAMANTINE: Mined from rocks that fell from the heavens, adamantine adds +1 AP to any melee weapon or ranged weapon ammunition made of its metal. This stacks with the bonus from masterwork items. Adamantine weapons cost an additional 3,000 gp. Ammunition costs an addition 60 gp per missile.
Adamantine armor is harder to pierce than that made from other materials. It ignores up to 2 points of AP. Armor made from this material costs an extra 3,000 gp per point of armor bonus.
DARKWOOD: This rare wood is much lighter than normal. Items carved from it weigh half as much as typical equivalents and cost an additional 10 gp per pound of the original weight to the price of a masterwork version of the item. Darkwood items increase Hardness (or Toughness if the hull of a vehicle) by 2.
DRAGONHIDE: Armorers can fashion their products with the hides of dragons when such wonders become available. The number of armor pieces that can be crafted from a single dragon is equal to half its size (rounded up). The hide can be used to craft light, medium, or heavy armor and counts as masterwork, granting the same bonus as other armors of the same type ( +2 to +4). Additionally, wearing dragonhide armor grants the wearer an additional +4 armor against the element tied to the dragon's breath weapon. For example, blue dragonhide gives resistance to electricity. This benefit stacks with the Energy Resistance enchantment. Dragonhide costs an additional 2500 gp beyond the cost of the normal armor it's mimicking. So a Dragonhide Breastplate costs 3000 gp.
IRON, COLD: Mined from the deepest depths of Golarion, cold iron is the weakness of certain demons and fey creatures. Weapons forged with cold iron increase Hardness by 2 and cost twice as much as normal.
MITHRAL: A rare metal on Golarion, mithral is forged like steel but weighs much less. Mithral reduces the Minimum Strength of weapons, armor, and shields one die type (this stacks with the bonus from masterwork) and the weight by half. Weapons and shields made primarily of mithral (GM's call) cost 100 times normal, while armor costs 10 times normal per piece. Mithral weapons count as silver for purposes of creatures with a silver Weakness.
SILVER, ALCHEMICAL: A complex process involving metallurgy and alchemy can bond silver to a steel weapon. This allows them to affect creatures with a Weakness to silver, such as lycanthropes. They cost ten times normal price.
*/

const version = 'v0.1';
const icon = "icons/tools/smithing/anvil.webp";
let coreRules = false;
if (game.modules.get("swpf-core-rules")?.active) { coreRules = true; }

main();

async function main() {
  let tokenD = canvas.tokens.controlled[0];
  const items = await getCompendiumEntities( compendiumLabel ); 
  
  let itemsList = '';
  for (item of items ) {
    itemsList += `<option value="${item.name}">"${item.name}"</option>`
  }
  
  let template = `

      <h2>Instructions</h2>
      <p>Choose the item in the field. A special material version will be created in to the world.</p>
      
      <table>
      <tbody>
      
      <tr align=center>
      <td>
          <b>Gear List</b> 
      </td>  
      <td>
          <b>Special Material</b> 
      </td>      
      </tr>

      
      <tr align=center>
      <td>
        <input list="aeTypes" id="aeType" name="aeType">
        <datalist id="aeTypes">
          ${itemsList}
        </datalist>        
      </td>   
      <td>
        <select name="select_special_material">
          <option value="0">Adamantine</option>
          <option value="1" selected>Darkwood</option>
          <option value="2">Dragonhide</option>
          <option value="3">Iron, Cold</option>
          <option value="4">Mithral</option>        
          <option value="5">Silver, Alchemical</option>                    
        </select>       
      </td>         
      </tr>

      </tbody>
      </table>
      </br>   

      </br>   
      <h3>Options</h3>
      <input type = "checkbox" id = "shareItem" name = "shareItem" checked>
      <label for = "shareItem"> Share with Players? </ label>        
  `;
  
  new Dialog({
    title: `Special Materials for Savage Pathfinder - ${version}`,
    content: template,
    buttons: {
      ok: {
        label: `<i class="fas fa-magic"></i> Craft`,
        callback: async (html) => {
          let itemLabel = html.find("#aeType")[0].value;
          let shareItem = html.find("#shareItem")[0].checked;
          const specialMaterial = html.find("select[name=select_special_material]").val();
          
          let item = await getItem( compendiumLabel, itemLabel );
          if(!item) {
            ui.notifications.warn('You must select an item!');
            return;
          }
          const itemData = await forgeSpecialMaterials( item.toObject(), shareItem, specialMaterial );
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
async function getCompendiumEntities( compendiumLabel='Savage Pathfinder Gear' ) {
  const compendium = await game.packs.find(p=>p.metadata.label==compendiumLabel);
  if (!compendium) {
    console.warn( "Savage Pathfinder - Enhanced: The compendium couldn't be found." );
    return;
  }
  let items = await compendium.getDocuments();
  items = await items.filter(p=> (p.type=='armor' || p.type=='weapon'|| p.type=='shield' || p.type=='gear') && p.name!="#[CF_tempEntity]" );
  return items;
}

async function getItem( compendiumLabel='Savage Pathfinder Gear', itemLabel ) {
  let items = await getCompendiumEntities( compendiumLabel );
  return items.find(p=> p.name==itemLabel);
}    

// v0.3
async function forgeSpecialMaterials( data, shareItem, specialMaterial ) {
  let description = '';  
  
  if ( specialMaterial=='Adamantine') {
    const minStr = parseInt( data.system.minStr.toLowerCase().replace('d', '') );
    if (minStr>=4) {
      data.system.minStr = `d${minStr-2}`;
    }
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>Armor and shields reduce the Minimum Strength requirement by one die type, to a minimum of d4.</p>          
    <p>Shields cost an extra 300 gp, while armor costs an extra 150 gp per piece.</p>          
    </div>`;     
    data.system.description = description + data.system.description;
    data.system.price = data.data.price + 300;
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