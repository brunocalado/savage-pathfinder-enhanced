// CUSTOMIZE
const compendiumLabel = 'Savage Pathfinder Gear'; // YOU CAN REPLACE THIS FOR ANOTHER COMPENDIUM LABEL
const craftFolder = 'Craft - Enchantments';
const suffix = '🔮';
//const extraGear = []; // You can add items filtered to the search box. Example: you will not find Arrow, you can add 'Arrow', it will try to find it.

const version = 'v0.5';

// RULES
/*
  type: 'weapon', 'shield', 'armor'
*/
const enchants = {};
enchants.accurate = {
  name: "Accurate",
  quality: 1,
  description: "The weapon grants the user +1 in the skill required to use it (Fighting, Shooting, or Athletics).",
  cost: "Price: 4,000 gp. Craft: Boost trait, 2,000 gp.",
  price: 4000,
  type: "weapon"
};
enchants.bane = {
  name: "Bane",
  quality: 1,
  description: "When used against a specific type of creature (dwarf, goblin, elemental, etc), a bane weapon has +2 AP and its damage die increases one type.",
  cost: "Price: 3,000 gp. Craft: Smite, 1,500 gp.",
  price: 3000,
  type: "weapon"
}; 
enchants.brutal = {
  name: "Brutal",
  quality: 2,
  description: "The weapon is considered a Heavy Weapon.",
  cost: "Price: 5,000 gp. Craft: Smite, 2,500 gp.",
  price: 5000,
  type: "weapon"
}; 
enchants.damaging = {
  name: "Damaging",
  quality: 1,
  description: "The weapon’s damage increases by +1.",
  cost: "Price: 3,000 gp. Craft: Smite, 1,500 gp.",
  price: 3000,
  type: "weapon"
};
enchants.dancing = {
  name: "Dancing",
  quality: 4,
  description: "Melee weapon only. The wielder can command the weapon to dance once per encounter as a limited free action. It animates immediately, attacking as a character for up to five rounds. It uses its master’s Action Card and attack skill, and rolls two of its normal damage dice for damage. The weapon can fly at Pace 10 and counts as an ally for the Gang Up bonus.",
  cost: "Price: 20,000 gp. Craft: Fly, 10,000 gp.",
  price: 20000,
  type: "weapon"
}; 
enchants.distance = {
  name: "Distance",
  quality: 1,
  description: "Ranged weapons only. Decrease any Range penalties by one when using this weapon.",
  cost: "Price: 2,000 gp. Craft: Farsight, 1,000 gp.",
  price: 2000,
  type: "weapon"
}; 
enchants.elemental = {
  name: "Elemental",
  quality: 1,
  description: "The weapon causes damage with an energy Trapping—acid, cold, electricity, fire, or sonic (chosen by creator).",
  cost: "Price: 2,000 gp. Craft: Damaging power with the appropriate energy Trapping, 1,000 gp.",
  price: 2000,
  type: "weapon"
}; 
enchants.keen = {
  name: "Keen",
  quality: 1,
  description: "The weapon is exceptionally sharp, giving it Armor Piercing +2.",
  cost: "Price: 3,000 gp. Craft: Bolt, 1,500 gp.",
  price: 3000,
  type: "weapon"
};   
enchants.light = {
  name: "Light",
  quality: 1,
  description: "The weapon casts light in a Medium Blast Template. The user activates the illumination with her will as a free action.",
  cost: "Price: 2,000 gp. Craft: Light, 1,000 gp.",
  price: 2000,
  type: "weapon"
}; 
enchants.returning = {
  name: "Returning",
  quality: 1,
  description: "Thrown weapons only. The weapon returns to its user’s hand at the end of her turn.",
  cost: "Price: 3,000 gp. Craft: Conjure item, 1,500 gp.",
  price: 3000,
  type: "weapon"
}; 
enchants.speed = {
  name: "Speed",
  quality: 3,
  description: "If a melee weapon, the user gains the Frenzy Edge. For a ranged weapon, the user gains the Rapid Shot Edge. If the weapon can be used either way, the choice must be made as the weapon is enchanted.",
  cost: "Price: 16,000 gp. Craft: Speed, 8,000 gp.",
  price: 16000,
  type: "weapon"
}; 
enchants.throwing = {
  name: "Throwing",
  quality: 1,
  description: "Melee weapon only. The weapon can be thrown using Athletics (throwing). Its Range is 4/8/16.",
  cost: "Price: 3,000 gp. Craft: Boost Trait, 1,500 gp.",
  price: 3000,
  type: "weapon"
}; 
enchants.vicious = {
  name: "Vicious",
  quality: 2,
  description: "Melee weapon only. If the wielder hits with a raise his damage increases by +4 (in addition to any bonus damage), but he must make a Vigor roll or be Shaken.",
  cost: "Price: 5,000 gp. Craft: Smite, 2,500 gp.",
  price: 5000,
  type: "weapon"
};  
enchants.vorpal = {
  name: "Vorpal",
  quality: 5,
  description: "Blades only. A vorpal weapon ignores penalties for Called Shots to the head. Anyone Incapacitated by a vorpal blade is decapitated!",
  cost: "Price: 50,000 gp. Craft: Smite, 25,000 gp.",
  price: 50000,
  type: "weapon"
};
//armor/shield
enchants.aegis = {
  name: "Aegis",
  quality: 1,
  description: "Armor only. Increases the protective bonus of the armor by +1.",
  cost: "Price: 3,000 gp. Craft: Protection, 1,500 gp.",
  price: 3000,
  type: "armor"
};
enchants.animated = {
  name: "Animated",
  quality: 3,
  description: "Shield only. Once per encounter, an animated shield can be loosed to defend its wielder. For the next three rounds, it hovers near its owner, following him if he moves and granting its Parry and cover bonus as usual without needing to be held. Its type still applies for purposes of Armor Interference or Restriction.",
  cost: "Price: 10,000 gp. Craft: Fly, 5,000 gp.",
  price: 10000,
  type: "shield"
};
enchants.arrowdeflection = {
  name: "Arrow Deflection",
  quality: 1,
  description: "Shield only. Ranged attacks against the bearer suffer an additional −1 penalty, regardless of the attacker's position (front, rear, etc).",
  cost: "Price: 3,000 gp. Craft: Deflection, 1,500 gp.",
  price: 3000,
  type: "shield"
};
enchants.deflecting = {
  name: "Deflecting",
  quality: 1,
  description: "Shield only. Increase the shield’s Parry bonus increased by +1.",
  cost: "Price: 4,000 gp. Craft: Deflection, 2,000 gp.",
  price: 4000,
  type: "shield"
};
enchants.energyresistance = {
  name: "Energy Resistance",
  quality: 1,
  description: "Armor or shield. Grants environmental resistance against a single energy type, determined at creation, to a piece of armor or a shield. Damage from that source is reduced by 4 when the armor is worn, and the hero adds +4 when resisting any effect tied to that element. A leather jerkin of energy resistance (Cold), for example, helps its wearer avoid Fatigue from exposure (see Hazards on page 151) and damage from any attack with a Trapping of cold, ice, frost, etc.",
  cost: "Price: 2,000 gp. Craft: Environmental protection, 1,000 gp.",
  price: 2000,
  type: "shield,armor"
};
enchants.etherealness = {
  name: "Etherealness",
  quality: 2,
  description: "Armor only. On command, the wearer of this armor becomes ethereal, gaining minor intangibility. The character can remain ethereal for as long as desired, but once he returns to normal, he cannot use this ability again for 24 hours.",
  cost: "Price: 49,000 gp. Craft: Intangibility, 24,500 gp.",
  price: 49000,
  type: "armor"
};
enchants.fortification = {
  name: "Fortification",
  quality: 2,
  description: "Armor only. Fortified armor is more likely to turn away a lethal blow. The wearer gains a free reroll on Soak rolls.",
  cost: "Price: 5,000 gp. Craft: Boost Trait, 2,500 gp.",
  price: 5000,
  type: "armor"
};
enchants.glamered = {
  name: "Glamered",
  quality: 0,
  description: "Armor only. Upon command, as a free action, a piece of glamered armor changes shape and appearance to assume the form of a normal piece of clothing. The armor retains all of its properties when it is so disguised.",
  cost: "Price: 900 gp. Craft: Illusion, 450 gp.",
  price: 900,
  type: "armor"
};
enchants.reflecting = {
  name: "Reflecting",
  quality: 4,
  description: "Shield only. The shield’s surface is completely reflective. Once per day, the wielder can reflect any power that affects her by making a Spirit roll (at −2 if the casting roll got a raise). If successful the caster suffers the full effects of the power as if he had been the original target.",
  cost: "Price: 16,000 gp. Craft: Dispel, 8,000 gp.",
  price: 16000,
  type: "shield"
};
enchants.spellresistance = {
  name: "Spell Resistance",
  quality: 4,
  description: "Armor only. The wearer gains the benefits of minor arcane protection.",
  cost: "Price: 16,000 gp. Craft: Arcane protection, 8,000 gp.",
  price: 16000,
  type: "shield"
};

