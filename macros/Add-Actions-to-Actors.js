const version = '0.3';
let actors = Array.from(game.actors);

main();

function main() {
  
  let dialogue_content = `
    <h2>About</h2>
    <p>This will add to the selected group of actors all actions in the actions compendium.</p>
    
    <table>
    <thead>
      <tr>
        <th>Choose Actors</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <select id="select-actors" name="select-actors" style="width:100%;">  
            <option value="character" selected="selected">Only PCs</option>
            <option value="npc">Only NPCs</option>
            <option value="all">All PCs and NPCs</option>
          </select>        
        </td>
      </tr>
    </tbody>
    </table>
`;

  let dialogButtons = {
    yes: {
      icon: "<i class='fas fa-check'></i>",
      label: `Add Actions`,
      callback: (html) => {
        addActionsToActors(html);
      }
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel`
    }   
  };

  // Main Dialogue    
  new Dialog({
    title: `Add Actions to Actors - ${version}`,
    content: dialogue_content,
    buttons: dialogButtons,
    default: "yes",
  }).render(true);
  
}

async function addActionsToActors(html) {
  ui.notifications.warn("Adding Actions. Wait! You can check progress in the console (F12).");
  
  const selectedActors = html.find('[name="select-actors"]')[0].value;
  
  const compendium = await game.packs.find(p => p.metadata.label == "Actions - SWPF - Enhanced");
  let allItems = await compendium.getDocuments();
  let actions = await allItems.filter(p => (p.type == 'action'));
  actions.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < actors.length; i++) {
    for (let j = 0; j < actions.length; j++) {
      let actor_action = actors[i].items.filter(p => (p.type == 'action') && (p.name == actions[j].name));
      var addItem = false;
      
      //selectedActors
      if ( selectedActors=='character' && actors[i].type == "character" ) {
        await removeActions(actors[i], actor_action);
        addItem = true;
      } else if ( selectedActors=='npc' && actors[i].type == "npc" ) {
        await removeActions(actors[i], actor_action);
        addItem = true;
      } else if (( (actors[i].type == "character") || (actors[i].type == "npc") ) ) { // all     
        await removeActions(actors[i], actor_action);
        addItem = true;  
      } // IF selectedActors            
      
      if (addItem) {
        const created = await actors[i].createEmbeddedDocuments('Item', [actions[j]]);
      }
      
      console.warn("Add Actions: Actor (" + i + ") / Action ( " + j + ")" );
    } // END FOR 
    
  } // END FOR  
  
} // END FUNC

async function removeActions(actor, actor_action) {
  if (actor_action.length != 0) {
    Array.from(actor_action).forEach(action => { // Delete all actions with the name
      const deleted = actor.deleteEmbeddedDocuments('Item', [action.id]);
    });                    
  }
}


//devs: Marcos/Bruno