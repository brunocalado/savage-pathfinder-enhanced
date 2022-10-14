/* Coin Manager for Savage Pathfinder 
source: 
icon: icons/commodities/currency/coins-plain-gold.webp

TODO
*/

const version = 'v1.4';
const icon = "icons/commodities/currency/coins-plain-gold.webp";

const iconCopper = "icons/commodities/currency/coins-assorted-mix-platinum.webp";
const iconSilver = "icons/commodities/currency/coins-assorted-mix-silver.webp";
const iconGold = "icons/commodities/currency/coins-plain-gold.webp";
const iconPlatinum = "icons/commodities/currency/coin-embossed-unicorn-silver.webp";

const rulesLink = '@UUID[Compendium.swpf-core-rules.swpf-rules.swpfcore02gear00.JournalEntryPage.02gear0000000000#currency]{CURRENCY}';

let coreRules = false;
if (game.modules.get("swpf-core-rules")?.active) { coreRules = true; }

if ( canvas.tokens.controlled[0]===undefined && Array.from(game.user.targets)[0]===undefined ) {
  ui.notifications.error("Please, select or target a token."); // No Token is Selected
} else {
  main();
}

function main() {
  let tokens = canvas.tokens.controlled;
  let playersNames = tokens.map((p=> p.name)); 


  let playerNameList = `<option value="everyone" selected>Everyone</option>`;
  //let playerNameList=``;
  for (var tokenD of tokens) {
    playerNameList += `<option value="${tokenD.actor.id}">${tokenD.name}</option>`;
  }  

  /* Show actual xp points*/
  let currentHeroPointsList = '';
  for (var tokenD of tokens) {
    var copper = getCoinsTotal(getCoins(tokenD.actor.id, 'Copper') );
    var silver = getCoinsTotal(getCoins(tokenD.actor.id, 'Silver') );
    var gold = getCoinsTotal(getCoins(tokenD.actor.id, 'Gold') );
    var platinum = getCoinsTotal(getCoins(tokenD.actor.id, 'Platinum') );
    currentHeroPointsList += `<p><b>${tokenD.name}</b></p>`;
    currentHeroPointsList += `<ul><li>Copper: <b>${copper}</b> • Silver: <b>${silver}</b> • Gold: <b>${gold}</b> • Platinum: <b>${platinum}</b></li></ul>`;
  }    

  let template = `
    <style type="text/css">
      .tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
      .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
        overflow:hidden;padding:10px 5px;word-break:normal;}
      .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
        font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
      .tg .tg-baqh{text-align:center;vertical-align:top}
      .tg .tg-xwyw{border-color:#000000;text-align:center;vertical-align:middle}
    </style>
    
    <table class="tg">
    <tbody>
      <tr>
        <td class="tg-xwyw" colspan="4"><b>Choose: </b><select id="playerName" style="width: 200px">${playerNameList}</select></td>
      </tr>
      <tr>      
        <td class="tg-baqh">
          <div>
            <img src="${iconCopper}" style="vertical-align:middle" width="24" height="24">
            <span style="">Copper</span>
          </div>        
        </td>
        <td class="tg-baqh">
          <div>
            <img src="${iconSilver}" style="vertical-align:middle" width="24" height="24">
            <span style="">Silver</span>
          </div>          
        </td>
        <td class="tg-baqh">
          <div>
            <img src="${iconGold}" style="vertical-align:middle" width="24" height="24">
            <span style="">Gold</span>
          </div>         
        </td>
        <td class="tg-baqh">
          <div>
            <img src="${iconPlatinum}" style="vertical-align:middle" width="24" height="24">
            <span style="">Platinum</span>
          </div>         
        </td>
      </tr>
      <tr>
        <td class="tg-baqh">
          <input id="copper" type="number" min="-1000" max="1000" style="width: 100%;" value=0>
        </td>
        <td class="tg-baqh">
          <input id="silver" type="number" min="-1000" max="1000" style="width: 100%;" value=0>
        </td>
        <td class="tg-baqh">
          <input id="gold" type="number" min="-1000" max="1000" style="width: 100%;" value=0>
        </td>
        <td class="tg-baqh">
          <input id="platinum" type="number" min="-1000" max="1000" style="width: 100%;" value=0>
        </td>
      </tr>
    </tbody>
    </table>
 
  <h2>Current Coins</h2>
  <ul>
    ${currentHeroPointsList}
  </ul>
  `;
  
  new Dialog({
    title: `Coin Manager for Savage Pathfinder - ${version}`,
    content: template,
    buttons: {
      ok: {
        label: "Apply",
        callback: async (html) => {
          coinManager(html);
        },
      },
      cancel: {
        label: "Cancel",
      },
    },
  }).render(true);
}