//advanced swpf - armor/shield
enchants.champion = {
  name: "Champion",
  quality: 1,
  description: "Armor only. This armor property only works for good creatures with the challenge ability (such as cavaliers) or the smite evil ability (such as paladins). The wearer uses one of these abilities, the selected target reduces its melee attacks against the wearer by –2.",
  cost: "Cost: 4,000 gp. Craft: Deflection.",
  price: 4000,
  type: "armor"
};
enchants.determination = {
  name: "Determination",
  quality: 2,
  description: "A shield or armor with this property helps its owner fight on against seemingly impossible odds. She gains the Nerves of Steel Edge when wearing the armor or bearing the shield.",
  cost: "Cost: 30,000 gp. Craft: Healing.",
  price: 30000,
  type: "shield,armor"
};
enchants.jousting = {
  name: "Jousting",
  quality: 1,
  description: "Armor only. This suit of armor helps its wearer remain mounted and in control of his mount. She adds +2 to Riding rolls.",
  cost: "Cost: 3,750 gp. Craft: boost Trait.",
  price: 3750,
  type: "armor"
};
enchants.righteous = {
  name: "Righteous",
  quality: 2,
  description: "Armor only. Armor with this property is often engraved or enameled with religious symbols. Once per day, as a limited action, the wearer may increase his Size by +3 Each increase in Size grants the target a onestep increase to Strength and 1 point of Toughness. Righteous armor does not work for Evil creatures.",
  cost: "Cost: 27,000 gp. Craft: Boost Trait, growth.",
  price: 27000,
  type: "armor"
};
//weapons
enchants.allying = {
  name: "Allying",
  quality: 1,
  description: "Melee Only. The weapon grants the wielder the Formation Fighter Edge while it is being used.",
  cost: "Cost: 4,000 gp. Craft: Illusion.",
  price: 4000,
  type: "weapon"
};
enchants.dueling = {
  name: "Dueling",
  quality: 2,
  description: "1-handed Melee Only. While drawn, a dueling weapon grants the character the Quick Edge. The bearer also gets a free reroll when attempting a called shot on a held item.",
  cost: "Cost: 14,000 gp. Craft: Boost trait.",
  price: 14000,
  type: "weapon"
};
enchants.huntsman = {
  name: "Huntsman",
  quality: 1,
  description: "A huntsman weapon helps its wielder locate and capture quarry. While it's in hand, he adds +1 to Survival (Tracking) rolls.",
  cost: "Cost: 4,000 gp. Craft: Boost trait.",
  price: 4000,
  type: "weapon"
};
enchants.transformative = {
  name: "Transformative",
  quality: 1,
  description: "Melee Only. A transformative weapon alters its shape at its wielder’s command, becoming any other melee weapon of the same general shape and handedness. For example, a transformative longsword can transform into any other one-handed melee weapon, such as a scimitar, flail, or trident; but not a great axe. The weapon retains all of its abilities, including enhancements and weapon properties, except those prohibited by its current shape. For example, a keen transformative weapon functions normally in the form of a piercing or slashing weapon, but loses it when in the shape of a bludgeoning weapon. When unattended, a transformative weapon reverts to its true shape.",
  cost: "Cost: 10,000 gp. Craft: Create Object.",
  price: 10000,
  type: "weapon"
};

