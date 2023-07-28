const folderName = 'Players'; // This is the name of a folder in the actor directory.

// ===================================================================================
const version = 'v0.1';
const compendiumAbilitiesName = 'swpf-core-rules.swpf-abilities';

main();

// ===================================================================================
async function main() {
  const pcs = await readActorsFromFolder(folderName); 

  let pcsList = '';
  for (pc of pcs) {
    pcsList += `<option value="${pc.id}">"${pc.name}"</option>`;
  }
  
  let template = `

      <h2>Instructions</h2>
      <p>Choose the PC from the field.</p>
      
      <table>
      <tbody>
      
      <tr align=center>
      <td>
          <b>PCs List</b> 
      </td>  
      </tr>
      
      <tr align=center>
      <td>
          <input list="aeTypes" id="aeType" name="aeType">
          <datalist id="aeTypes">
            ${pcsList}
          </datalist>        
      </td>   
      </tr>

      </tbody>
      </table>      
  `;
  
  new Dialog({
    title: `Mirror Self - ${version}`,
    content: template,
    buttons: {
      ok: {
        label: `<i class="fas fa-arrow-alt-circle-right"></i> Next`,
        callback: async (html) => {
          const selectedPCID = html.find("#aeType")[0].value; 
          if(!selectedPCID) {
            ui.notifications.warn('You must select a PC!');
            return;
          }                    
          const MyClone = await createClone( selectedPCID );        
        } // END CALLBACK  
      }      
    },
    default: "ok"
  }).render(true);
}

// ===================================================================================
// Functions

// Macro para ler todos os Actors de uma pasta no Foundry VTT
async function readActorsFromFolder(folderName) {
  const folder = game.folders.find((f) => f.name === folderName && f.type === "Actor" );
  if (!folder) {
    ui.notifications.error(`The folder "${folderName}" couldn't be found.`);
    return;
  }

  const actors = await folder.contents;
  const pcs = actors.filter((f) => f.type === 'character' ); 
  if (pcs.length === 0) {
    ui.notifications.warn(`The folder "${folderName}" is empty.`);
    return;
  }

  return pcs;
}

//
async function createClone(selectedPCID) {
  const sourceData = game.actors.get(selectedPCID).toObject();

  sourceData.type = "npc";
  sourceData.system.wildcard = false;
  sourceData.name = `Mirror ${sourceData.name}`;

  const skills = sourceData.items.filter((i) => i.type === "skill");
  for (const skill of skills){
    if (skill.system.die.sides > 4) skill.system.die.sides = skill.system.die.sides - 2;
  }
  
  const clonedActor = await Actor.create([sourceData]);
  
  if (game.modules.get("swpf-core-rules")?.active) { 
    const temp1 = await addItemToCharacter(compendiumAbilitiesName, "Construct", clonedActor);
    const temp2 = await addItemToCharacter(compendiumAbilitiesName, "Fearless", clonedActor);
  }
  clonedActor[0].sheet.render(true)
}

//-------------------------------

// Macro para adicionar um item do compêndio a uma ficha de personagem no SWADE
async function addItemToCharacter(compendiumID, itemName, clonedActor) {
  // Encontre o compêndio de itens pelo ID fornecido
  const compendium = game.packs.get(compendiumID);
  if (!compendium) {
    ui.notifications.error(`Compêndio de itens com ID "${compendiumID}" não encontrado.`);
    return;
  }

  // Encontre o item pelo nome fornecido no compêndio
  const id = compendium.index.getName(itemName)._id;
  const item = await compendium.getDocument(id);
  if (!item) {
    ui.notifications.error(`Item com nome "${itemName}" não encontrado no compêndio.`);
    return;
  }
  const itemData = item.toObject();
  
  // Adicione o item à ficha de personagem
  await clonedActor[0].createEmbeddedDocuments("Item", [itemData]);

}