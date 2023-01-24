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
  const groupName = "Savage Pathfinder";

  const BETTER_ROLLS_SWPF = [{
        id: "DESPERATE_ATTACK-2",
        name: "Desperate Attack +2",
        button_name: "Desperate Attack +2",
        skillMod: 2,
        dmgMod: -2,
        dmgOverride: "",
        and_selector: [{
            selector_type: "skill",
            selector_value: "Fighting"
          },
          {
            selector_type: "item_type",
            selector_value: "weapon"
          }
        ],
        group: groupName
      },
      {
        id: "DESPERATE_ATTACK-4",
        name: "Desperate Attack +4",
        button_name: "Desperate Attack +4",
        skillMod: 4,
        dmgMod: -4,
        dmgOverride: "",
        and_selector: [{
            selector_type: "skill",
            selector_value: "Fighting"
          },
          {
            selector_type: "item_type",
            selector_value: "weapon"
          }
        ],
        group: groupName
      },
      {
        id: "MONKRAISE",
        name: "Monk",
        button_name: "Monk",
        defaultChecked: "on",
        raiseDamageFormula: "+1d10x",
        and_selector: [{
            selector_type: "actor_has_edge",
            selector_value: "Monk"
          },
          {
            selector_type: "skill",
            selector_value: "Fighting"
          }
        ],
        group: groupName
      },
      {
        id: "ENVIRONMENTALRESISTANCE",
        name: "Environmental Resistance",
        button_name: "Environmental Resistance",
        dmgMod: "-4",
        or_selector: [{
            selector_type: "item_type",
            selector_value: "weapon"
          },
          {
            selector_type: "item_type",
            selector_value: "power"
          }
        ],
        group: groupName
      },
      {
        id: "ENVIRONMENTALWEAKNESS",
        name: "Environmental Weakness",
        button_name: "Environmental Weakness",
        dmgMod: "+4",
        or_selector: [
        {
          selector_type: "item_type",
          selector_value: "weapon"
        },
        {
          selector_type: "item_type",
          selector_value: "power"
        }
      ],
      group: groupName
    },
    {
      id: "SNEAKATTACK",
      name: "Sneak Attack",
      button_name: "Sneak Attack",
      dmgMod: "+1d6x",
      and_selector: [
        {
          selector_type: "actor_has_edge",
          selector_value: "Rogue"
        },
        {
          selector_type: "skill",
          selector_value: "Fighting"
        }
      ],
      group: groupName
    },
    {
      id: "POUNCINGWILDATTACK",
      name: "Pounce",
      button_name: "Pounce",
      skillMod: "+2",
      dmgMod: "+4",
      and_selector: [
        {
          selector_type: "actor_has_ability",
          selector_value: "Pounce"
        },
        {
          selector_type: "skill",
          selector_value: "Fighting"
        },
        {
          selector_type: "item_type",
          selector_value: "weapon"
        }
      ],
      group: groupName,
      self_add_status: "Vulnerable"
    }
    
  ];
  
  const useBetterRollsGA =  game.settings.get("savage-pathfinder-enhanced", "betterrolls_globalactions");
  if ( useBetterRollsGA && game.modules.get("betterrolls-swade2")?.active ) { 
    game.brsw.add_actions(BETTER_ROLLS_SWPF);
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
  
}); // END HOOKS