/* enchantments.
TODO
- FLAGs
1. Choose the item you want, next
2. Pick the enchantments (checkbox)
3. create the item, add craft notes, update flags

*/

const icon = "icons/weapons/swords/sword-flanged-lightning.webp";
let coreRules = false;
if (game.modules.get("swpf-core-rules")?.active) { coreRules = true; }

main();

async function main() {
  const items = await getCompendiumEntities( compendiumLabel ); 
  
  let itemsList = '';
  for (item of items ) {
    itemsList += `<option value="${item.name}">"${item.name}"</option>`
  }
  
  let template = `

      <h2>Instructions</h2>
      <p>Choose the item in the field.</p>
      
      <table>
      <tbody>
      
      <tr align=center>
      <td>
          <b>Gear List</b> 
      </td>  
      </tr>
      
      <tr align=center>
      <td>
          <input list="aeTypes" id="aeType" name="aeType">
          <datalist id="aeTypes">
            ${itemsList}
          </datalist>        
      </td>   
      </tr>

      </tbody>
      </table>      
  `;
  
  new Dialog({
    title: `Enchantments for Savage Pathfinder - ${version}`,
    content: template,
    buttons: {
      ok: {
        label: `<i class="fas fa-arrow-alt-circle-right"></i> Next`,
        callback: async (html) => {
          let itemLabel = html.find("#aeType")[0].value;
          
          let item = await getItem( compendiumLabel, itemLabel );
          if(!item) {
            ui.notifications.warn('You must select an item!');
            return;
          }
          selectEnchantmentsForWeapon( item )
        // END CALLBACK  
        }
      }      
    },
    default: "ok"
  }).render(true);
}

