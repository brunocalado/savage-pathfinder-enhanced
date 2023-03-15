const groupName = "Savage Pathfinder";
const groupNamePP = "Power Points";
const groupNamePModifiers = "Power Modifiers";
const groupNameGenericPModifiers = "Power Modifiers - Generic";
const starIcon = "☆ ";

export const ppveteran = [
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
  // POWER Banish
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
  // POWER Drain Power Points
  {
    id:"POWERDRAINPOWERMODPOWER",
    name: "Power (+2)",
    button_name: "Power (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Drain Power Points" }
    ],
    group: "Drain Power Points Modifiers"
  }, 

  // ----------------------
  // POWER Fly
  {
    id:"POWERFLYMODSWIFT",
    name: "Swift Flight (+5)",
    button_name: "Swift Flight (+5)",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Fly" }
    ],
    group: "Fly Modifiers"
  },
  // ----------------------
  {
    id:"POWERFLYMODADDITIONALRECIPIENTS",
    name:"Additional Recipients 1x (+2)",
    button_name: "1x (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Fly" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERFLYMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients 2x (+4)",
    button_name: "2x (+4)",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Fly" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFLYMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients 3x (+6)",
    button_name: "3x (+6)",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Fly" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERFLYMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients 4x (+8)",
    button_name: "4x (+8)",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Fly" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFLYMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients 5x (+10)",
    button_name: "5x (+10)",
    shotsUsed:"+10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Fly" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFLYMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients 6x (+12)",
    button_name: "6x (+12)",
    shotsUsed:"+12",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Fly" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFLYMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients 7x (+14)",
    button_name: "7x (+14)",
    shotsUsed:"+14",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Fly" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERFLYMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients 8x (+16)",
    button_name: "8x (+16)",
    shotsUsed:"+16",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Fly" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Intangibility
  {
    id:"POWERINTANGIBILITYMODDURATION",
    name: starIcon + "Duration (+3)",
    button_name: "Duration (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Intangibility" }
    ],
    group: "Intangibility Modifiers"
  },     
  // ----------------------
  {
    id:"POWERINTANGIBILITYMODADDITIONALRECIPIENTS",
    name:starIcon + "Additional Recipients 1x (+3)",
    button_name: "1x (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Intangibility" }
    ],
    group: starIcon + "Additional Recipients"
  },      
  {
    id:"POWERINTANGIBILITYMODADDITIONALRECIPIENTS2",
    name:starIcon + "Additional Recipients 2x (+6)",
    button_name: "2x (+6)",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Intangibility" }
    ],
    group: starIcon + "Additional Recipients"
  },          
  {
    id:"POWERINTANGIBILITYMODADDITIONALRECIPIENTS3",
    name:starIcon + "Additional Recipients 3x (+9)",
    button_name: "3x (+9)",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Intangibility" }
    ],
    group: starIcon + "Additional Recipients"
  },      
  {
    id:"POWERINTANGIBILITYMODADDITIONALRECIPIENTS4",
    name:starIcon + "Additional Recipients 4x (+12)",
    button_name: "4x (+12)",
    shotsUsed:"+12",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Intangibility" }
    ],
    group: starIcon + "Additional Recipients"
  },          
  {
    id:"POWERINTANGIBILITYMODADDITIONALRECIPIENTS5",
    name:starIcon + "Additional Recipients 5x (+15)",
    button_name: "5x (+15)",
    shotsUsed:"+15",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Intangibility" }
    ],
    group: starIcon + "Additional Recipients"
  },          
  {
    id:"POWERINTANGIBILITYMODADDITIONALRECIPIENTS6",
    name:starIcon + "Additional Recipients 6x (+18)",
    button_name: "6x (+18)",
    shotsUsed:"+18",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Intangibility" }
    ],
    group: starIcon + "Additional Recipients"
  },          
  {
    id:"POWERINTANGIBILITYMODADDITIONALRECIPIENTS7",
    name:starIcon + "Additional Recipients 7x (+21)",
    button_name: "7x (+21)",
    shotsUsed:"+21",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Intangibility" }
    ],
    group: starIcon + "Additional Recipients"
  },        
  
  // ----------------------
  // POWER Mind Wipe
  {
    id:"POWERMINDWIPEMODEDIT",
    name: "Edit (+1)",
    button_name: "Edit (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Wipe" }
    ],
    group: "Mind Wipe Modifiers"
  }, 
  {
    id:"POWERMINDWIPEMODGREATER",
    name: starIcon + "Greater Mind Wipe (+2)",
    button_name: starIcon + "Greater Mind Wipe (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Wipe" }
    ],
    group: "Mind Wipe Modifiers"
  }, 
  {
    id:"POWERMINDWIPEMODFAST",
    name: "Fast Cast (+2)",
    button_name: "Fast Cast (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Mind Wipe" }
    ],
    group: "Mind Wipe Modifiers"
  }, 

  // ----------------------
  // POWER Planar Binding


  // ----------------------
  // POWER Plane Shift
  {
    id:"POWERPLANESHIFTMODEXTRA",
    name: starIcon + "Extra-Dimensional Space (+1)",
    button_name: starIcon + "Extra-Dimensional Space (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Plane Shift Modifiers"
  },  
  {
    id:"POWERPLANESHIFTMODTRANSPORT",
    name: starIcon + "Transport Foe (+2)",
    button_name: starIcon + "Transport Foe (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Plane Shift Modifiers"
  },    
  {
    id:"POWERPLANESHIFTMODADDITIONALRECIPIENTS",
    name:"Additional Recipients +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERPLANESHIFTMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPLANESHIFTMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERPLANESHIFTMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPLANESHIFTMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPLANESHIFTMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPLANESHIFTMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPLANESHIFTMODADDITIONALRECIPIENTS8",
    name:"Additional Recipients +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPLANESHIFTMODADDITIONALRECIPIENTS9",
    name:"Additional Recipients +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Plane Shift" }
    ],
    group: "Additional Recipients"
  },  
  
  // ----------------------
  // POWER Puppet
  {
    id:"POWERPUPPETMODSTRONG",
    name: "Strong (+2)",
    button_name: "Strong (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Puppet" }
    ],
    group: "Puppet Modifiers"
  },    
  // ----------------------
  {
    id:"POWERPUPPETMODADDITIONALRECIPIENTS",
    name:"Additional Recipients 1x (+2)",
    button_name: "1x (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Puppet" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERPUPPETMODADDITIONALRECIPIENTS2",
    name:"Additional Recipients 2x (+4)",
    button_name: "2x (+4)",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Puppet" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPUPPETMODADDITIONALRECIPIENTS3",
    name:"Additional Recipients 3x (+6)",
    button_name: "3x (+6)",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Puppet" }
    ],
    group: "Additional Recipients"
  },      
  {
    id:"POWERPUPPETMODADDITIONALRECIPIENTS4",
    name:"Additional Recipients 4x (+8)",
    button_name: "4x (+8)",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Puppet" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPUPPETMODADDITIONALRECIPIENTS5",
    name:"Additional Recipients 5x (+10)",
    button_name: "5x (+10)",
    shotsUsed:"+10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Puppet" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPUPPETMODADDITIONALRECIPIENTS6",
    name:"Additional Recipients 6x (+12)",
    button_name: "6x (+12)",
    shotsUsed:"+12",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Puppet" }
    ],
    group: "Additional Recipients"
  },          
  {
    id:"POWERPUPPETMODADDITIONALRECIPIENTS7",
    name:"Additional Recipients 7x (+14)",
    button_name: "7x (+14)",
    shotsUsed:"+14",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Puppet" }
    ],
    group: "Additional Recipients"
  },
  
  // ----------------------
  // POWER Zombie
  {
    id:"POWERZOMBIEMODMINDRIDER",
    name: "Mind Rider (+1)",
    button_name: "Mind Rider (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Zombie Modifiers"
  },
  {
    id:"POWERZOMBIEMODMINDRIDER3",
    name: "Mind Rider (+3)",
    button_name: "Mind Rider (+3)",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Zombie Modifiers"
  },  
  {
    id:"POWERZOMBIEMODPERMANENT",
    name: "Permanent (+0)",
    button_name: "Permanent (+0)",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Zombie Modifiers"
  },    
  // ---------------------- Armed
  {
    id:"POWERZOMBIEMODARMED",
    name:"Armed +1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armed (+1 per Zombie)"
  },      
  {
    id:"POWERZOMBIEMODARMED2",
    name:"Armed +2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armed (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMED3",
    name:"Armed +3",
    button_name: "+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armed (+1 per Zombie)"
  },      
  {
    id:"POWERZOMBIEMODARMED4",
    name:"Armed +4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armed (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMED5",
    name:"Armed +5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armed (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMED6",
    name:"Armed +6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armed (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMED7",
    name:"Armed +7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armed (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMED8",
    name:"Armed +8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armed (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMED9",
    name:"Armed +9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armed (+1 per Zombie)"
  },  
  // ---------------------- Additional Zombies
  {
    id:"POWERZOMBIEMODADDITIONAL",
    name:"+1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Additional Zombies"
  },      
  {
    id:"POWERZOMBIEMODADDITIONAL2",
    name:"+2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Additional Zombies"
  },          
  { 
    id:"POWERZOMBIEMODADDITIONAL3",
    name:"+3",
    button_name: "+3",
    shotsUsed:"+3", 
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Additional Zombies"
  },      
  {
    id:"POWERZOMBIEMODADDITIONAL4",
    name:"+4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Additional Zombies"
  },          
  {
    id:"POWERZOMBIEMODADDITIONAL5",
    name:"+5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Additional Zombies"
  },          
  {
    id:"POWERZOMBIEMODADDITIONAL6",
    name:"+6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Additional Zombies"
  },          
  {
    id:"POWERZOMBIEMODADDITIONAL7",
    name:"+7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Additional Zombies"
  },          
  {
    id:"POWERZOMBIEMODADDITIONAL8",
    name:"+8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Additional Zombies"
  },          
  {
    id:"POWERZOMBIEMODADDITIONAL9",
    name:"+9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Additional Zombies"
  },  
  // ---------------------- armor
  {
    id:"POWERZOMBIEMODARMOR",
    name:"+1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armor 2 (+1 per Zombie)"
  },      
  {
    id:"POWERZOMBIEMODARMOR2",
    name:"+2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armor 2 (+1 per Zombie)"
  },          
  { 
    id:"POWERZOMBIEMODARMOR3",
    name:"+3",
    button_name: "+3",
    shotsUsed:"+3", 
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armor 2 (+1 per Zombie)"
  },      
  { 
    id:"POWERZOMBIEMODARMOR4",
    name:"+4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armor 2 (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMOR5",
    name:"+5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armor 2 (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMOR6",
    name:"+6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armor 2 (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMOR7",
    name:"+7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armor 2 (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMOR8",
    name:"+8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armor 2 (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODARMOR9",
    name:"+9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Armor 2 (+1 per Zombie)"
  },   
  // ---------------------- SKELETAL 
  {
    id:"POWERZOMBIEMODSKELETAL",
    name:"+1",
    button_name: "+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Skeletal (+1 per Zombie)"
  },      
  {
    id:"POWERZOMBIEMODSKELETAL2",
    name:"+2",
    button_name: "+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Skeletal (+1 per Zombie)"
  },          
  { 
    id:"POWERZOMBIEMODSKELETAL3",
    name:"+3",
    button_name: "+3",
    shotsUsed:"+3", 
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Skeletal (+1 per Zombie)"
  },      
  { 
    id:"POWERZOMBIEMODSKELETAL4",
    name:"+4",
    button_name: "+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Skeletal (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODSKELETAL5",
    name:"+5",
    button_name: "+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Skeletal (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODSKELETAL6",
    name:"+6",
    button_name: "+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Skeletal (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODSKELETAL7",
    name:"+7",
    button_name: "+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Skeletal (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODSKELETAL8",
    name:"+8",
    button_name: "+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Skeletal (+1 per Zombie)"
  },          
  {
    id:"POWERZOMBIEMODSKELETAL9",
    name:"+9",
    button_name: "+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Zombie" }
    ],
    group: "Skeletal (+1 per Zombie)"
  }
  
];