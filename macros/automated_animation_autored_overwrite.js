// v0.1
// TODO: https://github.com/MrVauxs/pf2e-jb2a-macros/blob/main/module/updateMenu.js

main();
const debouncedReload = debounce(() => location.reload(), 1000); // RELOAD AFTER CHANGE


async function main() {
  const templateData = ` 
    <h2>WARNING</h2>    
    <p>This will replace you automated animations settings with Savage Pathfinder Enhanced autorec file. This can't be undone. Make a backup before.</p>
    <p>Your world will reload after load the autorec file.</p>
    <p>You can cancel this action now.</p>
  `;                

  new Dialog({
    title: `OVERWRITE AUTOMATED ANIMATIONS MENUS`,
    content: templateData,
    buttons: {
      roll: {
        label: "OK",
        callback: (html) => {
          replaceAAMenus();
        }
      }, 
      cancel: {
        label: "Cancel"
      }
    }
  }).render(true);
}

async function replaceAAMenus() {
  const filePath= 'modules/savage-pathfinder-enhanced/config/autorec.json';
  const inObject = {
    melee: true,
    range: true,
    ontoken: true,
    templatefx: true,
    aura: true,
    preset: true,
    aefx: true
  };
  const parsedJSON = await getJSON(filePath);

  AutomatedAnimations.AutorecManager.overwriteMenus(parsedJSON , inObject)
  
  debouncedReload();
}

async function getJSON(filePath) {
  const response = await fetch(filePath);
  const json = await response.json();  
  return JSON.stringify(json);
}