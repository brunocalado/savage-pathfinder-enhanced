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
    group: "BRSW.AttackOption"
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
    group: "BRSW.AttackOption"
  },
  
  {
    id: "1-LightCover",
    name: "Light Cover",
    button_name: "Light",
    skillMod: "-2",
    or_selector: [{
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_type",
        selector_value: "weapon"
      }
    ],    
    group: "BRSW.Cover"
  }, {
    id: "2-MediumCover",
    name: "Medium Cover",
    button_name: "Medium",
    skillMod: "-4",
    or_selector: [{
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_type",
        selector_value: "weapon"
      }
    ], 
    group: "BRSW.Cover"
  }, {
    id: "3-HeavyCover",
    name: "Heavy Cover",
    button_name: "Heavy",
    skillMod: "-6",
    or_selector: [{
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_type",
        selector_value: "weapon"
      }
    ], 
    group: "BRSW.Cover"
  }, {
    id: "4-NearTotalCover",
    name: "Near Total Cover",
    button_name: "NearTotal",
    skillMod: "-8",
    or_selector: [{
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_type",
        selector_value: "weapon"
      }
    ], 
    group: "BRSW.Cover"
  },

  {
    id: "RAN",
    name: "Ran",
    button_name: "BRSW.Ran",
    skillMod: "-2",
    not_selector: [{
      selector_type: "actor_has_edge",
      selector_value: "BRSW.EdgeName-Steady-Hands"
    }],
    group: "BRSW.Multi-action"
  }, {
    id: "2ACTIONS",
    name: "2 actions",
    button_name: "2 Actions",
    skillMod: "-2",
    selector_type: "all",
    group: "BRSW.Multi-action"
  }, {
    id: "3ACTIONS",
    name: "3 actions",
    button_name: "3 Actions",
    skillMod: "-4",
    selector_type: "all",
    group: "BRSW.Multi-action"
  },
  
  {
    id: "WTK",
    name: "Wild Attack",
    button_name: "BRSW.WildAttack",
    skillMod: 2,
    dmgMod: 2,
    dmgOverride: "",
    selector_type: "skill",
    selector_value: "fighting",
    self_add_status: "vulnerable",
    group: "BRSW.AttackOption"
  },

  {
    id: "AttackInanimateObject ",
    name: "Attack Inanimate Object",
    button_name: "Inanimate Object",
    avoid_exploding_damage: "true",
    or_selector: [{
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_type",
        selector_value: "weapon"
      }
    ],
    group: "BRSW.SituationalModifiers"
  },

  {
    id: "CS-HEAD",
    name: "Called Shot: Head",
    button_name: "Head -4",
    skillMod: -4,
    dmgMod: +4,
    dmgOverride: "",
    selector_type: "item_type",
    selector_value: "weapon",
    group: "Called Shot",
    change_location: "head"
  }, {
    id: "CS-ARM",
    name: "Called Shot: Arm",
    button_name: "Arm -2",
    skillMod: -2,
    selector_type: "item_type",
    selector_value: "weapon",
    group: "Called Shot",
    change_location: "arm"
  }, {
    id: "CS-LEG",
    name: "Called Shot: Leg",
    button_name: "Leg -2",
    skillMod: -2,
    selector_type: "item_type",
    selector_value: "weapon",
    group: "Called Shot",
    change_location: "leg"
  }


];