// -------------------------------------------------------
// Functions
async function coinManager(html) {
  let actorID = html.find("#playerName")[0].value;  
  let copper = html.find("#copper")[0].value;  
  let silver = html.find("#silver")[0].value; 
  let gold = html.find("#gold")[0].value; 
  let platinum = html.find("#platinum")[0].value; 
  
  if (actorID=='everyone') {    
    let tokens = canvas.tokens.controlled;
    for (var tokenD of tokens) {
      let actorid = tokenD.actor.id;
      //console.log('Token ID: ' + actorid)
      coinMessage(actorid, copper, silver, gold, platinum);
      updateHeroCoins(actorid, copper, silver, gold, platinum);
    }
  } else { 
    coinMessage(actorID, copper, silver, gold, platinum);
    updateHeroCoins(actorID, copper, silver, gold, platinum);
  }  
}

async function updateHeroCoins(actorID, copper, silver, gold, platinum) {
  let character = game.actors.get(actorID);
  let copperCurrent = getCoinsTotal(getCoins(actorID, 'Copper', true) );
  let silverCurrent = getCoinsTotal(getCoins(actorID, 'Silver', true) );
  let goldCurrent = getCoinsTotal(getCoins(actorID, 'Gold', true) );
  let platinumCurrent = getCoinsTotal(getCoins(actorID, 'Platinum', true) );  
  
  // create missing coins + Patch actor
  await patchHeroCoins(actorID);
  
  // add/remove coins
  updateCoins(actorID, copperCurrent, copper, 'Copper');
  updateCoins(actorID, silverCurrent, silver, 'Silver');
  updateCoins(actorID, goldCurrent, gold, 'Gold');
  updateCoins(actorID, platinumCurrent, platinum, 'Platinum');
}

async function createCoin(actorID, coinName) { 
  let missingIcon;
  let rules = '';
  switch (coinName) {
    case 'Copper':
      missingIcon = iconCopper;
      break;
    case 'Silver':
      missingIcon = iconSilver;
      break;
    case 'Gold':
       missingIcon = iconGold;
      break;
    case 'Platinum':
      missingIcon = iconPlatinum;
      break;
  }  
  
  rules += `<table><colgroup> <col/> <col/> <col/> <col/> <col/> </colgroup><tbody><tr><th class="main-heading" colspan="5">Coins &amp; exchange value</th></tr><tr><th class="sub-heading left">Coin</th><th class="sub-heading">CP</th><th class="sub-heading">SP</th><th class="sub-heading">GP</th><th class="sub-heading">PP</th></tr><tr><td>Copper (cp)</td><td class="centered">1</td><td class="centered">1/10</td><td class="centered">1/100</td><td class="centered">1/1,000</td></tr><tr><td>Silver (sp)</td><td class="centered">10</td><td class="centered">1</td><td class="centered">1/10</td><td class="centered">1/100</td></tr><tr><td>Gold (gp)</td><td class="centered">100</td><td class="centered">10</td><td class="centered">1</td><td class="centered">1/10</td></tr><tr><td>Platinum (pp)</td><td class="centered">1,000</td><td class="centered">100</td><td class="centered">10</td><td class="centered">1</td></tr></tbody></table>`; 
  
  if (coreRules) {
    rules += `</br>${rulesLink}`;
  }
  
  //let character = game.actors.contents.filter((t) => t.id === actorID)[0];  
  let character = game.actors.get(actorID);
  let data = [{
    name: coinName,
    type: 'gear',
    img: missingIcon,    
    data: {
      "description": `<p>${rules}</p>`,
      "quantity": 0
    }
  }];  
  const createCoin = await character.createEmbeddedDocuments('Item', data);
}

