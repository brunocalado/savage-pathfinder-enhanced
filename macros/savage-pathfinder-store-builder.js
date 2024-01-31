// CUSTOMIZE
const compendiumID = 'swpf-core-rules.swpf-gear'; // YOU CAN REPLACE THIS FOR ANOTHER COMPENDIUM LABEL
const compendiumIDAPG = 'swpf-apg.swpf-apg-gear'; // YOU CAN REPLACE THIS FOR ANOTHER COMPENDIUM LABEL
const folderName = 'Stores - Savage Pathfinder';
const fantasyShopNames = [   "Arcane Trinkets Emporium",   "Dragon's Hoard Treasures",   "Enchanted Blades & Brews",   "Mystic Rune Relics",   "Wizard's Wonders Bazaar",   "Ethereal Elixirs & Potions",   "Sorcerer's Spellbound Scrolls",   "Goblin's Gambit Gaming",   "Elven Enchantments Outlet",   "Dwarven Forge Armory",   "Phoenix Feathers Quills & Ink",   "Celestial Sweets & Confections",   "Harmony Harps & Instruments",   "Starlight Stables & Mounts",   "Moonlit Mysteries Library",   "Kobold's Curiosities Corner",   "Rogue's Rendezvous Supplies",   "Centaur's Celestial Attire",   "Astral Alchemy Apothecary",   "Oracle's Orb Insight",   "Beholder's Books & Tomes",   "Gryphon's Grimoire & Artifacts",   "Wyvern's Wisdom Emporium",   "Pixie's Potent Herbs",   "Sword & Staff Smithy",   "Lycanthrope Leatherworks",   "Minotaur's Maze Maps",   "Treant's Timbercrafts",   "Necromancer's Nectar Spirits",   "Hobbit's Hearth Homegoods",   "Feywild Florals & Gardens",   "Banshee's Beauty Boutique",   "Griffin's Gourmet Provisions",   "Elemental Essence Essences",   "Gorgon's Goldsmith Guild",   "Manticore's Mane Salon",   "Satyr's Song & Dance Studio",   "Basilisk's Brew Potions",   "Medusa's Mirrors & Vanity",   "Giant's Gear Armaments",   "Witch's Whimsical Wearables",   "Pegasus' Flight Supplies",   "Goblin Market Goods",   "Djinn's Delightful Decanters",   "Thunderhawk Tack & Saddlery",   "Cursed Coin Curio Shop",   "Vampire's Velvet Vestments",   "Druid's Dreamcatcher & Totems",   "Lich's Luminous Lanterns",   "Sphinx's Scribe Scrolls",   "Chimera's Charms & Trinkets",   "Moonstone Magic Gems",   "Troll's Totem Tattoo Parlor",   "Fire Elemental Forge",   "Ice Phoenix Artic Crafts",   "Mimic's Masterful Mimicry",   "Unicorn's Unique Emporium",   "Warp Weaver's Warp Zone",   "Phoenix Feather Quills & Ink",   "Kraken's Krystal Emporium",   "Doppleganger Disguise Depot",   "Yeti's Yarn & Woolworks",   "Gnoll's Gourmet Grub",   "Archmage's Arcane Accessories",   "Silver Serpent Silverware",   "Ghostly Goblet Tavern",   "Triton's Treasure Trove",   "Doppelganger's Delights",   "Dryad's Dancing Drapes",   "Cyclops' Crafts & Creations",   "Orc's Oddities Outlet",   "Harpy's Harmonious Harps",   "Genie's Genial Jinn Goods",   "Elemental Essence Emporium",   "Mummy's Mystical Mementos",   "Bard's Ballad Boutique",   "Cerberus Ceramics",   "Skeleton's Skeletal Sundries",   "Dwarven Delve Decor",   "Vampire's Velvet Vesture",   "Wraith's Wondrous Weavings",   "Wyrm's Wardrobe Wear",   "Lizardfolk Leatherworks",   "Cavern Crawler Confections",   "Blink Dog's Bazaar",   "Centaur's Celestial Crafts",   "Zombie's Zenith Zen",   "Kobold's Kurious Kollectibles",   "Treant's Timber Treasures",   "Siren's Seafood Stand",   "Ogre's Odd Contraptions",   "Harpy's Herbal Haven",   "Merman's Marine Market",   "Troll's Tasty Treats" ]; // made with IA
/* 
TODO
*/

