const groupName = "Savage Pathfinder";

export const options = [
  {
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
  }  

];