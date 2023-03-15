const groupName = "Savage Pathfinder";
const groupNamePP = "Power Points";
const groupNamePModifiers = "Power Modifiers";
const groupNameGenericPModifiers = "Power Modifiers - Generic";
const starIcon = "☆ ";

export const ppheroic = [
  // ----------------------
  // POWER Resurrection
  {
    id:"POWERRESURRECTIONMODPOWER",
    name: "Power (+5)",
    button_name: "Power (+5)",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Resurrection" }
    ],
    group: "Power Modifiers"
  },
  {
    id:"POWERRESURRECTIONMODGREATER",
    name: starIcon + "Greater Resurrection (+10)",
    button_name: starIcon + "Greater Resurrection (+10)",
    shotsUsed:"+10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Resurrection" }
    ],
    group: "Power Modifiers"
  }

  // ----------------------
  // POWER Time Stop
  
];