const version = 'v0.1';
const coreModule = game.modules.get("swpf-core-rules")?.active;
const apgModule = game.modules.get("swpf-apg")?.active;

if (!coreModule) {
  ui.notifications.warn('You need the Savage Pathfinder Core Rules module!');
  return;
}

async function main() {  
  let template = `

      <h2>Instructions</h2>
      <p>Choose the location type. This macro is inspired by page 206 from the Core Book.</p>
      
      <table>
      <tbody>
      
      <tr align=center>
      <td>
          <b>Location Type</b> 
      </td>  
      </tr>
      
      <tr align=center>
      <td>
        <select id="aeType" name="aeType">
          <option value="village">Village</option>
          <option value="town">Town</option>
          <option value="city">City</option>
          <option value="largecity">Large City</option>
        </select>      
      </td>   
      </tr>

      </tbody>
      </table>      

      </br>   
  `;
  
  new Dialog({
    title: `Store Builder for Savage Pathfinder - ${version}`,
    content: template,
    buttons: {
      ok: {
        label: `<i class="fas fa-magic"></i> Create Store`,
        callback: async (html) => {
          let storeType = html.find("#aeType")[0].value;
          console.log(storeType)
          locationToArray(storeType);
		  
		  
		  
          /*
          let item = await getItem( compendiumLabel, itemLabel );
          if(!item) {
            ui.notifications.warn('You must select an item!');
            return;
          }*/          
          //game.items.get(forgedItem[0].id).sheet.render(true);
        // END CALLBACK  
        },
      }
    },
    default: "ok"
  }).render(true);
}

main();

// -------------------------------------------------------
// Functions
// v0.1
async function getCompendiumEntities( compendiumIDarg, category ) {
  const compendium = await game.packs.find(p=>p.metadata.id==compendiumIDarg);
  
  if (!compendium) {
    console.warn( "The compendium couldn't be found." );
    return;
  }
  const AllItems = await compendium.getDocuments();
  const items = await AllItems.filter(p=> (p.system.category==category) );
  return items;
}

async function getItem( compendiumIDarg, itemName ) {
  const compendium = await game.packs.find(p=>p.metadata.id==compendiumIDarg);

  if (!compendium) {
    console.warn( "The compendium couldn't be found." );
    return;
  }
  
  const AllItems = await compendium.getDocuments();
  const items = await AllItems.find(p=> (p.name==itemName) );
  return items;
}    

// Folder v0.1
async function getFolder(folderName, folderType) {
  let folder;
  if( game.folders.filter(f => f.type === folderType).find(f => f.name === folderName)===undefined) {
    folder = await Folder.create( {
      name: folderName,
      type: folderType
    } );
  } else {
    folder = game.folders.find( f => f.name === folderName);
  }
  return folder;
} 

