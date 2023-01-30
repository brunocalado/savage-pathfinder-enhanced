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
      button_name: "Pounce (Wild Attack)",
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
      self_add_status: "vulnerable"
    },
    {
      id: "ARCANEARCHER01",
      name: "Arcane Archer",
      button_name: "Arcane Archer",
      skillMod: "+1",
      dmgMod: "+1",
      defaultChecked: "on",
      and_selector: [
        {
          selector_type: "actor_has_edge",
          selector_value: "Arcane Archer"
        },
        {
          selector_type: "skill",
          selector_value: "Shooting"
        },
        {
          selector_type: "item_type",
          selector_value: "weapon"
        }
      ],
      group: groupName
    },
    {
      id: "POWERFULBLOW01",
      name: "Powerful Blow",
      button_name: "Powerful Blow (Wild Attack)",
      skillMod: "+2",
      dmgMod: "+4",
      and_selector: [
        {
          selector_type: "actor_has_edge",
          selector_value: "Powerful Blow"
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
      self_add_status: "vulnerable"
    },    
    {
      id: "DEADLYBLOW01",
      name: "Deadly Blow",
      button_name: "Deadly Blow",
      dmgMod: "+1",
      defaultChecked: "on",
      and_selector: [
        {
          selector_type: "actor_has_edge",
          selector_value: "Deadly Blow"
        },
        {
          selector_type: "item_type",
          selector_value: "weapon"
        }
      ],
      group: groupName
    },      
    
    

    // ----------------------
    // PP
    {
      id: "CH01PP",
      name: "1pp",
      button_name: "+1",
      "shotsUsed":"+1",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH02PP",
      name: "2pp",
      button_name: "+2",
      "shotsUsed":"+2",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH03PP",
      name: "3pp",
      button_name: "+3",
      "shotsUsed":"+3",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH04PP",
      name: "4pp",
      button_name: "+4",
      "shotsUsed":"+4",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH05PP",
      name: "5pp",
      button_name: "+5",
      "shotsUsed":"+5",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH06PP",
      name: "6pp",
      button_name: "+6",
      "shotsUsed":"+6",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH07PP",
      name: "7pp",
      button_name: "+7",
      "shotsUsed":"+7",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH08PP",
      name: "8pp",
      button_name: "+8",
      "shotsUsed":"+8",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH09PP",
      name: "9pp",
      button_name: "+9",
      "shotsUsed":"+9",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
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