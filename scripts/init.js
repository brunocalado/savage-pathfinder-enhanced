import * as EDGES from './br_edges.js'
import * as OPTIONS from './br_options.js'
import * as PPCOMMON from './br_ppcommon.js'
import * as PPNOVICE from './br_ppnovice.js'
import * as PPSEASONED from './br_ppseasoned.js'
import * as PPVETERAN from './br_ppveteran.js'
import * as PPHEROIC from './br_ppheroic.js'
import * as PPAPG from './br_ppapg.js'

Hooks.once('init', () => {
  // --------------------------------------------------
  // SETTINGS

  // call this with: game.settings.get("savage-pathfinder-enhanced", "betterrolls_globalactions")
  game.settings.register('savage-pathfinder-enhanced', 'betterrolls_globalactions', {
    name: 'Better Rolls - Global Actions',
    hint: 'Check this to load SWPF global actions to Better Rolls module. Change this will reload the world.',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true
  });  


  // call this with: game.settings.get("savage-pathfinder-enhanced", "torch_loaddefaults")
  game.settings.register('savage-pathfinder-enhanced', 'torch_loaddefaults', {
    name: 'Torch - Load Default Lights',
    hint: 'Check this to load a JSON file for the module Torch. This will the the players which have items like Torch to access a button to turn on/off a light.',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true
  });  
  
}); // END HOOKS

Hooks.once('ready', () => {
  
  const useBetterRollsGA =  game.settings.get("savage-pathfinder-enhanced", "betterrolls_globalactions");
  if ( useBetterRollsGA && game.modules.get("betterrolls-swade2")?.active ) { 
    game.brsw.add_actions(EDGES.edges);
    game.brsw.add_actions(OPTIONS.options);
    game.brsw.add_actions(PPCOMMON.ppcommon);
    game.brsw.add_actions(PPNOVICE.ppnovice);
    game.brsw.add_actions(PPSEASONED.ppseasoned);     
    game.brsw.add_actions(PPVETERAN.ppveteran);    
    game.brsw.add_actions(PPHEROIC.ppheroic);    
    game.brsw.add_actions(PPAPG.ppapg);     
  } else {
    if ( game.modules.get("betterrolls-swade2")?.active ) { 
      console.log("!!! Savage Pathfinder - Enhanced: You must activate Better Rolls Module!")    
    }
  }
  
  const useTorchDefault =  game.settings.get("savage-pathfinder-enhanced", "torch_loaddefaults");
  if ( useTorchDefault && game.modules.get("torch")?.active ) { 
    game.settings.set("torch", "gameLightSources", "modules/savage-pathfinder-enhanced/config/torch_swade.json");
  } else {
    console.log("!!! Savage Pathfinder - Enhanced: You must activate Torch Module!")        
  }
  
  /*
  // Automated Evocations
  if ( game.modules.get("automated-evocations")?.active ) { 
    const customanims = {
      redportal: {
        fn: "Red Portal - SWPF",
        time: 650,
        name: "Red Portal",
        group: "Savage Pathfinder"
      }
    };
    game.settings.set(AECONSTS.MN, "customanimations", customanims);  
  }
  */
  
}); // END HOOKS