// 
async function locationToArray(storeType) {
  let potionsAndScrolls = 0;
  let potions = 0;
  let scrolls = 0;
  let healingPotions = 0;
  let others = 0;
  
  let armorWeapons = 0;
  let rings = 0;
  let rodsStaves = 0;
  let wands = 0;
  let wondrousItems = 0;
  
  let finalItemList = [];
  
  switch(storeType) {
    case 'village':
      potionsAndScrolls = Math.max( 0, randomInt(1, 6) - 2 );
      potions = dividePotionsAndScrolls(potionsAndScrolls)[0];
      scrolls = dividePotionsAndScrolls(potionsAndScrolls)[1];
      healingPotions = randomInt(1, 4);
      others =  Math.max( 0, randomInt(1, 4) - 2 );      
      break;
    case 'town':
      potionsAndScrolls = Math.max( 0, randomInt(1, 6) - 1 );
      potions = dividePotionsAndScrolls(potionsAndScrolls)[0];
      scrolls = dividePotionsAndScrolls(potionsAndScrolls)[1];
      healingPotions = randomInt(1, 4) + 1;
      others =  Math.max( 0, randomInt(1, 6) - 2 );   
      break;
    case 'city':
      potionsAndScrolls = Math.max( 0, randomInt(1, 6) );
      potions = dividePotionsAndScrolls(potionsAndScrolls)[0];
      scrolls = dividePotionsAndScrolls(potionsAndScrolls)[1];
      healingPotions = randomInt(1, 6);
      others =  Math.max( 0, randomInt(1, 6) - 1 );   
      break;
    case 'largecity':
      potionsAndScrolls = Math.max( 0, randomInt(1, 6) + 1 );
      potions = dividePotionsAndScrolls(potionsAndScrolls)[0];
      scrolls = dividePotionsAndScrolls(potionsAndScrolls)[1];
      healingPotions = randomInt(1, 6) + 1;
      others =  Math.max( 0, randomInt(1, 6) );   
      break;        
    default:
      console.log('Nenhuma das opções foi escolhida');
  } // END switch
  
  // Get others amount
  for (let i = 0; i < others; i++) {
    let num = randomInt(1, 20);  
    if (num >= 1 && num <= 11) {          // 'Armor & Weapons'
      armorWeapons += 1; 
    } else if (num >= 12 && num <= 13) {  // 'Rings'
      rings += 1; 
    } else if (num >= 14 && num <= 16) {  // 'Rods & Staves'
      rodsStaves += 1; 
    } else if (num >= 17 && num <= 18) {  // 'Wands'
      wands += 1; 
    } else if (num >= 19 && num <= 20) {  // 'Wondrous Items'
      wondrousItems += 1; 
    }                
  }  
  debug(potionsAndScrolls, potions, scrolls, healingPotions, others, armorWeapons, rings, rodsStaves, wands, wondrousItems); // DEBUG
  
  // Get potions
  //finalItemList
  let tempList = [];
  let myMessage = '';
  
  // potions  
  tempList = await getCompendiumEntities( compendiumID, 'Potions' );  
  finalItemList = [...finalItemList, ...getRandomItems(tempList, potions) ];    
  if (finalItemList.length>0) {
    myMessage = myMessage + `<h2>Potions</h2>`;
    for (let i = 0; i < finalItemList.length; i++) {
      myMessage = myMessage + `<p>@UUID[${finalItemList[i].uuid}]{${finalItemList[i].name}}</p>`;
    }
  }
  
  // Get scrolls
  finalItemList = [];  
  tempList = await getCompendiumEntities( compendiumID, 'Scrolls' );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, scrolls) ];  
  if (finalItemList.length>0) {
    myMessage = myMessage + `<h2>Scrolls</h2>`;
    for (let i = 0; i < finalItemList.length; i++) {
      myMessage = myMessage + `<p>@UUID[${finalItemList[i].uuid}]{${finalItemList[i].name}}</p>`;
    }
  }
  
  // Get healingPotions
  tempList = []
  finalItemList = [];  
  tempList.push( await getItem( compendiumID, 'Potion of Major Healing' ) );
  tempList.push( await getItem( compendiumID, 'Potion of Minor Healing' ) );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, healingPotions) ];    
  if (finalItemList.length>0) {
    myMessage = myMessage + `<h2>Healing Potions</h2>`;  
    for (let i = 0; i < finalItemList.length; i++) {
      myMessage = myMessage + `<p>@UUID[${finalItemList[i].uuid}]{${finalItemList[i].name}}</p>`;
    }
  }
  
  // // Get Others
  // armorWeapons
  finalItemList = [];  
  tempList = await getCompendiumEntities( compendiumID, 'Armor' );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, armorWeapons) ];    
  tempList = await getCompendiumEntities( compendiumID, 'Armor and Shields' );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, armorWeapons) ];      
  tempList = await getCompendiumEntities( compendiumID, 'Melee Weapons' );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, armorWeapons) ];      
  tempList = await getCompendiumEntities( compendiumID, 'Ranged Weapons' );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, armorWeapons) ];        
  if (finalItemList.length>0) {
    myMessage = myMessage + `<h2>Armor and Weapons</h2>`;
    for (let i = 0; i < finalItemList.length; i++) {
      myMessage = myMessage + `<p>@UUID[${finalItemList[i].uuid}]{${finalItemList[i].name}}</p>`;
    }
  }
  
  // rings
  finalItemList = [];  
  tempList = await getCompendiumEntities( compendiumID, 'Rings' );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, rings) ];      
  if (finalItemList.length>0) {
    myMessage = myMessage + `<h2>Rings</h2>`;
    for (let i = 0; i < finalItemList.length; i++) {
      myMessage = myMessage + `<p>@UUID[${finalItemList[i].uuid}]{${finalItemList[i].name}}</p>`;
    }  
  }
  // rodsStaves
  finalItemList = [];  
  tempList = await getCompendiumEntities( compendiumID, 'Rods' );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, rodsStaves) ];      
  tempList = await getCompendiumEntities( compendiumID, 'Staves' );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, rodsStaves) ];      
  if (finalItemList.length>0) {
    myMessage = myMessage + `<h2>Rods and Staves</h2>`;  
    for (let i = 0; i < finalItemList.length; i++) {
      myMessage = myMessage + `<p>@UUID[${finalItemList[i].uuid}]{${finalItemList[i].name}}</p>`;
    }  
  }
  // wands
  finalItemList = [];  
  tempList = await getCompendiumEntities( compendiumID, 'Wands' );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, wands) ];      
  if (finalItemList.length>0) {
    myMessage = myMessage + `<h2>Wands</h2>`;  
    for (let i = 0; i < finalItemList.length; i++) {
      myMessage = myMessage + `<p>@UUID[${finalItemList[i].uuid}]{${finalItemList[i].name}}</p>`;
    }  
  }
  
  // wondrousItems
  finalItemList = [];  
  tempList = await getCompendiumEntities( compendiumID, 'Wonderous Items' );
  finalItemList = [...finalItemList, ...getRandomItems(tempList, wondrousItems) ];     
  /*if (apgModule) {
    tempList = await getCompendiumEntities( compendiumID, 'Wondrous Items' );
    finalItemList = [...finalItemList, ...getRandomItems(tempList, wondrousItems) ];    
  }*/
  if (finalItemList.length>0) {
    myMessage = myMessage + `<h2>Wonderous Items</h2>`;  
    for (let i = 0; i < finalItemList.length; i++) {
      myMessage = myMessage + `<p>@UUID[${finalItemList[i].uuid}]{${finalItemList[i].name}}</p>`;
    }  
  }
      
  console.log(myMessage) // debug
  await createJournal(myMessage);
    
} // END locationToArray 

