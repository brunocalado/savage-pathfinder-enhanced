const groupName = "Savage Pathfinder";
const groupNamePP = "Power Points";
const groupNamePModifiers = "Power Modifiers";
const groupNameGenericPModifiers = "Power Modifiers - Generic";
const starIcon = "☆ ";

export const ppnovice = [
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
  // POWER BOLT
  {
    id:"POWERBOLTMODDAMAGE",
    name:"Damage (+2)",
    button_name:"Damage (+2)",
    shotsUsed:"+2",
    dmgMod: "+d6x",
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
  // POWER Burrow
  {
    id:"POWERBURROWMODPOWER",
    name:"Power (+1)",
    button_name: "Power (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "Burrow Modifiers"
  },  
  // ----------------------
  {
    id:"POWERBURROWMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERBURROWMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERBURROWMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERBURROWMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERBURROWMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERBURROWMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERBURROWMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERBURROWMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERBURROWMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "Additional Recipients"
  },


  // ----------------------
  // POWER BURST
  {
    id:"POWERBURSTMODDAMAGE",
    name:"Damage (+2)",
    button_name:"Damage (+2)",
    shotsUsed:"+2",
    dmgMod: "+d6x",
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
  // POWER Confusion
  {
    id:"POWERCONFUSIONMODGREATER",
    name: starIcon + "Greater Confusion (+2)",
    button_name: starIcon + "Greater Confusion (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Confusion" }
    ],
    group: "Confusion Modifiers"
  }, 
  {
    id:"POWERCONFUSIONMODSMALL",
    name: "Small Blast (+0)",
    button_name: "Small Blast (+0)",
    shotsUsed:"+0",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Confusion" }
    ],
    group: "Area of Effect"
  }, 
  {
    id:"POWERCONFUSIONMODLARGE",
    name: "Large Blast (+1)",
    button_name: "Large Blast (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Confusion" }
    ],
    group: "Area of Effect"
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
  // POWER Darksight
  {
    id:"POWERDARKSIGHTMODGREATER",
    name: starIcon + "Greater Darksight (+2)",
    button_name: starIcon + "Greater Darksight (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Darksight Modifiers"
  }, 
  // ----------------------
  {
    id:"POWERDARKSIGHTMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERDARKSIGHTMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDARKSIGHTMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERDARKSIGHTMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDARKSIGHTMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDARKSIGHTMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDARKSIGHTMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDARKSIGHTMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERDARKSIGHTMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Darksight" }
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
  // POWER Detect/Conceal Arcana
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
  // POWER Entangle
  {
    id:"POWERENTANGLEMODDAMAGE",
    name:"Damage (+2)",
    button_name: "Damage (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "Entangle Modifiers"
  },        
  {
    id:"POWERENTANGLEMODTOUGH",
    name:"Tough (+1)",
    button_name: "Tough (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "Entangle Modifiers"
  },       
  {
    id:"POWERENTANGLEMODDEADLY",
    name: starIcon + "Deadly (+4)",
    button_name:  starIcon + "Deadly (+4)",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "Entangle Modifiers"
  },    
  {
    id:"POWERENTANGLEMODMEDIUM",
    name:"Medium (+2)",
    button_name: "Medium (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "Area of Effect"
  },  
  {
    id:"POWERENTANGLEMODLARGE",
    name:"Large or Stream (+3)",
    button_name: "Large or Stream (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "Area of Effect"
  },    

  // ----------------------
  // POWER Environmental Protection
  {
    id:"POWERENVPROTECTIONMODRESISTANCE",
    name:"Environmental Resistance (+1)",
    button_name: "Environmental Resistance (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Environmental Protection Modifiers"
  },    
  {
    id:"POWERENVPROTECTIONMODPLANAR",
    name: "Planar Adaptation (+2)",
    button_name: "Planar Adaptation (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Environmental Protection Modifiers"
  },       
  // ----------------------
  {
    id:"POWERENVPROTECTIONMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERENVPROTECTIONMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERENVPROTECTIONMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERENVPROTECTIONMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERENVPROTECTIONMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERENVPROTECTIONMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERENVPROTECTIONMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERENVPROTECTIONMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERENVPROTECTIONMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "Additional Recipients"
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
  // POWER Havoc
  {
    id:"POWERHAVOCMODGREATER",
    name:starIcon + "Greater Havoc (+2)",
    button_name: starIcon + "Greater Havoc (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Havoc" }
    ],
    group: "Havoc Modifiers"
  },  
  {
    id:"POWERHAVOCMODAREA",
    name:"Area Effect (+1)",
    button_name: "Area Effect (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Havoc" }
    ],
    group: "Havoc Modifiers"
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
  // POWER Illusion
  {
    id:"POWERILLUSIONMODSTRONG",
    name:"Strong (+2)",
    button_name:"Strong (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers"
  },
  {
    id:"POWERILLUSIONMODSOUND",
    name:"Sound (+1)",
    button_name:"Sound (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers"
  },
  {
    id:"POWERILLUSIONMODMOBILITY12",
    name:"Mobility Pace 12 (+1)",
    button_name:"Mobility Pace 12 (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers"
  },
  {
    id:"POWERILLUSIONMODMOBILITY24",
    name:"Mobility Pace 24 (+2)",
    button_name:"Mobility Pace 24 (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers"
  },
  {
    id:"POWERILLUSIONMODDURATION",
    name: starIcon + "Duration (+2)",
    button_name:starIcon + "Duration (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers"
  },
  {
    id:"POWERILLUSIONMODDEADLY",
    name: starIcon + "Deadly Illusion (+3)",
    button_name:starIcon + "Deadly Illusion (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers"
  },
  {
    id:"POWERILLUSIONMODAREA",
    name: "Large Blast (+1)",
    button_name:"Large Blast (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Area of Effect"
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
  // POWER Locate
  {
    id:"POWERLOCATEMODPATH",
    name:"Find the Path (+1)",
    button_name: "Find the Path (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Locate" }
    ],
    group: "Locate"
  },  

  // ----------------------
  // POWER Mind Link
  {
    id:"POWERMINDLINKMODBROADCAST",
    name:starIcon + "Broadcast (+2)",
    button_name: starIcon + "Broadcast (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Mind Link"
  },  
  {
    id:"POWERMINDLINKMODLONGDISTANCE",
    name:starIcon + "Long Distance Link (+3)",
    button_name: starIcon + "Long Distance Link (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Mind Link"
  },  
  // ----------------------
  {
    id:"POWERMINDLINKMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERMINDLINKMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERMINDLINKMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERMINDLINKMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERMINDLINKMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERMINDLINKMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERMINDLINKMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERMINDLINKMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERMINDLINKMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Mind Reading
  {
    id:"POWERMINDREADINGMODMINDWALK",
    name: starIcon + "Mind Walk (+2)",
    button_name: starIcon + "Mind Walk (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Reading" }
    ],
    group: "Mind Reading"
  },    

  // ---------------------- 
  // POWER Protection
  {
    id:"POWERPROTECTIONMODSHIELDOTHER",
    name:"Shield Other (+1)",
    button_name: "Shield Other (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Protection" }
    ],
    group: "Protection Modifiers"
  },       
  {
    id:"POWERPROTECTIONMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Protection" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERPROTECTIONMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPROTECTIONMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Protection" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERPROTECTIONMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPROTECTIONMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPROTECTIONMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPROTECTIONMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPROTECTIONMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Protection" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPROTECTIONMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Protection" }
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
    id:"POWERRELIEFMODADDITIONALRECIPIENTS",
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
    id:"POWERRELIEFMODADDITIONALRECIPIENTS2",
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
    id:"POWERRELIEFMODADDITIONALRECIPIENTS3",
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
    id:"POWERRELIEFMODADDITIONALRECIPIENTS4",
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
    id:"POWERRELIEFMODADDITIONALRECIPIENTS5",
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
    id:"POWERRELIEFMODADDITIONALRECIPIENTS6",
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
    id:"POWERRELIEFMODADDITIONALRECIPIENTS7",
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
    id:"POWERRELIEFMODADDITIONALRECIPIENTS8",
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
    id:"POWERRELIEFMODADDITIONALRECIPIENTS9",
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
  // POWER Sound/Silence
  {
    id:"POWERSOUNDMODGREATER",
    name:starIcon + "Greater Sound/Silence (+1)",
    button_name: starIcon + "Greater Sound/Silence (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Sound/Silence Modifiers"
  },  
  {
    id:"POWERSOUNDMODMOBILE",
    name: "Mobile (+1)",
    button_name: "Mobile (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Sound/Silence Modifiers"
  },
  {
    id:"POWERSOUNDMODALARM",
    name: "Alarm Object (+1)",
    button_name: "Alarm Object (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Sound/Silence Modifiers"
  },  
  {
    id:"POWERSOUNDMODALARM2",
    name: "Alarm Area (+2)",
    button_name: "Alarm Area (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Sound/Silence Modifiers"
  },    
  // ----------------------
  {
    id:"POWERSOUNDMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERSOUNDMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERSOUNDMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERSOUNDMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERSOUNDMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERSOUNDMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERSOUNDMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERSOUNDMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERSOUNDMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Speak Language
  {
    id:"POWERLANGUAGEMODGREATER",
    name:starIcon + "Greater Speak Language (+2)",
    button_name: starIcon + "Greater Speak Language (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Speak Language Modifiers"
  },   
  {
    id:"POWERLANGUAGEMODMASS",
    name:starIcon + "Mass Understanding (+5)",
    button_name:starIcon + "Mass Understanding (+5)",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Speak Language Modifiers"
  }, 
  // ----------------------
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Stun
  {
    id:"POWERSTUNMODMEDIUM",
    name: "Medium Blast (+2)",
    button_name: "Medium Blast (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Stun" }
    ],
    group: "Area of Effect"
  },   
  {
    id:"POWERSTUNMODLARGE",
    name: "Large Blast (+3)",
    button_name:  "Large Blast (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Stun" }
    ],
    group: "Area of Effect"
  }, 

  // ----------------------
  // POWER SUMMON ALLY
  {
    id:"POWERSUMMONALLYMODNOVICE",
    name:"Novice (1)",
    button_name:"Novice (1)",
    shotsUsed:"1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Rank"
  },    
  {
    id:"POWERSUMMONALLYMODSEASONED",
    name:"Seasoned (3)",
    button_name:"Seasoned (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Rank"
  },
  {
    id:"POWERSUMMONALLYMODVETERAN",
    name:"Veteran (5)",
    button_name:"Veteran (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Rank"
  },
  {
    id:"POWERSUMMONALLYMODHEROIC",
    name:"Heroic (7)",
    button_name:"Heroic (7)",
    shotsUsed:"7",
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
  // POWER Wall Walker 
  // ----------------------
  {
    id:"POWERLANGUAGEMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERWALLWALKERMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWALLWALKERMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERWALLWALKERMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWALLWALKERMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWALLWALKERMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWALLWALKERMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWALLWALKERMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERWALLWALKERMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  }  
  
];