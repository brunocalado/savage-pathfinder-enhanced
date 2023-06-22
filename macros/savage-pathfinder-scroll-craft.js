// CUSTOMIZE
const compendiumID = 'swpf-core-rules.swpf-powers'; // YOU CAN REPLACE THIS FOR ANOTHER COMPENDIUM LABEL
const compendiumIDptbr = 'swpf-core-rules-ptbr.swpf-powers'; // YOU CAN REPLACE THIS FOR ANOTHER COMPENDIUM LABEL

// English
const rankNovice = 'Novice';
const rankSeasoned = 'Seasoned';
const rankVeteran = 'Veteran';
const rankHeroic = 'Heroic';
const rankLegendary = 'Legendary';
const craftFolder = 'Craft - Scroll';

// English
const rankNovicebr = 'Novato';
const rankSeasonedbr = 'Experiente';
const rankVeteranbr = 'Veterano';
const rankHeroicbr = 'Heroico';
const rankLegendarybr = 'Lendário';
const craftFolderbr = 'Pergaminhos Mágicos';

/* Scroll Craft for Savage Pathfinder 
source: 
icon: 

TODO

Craft: The cost of a scroll is equal to its 
power’s Rank × the number of Power Points it uses; then multiply that total by 25 gp. A scroll of bolt with AP 2, for example, is Novice (1) × 2 Power Points, × 25 gp = 50 gp. A scroll's market price is double its cost to craft.

*/

const version = 'v0.8';
const icon = "icons/sundries/scrolls/scroll-plain-red.webp";

const rulesLink = '@UUID[Compendium.swpf-core-rules.swpf-rules.swpfcore06magici.JournalEntryPage.06magicitems0000#scrolls]{SCROLLS}';
const coreRules = game.modules.get("swpf-core-rules")?.active;
const coreRulesptbr = game.modules.get("swpf-core-rules-ptbr")?.active;

main();

async function main() {
  let tokenD = canvas.tokens.controlled[0];
  const powersEnglish = await getCompendiumEntities( compendiumID ); 
  const powersPtbr = await getCompendiumEntities( compendiumIDptbr ); 
  let powers; 

  if (powersEnglish && powersPtbr) {
    powers = [...powersEnglish, ...powersPtbr];
  } else if (powersEnglish) {
    powers = powersEnglish;
  } else if (powersPtbr) {
    powers = powersPtbr;
  }
  
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

          let power = await getPower( powers, powerLabel );
          if(!power) {
            ui.notifications.warn('You must select a power!');
            return;
          }
          let rankMultiplier = rankToNumber( power.system.rank );
          console.log( power.system.rank )
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
            "type": "consumable",            
            "img": icon,
            "folder": folder,
            "system": {
              "category": power.system.rank,
              "description": extraMessage + power.system.description,
              "quantity": 1,
              "weight": 0.1,
              "price": finalCraftCost*2,
              "charges": {
                "value": 1,
                "max": 1
              },
              "destroyOnEmpty": true,
              "source": "Scroll Craft for Savage Pathfinder"
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
async function getCompendiumEntities( compendiumIDarg ) {
  const compendium = await game.packs.find(p=>p.metadata.id==compendiumIDarg);
  
  if (!compendium) {
    console.warn( "The compendium couldn't be found." );
    return;
  }
  let powers = await compendium.getDocuments();
  powers = powers.filter(p=> p.type=='power');
  return powers;
} 

async function getPower(powers, powerLabel ) {
  return powers.find(power => power.name === powerLabel );
}
   
function rankToNumber( rank ) {
  console.log(`Unknown rank: ${rank}.`);
  switch (rank) {
    case rankNovice:
    case rankNovicebr:
      return 1;
      break;
    case rankSeasoned:
    case rankSeasonedbr:
      return 2;    
      break;
    case rankVeteran:
    case rankVeteranbr:
      return 3;    
      break;
    case rankHeroic:
    case rankHeroicbr:
      return 4;   
      break;
    case rankLegendary:
    case rankLegendarybr:
      return 5;   
      break;
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