// -------------------------------------------------------
// Functions
async function getCompendiumEntities( compendiumLabel='Savage Pathfinder Gear' ) {
  const compendium = await game.packs.find(p=>p.metadata.label==compendiumLabel);
  if (!compendium) {
    console.warn( "Macros of SWADE: The compendium couldn't be found." );
    return;
  }
  let items = await compendium.getDocuments();
  items = await items.filter(p=> (p.type=='armor' || p.type=='weapon'|| p.type=='shield') && p.name!="#[CF_tempEntity]" );
  return items;
}  

async function getItem( compendiumLabel='Savage Pathfinder Gear', itemLabel ) {
  let items = await getCompendiumEntities( compendiumLabel );
  return items.find(p=> p.name==itemLabel);
}    

async function selectEnchantmentsForWeapon( item ) {
  let message='';
  for (const enchant of Object.entries(enchants)) {
    if ( !enchant[1].type.includes(item.type) ) continue;
    message += `<tr>
      <td class="tg-0lax"><input type="checkbox" id="${enchant[0]}" name="${enchant[0]}"></td>
      <td class="tg-0lax">
        <details>
          <summary><b>${enchant[1].name}</b> <b style="color:red;">(${enchant[1].quality}):</b></summary>
          <p>${enchant[1].description}</p>
          <p>${enchant[1].cost}</p>
        </details>
      </td>
    </tr>`;
    console.log(`<input type="checkbox" id="${enchant[0]}" name="${enchant[0]}">`);
  }

  let template = `
    <style type="text/css">
      .tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;width: 100%}
      .tg td{border-color:black;border-style:solid;border-width:1px;
        overflow:hidden;padding:0px 0px;word-break:normal;}
      .tg th{border-color:black;border-style:solid;border-width:1px;
        font-weight:normal;overflow:hidden;padding:0px 0px;word-break:normal;}
      .tg .tg-0lax{text-align:left;vertical-align:middle}    
    </style>

    <table class="tg">
    <colgroup>
       <col span="1" style="width: 20%;">
       <col span="1" style="width: 80%;">
    </colgroup>    
    
    <tbody>
      <tr>
        <td class="tg-0lax" style="text-align:center; vertical-align: middle;"><img src="${item.img}"></td>
        <td class="tg-0lax"><span style="text-align:center; vertical-align: middle; margin-left: 10px;">${item.name}</span></td>
      </tr>
    </tbody>
    </table>
    
    <table class="tg">
    <colgroup>
       <col span="1" style="width: 8%;">
       <col span="1" style="width: 92%;">
    </colgroup>    
    
    <tbody>
      <tr>
        <td colspan="2" style="text-align: center;"><p><b>Enchantments (click the enchantment to expand)</b></p></td>
      </tr>
        
      ${message}
      
    </tbody>
    </table>
  `;
  
  new Dialog({
    title: `Enchantments for Savage Pathfinder - ${version}`,
    content: template,
    buttons: {
      ok: {
        label: `<i class="fas fa-magic"></i> Craft`,
        callback: async (html) => {
          selectedEnchantments=[];
          for (const enchant of Object.entries(enchants)) {
            const checkboxValue = html.find( `[name="${enchant[0]}"]` )[0];
            if ( checkboxValue ) {
              if ( checkboxValue.checked ) selectedEnchantments.push(enchant[0]); 
            }
          }
          enchantItem(selectedEnchantments, item);
        // END CALLBACK  
        }
      }      
    },
    default: "ok"
  }).render(true, {height: "800px"});  
  //}).render(true, {height: "auto"});  
}


