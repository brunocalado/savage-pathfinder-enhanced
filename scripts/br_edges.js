const groupName = "Savage Pathfinder";
  
export const edges = [
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
    group: "Savage Pathfinder"
  },
  {
    id: "ARCANEARCHER01",
    name: "Arcane Archer",
    button_name: "Arcane Archer",
    skillMod: "+1",
    dmgMod: "+1",
    defaultChecked: "on",
    and_selector: [{
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
    and_selector: [{
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
    and_selector: [{
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
  }
  
];