//
function dividePotionsAndScrolls(potionsAndScrolls) {
  if (potionsAndScrolls < 0) {
    return [0, 0];
  }

  let potions, scrolls;

  if (potionsAndScrolls % 2 === 0) {
    potions = scrolls = potionsAndScrolls / 2;
  } else {
    potions = Math.ceil(potionsAndScrolls / 2);
    scrolls = potionsAndScrolls - potions;
  }

  return [ potions, scrolls ];
}

// RandomInt
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// RandomInt
function debug(potionsAndScrolls, potions, scrolls, healingPotions, others, armorWeapons, rings, rodsStaves, wands, wondrousItems) {
  console.log('===============================');  
  console.log('potionsAndScrolls: ' + potionsAndScrolls);
  console.log('potions: ' + potions);
  console.log('scrolls: ' + scrolls);
  console.log('healingPotions: ' + healingPotions);
  console.log('others: ' + others);  
  console.log('---------------------------------');  
  console.log('armorWeapons: ' + armorWeapons);  
  console.log('rings: ' + rings);  
  console.log('rodsStaves: ' + rodsStaves);  
  console.log('wands: ' + wands);  
  console.log('wondrousItems: ' + wondrousItems);  
  console.log('===============================');  
}

//
function getRandomItems(arr, numItems) {
    let result = [];
    for(let i = 0; i < numItems; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        result.push(arr[randomIndex]);
    }
    return result;
}

async function createJournal(myMessage) {
  const journalName = fantasyShopNames[randomInt(0, 99)];
  let journalData = {};
 
  // Folder
  /*
  const createdFolder = await Folder.createDocuments([{name: folderName, type: "JournalEntry"}]);
  const folderID = createdFolder[0].id;    
  */
  const folder = await getFolder(folderName, 'JournalEntry');
  
  // Data
  journalData.journalName = journalName;
  journalData.folderID = folder.id;
  let pages = [];
  
  pages.push(
    {
      "name": journalName,
      "type": "text",
      "title": {
        "show": true
      },
      "text": {
        "content": myMessage
      },        
    }    
  );
    
  const finalJournal = await JournalEntry.create({
    name: journalData.journalName,
    folder: journalData.folderID,
    pages: pages      
  });      
  finalJournal.sheet.render(true);
} // END