async function enchantItem( selectedEnchantments, item ) {
  const itemData = await forgeMasterwork(item.toObject());
  let description='';
  // CONFIG THE ITEM
  itemData.ownership.default = 2;
  itemData.name = `${suffix} ${itemData.name}`;  

  let quality=0, price=0;
  description = `<div class="swpf-core"><h2>Enchantment Notes</h2><ul>`;      
  for (const enchant of Object.entries(enchants)) {
    if (selectedEnchantments.includes( enchant[0] )) {
      description += `
        <li><b>${enchant[1].name}</b> <b style="color:red;">(${enchant[1].quality})</b>: ${enchant[1].description} (${enchant[1].cost})</li>
      `;
      quality+=enchant[1].quality;
      price+=enchant[1].price;
    }
  }
  description += `</ul><p><b>Total Quality:</b> <b style="color:red;">${quality}</b>${quality>5 ? ' <b>MAX QUALITY EXCEEDED</b>':''}</p>`;
  description += `<p><b>Total Enchantment Cost:</b> <b style="color:red;">${price}</b></p>`;

  description += `</div>`;
  itemData.system.price = itemData.system.price + price;    
  itemData.system.description = description + itemData.system.description;
  // CREATE  
  const forgedItem = await Item.createDocuments([itemData]);                
  game.items.get(forgedItem[0].id).sheet.render(true);
}

// v0.3
async function forgeMasterwork( data ) {
  let description = '';
  if ( data.type=='shield') {
    const minStr = parseInt( data.system.minStr.toLowerCase().replace('d', '') );
    if (minStr>=4) {
      data.system.minStr = `d${minStr-2}`;
    }
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>Armor and shields reduce the Minimum Strength requirement by one die type, to a minimum of d4.</p>          
    <p>Shields cost an extra 300 gp, while armor costs an extra 150 gp per piece.</p>          
    </div>`;     
    data.system.description = description + data.system.description;
    data.system.price = data.data.price + 300;    
  } else if ( data.type=='armor') {
    const minStr = parseInt( data.system.minStr.toLowerCase().replace('d', '') );
    if (minStr>=4) {
      data.system.minStr = `d${minStr-2}`;
    }
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>Armor and shields reduce the Minimum Strength requirement by one die type, to a minimum of d4.</p>          
    <p>Shields cost an extra 300 gp, while armor costs an extra 150 gp per piece.</p>          
    </div>`;     
    data.system.description = description + data.system.description;
    data.system.price = data.data.price + 150;       
  } else if ( data.type=='weapon') {
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>+1 AP. Masterwork melee and ranged weapons add 300 gp to the cost.</p>          
    </div>`;     
    data.system.description = description + data.system.description;
    data.system.price = data.system.price + 300;    
    data.system.ap = parseInt(data.system.ap) + 1;    
  } else if (data.type=='shield') {
    const minStr = parseInt( data.system.minStr.toLowerCase().replace('d', '') );
    if (minStr>=4) {
      data.system.minStr = `d${minStr-2}`;
    }
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>Armor and shields reduce the Minimum Strength requirement by one die type, to a minimum of d4.</p>          
    <p>Shields cost an extra 300 gp, while armor costs an extra 150 gp per piece.</p>          
    </div>`;     
    data.system.description = description + data.system.description;
    data.system.price = data.system.price + 150;    
  } else if (data.type=='gear') {
    description = `<div class="swpf-core">
    <h2>Craft Notes</h2>
    <p>Masterwork arrows, bolts, or other ammunition subtract 1 point of Range penalty at Long or Extreme Range, and cost six additional gold pieces per unit.</p>          
    <p>Masterwork ammunition loses its bonus after use even if recovered.</p>          
    </div>`;     
    data.system.description = description + data.system.description;
    data.system.price = data.system.price + 6;    
  }
  
  const folder = await getFolder(craftFolder, 'Item');
  data.folder = folder;
  return data;
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

