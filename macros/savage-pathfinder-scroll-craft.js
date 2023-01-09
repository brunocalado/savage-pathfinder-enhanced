// CUSTOMIZE
const compendiumLabel = 'Savage Pathfinder Powers'; // YOU CAN REPLACE THIS FOR ANOTHER COMPENDIUM LABEL
const rankNovice = 'Novice';
const rankSeasoned = 'Seasoned';
const rankVeteran = 'Veteran';
const rankHeroic = 'Heroic';
const rankLegendary = 'Legendary';
const craftFolder = 'Craft - Scroll';

/* Scroll Craft for Savage Pathfinder 
source: 
icon: 

TODO

Craft: The cost of a scroll is equal to its 
power’s Rank × the number of Power Points it uses; then multiply that total by 25 gp. A scroll of bolt with AP 2, for example, is Novice (1) × 2 Power Points, × 25 gp = 50 gp. A scroll's market price is double its cost to craft.

*/

const version = 'v0.6';
const icon = "icons/sundries/scrolls/scroll-plain-red.webp";

const rulesLink = '@UUID[Compendium.swpf-core-rules.swpf-rules.swpfcore06magici.JournalEntryPage.06magicitems0000#scrolls]{SCROLLS}';
const coreRules = game.modules.get("swpf-core-rules")?.active;

main();

async function main() {
  let tokenD = canvas.tokens.controlled[0];
  const powers = await getCompendiumEntities( compendiumLabel ); 
  
  let powersList = '';
  for (power of powers ) {
    powersList += `<option value="${power.name}">"${power.name}"</option>`
  }
  
  let template = `

      <h2>Instructions</h2>
      <p>Choose the power in left field. Add the modifiers points to the right field.</p>
      
      <table>
      <tbody>
      
      <tr align=center>
      <td>
          <b>Powers List</b> 
      </td>
      <td>
          <b>Extra Points</b> 
      </td>      
      </tr>
      
      <tr align=center>
      <td>
          <input list="aeTypes" id="aeType" name="aeType">
          <datalist id="aeTypes">
            ${powersList}
          </datalist>        
      </td>
      <td>
          <input id="modifierPoints" name="modifierPoints" type="Number" value="0" min=0 max=30>
      </td>      
      </tr>

      </tbody>
      </table>      
      
      </br>
      <h3>Modifiers List</h3>
      <textarea id="modifierMessage" name="modifierMessage" rows="3"></textarea>
      
      </br>
      <h3>Options</h3>
      <input type = "checkbox" id = "shareItem" name = "shareItem" checked>
      <label for = "shareItem"> Share with Players? </ label>          
      </br></br>
  `;
  
  new Dialog({
    title: `Scroll Craft for Savage Pathfinder - ${version}`,
    content: template,
    buttons: {  
      ok: {
        label: `<i class="fas fa-magic"></i> Craft`,
        callback: async (html) => {
          let powerLabel = html.find("#aeType")[0].value;
          let modifierPoints = Number( html.find('[name="modifierPoints"]')[0].value );
          let shareItem = html.find("#shareItem")[0].checked;
          let modifierMessage = html.find('[name="modifierMessage"]')[0].value;

          let power = await getPower( compendiumLabel, powerLabel );
          if(!power) {
            ui.notifications.warn('You must select a power!');
            return;
          }
          let rankMultiplier = rankToNumber( power.system.rank );
          let powerPointCost = Number(power.system.pp);
          let finalCraftCost = (rankMultiplier*(powerPointCost+modifierPoints))*25;
          let extraMessage = `<div class="swpf-core">
          <h2>Craft Notes</h2>
          <p><b>Modifiers List:<b> ${modifierMessage}</p>
          <p>Craft Cost: ${finalCraftCost}</p>
          <p>Market Cost: ${finalCraftCost*2}</p>
          <p><b>Reading a scroll is an action</b> and requires a Smarts roll or arcane skill roll (caster’s choice). If the roll is successful, the power activates and the scroll fades.</p>`;
          
          if (coreRules) {
            extraMessage += `<p>Rules: ${rulesLink}</p>`;
          }
          extraMessage += `<h2>Power Description</h2></div>`;

          const folder = await getFolder(craftFolder, 'Item');

          let data = {
            "name": `Scroll: ${power.name}`,
            "type": "gear",
            "img": icon,
            "folder": folder,
            "data": {
              "description": extraMessage + power.system.description,
              "quantity": 1,
              "weight": 0.1,
              "price": finalCraftCost,
              "equippable": true
            },
            "ownership": {
              "default": shareItem ? 2 : 0
            }            
          };    
          
          const scroll = await Item.createDocuments([data]);                
          game.items.get(scroll[0].id).sheet.render(true);
        }
      }
    },
    default: "ok"
  }).render(true);
}

// -------------------------------------------------------
// Functions
async function getCompendiumEntities( compendiumLabel ) {
  const compendium = await game.packs.find(p=>p.metadata.label==compendiumLabel);
  if (!compendium) {
    console.warn( "The compendium couldn't be found." );
    return;
  }
  let powers = await compendium.getDocuments();
  powers = powers.filter(p=> p.type=='power');
  return powers;
}    

async function getPower( compendiumLabel, powerLabel ) {
  let powers = await getCompendiumEntities( compendiumLabel );
  return powers.find(p=> p.name==powerLabel);
}    

function rankToNumber( rank ) {
  switch (rank) {
    case rankNovice:
      return 1;
    case rankSeasoned:
      return 2;    
    case rankVeteran:
      return 3;    
    case rankHeroic:
      return 4;   
    case rankLegendary:
      return 5;   
    default:
      console.log(`Unknown rank: ${rank}.`);
  }
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