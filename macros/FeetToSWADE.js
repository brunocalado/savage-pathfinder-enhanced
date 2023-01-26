// IMPORTANT: MAKE A SCENE BACKUP BEFORE RUN THIS MACRO
// ----------------------------------------------------

/* Feet to SWADE
source: 
icon: icons/tools/navigation/map-chart-tan.webp 
*/

const version = 'v1.4';

main();

async function main() {
  new Dialog({
    title: `Grid/Light/Sound Modifier - ${version}`,
    content: `
    <p style="text-align:center;"><b style="color:red;">WARNING: THIS ACTION CAN'T BE UNDONE!</b></p>
    <h2>Divider</h2>
    <p>
      <input type="number" id="lightMulti" value=5 min="1" max="20" style="text-align:center;"/>
    </p>
    <p>
      All lights and sound radius in the scene will be divided by this number.
    </p>
    
    <br>
    <h2>Grid Distance</h2>
    <p>
      <input type="number" id="newDistance" value=1 min="1" max="1000" style="text-align:center;"/>
    </p>
    <p>
      The Grid Distance will be set to this number.
    </p>
    
    <br>
    <h2>Grid Unit Name</h2>
    <p>
      <input type="text" id="newUnit" value="in" style="text-align:center;"/>
    </p>    
    <p>
      The grid unit will be set to this.
    </p>

    <br>
    `,
    buttons: {
      roll: {
        label: "Update",
        callback: (html) => {
          patchScene(html);
        }
      }, 
      cancel: {
        label: "Cancel"
      }
    }
  }).render(true)
}

async function patchScene(html) { 
  let lightMulti =  parseInt( html.find("#lightMulti")[0].value );  
  let newDistance = parseInt( html.find("#newDistance")[0].value );  
  let newUnit = html.find("#newUnit")[0].value;    
  
  // light
  await canvas.lighting.updateAll((i) => ({
    "config.bright" : Math.round( i.document.config.bright / lightMulti ) , 
    "config.dim" : Math.round( i.document.config.dim / lightMulti ) 
  }));

  // sound
  await canvas.sounds.updateAll((i) => ({
    "radius" : Math.round( i.document.radius / lightMulti ) 
  }));
  
  await canvas.scene.update({
    "grid.distance": newDistance, 
    "grid.units": newUnit
  });

}
