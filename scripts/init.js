Hooks.once('ready', () => {
  const groupName = "Savage Pathfinder";

  const BETTER_ROLLS_SWPF = [{
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
        group: groupName
      },
      {
        id: "ENVIRONMENTALRESISTANCE",
        name: "Environmental Resistance",
        button_name: "Environmental Resistance",
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
        group: "Savage Pathfinder"
      },
      {
        id: "ENVIRONMENTALWEAKNESS",
        name: "Environmental Weakness",
        button_name: "Environmental Weakness",
        dmgMod: "+4",
        or_selector: [
        {
          selector_type: "item_type",
          selector_value: "weapon"
        },
        {
          selector_type: "item_type",
          selector_value: "power"
        }
      ],
      group: "Savage Pathfinder"
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
      group: "Savage Pathfinder"
    }
];

  game.brsw.add_actions(BETTER_ROLLS_SWPF);
}); // END HOOKS