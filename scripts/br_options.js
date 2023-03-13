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
    id: "POUNCINGWILDATTACK",
    name: "Pounce",
    button_name: "Pounce (Wild Attack)",
    skillMod: "+2",
    dmgMod: "+4",
    and_selector: [{
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
  }

];