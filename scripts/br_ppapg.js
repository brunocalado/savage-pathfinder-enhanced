const groupName = "Savage Pathfinder";
const groupNamePP = "Power Points";
const groupNamePModifiers = "Power Modifiers";
const groupNameGenericPModifiers = "Power Modifiers - Generic";
const starIcon = "☆ ";

export const ppapg = [
  // ----------------------
  // POWER Create Pit
  {
    id:"POWERCREATEPITMODSPIKED",
    name: "Spiked (+1)",
    button_name: "Spiked (+1)",
    shotsUsed:"+1",
    dmgMod: "+d6x",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Create Pit" }
    ],
    group: "Create Pit Modifiers"
  },          
  {
    id:"POWERCREATEPITMODSOFT",
    name: "Soft Ground (+1)",
    button_name: "Soft Ground (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Create Pit" }
    ],
    group: "Create Pit Modifiers"
  },    
  {
    id:"POWERCREATEPITMODDEEP",
    name: "Deep (+2)",
    button_name: "Deep (+2)",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Create Pit" }
    ],
    group: "Create Pit Modifiers"
  },    

  // ----------------------
  // POWER LOCK/UNLOCK
  
  // ----------------------
  // POWER MAGIC JAR

  // ----------------------
  // POWER SUMMON MONSTER  
  {
    id:"POWERSUMMONMONSTERMODMINDRIDER",
    name:"Mind Rider (+1)",
    button_name:"Mind Rider (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Summon Monster Modifiers"
  },
  // ----------------------
  {
    id:"POWERSUMMONMONSTERMODINCREASEDTRAIT",
    name:"+1",
    button_name:"+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONMONSTERMODINCREASEDTRAIT2",
    name:"+2",
    button_name:"+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONMONSTERMODINCREASEDTRAIT3",
    name:"+3",
    button_name:"+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONMONSTERMODINCREASEDTRAIT4",
    name:"+4",
    button_name:"+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONMONSTERMODINCREASEDTRAIT5",
    name:"+5",
    button_name:"+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONMONSTERMODINCREASEDTRAIT6",
    name:"+6",
    button_name:"+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONMONSTERMODINCREASEDTRAIT7",
    name:"+7",
    button_name:"+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONMONSTERMODINCREASEDTRAIT8",
    name:"+8",
    button_name:"+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONMONSTERMODINCREASEDTRAIT9",
    name:"+9",
    button_name:"+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Increased Trait"
  },
  // ----------------Novice
  {
    id:"POWERSUMMONMONSTERMODARCHONL",
    name:"Archon, Lantern (5)",
    button_name:"Archon, Lantern (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONMONSTERMODBEETLEF",
    name:"Beetle, Fire (2)",
    button_name:"Beetle, Fire (2)",
    shotsUsed:"2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  },  
  {
    id:"POWERSUMMONMONSTERMODBIRDP",
    name:"Bird of Prey (2)",
    button_name:"Bird of Prey (2)",
    shotsUsed:"2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  },  
  {
    id:"POWERSUMMONMONSTERMODBOAR",
    name:"Boar (4)",
    button_name:"Boar (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONMONSTERMODCATLARGE",
    name:"Cat, large (5)",
    button_name:"Cat, large (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONMONSTERMODDOGWOLF",
    name:"Dog/Wolf (3)",
    button_name:"Dog/Wolf (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONMONSTERMODDEVILLEMURE",
    name:"Devil, Lemure (4)",
    button_name:"Devil, Lemure (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONMONSTERMODELEMENTALS",
    name:"Elemental (Small) (4)",
    button_name:"Elemental (Small) (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONMONSTERMODGIANTANT",
    name:"Giant Animal (Ant) (4)",
    button_name:"Giant Animal (Ant) (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONMONSTERMODGIANTSPIDER",
    name:"Giant Animal (Spider) (2)",
    button_name:"Giant Animal (Spider) (2)",
    shotsUsed:"2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONMONSTERMODGOBLINDOG",
    name:"Goblin Dog (3)",
    button_name:"Goblin Dog (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONMONSTERMODHORSELIGHT",
    name:"Horse, Light (4)",
    button_name:"Horse, Light (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONMONSTERMODMEPHIT",
    name:"Mephit (3)",
    button_name:"Mephit (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONMONSTERMODRATDIRE",
    name:"Rat, Dire (3)",
    button_name:"Rat, Dire (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONMONSTERMODSNAKE",
    name:"Snake (3)",
    button_name:"Snake (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONMONSTERMODWOLVERINE",
    name:"Wolverine (3)",
    button_name:"Wolverine (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Novice"
  },
  // ----------------Seasoned
  {
    id:"POWERSUMMONMONSTERMODALLIGATOR",
    name:"Alligator/Crocodile (6)",
    button_name:"Alligator/Crocodile (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODAUROCH",
    name:"Auroch (6)",
    button_name:"Auroch (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODBEAR",
    name:"Bear (7)",
    button_name:"Bear (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODBOARDIRE",
    name:"Boar, Dire (6)",
    button_name:"Boar, Dire (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODDEMONSUCCUBUS",
    name:"Demon, Succubus (6)",
    button_name:"Demon, Succubus (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODDEMONVROCK",
    name:"Demon, Vrock (7)",
    button_name:"Demon, Vrock (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODELEMENTAL",
    name:"Elemental (7)",
    button_name:"Elemental (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },  
  {
    id:"POWERSUMMONMONSTERMODELEPHANTCOMMON",
    name:"Elephant (Common) (7)",
    button_name:"Elephant (Common) (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },  
  {
    id:"POWERSUMMONMONSTERMODGIANTCENTIPEDE",
    name:"Giant Animal (Centipede) (8)",
    button_name:"Giant Animal (Centipede) (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  }, 
  {
    id:"POWERSUMMONMONSTERMODHELLHOUND",
    name: "Hell Hound (6)",
    button_name:"Hell Hound (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  }, 
  {
    id:"POWERSUMMONMONSTERMODHORSEHEAVY",
    name: "Horse, Heavy (5)",
    button_name:"Horse, Heavy (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODKYTON",
    name: "Kyton (6)",
    button_name:"Kyton (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODRHINOCEROS",
    name: "Rhinoceros (7)",
    button_name:"Rhinoceros (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODSHARK",
    name: "Shark (4)",
    button_name:"Shark (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODWOLFDIRE",
    name: "Wolf, Dire (5)",
    button_name:"Wolf, Dire (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODXILL",
    name: "Xill (6)",
    button_name:"Xill (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONMONSTERMODARCHONTRUMPET",
    name: "Archon, Trumpet (10)",
    button_name:"Archon, Trumpet (10)",
    shotsUsed:"10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Veteran"
  },  
  {
    id:"POWERSUMMONMONSTERMODBEARDIRE",
    name: "Bear, Dire (8)",
    button_name:"Bear, Dire (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Veteran"
  },
  {
    id:"POWERSUMMONMONSTERMODDEMONGLABREZU",
    name: "Demon, Glabrezu (10)",
    button_name:"Demon, Glabrezu (10)",
    shotsUsed:"10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Veteran"
  },
  {
    id:"POWERSUMMONMONSTERMODDEVILBONE",
    name: "Devil, Bone (8)",
    button_name:"Devil, Bone (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Veteran"
  },
  {
    id:"POWERSUMMONMONSTERMODDEVILICE",
    name: "Devil, Ice (8)",
    button_name:"Devil, Ice (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Veteran"
  },
  {
    id:"POWERSUMMONMONSTERMODELEMENTALELDER",
    name: "Elemental (Elder) (10)",
    button_name:"Elemental (Elder) (10)",
    shotsUsed:"10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Veteran"
  },
  {
    id:"POWERSUMMONMONSTERMODELEPHANTMAMMOTH",
    name: "Elephant (Mammoth) (9)",
    button_name:"Elephant (Mammoth) (9)",
    shotsUsed:"9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Veteran"
  },
  {
    id:"POWERSUMMONMONSTERMODROC",
    name: "Roc (8)",
    button_name:"Roc (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Monster" }
    ],
    group: "Rank: Veteran"
  },

  // ----------------------
  // POWER SUMMON Nature's Ally  
  {
    id:"POWERSUMMONNATURESALLYMODMINDRIDER",
    name:"Mind Rider (+1)",
    button_name:"Mind Rider (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Summon Nature's Ally Modifiers"
  },
  // ----------------------
  {
    id:"POWERSUMMONNATURESALLYMODINCREASEDTRAIT",
    name:"+1",
    button_name:"+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Increased Trait"
  },
  { 
    id:"POWERSUMMONNATURESALLYMODINCREASEDTRAIT2",
    name:"+2",
    button_name:"+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONNATURESALLYMODINCREASEDTRAIT3",
    name:"+3",
    button_name:"+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONNATURESALLYMODINCREASEDTRAIT4",
    name:"+4",
    button_name:"+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONNATURESALLYMODINCREASEDTRAIT5",
    name:"+5",
    button_name:"+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONNATURESALLYMODINCREASEDTRAIT6",
    name:"+6",
    button_name:"+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONNATURESALLYMODINCREASEDTRAIT7",
    name:"+7",
    button_name:"+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONNATURESALLYMODINCREASEDTRAIT8",
    name:"+8",
    button_name:"+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONNATURESALLYMODINCREASEDTRAIT9",
    name:"+9",
    button_name:"+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Increased Trait"
  },
  // ----------------Novice
  {
    id:"POWERSUMMONNATURESALLYMODBIRDPREY",
    name:"Bird of Prey (2)",
    button_name:"Bird of Prey (2)",
    shotsUsed:"2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONNATURESALLYMODBOAR",
    name:"Boar (4)",
    button_name:"Boar (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },  
  {
    id:"POWERSUMMONNATURESALLYMODCATLARGE",
    name:"Cat, large (5)",
    button_name:"Cat, large (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },    
  {
    id:"POWERSUMMONNATURESALLYMODDOGWOLF",
    name:"Dog/Wolf (3)",
    button_name:"Dog/Wolf (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },   
  {
    id:"POWERSUMMONNATURESALLYMODELEMENTALSMALL",
    name:"Elemental (Small) (4)",
    button_name:"Elemental (Small) (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },  
  {
    id:"POWERSUMMONNATURESALLYMODGIANTANT",
    name:"Giant Animal (Ant) (4)",
    button_name:"Giant Animal (Ant) (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },  
  {
    id:"POWERSUMMONNATURESALLYMODGIANTMOSQUITO",
    name:"Giant Animal (Mosquito) (2)",
    button_name:"Giant Animal (Mosquito) (2)",
    shotsUsed:"2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONNATURESALLYMODGIANTSPIDER",
    name:"Giant Animal (Spider) (2)",
    button_name:"Giant Animal (Spider) (2)",
    shotsUsed:"2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONNATURESALLYMODGOBLINDOG",
    name:"Goblin Dog (3)",
    button_name:"Goblin Dog (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONNATURESALLYMODHORSELIGHT",
    name:"Horse, Light (4)",
    button_name:"Horse, Light (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONNATURESALLYMODMEPHIT",
    name:"Mephit (3)",
    button_name:"Mephit (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONNATURESALLYMODRATDIRE",
    name:"Rat, Dire (3)",
    button_name:"Rat, Dire (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONNATURESALLYMODSNAKE",
    name:"Snake (3)",
    button_name:"Snake (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONNATURESALLYMODWOLVERINE",
    name:"Wolverine (3)",
    button_name:"Wolverine (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Novice"
  },
  // ----------------Seasoned
  {
    id:"POWERSUMMONNATURESALLYMODALLIGATOR",
    name:"Alligator/Crocodile (6)",
    button_name:"Alligator/Crocodile (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },  
  {
    id:"POWERSUMMONNATURESALLYMODAUROCH",
    name:"Auroch (6)",
    button_name:"Auroch (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },    
  {
    id:"POWERSUMMONNATURESALLYMODBEAR",
    name:"Bear (7)",
    button_name:"Bear (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },   
  {
    id:"POWERSUMMONNATURESALLYMODBOARDIRE",
    name:"Boar, Dire (6)",
    button_name:"Boar, Dire (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },    
  {
    id:"POWERSUMMONNATURESALLYMODELEMENTAL",
    name:"Elemental (7)",
    button_name:"Elemental (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODELEPHANTCOMMON",
    name:"Elephant (Common) (7)",
    button_name:"Elephant (Common) (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODETTIN",
    name:"Ettin (6)",
    button_name:"Ettin (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODGIANTFROST",
    name:"Giant, Fire/Frost (8)",
    button_name:"Giant, Fire/Frost (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODGIANTSTONE",
    name:"Giant, Hill/Stone (7)",
    button_name:"Giant, Hill/Stone (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODGIANTCENTIPEDE",
    name:"Giant Animal (Centipede) (8)",
    button_name:"Giant Animal (Centipede) (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODGIANTCRAB",
    name:"Giant Animal (Crab) (6)",
    button_name:"Giant Animal (Crab) (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODGIANTBEETLE",
    name:"Giant Animal (Stag Beetle) (5)",
    button_name:"Giant Animal (Stag Beetle) (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODGRIFFON",
    name:"Griffon (6)",
    button_name:"Griffon (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODHORSEHEAVY",
    name:"Horse, Heavy (5)",
    button_name:"Horse, Heavy (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODMANTICORE",
    name:"Manticore (6)",
    button_name:"Manticore (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODOWLBEAR",
    name:"Owlbear (6)",
    button_name:"Owlbear (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODPIXIE",
    name:"Pixie (6)",
    button_name:"Pixie (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODRHINOCEROS",
    name:"Rhinoceros (7)",
    button_name:"Rhinoceros (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODSATYR",
    name:"Satyr (5)",
    button_name:"Satyr (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONNATURESALLYMODSHARK",
    name:"Shark (4)",
    button_name:"Shark (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },  
  {
    id:"POWERSUMMONNATURESALLYMODWOLFDIRE",
    name:"Wolf, Dire (5)",
    button_name:"Wolf, Dire (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Seasoned"
  },   
  // ----------------Veteran
  {
    id:"POWERSUMMONNATURESALLYMODBEARDIRE",
    name:"Bear, Dire (8)",
    button_name:"Bear, Dire (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Veteran"
  },     
  {
    id:"POWERSUMMONNATURESALLYMODELEMENTALELDER",
    name:"Elemental (Elder) (10)",
    button_name:"Elemental (Elder) (10)",
    shotsUsed:"10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Veteran"
  },     
  {
    id:"POWERSUMMONNATURESALLYMODELEPHANTMAMMOTH",
    name:"Elephant (Mammoth) (9)",
    button_name:"Elephant (Mammoth) (9)",
    shotsUsed:"9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Veteran"
  },   
  {
    id:"POWERSUMMONNATURESALLYMOGIANTCLOUD",
    name:"Giant, Storm/Cloud (10)",
    button_name:"Giant, Storm/Cloud (10)",
    shotsUsed:"10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Veteran"
  },   
  {
    id:"POWERSUMMONNATURESALLYMODROC",
    name:"Roc (8)",
    button_name:"Roc (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Nature's Ally" }
    ],
    group: "Rank: Veteran"
  },
  
  // ----------------------
  // POWER SUMMON Planar Ally   
  {
    id:"POWERSUMMONPLANARALLYMODMINDRIDER",
    name:"Mind Rider (+1)",
    button_name:"Mind Rider (+1)",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Summon Planar Ally Modifiers"
  },
  // ----------------------
  {
    id:"POWERSUMMONPLANARALLYMODINCREASEDTRAIT",
    name:"+1",
    button_name:"+1",
    shotsUsed:"+1",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Increased Trait"
  },
  { 
    id:"POWERSUMMONPLANARALLYMODINCREASEDTRAIT2",
    name:"+2",
    button_name:"+2",
    shotsUsed:"+2",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONPLANARALLYMODINCREASEDTRAIT3",
    name:"+3",
    button_name:"+3",
    shotsUsed:"+3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONPLANARALLYMODINCREASEDTRAIT4",
    name:"+4",
    button_name:"+4",
    shotsUsed:"+4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONPLANARALLYMODINCREASEDTRAIT5",
    name:"+5",
    button_name:"+5",
    shotsUsed:"+5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONPLANARALLYMODINCREASEDTRAIT6",
    name:"+6",
    button_name:"+6",
    shotsUsed:"+6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONPLANARALLYMODINCREASEDTRAIT7",
    name:"+7",
    button_name:"+7",
    shotsUsed:"+7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONPLANARALLYMODINCREASEDTRAIT8",
    name:"+8",
    button_name:"+8",
    shotsUsed:"+8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id:"POWERSUMMONPLANARALLYMODINCREASEDTRAIT9",
    name:"+9",
    button_name:"+9",
    shotsUsed:"+9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Increased Trait"
  },
  // ----------------Novice
  {
    id:"POWERSUMMONPLANARALLYMODARCHONLANTERN",
    name:"Archon, Lantern (5)",
    button_name:"Archon, Lantern (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONPLANARALLYMODAASIMAR",
    name:"Aasimar (3)",
    button_name:"Aasimar (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONPLANARALLYMODBARGHEST",
    name:"Barghest (5)",
    button_name:"Barghest (5)",
    shotsUsed:"5",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONPLANARALLYMODDEMONQUASIT",
    name:"Demon, Quasit (4)",
    button_name:"Demon, Quasit (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Novice"
  },
  {
    id:"POWERSUMMONPLANARALLYMODDEVILLEMURE",
    name:"Devil, Lemure (4)",
    button_name:"Devil, Lemure (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Novice"
  },  
  {
    id:"POWERSUMMONPLANARALLYMODELEMENTALSMALL",
    name:"Elemental (Small) (4)",
    button_name:"Elemental (Small) (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONPLANARALLYMODMEPHIT",
    name:"Mephit (3)",
    button_name:"Mephit (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONPLANARALLYMODTIEFLING",
    name:"Tiefling (3)",
    button_name:"Tiefling (3)",
    shotsUsed:"3",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONPLANARALLYMODVARGOUILLE",
    name:"Vargouille (4)",
    button_name:"Vargouille (4)",
    shotsUsed:"4",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Novice"
  }, 
  {
    id:"POWERSUMMONPLANARALLYMODYETHHOUND",
    name:"Yeth Hound (6)",
    button_name:"Yeth Hound (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Novice"
  }, 
  // ----------------Seasoned
  {
    id:"POWERSUMMONPLANARALLYMODARCHONHOUND",
    name:"Archon, Hound (6)",
    button_name:"Archon, Hound (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONPLANARALLYMODBARGHESTGREATER",
    name:"Barghest, Greater (7)",
    button_name:"Barghest, Greater (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONPLANARALLYMODDEMONSUCCUBUS",
    name:"Demon, Succubus (6)",
    button_name:"Demon, Succubus (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONPLANARALLYMODDEMONVROC",
    name:"Demon, Vroc (7)",
    button_name:"Demon, Vroc (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONPLANARALLYMODELEMENTAL",
    name:"Elemental (7)",
    button_name:"Elemental (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONPLANARALLYMODHELLHOUND",
    name:"Hell Hound (6)",
    button_name:"Hell Hound (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONPLANARALLYMODKYTON",
    name:"Kyton (6)",
    button_name:"Kyton (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONPLANARALLYMODNIGHTMARE",
    name:"Nightmare (6)",
    button_name:"Nightmare (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONPLANARALLYMODSHADOW",
    name:"Shadow (6)",
    button_name:"Shadow (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONPLANARALLYMODXILL",
    name:"Xill (6)",
    button_name:"Xill (6)",
    shotsUsed:"6",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  {
    id:"POWERSUMMONPLANARALLYMODXORN",
    name:"Xorn (7)",
    button_name:"Xorn (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Seasoned"
  },
  // ----------------Veteran
  {
    id:"POWERSUMMONPLANARALLYMODARCHONTRUMPET",
    name:"Archon, Trumpet (10)",
    button_name:"Archon, Trumpet (10)",
    shotsUsed:"10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Veteran"
  },
  {
    id:"POWERSUMMONPLANARALLYMODDEMONGLABREZU",
    name:"Demon, Glabrezu (10)",
    button_name:"Demon, Glabrezu (10)",
    shotsUsed:"10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Veteran"
  },  
  {
    id:"POWERSUMMONPLANARALLYMODDEVILBONE",
    name:"Devil, Bone (8)",
    button_name:"Devil, Bone (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Veteran"
  }, 
  {
    id:"POWERSUMMONPLANARALLYMODDEVILICE",
    name:"Devil, Ice (8)",
    button_name:"Devil, Ice (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Veteran"
  }, 
  {
    id:"POWERSUMMONPLANARALLYMODELEMENTALELDER",
    name:"Elemental (Elder) (10)",
    button_name:"Elemental (Elder) (10)",
    shotsUsed:"10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Veteran"
  },
  {
    id:"POWERSUMMONPLANARALLYMODHELLNESSIAN",
    name:"Hell Hound, Nessian (10)",
    button_name:"Hell Hound, Nessian (10)",
    shotsUsed:"10",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Veteran"
  },
  {
    id:"POWERSUMMONPLANARALLYMODOGREMAGE",
    name:"Ogre Mage (8)",
    button_name:"Ogre Mage (8)",
    shotsUsed:"8",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Veteran"
  },
  {
    id:"POWERSUMMONPLANARALLYMODRAKSHASA",
    name:"Rakshasa (7)",
    button_name:"Rakshasa (7)",
    shotsUsed:"7",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Veteran"
  },
  // ----------------Heroic
  {
    id:"POWERSUMMONPLANARALLYMODDEMONBALOR",
    name:"Demon, Balor (12)",
    button_name:"Demon, Balor (12)",
    shotsUsed:"12",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Heroic"
  },
  {
    id:"POWERSUMMONPLANARALLYMODDEVILFIEND",
    name:"Devil, Pit Fiend (13)",
    button_name:"Devil, Pit Fiend (13)",
    shotsUsed:"13",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Heroic"
  },
  {
    id:"POWERSUMMONPLANARALLYMODNIGHTHAG",
    name:"Night Hag (9)",
    button_name:"Night Hag (9)",
    shotsUsed:"9",
    and_selector: [
      { selector_type: "item_type", selector_value:"power" }, 
      { selector_type: "item_name", selector_value: "Summon Planar Ally" }
    ],
    group: "Rank: Heroic"
  }
  
];