const groupName = "Savage Pathfinder";

export const abilities = [
  {
    id: "ENVIRONMENTALRESISTANCE",
    name: "Environmental Resistance",
    button_name: "Env. Resistance",
    dmgMod: "-4",
    actor_has_ability: "Environmental Resistance",
    and_selector: [
      {
        selector_type: "target_has_ability",
        selector_value: "Environmental Resistance"        
      },
      {
        or_selector: [{
            selector_type: "item_type",
            selector_value: "weapon"
          },
          {
            selector_type: "item_type",
            selector_value: "power"
          }
        ]
      }
    ],
    group: groupName
  },
  {
    id: "ENVIRONMENTALWEAKNESS",
    name: "Environmental Weakness",
    button_name: "Env. Weakness",
    dmgMod: "+4",
    and_selector: [
      {
        selector_type: "target_has_ability",
        selector_value: "Environmental Weakness"        
      }, 
      {
        or_selector: [{
            selector_type: "item_type",
            selector_value: "weapon"
          },
          {
            selector_type: "item_type",
            selector_value: "power"
          }
        ]
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