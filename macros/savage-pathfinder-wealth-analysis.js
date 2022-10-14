/* Wealth Analysis for Savage Pathfinder 
source: 
icon: icons/commodities/currency/coins-plain-stack-gold-yellow.webp

TODO
*/

const version = 'v0.5';
const icon = "icons/commodities/currency/coins-plain-stack-gold-yellow.webp";

if ( canvas.tokens.controlled[0]===undefined ) {
  ui.notifications.error("Please, select some tokens."); // No Token is Selected
} else {
  main();
}

function main() {
  let tokens = canvas.tokens.controlled;

  /* Show actual xp points*/
  let currentHeroPointsList = '';
  for (var tokenD of tokens) {
    const character = game.actors.get(tokenD.actor.id);
    const rank = character.system.advances.rank;
    var copper = getCoinsTotal(getCoins(character, 'Copper') );
    var silver = getCoinsTotal(getCoins(character, 'Silver') );
    var gold = getCoinsTotal(getCoins(character, 'Gold') );
    var platinum = getCoinsTotal(getCoins(character, 'Platinum') );
    
    var totalCoins =  Math.round( Math.floor(silver/10) + Math.floor(copper/100) + Math.floor(platinum*10) + parseInt(gold) );
    
    var totalGearValue = Math.round( getGearPrice(character) );
    currentHeroPointsList += `<p><b>${character.name}</b> <b>(${rank})</b> - ${ suggestion(rank, totalCoins+totalGearValue) }</p>`;
    currentHeroPointsList += `<ul>
    <li>Total: <b>${totalCoins+totalGearValue}</b></li>
    <li>Gold (coins): <b>${totalCoins}</b></li>
    <li>Goods and Magic Items: <b>${totalGearValue}</b></li>    
    </ul>
    `;
  }    

  let template = ` 
  <h2>Core (p16)</h2>
  <p><b>Seasoned heroes have 10,000</b> gold pieces worth of goods and magic items, <b>Veteran</b> characters get <b>40,000</b>, <b>Heroic 150,000</b>, and <b>Legendary 500,000</b>. Starting characters (Novice) have 300 gold.</p>
  
  <h2>Current Wealth</h2>
  <ul>
    ${currentHeroPointsList}
  </ul>
  `;
  
  new Dialog({
    title: ` Wealth Analysis for Savage Pathfinder - ${version}`,
    content: template,
    buttons: {
      ok: {
        label: "OK",
        callback: async (html) => {
        }
      }
    },
  }).render(true);
}

// -------------------------------------------------------
// Functions
function getCoins(character, coinType) {
  let coins=0;
  if (coinType=='Copper') {
    coins = character.items.filter(e => e.name==='Copper');  
  } else if (coinType=='Silver') {
    coins = character.items.filter(e => e.name==='Silver');   
  } else if (coinType=='Gold') {
    coins = character.items.filter(e => e.name==='Gold');   
  } else if (coinType=='Platinum') {
    coins = character.items.filter(e => e.name==='Platinum');      
  }  
  return coins;
}

function getCoinsTotal(coins) {
  if (coins.length>0) {
    const sum = coins.reduce((total, item) => total += item.system.quantity, 0);
    return sum;
  } else {
    return 0;
  }  
}

function getGearPrice(character) {
  let gear;
  gear = character.items.filter(e => e.type==='gear' || e.type==='weapon' || e.type==='armor' || e.type==='shield');  
  
  let total=0;
  for (const item of gear) {
    if (item.system.price) total = total + parseFloat(item.system.price);
  }
  return total;
}

function suggestion(rank, total) {
  let selectedMessage;

  if (rank=='Novice') { 
    if (total<300) {
      selectedMessage=1; //Give me More Gold!
    } else if (total>=300 && total<10000) {
      selectedMessage=2;//It's OK.
    } else if (total>=10000) {
      selectedMessage=3;//Too Much Gold on this guy!
    }    
  } else if (rank=='Seasoned') { 
    if (total<10000) {
      selectedMessage=1; //Give me More Gold!
    } else if (total>=10000 && total<40000) {
      selectedMessage=2;//It's OK.
    } else if (total>=40000) {
      selectedMessage=3;//Too Much Gold on this guy!
    }     
  } else if (rank=='Veteran') { 
    if (total<40000) {
      selectedMessage=1; //Give me More Gold!
    } else if (total>=40000 && total<150000) {
      selectedMessage=2;//It's OK.
    } else if (total>=150000) {
      selectedMessage=3;//Too Much Gold on this guy!
    }       
  } else if (rank=='Heroic') { 
    if (total<150000) {
      selectedMessage=1; //Give me More Gold!
    } else if (total>=150000 && total<500000) {
      selectedMessage=2;//It's OK.
    } else if (total>=500000) {
      selectedMessage=3;//Too Much Gold on this guy!
    }       
  } else if (rank=='Legendary') { 
    if (total<500000) {
      selectedMessage=1; //Give me More Gold!
    } else if (total>=500000) {
      selectedMessage=2;//It's OK.
    }     
  }

  if (selectedMessage==1) {
    return `<b style="color:green;">Give me More Gold!</b>`;
  } else if (selectedMessage==2) {
    return `<b style="color:black;">It's OK.</b>`;
  } else if (selectedMessage==3) {
    return `<b style="color:red;">Too Much Gold on this guy!</b>`;
  }
}