async function updateCoins(actorID, currentCoins, newCoins, coinType) {
  if (newCoins!=0) {
    //let character = game.actors.contents.filter((t) => t.id === actorID)[0];  
    let character = game.actors.get(actorID);
    let coinsTotal = parseInt(currentCoins)+parseInt(newCoins);
    let coin = getCoins(actorID, coinType, true)[0];            
    
    // Check
    if ( (coinsTotal)<=0 ) {
      coinsTotal = 0;
    }
    
    await coin.update({
      ["system.quantity"]: coinsTotal
    });    
  }
}

async function patchHeroCoins(actorID) {
  let character = game.actors.get(actorID);  

  // Add missing coins
  if (getCoins(actorID, 'Copper').length==0) await createCoin(actorID, 'Copper');   
  if (getCoins(actorID, 'Silver').length==0) await createCoin(actorID, 'Silver');
  if (getCoins(actorID, 'Gold').length==0) await createCoin(actorID, 'Gold');   
  if (getCoins(actorID, 'Platinum').length==0) await createCoin(actorID, 'Platinum');

  let copperCurrent = await getCoins(actorID, 'Copper');
  let silverCurrent = await getCoins(actorID, 'Silver');
  let goldCurrent = await getCoins(actorID, 'Gold');
  let platinumCurrent = await getCoins(actorID, 'Platinum');  
  
  if (copperCurrent.length>1) { // join
    await patchCoin(actorID, 'Copper', getCoinsTotal(copperCurrent));
  }
  if (silverCurrent.length>1) {
    await patchCoin(actorID, 'Silver', getCoinsTotal(silverCurrent));
  } 
  if (goldCurrent.length>1) {
    await patchCoin(actorID, 'Gold', getCoinsTotal(goldCurrent));
  }
  if (platinumCurrent.length>1) {
    await patchCoin(actorID, 'Platinum', getCoinsTotal(platinumCurrent));
  } 
  
}

async function patchCoin(actorID, coinType, coinsTotal) {
  let character = game.actors.get(actorID);
  
  let coins = getCoins(actorID, coinType, true);  
  coins = coins.splice(1);
  const ids = coins.map( coin => coin.id );
  await character.deleteEmbeddedDocuments('Item', ids);        
  // update
  let coin = getCoins(actorID, coinType, true)[0];  
  await coin.update({
    ["system.quantity"]: coinsTotal
  }); 
}

function getCoins(actorID, coinType, isActor=false) {
  let character = game.actors.get(actorID);
  
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

function coinMessage(actorID, copper, silver, gold, platinum) {
  let message = ``;
  let copperCurrent = getCoinsTotal(getCoins(actorID, 'Copper', true) );
  let silverCurrent = getCoinsTotal(getCoins(actorID, 'Silver', true) );
  let goldCurrent = getCoinsTotal(getCoins(actorID, 'Gold', true) );
  let platinumCurrent = getCoinsTotal(getCoins(actorID, 'Platinum', true) );  
  let character = game.actors.get(actorID);

  message += `<h2>${character.name}</h2> 
  <h3>Current + <b style="color:red;">Change</b></h3>
  <ul><li>Copper: <b>${copperCurrent}</b> + <b style="color:red;">${copper}</b></li>
  <li>Silver: <b>${silverCurrent}</b> + <b style="color:red;">${silver}</b></li> 
  <li>Gold: <b>${goldCurrent}</b> + <b style="color:red;">${gold}</b></li>
  <li>Platinum: <b>${platinumCurrent}</b> + <b style="color:red;">${platinum}</b></li></ul>
  `;  

  let chatData = {
    user: game.user.id,
    speaker: ChatMessage.getSpeaker(),
    content: message
  };  
  ChatMessage.create(chatData, {});
}