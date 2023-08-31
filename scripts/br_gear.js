const groupName = "Savage Pathfinder";
const edgesGroupName = "Gear";
  
export const gear = [
  {
    id: "RHINOHIDE",
    name: "Rhino Hide",
    button_name: "Rhino Hide",
    dmgMod: "+4",
    defaultChecked: "on",
    and_selector: [{
        selector_type: "actor_equips_item",
        selector_value: "Rhino Hide"
      },
      {
        selector_type: "item_type",
        selector_value: "weapon"
      },
      {
        selector_type: "skill",
        selector_value: "Fighting"
      },
    ],
    group: groupName
  }  
  
];
