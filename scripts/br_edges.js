const groupName = "Savage Pathfinder";
const edgesGroupName = "Edges";
  
export const edges = [
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
  },

  {
    id: "EDGEWORKTHEROOM",
    name:"Work the room",
    button_name:"Work the room",
    rof: "2",
    and_selector: [
      {
        selector_type:"actor_has_edge",
        selector_value:"Work the Room"
      },
      {
        or_selector: [
          {
            selector_type:"skill",
            selector_value:"Performance"
          },
          {
            selector_type:"skill",
            selector_value:"Persuasion"
          }
        ]
      }
    ],
    group: edgesGroupName
  },

  {
    id: "FRENZY",
    name: "Frenzy",
    button_name: "Frenzy",
    and_selector: [
      { selector_type: "skill", selector_value: "Fighting" },
      { selector_type: "actor_has_edge", selector_value: "Frenzy" },
      { selector_type: "item_type", selector_value: "weapon" },      
      {
        not_selector: [
          {
            selector_type: "actor_has_edge",
            selector_value: "Improved Frenzy",
          }
        ],
      },
    ],
    defaultChecked: "on",
    group: "BRSW.Edges",
    rof: "2",
  },
  {
    id: "IMPROVED FRENZY",
    name: "Improved Frenzy",
    button_name: "Improved Frenzy",
    and_selector: [
      { selector_type: "skill", selector_value: "Fighting" },
      { selector_type: "actor_has_edge", selector_value: "Improved Frenzy" },
      { selector_type: "item_type", selector_value: "weapon" },      
    ],
    defaultChecked: "on",
    group: "BRSW.Edges",
    rof: "2",
  }
  
  
];

