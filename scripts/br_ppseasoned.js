const groupName = "Savage Pathfinder";
const groupNamePP = "Power Points";
const groupNamePModifiers = "Power Modifiers";
const groupNameGenericPModifiers = "Power Modifiers - Generic";
const starIcon = "☆ ";

export const ppseasoned = [
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
  },  

  // ----------------------
  // POWER Disguise
  {
    id:"POWERDISGUISEMODSIZE",
    name: "Size (+1)",
    button_name: "Size (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Disguise" }
    ],
    group: "Disguise Modifiers"
  }, 
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Disguise" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERDISGUISEMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Disguise" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDISGUISEMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Disguise" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERDISGUISEMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Disguise" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDISGUISEMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Disguise" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDISGUISEMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Disguise" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDISGUISEMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Disguise" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDISGUISEMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Disguise" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDISGUISEMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Disguise" }
    ],
    group: "Additional Recipients"
  },  
  
  // ----------------------
  // POWER Divination
  {
    id:"POWERDIVINATIONMODPOWER",
    name: starIcon + "Power (+3)",
    button_name: starIcon + "Power (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Divination" }
    ],
    group: "Divination Modifiers"
  }, 

  // ----------------------
  // POWER Farsight
  {
    id:"POWERFARSIGHTMODGREATER",
    name: starIcon + "Greater Farsight (+2)",
    button_name: starIcon + "Greater Farsight (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Farsight" }
    ],
    group: "Farsight Modifiers"
  }, 
  // ----------------------
  {
    id:"POWERFARSIGHTMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Farsight" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERFARSIGHTMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Farsight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFARSIGHTMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Farsight" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERFARSIGHTMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Farsight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFARSIGHTMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Farsight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFARSIGHTMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Farsight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFARSIGHTMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Farsight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFARSIGHTMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Farsight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFARSIGHTMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Farsight" }
    ],
    group: "Additional Recipients"
  },  

  // ----------------------
  // POWER Growth/Shrink
  {
    id:"POWERGROWTHMODDURATION",
    name: starIcon + "Duration (+2)",
    button_name: starIcon + "Duration (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Growth/Shrink" }
    ],
    group: "Growth/Shrink Modifiers"
  }, 
  {
    id:"POWERGROWTHMODPOWER",
    name: starIcon + "Power (+2)",
    button_name: starIcon + "Power (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Growth/Shrink" }
    ],
    group: "Growth/Shrink Modifiers"
  }, 

  // ----------------------
  // POWER Invisibility
  {
    id:"POWERINVISIBILITYMODDURATION",
    name: starIcon + "Duration (+2)",
    button_name: starIcon + "Duration (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Invisibility" }
    ],
    group: "Invisibility Modifiers"
  }, 
  // ----------------------
  {
    id:"POWERINVISIBILITYMODADDITIONALRECIPIENTS",
    name:"Additional Recipients 1x (+3)",
    button_name: "1x (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Invisibility" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERINVISIBILITYMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients 2x (+6)",
    button_name: "2x (+6)",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Invisibility" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERINVISIBILITYMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients 3x (+9)",
    button_name: "3x (+9)",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Invisibility" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERINVISIBILITYMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients 4x (+12)",
    button_name: "4x (+12)",
    shotsUsed:"+12",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Invisibility" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERINVISIBILITYMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients 5x (+15)",
    button_name: "5x (+15)",
    shotsUsed:"+15",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Invisibility" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERINVISIBILITYMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients 6x (+18)",
    button_name: "6x (+18)",
    shotsUsed:"+18",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Invisibility" }
    ],
    group: "Additional Recipients"
  },
  
  // ----------------------
  // POWER Object Reading
  {
    id:"POWEROBJECTREADINGMODPROJECTION",
    name: starIcon + "Projection (+2)",
    button_name: starIcon + "Projection (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Object Reading" }
    ],
    group: "Object Reading Modifiers"
  },
  
  // ----------------------
  // POWER Scrying
  {
    id:"POWERSCRYINGMODGROUPSIGHT",
    name: "Group Sight (+1)",
    button_name: "Group Sight (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Scrying" }
    ],
    group: "Scrying Modifiers"
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
  // POWER Slumber
  {
    id:"POWERSLUMBERMODDASHMEDIUM",
    name:"Medium Blast (+2)",
    button_name: "Medium Blast (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Slumber" }
    ],
    group: "Area of Effect"
  },      
  {
    id:"POWERSLUMBERMODDASHLARGE",
    name:"Large Blast (+3)",
    button_name: "Large Blast (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Slumber" }
    ],
    group: "Area of Effect"
  },      
    
  // ----------------------
  // POWER Telekinesis
  {
    id:"POWERTELEKINESISMODPOWER",
    name: starIcon + "Power (+3)",
    button_name: starIcon + "Power (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Telekinesis" }
    ],
    group: "Telekinesis Modifiers"
  },       
  
  // ----------------------
  // POWER Teleport
  {
    id:"POWERTELEPORTMODTELEPORTFOE",
    name: "Teleport Foe (+2)",
    button_name: "Teleport Foe (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Teleport Modifiers"
  },    
  {
    id:"POWERTELEPORTMODGATE",
    name: starIcon + "Gate (+5)",
    button_name: starIcon + "Gate (+5)",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Teleport Modifiers"
  },    
  {
    id:"POWERTELEPORTMODGREATER",
    name: starIcon + "Greater Teleport (+5)",
    button_name: starIcon + "Greater Teleport (+5)",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Teleport Modifiers"
  },    
  // ----------------------
  {
    id:"POWERTELEPORTMODDDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERTELEPORTMODDDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERTELEPORTMODDDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERTELEPORTMODDDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERTELEPORTMODDDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERTELEPORTMODDDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERTELEPORTMODDDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERTELEPORTMODDDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERTELEPORTMODDDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Teleport" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Warrior's Gift
  {
    id:"POWERWARRIORMODPOWER",
    name: starIcon + "Power (+4)",
    button_name: starIcon + "Power (+4)",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Warrior's Gift" }
    ],
    group: "Warrior's Gift Modifiers"
  }, 
  // ----------------------
  {
    id:"POWERWARRIORMODDDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Warrior's Gift" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERWARRIORMODDDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Warrior's Gift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWARRIORMODDDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Warrior's Gift" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERWARRIORMODDDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Warrior's Gift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWARRIORMODDDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Warrior's Gift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWARRIORMODDDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Warrior's Gift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWARRIORMODDDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Warrior's Gift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWARRIORMODDDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Warrior's Gift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWARRIORMODDDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Warrior's Gift" }
    ],
    group: "Additional Recipients"
  }
  
];