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
  const groupNamePP = "Power Points";
  const groupNamePModifiers = "Power Modifiers";
  const groupNameGenericPModifiers = "Power Modifiers - Generic";
  const starIcon = "☆ ";

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
        button_name: "Env. Resistance",
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
        button_name: "Env. Weakness",
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
      name: "+1 PP",
      button_name: "+1",
      "shotsUsed":"+1",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH02PP",
      name: "+2 PP",
      button_name: "+2",
      "shotsUsed":"+2",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH03PP",
      name: "+3 PP",
      button_name: "+3",
      "shotsUsed":"+3",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH04PP",
      name: "+4 PP",
      button_name: "+4",
      "shotsUsed":"+4",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH05PP",
      name: "+5 PP",
      button_name: "+5",
      "shotsUsed":"+5",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH06PP",
      name: "+6 PP",
      button_name: "+6",
      "shotsUsed":"+6",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH07PP",
      name: "+7 PP",
      button_name: "+7",
      "shotsUsed":"+7",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH08PP",
      name: "+8 PP",
      button_name: "+8",
      "shotsUsed":"+8",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    {
      id: "CH09PP",
      name: "+9 PP",
      button_name: "+9",
      "shotsUsed":"+9",
      selector_type: "item_type",
      selector_value: "power",
      group: "Power Points"
    },
    
    // ----------------------
    // Generic Power Modifiers
    {
      id:"ADAPTABLECASTER1",
      name:"Adaptable Caster (+1)",
      button_name:"Adaptable Caster (+1)",
      shotsUsed:"+1",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    },
    {
      id:"ARMORPIERCING1",
      name:"Armor Piercing 2 (+1)",
      button_name:"Armor Piercing 2 (+1)",
      overrideAp:"2",
      shotsUsed:"+1",
      selector_type:"item_type",
      selector_value:"power",
      group: "Armor Piercing"
    },  
    {
      id:"ARMORPIERCING2",
      name:"Armor Piercing 4 (+2)",
      button_name:"Armor Piercing 4 (+2)",
      overrideAp:"4",
      shotsUsed:"+2",
      selector_type:"item_type",
      selector_value:"power",
      group: "Armor Piercing"
    },
    {
      id:"ARMORPIERCING3",
      name:"Armor Piercing 6 (+3)",
      button_name:"Armor Piercing 6 (+3)",
      overrideAp:"6",
      shotsUsed:"+3",
      selector_type:"item_type",
      selector_value:"power",
      group: "Armor Piercing"
    },
    {
      id:"FATIGUE",
      name:"Fatigue (+2)",
      button_name:"Fatigue (+2)",
      shotsUsed:"+2",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    },    
    {
      id:"GLOWSHROUD1",
      name:"Glow/Shroud (+1)",
      button_name:"Glow/Shroud (+1)",
      shotsUsed:"+1",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    }, 
    {
      id:"HEAVYWEAPON2",
      name:"Heavy Weapon (+2)",
      button_name:"Heavy Weapon (+2)",
      shotsUsed:"+2",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    }, 
    {
      id:"LINGERINGDAMAGE2",
      name:"Lingering Damage (+2)",
      button_name:"Lingering Damage (+2)",
      shotsUsed:"+2",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    }, 
    {
      id:"RANGE1",
      name:"Range 2x (+1)",
      button_name:"Range 2x (+1)",
      shotsUsed:"+1",
      selector_type:"item_type",
      selector_value:"power",
      group: "Range"
    }, 
    {
      id:"RANGE2",
      name:"Range 3x (+2)",
      button_name:"Range 3x (+2)",
      shotsUsed:"+2",
      selector_type:"item_type",
      selector_value:"power",
      group: "Range"
    }, 
    {
      id:"SELECTIVE1",
      name:"Selective (+1)",
      button_name:"Selective (+1)",
      shotsUsed:"+1",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    },    

    // ----------------------
    // POWER BOLT
    {
      id:"POWERBOLTMODDAMAGE",
      name:"Damage (+2)",
      button_name:"Damage (+2)",
      shotsUsed:"+2",
      dmgMod: "+d6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Bolt" }
      ],      
      group: "Bolt Modifiers"
    },
    {
      id:"POWERBOLTMODGREATERBOLT",
      name: starIcon + "Greater Bolt (+4)",
      button_name: starIcon + "Greater Bolt (+4)",
      shotsUsed:"+4",
      dmgMod: "+2d6x",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Bolt" }
      ],      
      group: "Bolt Modifiers"
    },
    {
      id:"POWERBOLTMODRATEOFFIRE",
      name: starIcon + "Rate of Fire (+2)",
      button_name: starIcon + "Rate of Fire (+2)",
      shotsUsed:"+2",
      rof: "2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Bolt" }
      ],      
      group: "Bolt Modifiers"
    },    
    {
      id:"POWERBOLTMODDISINTEGRATE",
      name: starIcon + "Disintegrate (+2)",
      button_name: starIcon + "Disintegrate (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Bolt" }
      ],      
      group: "Bolt Modifiers"
    },        

    // ----------------------
    // POWER BURST
    {
      id:"POWERBURSTMODDAMAGE",
      name:"Damage (+2)",
      button_name:"Damage (+2)",
      shotsUsed:"+2",
      dmgMod: "+d6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Burst" }
      ],
      group: "Burst Modifiers"
    },
    {
      id:"POWERBURSTMODGREATERBURST",
      name: starIcon + "Greater Bolt (+4)",
      button_name: starIcon + "Greater Bolt (+4)",
      shotsUsed:"+4",
      dmgMod: "+2d6x",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Burst" }
      ],
      group: "Burst Modifiers"
    },

    // ----------------------
    // POWER HEALING
    {
      id:"POWERHEALINGMODGREATERHEALING",
      name:"Greater Healing (+10)",
      button_name:"Greater Healing (+10)",
      shotsUsed:"+10",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Healing" }
      ],
      group: "Healing Modifiers"
    },
    {
      id:"POWERHEALINGMODMASSHEALINGMEDIUMBLAST",
      name:starIcon + "Mass Healing - Medium Blast (+2)",
      button_name: starIcon + "Mass Healing - Medium Blast (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Healing" }
      ],
      group: "Healing Modifiers"
    },
    {
      id:"POWERHEALINGMODMASSHEALINGLARGEBLAST",
      name: starIcon + "Mass Healing - Large Blast (+3)",
      button_name: starIcon + "Mass Healing - Large Blast (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Healing" }
      ],
      group: "Healing Modifiers"
    },    
    {
      id:"POWERHEALINGMODCRIPPLINGINJURIES",
      name:"Crippling Injuries (+15)",
      button_name: "Crippling Injuries (+15)",
      shotsUsed:"+15",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Healing" }
      ],
      group: "Healing Modifiers"
    },
    {
      id:"POWERHEALINGMODNEUTRALIZEPOISON",
      name:"Neutralize Poison or Disease (+1)",
      button_name:"Neutralize Poison or Disease (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Healing" }
      ],
      group: "Healing Modifiers"
    },


    // ----------------------
    // POWER SUMMON ALLY
    {
      id:"POWERSUMMONALLYMODNOVICE",
      name:"Novice (+1)",
      button_name:"Novice (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Summon Ally Rank"
    },    
    {
      id:"POWERSUMMONALLYMODSEASONED",
      name:"Seasoned (+3)",
      button_name:"Seasoned (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Summon Ally Rank"
    },
    {
      id:"POWERSUMMONALLYMODVETERAN",
      name:"Veteran (+5)",
      button_name:"Veteran (+5)",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Summon Ally Rank"
    },
    {
      id:"POWERSUMMONALLYMODHEROIC",
      name:"Heroic (+7)",
      button_name:"Heroic (+7)",
      shotsUsed:"+7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Summon Ally Rank"
    },
    // ----------------------
    // POWER SUMMON ALLY    
    {
      id:"POWERSUMMONALLYMODCOMBATEDGE",
      name:"Combat Edge x1 (+1)",
      button_name:"Combat Edge x1 (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Summon Ally Modifiers"
    },
    {
      id:"POWERSUMMONALLYMODCOMBATEDGE2",
      name:"Combat Edge x2 (+2)",
      button_name:"Combat Edge x2 (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Summon Ally Modifiers"
    },
    {
      id:"POWERSUMMONALLYMODCOMBATEDGE3",
      name:"Combat Edge x3 (+3)",
      button_name:"Combat Edge x3 (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Summon Ally Modifiers"
    },    
    {
      id:"POWERSUMMONALLYMODFLIGHT",
      name:"Flight (+2)",
      button_name:"Flight (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Summon Ally Modifiers"
    },
    {
      id:"POWERSUMMONALLYMODMINDRIDER",
      name:"Mind Rider (+1)",
      button_name:"Mind Rider (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Summon Ally Modifiers"
    },
    // ----------------------
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT",
      name:"+1",
      button_name:"+1",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT2",
      name:"+2",
      button_name:"+2",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT3",
      name:"+3",
      button_name:"+3",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT4",
      name:"+4",
      button_name:"+4",
      shotsUsed:"+4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT5",
      name:"+5",
      button_name:"+5",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT6",
      name:"+6",
      button_name:"+6",
      shotsUsed:"+6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT7",
      name:"+7",
      button_name:"+7",
      shotsUsed:"+7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT8",
      name:"+8",
      button_name:"+8",
      shotsUsed:"+8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT9",
      name:"+9",
      button_name:"+9",
      shotsUsed:"+9",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    
    // ----------------------
    // POWER SMITE
    {
      id:"POWERSMITEMODGREATERSMITE",
      name:starIcon + "Greater Smite (+2)",
      button_name: starIcon + "Greater Smite (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Smite" }
      ],
      group: "Smite Modifiers"
    },    
    {
      id:"POWERSMITEMODSPIRITUALWEAPON",
      name:"Spiritual Weapon (+2)",
      button_name: "Spiritual Weapon (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Smite" }
      ],
      group: "Smite Modifiers"
    },   
    
    // ----------------------
    // POWER Dispel
    {
      id:"POWERDISPELMODANTIMAGICFIELD",
      name:starIcon + "Anti-Magic Field (+8)",
      button_name: starIcon + "Anti-Magic Field (+8)",
      shotsUsed:"+8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Dispel" }
      ],
      group: "Dispel Modifiers"
    },    
    {
      id:"POWERDISPELMODDISENCHANT",
      name:"Disenchant (+1)",
      button_name: "Disenchant (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Dispel" }
      ],
      group: "Dispel Modifiers"
    },  
    {
      id:"POWERDISPELMODMULTIPLEPOWERS",
      name:"Multiple Powers (+1)",
      button_name: "Multiple Powers (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Dispel" }
      ],
      group: "Dispel Modifiers"
    }, 
    {
      id:"POWERDISPELMODREMOVECURSE",
      name:starIcon + "Remove Curse (+2)",
      button_name: starIcon + "Remove Curse (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Dispel" }
      ],
      group: "Dispel Modifiers"
    },
    // ----------------------
    // POWER Dispel    
    {
      id:"POWERDISPELMODLARGEBLAST",
      name:"Large Blast (+3)",
      button_name: "Large Blast (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Dispel" }
      ],
      group: "Dispel Blast Template"
    },  
    {
      id:"POWERDISPELMODMEDIUMBLAST",
      name:"Medium Blast (+2)",
      button_name: "Medium Blast (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Dispel" }
      ],
      group: "Dispel Blast Template"
    },  
    {
      id:"POWERDISPELMODSMALLBLAST",
      name:"Small Blast (+1)",
      button_name: "Small Blast (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Dispel" }
      ],
      group: "Dispel Blast Template"
    },    

    // ----------------------
    // POWER Arcane Protection    
    {
      id:"POWERARCANEPROTECTIONMODGREATERARCANEPROTECTION",
      name:starIcon + "Greater Arcane Protection (+2)",
      button_name: starIcon + "Greater Arcane Protection (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Arcane Protection" }
      ],
      group: "Arcane Protection Modifiers"
    },  

    // ----------------------
    // POWER Beast Friend    
    {
      id:"POWERBEASTFRIENDMODBESTIARIUM",
      name:starIcon + "Bestiarium (+2)",
      button_name: starIcon + "Bestiarium (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Beast Friend" }
      ],
      group: "Beast Friend Modifiers"
    },      
    {
      id:"POWERBEASTFRIENDMODDURATION",
      name:"Duration (+1)",
      button_name: "Duration (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Beast Friend" }
      ],
      group: "Beast Friend Modifiers"
    },  
    {
      id:"POWERBEASTFRIENDMODMINDRIDER",
      name:"Mind Rider (+1)",
      button_name: "Mind Rider (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Beast Friend" }
      ],
      group: "Beast Friend Modifiers"
    },

    // ----------------------
    // POWER Conjure Item
    {
      id:"POWERCONJUREITEMMODCOMPLETE",
      name:"Complete  (+1)",
      button_name: "Complete  (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Conjure Item Modifiers"
    },  
    // ----------------------    
    {
      id:"POWERCONJUREITEMMODCREATEFOODANDWATER",
      name:"1x (1)",
      button_name: "1x (1)",
      shotsUsed:"1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Create Food And Water"
    },  
    {
      id:"POWERCONJUREITEMMODCREATEFOODANDWATER2",
      name:"2x (2)",
      button_name: "2x (2)",
      shotsUsed:"2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Create Food And Water"
    }, 
    {
      id:"POWERCONJUREITEMMODCREATEFOODANDWATER3",
      name:"3x (3)",
      button_name: "3x (3)",
      shotsUsed:"3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Create Food And Water"
    }, 
    {
      id:"POWERCONJUREITEMMODCREATEFOODANDWATER4",
      name:"4x (4)",
      button_name: "4x (4)",
      shotsUsed:"4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Create Food And Water"
    }, 
    {
      id:"POWERCONJUREITEMMODCREATEFOODANDWATER5",
      name:"5x (5)",
      button_name: "5x (5)",
      shotsUsed:"5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Create Food And Water"
    }, 
    {
      id:"POWERCONJUREITEMMODCREATEFOODANDWATER6",
      name:"6x (6)",
      button_name: "6x (6)",
      shotsUsed:"6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Create Food And Water"
    }, 
    {
      id:"POWERCONJUREITEMMODCREATEFOODANDWATER7",
      name:"7x (7)",
      button_name: "7x (7)",
      shotsUsed:"7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Create Food And Water"
    }, 
    {
      id:"POWERCONJUREITEMMODCREATEFOODANDWATER8",
      name:"8x (8)",
      button_name: "8x (8)",
      shotsUsed:"8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Create Food And Water"
    }, 
    {
      id:"POWERCONJUREITEMMODCREATEFOODANDWATER9",
      name:"9x (9)",
      button_name: "9x (9)",
      shotsUsed:"9",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Create Food And Water"
    },     
    // ----------------------    
    {
      id:"POWERCONJUREITEMMODDURABLE",
      name:"Durable +1",
      button_name: "+1",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Durable (+1 Per Pound)"
    },    
    {
      id:"POWERCONJUREITEMMODDURABLE2",
      name:"Durable +2",
      button_name: "+2",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Durable (+1 Per Pound)"
    },
    {
      id:"POWERCONJUREITEMMODDURABLE3",
      name:"Durable +3",
      button_name: "+3",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Durable (+1 Per Pound)"
    },
    {
      id:"POWERCONJUREITEMMODDURABLE4",
      name:"Durable +4",
      button_name: "+4",
      shotsUsed:"+4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Durable (+1 Per Pound)"
    },    
    {
      id:"POWERCONJUREITEMMODDURABLE5",
      name:"Durable +5",
      button_name: "+5",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Durable (+1 Per Pound)"
    },   
    {
      id:"POWERCONJUREITEMMODDURABLE6",
      name:"Durable +6",
      button_name: "+6",
      shotsUsed:"+6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Durable (+1 Per Pound)"
    },
    {
      id:"POWERCONJUREITEMMODDURABLE7",
      name:"Durable +7",
      button_name: "+7",
      shotsUsed:"+7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Durable (+1 Per Pound)"
    },    
    {
      id:"POWERCONJUREITEMMODDURABLE8",
      name:"Durable +8",
      button_name: "+8",
      shotsUsed:"+8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Durable (+1 Per Pound)"
    },    
    {
      id:"POWERCONJUREITEMMODDURABLE9",
      name:"Durable +9",
      button_name: "+9",
      shotsUsed:"+9",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Conjure Item" }
      ],
      group: "Durable (+1 Per Pound)"
    },

    // ----------------------
    // POWER Blast
    {
      id:"POWERBLASTMODAREAOFEFFECT",
      name:"Large Blast (+1)",
      button_name: "Large Blast (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Blast" }
      ],
      group: "Blast Modifiers"
    },  
    {
      id:"POWERBLASTMODDAMAGE",
      name:"Damage (+2)",
      button_name: "Damage (+2)",
      shotsUsed:"+2",
      dmgMod: "+1d6x",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Blast" }
      ],
      group: "Blast Modifiers"
    }, 
    {
      id:"POWERBLASTMODGREATERBLAST",
      name:starIcon + "Greater Blast (+4)",
      button_name: starIcon + "Greater Blast (+4)",
      shotsUsed:"+4",
      dmgMod: "+2d6x",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Blast" }
      ],
      group: "Blast Modifiers"
    },
    
    // ----------------------
    // POWER Sanctuary
    {
      id:"POWERSANCTUARYMODSTRONG",
      name:"Strong (+1)",
      button_name: "Strong (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sanctuary" }
      ],
      group: "Sanctuary Modifiers"
    },     
    {
      id:"POWERSANCTUARYMODMEDIUMBLAST",
      name:"Medium Blast (+2)",
      button_name: "Medium Blast (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sanctuary" }
      ],
      group: "Sanctuary Modifiers"
    }, 
    {
      id:"POWERSANCTUARYMODLARGEBLAST",
      name:"Large Blast (+3)",
      button_name: "Large Blast (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sanctuary" }
      ],
      group: "Sanctuary Modifiers"
    }, 

    // ----------------------
    // POWER Shape Change
    {
      id:"POWERSHAPECHANGEMODDURATION",
      name:"Duration (+1)",
      button_name: "Duration (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Shape Change" }
      ],
      group: "Shape Change Modifiers"
    },       
    {
      id:"POWERSHAPECHANGEMODTRANSFORM",
      name:starIcon + "Transform (+2)",
      button_name: starIcon + "Transform (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Shape Change" }
      ],
      group: "Shape Change Modifiers"
    },       
    {
      id:"POWERSHAPECHANGEMODTRANSFORM3",
      name:starIcon + "Transform (+3)",
      button_name: starIcon + "Transform (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Shape Change" }
      ],
      group: "Shape Change Modifiers"
    },    

    // ----------------------
    // POWER Fear
    {
      id:"POWERFEARMODGREATERFEAR",
      name:starIcon + "Greater Fear (+2)",
      button_name: starIcon + "Greater Fear (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Fear" }
      ],
      group: "Fear Modifiers"
    },  
    {
      id:"POWERFEARMODSMALLMEDIUM",
      name:"Small or Medium Blast (+2)",
      button_name: "Small or Medium Blast (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Fear" }
      ],
      group: "Fear Modifiers"
    },  
    {
      id:"POWERFEARMODSMALLLARGE",
      name:"Large Blast (+3)",
      button_name: "Large Blast (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Fear" }
      ],
      group: "Fear Modifiers"
    },  
    
    // ----------------------
    // POWER Empathy
    {
      id:"POWEREMPATHYMODCHARM",
      name:"Charm (+2)",
      button_name: "Charm (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Empathy Modifiers"
    },      
    {
      id:"POWEREMPATHYMODDURATION",
      name:"Duration (+1)",
      button_name: "Duration (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Empathy Modifiers"
    },    
    {
      id:"POWEREMPATHYMODTRUTH",
      name:starIcon + "Truth (+2)",
      button_name: starIcon + "Truth (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Empathy Modifiers"
    },  
    // ----------------------
    {
      id:"POWEREMPATHYMODADDITIONALRECIPIENTS",
      name:"Additional Recipients +1",
      button_name: "+1",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWEREMPATHYMODADDITIONALRECIPIENTS2",
      name:"Additional Recipients +2",
      button_name: "+2",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWEREMPATHYMODADDITIONALRECIPIENTS3",
      name:"Additional Recipients +3",
      button_name: "+3",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWEREMPATHYMODADDITIONALRECIPIENTS4",
      name:"Additional Recipients +4",
      button_name: "+4",
      shotsUsed:"+4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWEREMPATHYMODADDITIONALRECIPIENTS5",
      name:"Additional Recipients +5",
      button_name: "+5",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWEREMPATHYMODADDITIONALRECIPIENTS6",
      name:"Additional Recipients +6",
      button_name: "+6",
      shotsUsed:"+6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWEREMPATHYMODADDITIONALRECIPIENTS7",
      name:"Additional Recipients +7",
      button_name: "+7",
      shotsUsed:"+7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWEREMPATHYMODADDITIONALRECIPIENTS8",
      name:"Additional Recipients +8",
      button_name: "+8",
      shotsUsed:"+8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWEREMPATHYMODADDITIONALRECIPIENTS9",
      name:"Additional Recipients +9",
      button_name: "+9",
      shotsUsed:"+9",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Empathy" }
      ],
      group: "Additional Recipients"
    },

    // ----------------------
    // POWER Relief
    {
      id:"POWERRELIEFMODRESTORATION",
      name:"Restoration (+3)",
      button_name: "Restoration (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Relief Modifiers"
    },  
    {
      id:"POWERRELIEFMODSTUNNED",
      name:"Stunned (+1)",
      button_name: "Stunned (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Relief Modifiers"
    },  
    // ----------------------
    {
      id:"POWERRELIEFMODDDITIONALRECIPIENTS",
      name:"Additional Recipients +1",
      button_name: "+1",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWERRELIEFMODDDITIONALRECIPIENTS2",
      name:"Additional Recipients +2",
      button_name: "+2",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERRELIEFMODDDITIONALRECIPIENTS3",
      name:"Additional Recipients +3",
      button_name: "+3",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWERRELIEFMODDDITIONALRECIPIENTS4",
      name:"Additional Recipients +4",
      button_name: "+4",
      shotsUsed:"+4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERRELIEFMODDDITIONALRECIPIENTS5",
      name:"Additional Recipients +5",
      button_name: "+5",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERRELIEFMODDDITIONALRECIPIENTS6",
      name:"Additional Recipients +6",
      button_name: "+6",
      shotsUsed:"+6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERRELIEFMODDDITIONALRECIPIENTS7",
      name:"Additional Recipients +7",
      button_name: "+7",
      shotsUsed:"+7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERRELIEFMODDDITIONALRECIPIENTS8",
      name:"Additional Recipients +8",
      button_name: "+8",
      shotsUsed:"+8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERRELIEFMODDDITIONALRECIPIENTS9",
      name:"Additional Recipients +9",
      button_name: "+9",
      shotsUsed:"+9",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Relief" }
      ],
      group: "Additional Recipients"
    },

    // ----------------------
    // POWER Sloth/Speed
    {
      id:"POWERSLOTHSPEEDMODDASH",
      name:"Dash (+2)",
      button_name: "Dash (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Sloth/Speed Modifiers"
    },     
    {
      id:"POWERSLOTHSPEEDMODQUICKNESS",
      name:"Quickness (+2)",
      button_name: "Quickness (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Sloth/Speed Modifiers"
    },  
    {
      id:"POWERSLOTHSPEEDMODSTRONG",
      name:"Strong (+1)",
      button_name: "Strong (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Sloth/Speed Modifiers"
    },  
    {
      id:"POWERSLOTHSPEEDMODMEDIUM",
      name:"Medium Blast (+2)",
      button_name: "Medium Blast (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Sloth/Speed Modifiers"
    },     
    {
      id:"POWERSLOTHSPEEDMODLARGE",
      name:"Large Blast (+3)",
      button_name: "Large Blast (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Sloth/Speed Modifiers"
    },        
    // ----------------------
    {
      id:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS",
      name:"Additional Recipients +1",
      button_name: "+1",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS2",
      name:"Additional Recipients +2",
      button_name: "+2",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS3",
      name:"Additional Recipients +3",
      button_name: "+3",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS4",
      name:"Additional Recipients +4",
      button_name: "+4",
      shotsUsed:"+4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS5",
      name:"Additional Recipients +5",
      button_name: "+5",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS6",
      name:"Additional Recipients +6",
      button_name: "+6",
      shotsUsed:"+6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS7",
      name:"Additional Recipients +7",
      button_name: "+7",
      shotsUsed:"+7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS8",
      name:"Additional Recipients +8",
      button_name: "+8",
      shotsUsed:"+8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS9",
      name:"Additional Recipients +9",
      button_name: "+9",
      shotsUsed:"+9",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Sloth/Speed" }
      ],
      group: "Additional Recipients"
    },
    
    // ----------------------
    // POWER Elemental Manipulation
    {
      id:"POWERELEMENTALMANIPULATIONMODPOWER",
      name:starIcon + "Power (+3)",
      button_name: starIcon + "Power (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Elemental Manipulation" }
      ],
      group: "Elemental Manipulation Modifiers"
    }, 
    {
      id:"POWERELEMENTALMANIPULATIONMODWEATHER",
      name:starIcon + "Weather (+5)",
      button_name: starIcon + "Weather (+5)",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Elemental Manipulation" }
      ],
      group: "Elemental Manipulation Modifiers"
    }, 

    // ----------------------
    // POWER Baleful Polymorph
    {
      id:"POWERBALEFULPOLYMORPHMODDURATION",
      name:starIcon + "Duration (+2)",
      button_name: starIcon + "Duration (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Baleful Polymorph" }
      ],
      group: "Baleful Polymorph Modifiers"
    },        
    
    // ----------------------
    // POWER Baleful Polymorph
    {
      id:"POWERBANISHMODSMALL",
      name:starIcon + "Small Blast (+1)",
      button_name: starIcon + "Small Blast (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Banish" }
      ],
      group: "Area df Effect"
    },            
    {
      id:"POWERBANISHMODMEDIUM",
      name:starIcon + "Medium Blast (+2)",
      button_name: starIcon + "Medium Blast (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Banish" }
      ],
      group: "Area df Effect"
    },      
    {
      id:"POWERBANISHMODLARGE",
      name:starIcon + "Large  Blast (+3)",
      button_name: starIcon + "Large  Blast (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Banish" }
      ],
      group: "Area df Effect"
    },      

    // ----------------------
    // POWER Barrier
    {
      id:"POWERBARRIERMODDAMAGE",
      name:"Damage - Immaterial (+0)",
      button_name: "Damage - Immaterial (+0)",
      shotsUsed:"+0",
      dmgOverride: "2d4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Barrier" }
      ],
      group: "Barrier Modifiers"
    },      
    {
      id:"POWERBARRIERMODDAMAGE2",
      name:"Damage - Material (+1)",
      button_name: "Damage - Material (+1)",
      dmgOverride: "2d4",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Barrier" }
      ],
      group: "Barrier Modifiers"
    }, 
    {
      id:"POWERBARRIERMODHARDENED",
      name:"Hardened (+1)",
      button_name: "Hardened (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Barrier" }
      ],
      group: "Barrier Modifiers"
    }, 
    {
      id:"POWERBARRIERMODSHAPED",
      name:"Shaped (+1)",
      button_name: "Shaped (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Barrier" }
      ],
      group: "Barrier Modifiers"
    }, 
    {
      id:"POWERBARRIERMODSIZE",
      name:"Size (+1)",
      button_name: "Size (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Barrier" }
      ],
      group: "Barrier Modifiers"
    },     
    {
      id:"POWERBARRIERMODDEADLY",
      name:starIcon + "Deadly (+2)",
      button_name: starIcon + "Deadly (+2)",
      shotsUsed:"+2",
      dmgOverride: "2d6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Barrier" }
      ],
      group: "Barrier Modifiers"
    },   

    // ----------------------
    // POWER Blind
    {
      id:"POWERBLINDMODSTRONG",
      name:"Strong (+1)",
      button_name: "Strong (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Blind" }
      ],
      group: "Blind Modifiers"
    },    
    // ----------------------
    {
      id:"POWERBLINDMODMEDIUM",
      name:"Medium Blast (+2)",
      button_name: "Medium Blast (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Blind" }
      ],
      group: "Area of Effect"
    },    
    {
      id:"POWERBLINDMODLARGE",
      name:"Large Blast (+3)",
      button_name: "Large Blast (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Blind" }
      ],
      group: "Area of Effect"
    },

    // ----------------------
    // POWER Boost/Lower Trait
    {
      id:"POWERBOOSTLOWERTRAITMODSTRONG",
      name:"Strong (+1)",
      button_name: "Strong (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Boost/Lower Trait Modifiers"
    },    
    {
      id:"POWERBOOSTLOWERTRAITMOGREATER",
      name:"Greater Boost/Lower Trait (+2)",
      button_name: "Greater Boost/Lower Trait (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Boost/Lower Trait Modifiers"
    },  
    // ----------------------
    {
      id:"POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS",
      name:"Additional Recipients +1",
      button_name: "+1",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS2",
      name:"Additional Recipients +2",
      button_name: "+2",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS3",
      name:"Additional Recipients +3",
      button_name: "+3",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS4",
      name:"Additional Recipients +4",
      button_name: "+4",
      shotsUsed:"+4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS5",
      name:"Additional Recipients +5",
      button_name: "+5",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS6",
      name:"Additional Recipients +6",
      button_name: "+6",
      shotsUsed:"+6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS7",
      name:"Additional Recipients +7",
      button_name: "+7",
      shotsUsed:"+7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS8",
      name:"Additional Recipients +8",
      button_name: "+8",
      shotsUsed:"+8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS9",
      name:"Additional Recipients +9",
      button_name: "+9",
      shotsUsed:"+9",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
      ],
      group: "Additional Recipients"
    },

    // ----------------------
    // POWER Deflection
    {
      id:"POWERDEFLECTIONMODADDITIONAL",
      name:"Additional Recipients +1",
      button_name: "+1",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Deflection" }
      ],
      group: "Additional Recipients"
    },  
    {
      id:"POWERDEFLECTIONMODADDITIONAL2",
      name:"Additional Recipients +2",
      button_name: "+2",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Deflection" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDEFLECTIONMODADDITIONAL3",
      name:"Additional Recipients +3",
      button_name: "+3",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Deflection" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWERDEFLECTIONMODADDITIONAL4",
      name:"Additional Recipients +4",
      button_name: "+4",
      shotsUsed:"+4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Deflection" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDEFLECTIONMODADDITIONAL5",
      name:"Additional Recipients +5",
      button_name: "+5",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Deflection" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDEFLECTIONMODADDITIONAL6",
      name:"Additional Recipients +6",
      button_name: "+6",
      shotsUsed:"+6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Deflection" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDEFLECTIONMODADDITIONAL7",
      name:"Additional Recipients +7",
      button_name: "+7",
      shotsUsed:"+7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Deflection" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDEFLECTIONMODADDITIONAL8",
      name:"Additional Recipients +8",
      button_name: "+8",
      shotsUsed:"+8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Deflection" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS9",
      name:"Additional Recipients +9",
      button_name: "+9",
      shotsUsed:"+9",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Deflection" }
      ],
      group: "Additional Recipients"
    },

    // ----------------------
    // POWER Deflection
    {
      id:"POWERDETECTARCANAMODALIGNMENTSENSE",
      name:"Alignment Sense (+1)",
      button_name: "Alignment Sense (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Detect/Conceal Arcana Modifiers"
    },  
    {
      id:"POWERDETECTARCANAMODIDENTIFY",
      name:"Identify (+1)",
      button_name: "Identify (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Detect/Conceal Arcana Modifiers"
    }, 
    {
      id:"POWERDETECTARCANAMODSTRONG",
      name:"Strong (+1)",
      button_name: "Strong (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Detect/Conceal Arcana Modifiers"
    }, 
    {
      id:"POWERDETECTARCANAMODMEDIUM",
      name:"Medium Blast (+2)",
      button_name: "Medium Blast (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Area of Effect"
    },     
    {
      id:"POWERDETECTARCANAMODLARGE",
      name:"Large Blast (+3)",
      button_name: "Large Blast (+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Area of Effect"
    },     
    // ----------------------
    {
      id:"POWERDETECTARCANAMODADDITIONALRECIPIENTS",
      name:"Additional Recipients +1",
      button_name: "+1",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWERDETECTARCANAMODADDITIONALRECIPIENTS2",
      name:"Additional Recipients +2",
      button_name: "+2",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDETECTARCANAMODADDITIONALRECIPIENTS3",
      name:"Additional Recipients +3",
      button_name: "+3",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Additional Recipients"
    },      
    {
      id:"POWERDETECTARCANAMODADDITIONALRECIPIENTS4",
      name:"Additional Recipients +4",
      button_name: "+4",
      shotsUsed:"+4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDETECTARCANAMODADDITIONALRECIPIENTS5",
      name:"Additional Recipients +5",
      button_name: "+5",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDETECTARCANAMODADDITIONALRECIPIENTS6",
      name:"Additional Recipients +6",
      button_name: "+6",
      shotsUsed:"+6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDETECTARCANAMODADDITIONALRECIPIENTS7",
      name:"Additional Recipients +7",
      button_name: "+7",
      shotsUsed:"+7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDETECTARCANAMODADDITIONALRECIPIENTS8",
      name:"Additional Recipients +8",
      button_name: "+8",
      shotsUsed:"+8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Additional Recipients"
    },          
    {
      id:"POWERDETECTARCANAMODADDITIONALRECIPIENTS9",
      name:"Additional Recipients +9",
      button_name: "+9",
      shotsUsed:"+9",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
      ],
      group: "Additional Recipients"
    },
    
    // ----------------------
    // POWER Light / Darkness
    {
      id:"POWERLIGHTDARKNESSMODMOBILE",
      name:"Mobile (+1)",
      button_name: "Mobile (+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Light / Darkness" }
      ],
      group: "Light / Darkness Modifiers"
    },      
    {
      id:"POWERLIGHTDARKNESSMODTRUEDARKNESS",
      name: starIcon + "True Darkness (+2)",
      button_name: starIcon + "True Darkness (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Light / Darkness" }
      ],
      group: "Light / Darkness Modifiers"
    },      
    {
      id:"POWERLIGHTDARKNESSMODAREAEFFECT",
      name: starIcon + "Area Effect (+2)",
      button_name: starIcon + "Area Effect (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Light / Darkness" }
      ],
      group: "Light / Darkness Modifiers"
    }, 
    
    // ----------------------
    // POWER Curse
    {
      id:"POWERCURSEMODTURNTOSTONE",
      name: starIcon + "Turn to Stone (+5)",
      button_name: starIcon + "Turn to Stone (+5)",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Curse" }
      ],
      group: "Curse Modifiers"
    }, 

    // ----------------------
    // POWER Damage Field
    {
      id:"POWERDAMAGEFIELDMODDAMAGE",
      name: "Damage (+2)",
      button_name: "Damage (+2)",
      shotsUsed:"+2",
      dmgOverride: "2d6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Damage Field" }
      ],
      group: "Damage Field Modifiers"
    }, 
    {
      id:"POWERDAMAGEFIELDMODMOBILE",
      name: "Mobile (+2)",
      button_name: "Mobile (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Damage Field" }
      ],
      group: "Damage Field Modifiers"
    }, 
    {
      id:"POWERDAMAGEFIELDMODGREATERDAMAGE",
      name: starIcon + "Greater Damage Field (+4)",
      button_name: starIcon + "Greater Damage Field (+4)",
      shotsUsed:"+4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Damage Field" }
      ],
      group: "Damage Field Modifiers"
    }, 
    {
      id:"POWERDAMAGEFIELDMODMEDIUM",
      name: "Medium (+2)",
      button_name: "Medium (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Damage Field" }
      ],
      group: "Area of Effect"
    }
    
    // END ---------------------------------
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