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
    },
    
    // ----------------------
    // Generic Power Modifiers
    {
      id:"ADAPTABLECASTER1",
      name:"ADAPTABLECASTER1",
      button_name:"Adaptable Caster (+1)",
      shotsUsed:"+1",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    },
    {
      id:"ARMORPIERCING1",
      name:"ARMORPIERCING1",
      button_name:"Armor Piercing 2 (+1)",
      overrideAp:"2",
      shotsUsed:"+1",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    },  
    {
      id:"ARMORPIERCING2",
      name:"ARMORPIERCING2",
      button_name:"Armor Piercing 4 (+2)",
      overrideAp:"4",
      shotsUsed:"+2",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    },
    {
      id:"ARMORPIERCING3",
      name:"ARMORPIERCING3",
      button_name:"Armor Piercing 6 (+3)",
      overrideAp:"6",
      shotsUsed:"+3",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    },
    {
      id:"FATIGUE",
      name:"FATIGUE",
      button_name:"Fatigue (+2)",
      shotsUsed:"+2",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    },    
    {
      id:"GLOWSHROUD1",
      name:"GLOWSHROUD1",
      button_name:"Glow/Shroud (+1)",
      shotsUsed:"+1",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    }, 
    {
      id:"HEAVYWEAPON2",
      name:"HEAVYWEAPON2",
      button_name:"Heavy Weapon (+2)",
      shotsUsed:"+2",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    }, 
    {
      id:"LINGERINGDAMAGE2",
      name:"LINGERINGDAMAGE2",
      button_name:"Lingering Damage (+2)",
      shotsUsed:"+2",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    }, 
    {
      id:"RANGE1",
      name:"RANGE1",
      button_name:"Range (+1)",
      shotsUsed:"+1",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    }, 
    {
      id:"RANGE2",
      name:"RANGE2",
      button_name:"Range (+2)",
      shotsUsed:"+2",
      selector_type:"item_type",
      selector_value:"power",
      group: groupNameGenericPModifiers
    }, 
    {
      id:"SELECTIVE1",
      name:"SELECTIVE1",
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
      name:"POWERBOLTMODDAMAGE",
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
      name:"POWERBOLTMODGREATERBOLT",
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
      name:"POWERBOLTMODRATEOFFIRE",
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
      name:"POWERBOLTMODDISINTEGRATE",
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
      name:"POWERBURSTMODDAMAGE",
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
      name:"POWERBURSTMODGREATERBURST",
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
      name:"POWERHEALINGMODGREATERHEALING",
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
      name:"POWERHEALINGMODMASSHEALINGMEDIUMBLAST",
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
      name:"POWERHEALINGMODMASSHEALINGLARGEBLAST",
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
      name:"POWERHEALINGMODCRIPPLINGINJURIES",
      button_name:"Crippling Injuries (+15)",
      shotsUsed:"+15",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Healing" }
      ],
      group: "Healing Modifiers"
    },
    {
      id:"POWERHEALINGMODNEUTRALIZEPOISON",
      name:"POWERHEALINGMODNEUTRALIZEPOISON",
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
      name:"POWERSUMMONALLYMODNOVICE",
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
      name:"POWERSUMMONALLYMODSEASONED",
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
      name:"POWERSUMMONALLYMODVETERAN",
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
      name:"POWERSUMMONALLYMODHEROIC",
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
      name:"POWERSUMMONALLYMODCOMBATEDGE",
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
      name:"POWERSUMMONALLYMODCOMBATEDGE2",
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
      name:"POWERSUMMONALLYMODCOMBATEDGE3",
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
      name:"POWERSUMMONALLYMODFLIGHT",
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
      name:"POWERSUMMONALLYMODMINDRIDER",
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
      name:"POWERSUMMONALLYMODINCREASEDTRAIT",
      button_name:"(+1)",
      shotsUsed:"+1",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT2",
      name:"POWERSUMMONALLYMODINCREASEDTRAIT2",
      button_name:"(+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT3",
      name:"POWERSUMMONALLYMODINCREASEDTRAIT3",
      button_name:"(+3)",
      shotsUsed:"+3",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT4",
      name:"POWERSUMMONALLYMODINCREASEDTRAIT4",
      button_name:"(+4)",
      shotsUsed:"+4",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT5",
      name:"POWERSUMMONALLYMODINCREASEDTRAIT5",
      button_name:"(+5)",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT6",
      name:"POWERSUMMONALLYMODINCREASEDTRAIT6",
      button_name:"(+6)",
      shotsUsed:"+6",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT7",
      name:"POWERSUMMONALLYMODINCREASEDTRAIT7",
      button_name:"(+7)",
      shotsUsed:"+7",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT8",
      name:"POWERSUMMONALLYMODINCREASEDTRAIT8",
      button_name:"(+8)",
      shotsUsed:"+8",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Summon Ally" }
      ],
      group: "Increased Trait"
    },
    {
      id:"POWERSUMMONALLYMODINCREASEDTRAIT9",
      name:"POWERSUMMONALLYMODINCREASEDTRAIT9",
      button_name:"(+9)",
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
      name:"POWERSMITEMODGREATERSMITE",
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
      name:"POWERSMITEMODSPIRITUALWEAPON",
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
      name:"POWERDISPELMODANTIMAGICFIELD",
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
      name:"POWERDISPELMODDISENCHANT",
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
      name:"POWERDISPELMODMULTIPLEPOWERS",
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
      name:"POWERDISPELMODREMOVECURSE",
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
      name:"POWERDISPELMODLARGEBLAST",
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
      name:"POWERDISPELMODMEDIUMBLAST",
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
      name:"POWERDISPELMODSMALLBLAST",
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
      name:"POWERARCANEPROTECTIONMODGREATERARCANEPROTECTION",
      button_name: starIcon + "Greater Arcane Protection (+2)",
      shotsUsed:"+2",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Arcane Protection" }
      ],
      group: "Arcane Protection Modifiers"
    },  

    // ----------------------
    // POWER Arcane Protection    
    {
      id:"POWERBEASTFRIENDMODBESTIARIUM",
      name:"POWERBEASTFRIENDMODBESTIARIUM",
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
      name:"POWERBEASTFRIENDMODDURATION",
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
      name:"POWERBEASTFRIENDMODMINDRIDER",
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
      name:"POWERCONJUREITEMMODCOMPLETE",
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
      name:"POWERCONJUREITEMMODCREATEFOODANDWATER",
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
      name:"POWERCONJUREITEMMODCREATEFOODANDWATER2",
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
      name:"POWERCONJUREITEMMODCREATEFOODANDWATER3",
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
      name:"POWERCONJUREITEMMODCREATEFOODANDWATER4",
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
      name:"POWERCONJUREITEMMODCREATEFOODANDWATER5",
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
      name:"POWERCONJUREITEMMODCREATEFOODANDWATER6",
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
      name:"POWERCONJUREITEMMODCREATEFOODANDWATER7",
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
      name:"POWERCONJUREITEMMODCREATEFOODANDWATER8",
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
      name:"POWERCONJUREITEMMODCREATEFOODANDWATER9",
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
      name:"POWERCONJUREITEMMODDURABLE",
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
      name:"POWERCONJUREITEMMODDURABLE2",
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
      name:"POWERCONJUREITEMMODDURABLE3",
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
      name:"POWERCONJUREITEMMODDURABLE4",
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
      name:"POWERCONJUREITEMMODDURABLE5",
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
      name:"POWERCONJUREITEMMODDURABLE6",
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
      name:"POWERCONJUREITEMMODDURABLE7",
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
      name:"POWERCONJUREITEMMODDURABLE8",
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
      name:"POWERCONJUREITEMMODDURABLE9",
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
      name:"POWERBLASTMODAREAOFEFFECT",
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
      name:"POWERBLASTMODDAMAGE",
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
      name:"POWERBLASTMODGREATERBLAST",
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
      name:"POWERSANCTUARYMODSTRONG",
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
      name:"POWERSANCTUARYMODMEDIUMBLAST",
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
      name:"POWERSANCTUARYMODLARGEBLAST",
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
      name:"POWERSHAPECHANGEMODDURATION",
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
      name:"POWERSHAPECHANGEMODTRANSFORM",
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
      name:"POWERSHAPECHANGEMODTRANSFORM3",
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
      name:"POWERFEARMODGREATERFEAR",
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
      name:"POWERFEARMODSMALLMEDIUM",
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
      name:"POWERFEARMODSMALLLARGE",
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
      name:"POWEREMPATHYMODCHARM",
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
      name:"POWEREMPATHYMODDURATION",
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
      name:"POWEREMPATHYMODTRUTH",
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
      name:"POWEREMPATHYMODADDITIONALRECIPIENTS",
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
      name:"POWEREMPATHYMODADDITIONALRECIPIENTS2",
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
      name:"POWEREMPATHYMODADDITIONALRECIPIENTS3",
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
      name:"POWEREMPATHYMODADDITIONALRECIPIENTS4",
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
      name:"POWEREMPATHYMODADDITIONALRECIPIENTS5",
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
      name:"POWEREMPATHYMODADDITIONALRECIPIENTS6",
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
      name:"POWEREMPATHYMODADDITIONALRECIPIENTS7",
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
      name:"POWEREMPATHYMODADDITIONALRECIPIENTS8",
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
      name:"POWEREMPATHYMODADDITIONALRECIPIENTS9",
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
      name:"POWERRELIEFMODRESTORATION",
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
      name:"POWERRELIEFMODSTUNNED",
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
      name:"POWERRELIEFMODDDITIONALRECIPIENTS",
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
      name:"POWERRELIEFMODDDITIONALRECIPIENTS2",
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
      name:"POWERRELIEFMODDDITIONALRECIPIENTS3",
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
      name:"POWERRELIEFMODDDITIONALRECIPIENTS4",
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
      name:"POWERRELIEFMODDDITIONALRECIPIENTS5",
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
      name:"POWERRELIEFMODDDITIONALRECIPIENTS6",
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
      name:"POWERRELIEFMODDDITIONALRECIPIENTS7",
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
      name:"POWERRELIEFMODDDITIONALRECIPIENTS8",
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
      name:"POWERRELIEFMODDDITIONALRECIPIENTS9",
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
      name:"POWERSLOTHSPEEDMODDASH",
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
      name:"POWERSLOTHSPEEDMODQUICKNESS",
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
      name:"POWERSLOTHSPEEDMODSTRONG",
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
      name:"POWERSLOTHSPEEDMODMEDIUM",
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
      name:"POWERSLOTHSPEEDMODLARGE",
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
      name:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS",
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
      name:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS2",
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
      name:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS3",
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
      name:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS4",
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
      name:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS5",
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
      name:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS6",
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
      name:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS7",
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
      name:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS8",
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
      name:"POWERSLOTHSPEEDMODDDITIONALRECIPIENTS9",
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
      name:"POWERELEMENTALMANIPULATIONMODPOWER",
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
      name:"POWERELEMENTALMANIPULATIONMODWEATHER",
      button_name: starIcon + "Weather (+5)",
      shotsUsed:"+5",
      and_selector: [
        { selector_type: "item_type", selector_value:"power" }, 
        { selector_type: "item_name", selector_value: "Elemental Manipulation" }
      ],
      group: "Elemental Manipulation Modifiers"
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