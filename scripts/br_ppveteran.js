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
    id:"POWERPLANESHIFTMODADDITIONALRECIPIENTS",
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
  }
  


  
  
];