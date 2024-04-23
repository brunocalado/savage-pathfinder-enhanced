const version = 'v2.0';
const chatimage = "icons/environment/people/charge.webp";
let coreRules = false;
if (game.modules.get("swade-core-rules")?.active) { coreRules = true; }

/* Mass Battle p133 SWADE

source: https://raw.githubusercontent.com/brunocalado/mestre-digital/master/Foundry%20VTT/Macros/Savage%20Worlds/MassBattle.js
icon: icons/environment/people/charge.webp
*/

main();

function main() {  
  let template = `  
    <style type="text/css">
      div.purpleHorizon {
        border: 4px solid #ff0000;
        background-color: #000000;
        width: 100%;
        text-align: center;
        border-collapse: collapse;
      }
      .divTable.purpleHorizon .divTableCell, .divTable.purpleHorizon .divTableHead {
        border: 0px solid #550000;
        padding: 5px 2px;
      }
      .divTable.purpleHorizon .divTableBody .divTableCell {
        font-size: 13px;
        font-weight: bold;
        color: #FFFFFF;
      }
      
      .divTable{ display: table; }
      .divTableRow { display: table-row; }
      .divTableHeading { display: table-header-group;}
      .divTableCell, .divTableHead { display: table-cell;}
      .divTableHeading { display: table-header-group;}
      .divTableFoot { display: table-footer-group;}
      .divTableBody { display: table-row-group;}

      /* HIDE RADIO */
      [type=radio] { 
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
      }

      /* IMAGE STYLES */
      [type=radio] + img {
      cursor: pointer;
      }

      /* CHECKED STYLES */
      [type=radio]:checked + img {
      outline: 4px solid #f00;
      }
      
      .container {
        position: relative;
        text-align: center;
        color: white;
      }
      /* Centered text */
      .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
      }    

      #kultcss .window-content {    
        background: #000000;
      }     
      #kultcss .dialog-button {
        height: 40px;
        background: #000000;
        color: #ffffff;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
        border: none;    
      }  
      #kultcss header {
        background: #000000;
        border-radius: 0;    
        border: none;    
        margin-bottom: 2px;
        font-size: .75rem;
      }
    </style>    
    
    <h1 style="color:white">Force 1</h1>
    <div class="divTable purpleHorizon">
    <div class="divTableBody">
    
    <div class="divTableRow">
    <div class="divTableCell">
        <p>Name</p>
        <input id="name1" type="text" max="20" style="width: 100px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value="Force1">    
    </div>
    <div class="divTableCell">      
      <label>        
        <div class="container">
          <p>Force</p>
        <input id="force1" type="number" min="10" max="10" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value=10>
        </div>
      </label>      
    </div>    
    <div class="divTableCell">
        <p>Die</p>
        <select id="commanderdie1" type="text" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;">
        <option value="1d4x">1d4x</option>
        <option value="1d6x">1d6x</option>
        <option value="1d8x" selected="selected">1d8x</option>
        <option value="1d10x">1d10x</option>
        <option value="1d12x">1d12x</option>
        </select>
    </div>
    <div class="divTableCell">
        <p>Bonus</p>
        <input id="commanderbonus1" type="text" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value="3">       
    </div>       
    </div>

    <div class="divTableRow">
    <div class="divTableCell">
        <p>Advantage</p>
        <input id="tacticaladvantage1" type="number" min="0" max="4" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value=0>       
    </div>
    <div class="divTableCell">      
      <p>Plan</p>
      <input id="battleplan1" type="number" min="0" max="4" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value=0>       
    </div>    
    <div class="divTableCell">
        <p>Players Bonus</p>
        <input id="playersbonus1" type="number" min="-20" max="20" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value=0>       
    </div>
    <div class="divTableCell">
        <p>Is Wild?</p>
        <input id="wildcard1" type="checkbox" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" checked>       
    </div>    
    </div>
    
    </div>
    </div>
    

    <h1 style="color:white">Force 2</h1>
    <div class="divTable purpleHorizon">
    <div class="divTableBody">
    
    <div class="divTableRow">
    <div class="divTableCell">
        <p>Name</p>
        <input id="name2" type="text" max="20" style="width: 100px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value="Force2">    
    </div>
    <div class="divTableCell">      
      <label>        
        <div class="container">
          <p>Force</p>
        <input id="force2" type="number" min="10" max="10" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value=7>
        </div>
      </label>      
    </div>   
    <div class="divTableCell">
        <p>Die</p>
        <select id="commanderdie2" type="text" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;">
        <option value="1d4x">1d4x</option>
        <option value="1d6x">1d6x</option>
        <option value="1d8x" selected="selected">1d8x</option>
        <option value="1d10x">1d10x</option>
        <option value="1d12x">1d12x</option>
        </select>
    </div>
    <div class="divTableCell">
        <p>Bonus</p>
        <input id="commanderbonus2" type="text" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value="3">       
    </div>    
    </div>

    <div class="divTableRow">
    <div class="divTableCell">
        <p>Advantage</p>
        <input id="tacticaladvantage2" type="number" min="0" max="4" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value=0>       
    </div>
    <div class="divTableCell">      
      <label>        
        <div class="container">
          <p>Plan</p>
        <input id="battleplan2" type="number" min="0" max="4" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value=0>       
        </div>
      </label>      
    </div>    
    <div class="divTableCell">
        <p>Players Bonus</p>
        <input id="playersbonus2" type="number" min="-20" max="20" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" value=0>       
    </div>
    <div class="divTableCell">
        <p>Is Wild?</p>
        <input id="wildcard2" type="checkbox" style="width: 60px; box-sizing: border-box;border: none;background-color: #ff0000;color: white; text-align: center;" checked>       
    </div>      
    </div>
    
    </div>
    </div>
    
  `;
  
  new Dialog({
    title: `Mass Battle - ${version}`,
    content: template,
    buttons: {
      ok: {
        label: "Battle!",
        callback: async (html) => {
          massbattle(html);
        },
      },
      cancel: {
        label: "Cancel",
      }
    },
    default: "ok"
  }, { id: 'kultcss'}).render(true);
}

async function massbattle(html){
  // FORCE 1
  const name1 =  html.find("#name1")[0].value;    
  const force1 = parseInt( html.find("#force1")[0].value );    
  const commanderdie1 = html.find("#commanderdie1")[0].value;  
  const commanderbonus1 = html.find("#commanderbonus1")[0].value;    
  const tacticaladvantage1 =  parseInt( html.find("#tacticaladvantage1")[0].value );    
  const battleplan1 = parseInt( html.find("#battleplan1")[0].value );    
  const playersbonus1 = parseInt( html.find("#playersbonus1")[0].value );  
  const wildcard1 = html.find("#wildcard1")[0].checked;
  //const stackupcards = html.find("#stackupcards")[0].checked;

  // FORCE 2
  const name2 =  html.find("#name2")[0].value;    
  const force2 = parseInt( html.find("#force2")[0].value );    
  const commanderdie2 = html.find("#commanderdie2")[0].value;  
  const commanderbonus2 = html.find("#commanderbonus2")[0].value;    
  const tacticaladvantage2 =  parseInt( html.find("#tacticaladvantage2")[0].value );    
  const battleplan2 = parseInt( html.find("#battleplan2")[0].value );    
  const playersbonus2 = parseInt( html.find("#playersbonus2")[0].value ); 
  const wildcard2 = html.find("#wildcard2")[0].checked;

  // 
  let commander1DiceExpression;
  if (wildcard1) {
    commander1DiceExpression = '{' + commanderdie1 + '+' + commanderbonus1 + ', 1d6x+' + commanderbonus1 + '}';
  } else {
    commander1DiceExpression = commanderdie1 + '+' + commanderbonus1;
  }  
  if (wildcard2) {
    commander2DiceExpression = '{' + commanderdie2 + '+' + commanderbonus2 + ', 1d6x+' + commanderbonus2 + '}';
  } else {
    commander2DiceExpression = commanderdie2 + '+' + commanderbonus2;
  }  
  
  let commander1Dice = await new Roll(commander1DiceExpression).roll({ async : false });  
  let commanderRolled1;
  if (wildcard1) {
    commanderRolled1 = Math.max( commander1Dice.terms[0].rolls[0].total,  commander1Dice.terms[0].rolls[1].total );
  } else {
    commanderRolled1 = commander1Dice.total;
  }
  
  let commander2Dice = new Roll(commander2DiceExpression).roll({ async : false });  
  let commanderRolled2;
  if (wildcard2) {
    commanderRolled2 = Math.max( commander2Dice.terms[0].rolls[0].total,  commander2Dice.terms[0].rolls[1].total );
  } else {
    commanderRolled2 = commander2Dice.total;
  }
  let result1=0;
  let result2=0;
  
  let message;
  if (coreRules) {
    message = `<div class="swade-core"><h2><img style="vertical-align:middle" src=${chatimage} width="28" height="28"> @Compendium[swade-core-rules.swade-rules.IJkWxV4kddDaU0Gl]{ Mass Battles}</h2></div>`;
  } else {
    message = `<div><h2><img style="vertical-align:middle" src=${chatimage} width="28" height="28"> Mass Battle</h2><div>`;
  }
  
  let forceMessage1;
  let forceMessage2;
  if (force1>force2) {
    result1 += forceBonus(force1, force2);
    forceMessage1 = `<li><b>Force Size:</b> ${force1} <b style="color:red">(+${forceBonus(force1, force2)})</b></li>`;
    forceMessage2 = `<li><b>Force Size:</b> ${force2} <b style="color:red">(+0)</b></li>`;
  } else {
    result2 += forceBonus(force1, force2);
    forceMessage2 = `<li><b>Force Size:</b> ${force2} <b style="color:red">(+${forceBonus(force1, force2)})</b></li>`;
    forceMessage1 = `<li><b>Force Size:</b> ${force1} <b style="color:red">(+0)</b></li>`;    
  }
  result1 += tacticaladvantage1;
  result2 += tacticaladvantage2;
  result1 += battleplan1;
  result2 += battleplan2;
  result1 += playersbonus1;
  result2 += playersbonus2;
  result1 += commanderRolled1;
  result2 += commanderRolled2;
  
  if (wildcard1) {
    message += `<h2>(Wild Card) ${name1}</h2>`;
  } else {
    message += `<h2>${name1}</h2>`;
  }
   
  message += `<ul>
  <li><b style="color:red">Total:</b> ${result1}</li>
  <li><b>Commander Roll:</b> ${commanderRolled1}</li>
  ${forceMessage1}
  <li><b>Tactical Advantage:</b> ${tacticaladvantage1}</li>
  <li><b>Battle Plan:</b> ${battleplan1}</li>
  <li><b>Players Bonus:</b> ${playersbonus1}</li>
  </ul>`;
  
  if (wildcard2) {
    message += `<h2>(Wild Card) ${name2}</h2>`;
  } else {
    message += `<h2>${name2}</h2>`;
  }
  message += `<ul>
  <li><b style="color:red">Total:</b> ${result2}</li>
  <li><b>Commander Roll:</b> ${commanderRolled2}</li>
  ${forceMessage2}
  <li><b>Tactical Advantage:</b> ${tacticaladvantage2}</li>
  <li><b>Battle Plan:</b> ${battleplan2}</li>
  <li><b>Players Bonus:</b> ${playersbonus2}</li>
  </ul>`;
  
  message += winnerCheck(result1, result2, name1, name2, force1, force2);
  let cleanMessage = message;
  
  // 3D Dice
  commander1Dice.toMessage({flavor: `${name1}`, whisper : ChatMessage.getWhisperRecipients("GM") });
  commander2Dice.toMessage({flavor: `${name2}`, whisper : ChatMessage.getWhisperRecipients("GM") });
  
  // Create Journal on Click
  const buttonID = Math.floor(Math.random(0.1)*1000000000);

  let data = {
    name: 'Mass Battle',
    content: cleanMessage
  };    
  createJournalEntry(data);

  let chatData = {
    content: message,
    whisper : ChatMessage.getWhisperRecipients("GM")
  };  
  ChatMessage.create(chatData, {});  
}

function forceBonus(force1, force2) {
  if (force1>force2) {
    return (force1-force2)
  } else if (force2>force1) {
    return (force2-force1)
  } else {
    return 0;
  }
}

function winnerCheck(result1, result2, name1, name2, force1, force2) {
  let message = `<h2 style="color:red">Result</h2>`;
  let force1after = force1;
  let force2after = force2;
  if (result1>result2) {
    if ( (result1+4)>=result2 ) { // raise
      message += `<p><b>Victory:</b> The defeated army loses two Force Tokens.</p>`;        
      force2after -= 2; 
    } else {
      message += `<p><b>Marginal Victory:</b> The victor loses one Force Token, the defeated loses two.</p>`;        
      force2after -= 2; 
      force1after -= 1;          
    }    
    message += `<ul><li>Winner: <b>${name1}</b></li>`;
    message += `<li>Loser: <b>${name2}</b></li>`;         
  } else if (result2>result1) {
    if ( (result2+4)>=result1 ) { // raise
      message += `<p><b>Victory:</b> The defeated army loses two Force Tokens.</p>`;        
      force1after -= 2; 
    } else {
      message += `<p><b>Marginal Victory:</b> The victor loses one Force Token, the defeated loses two.</p>`;        
      force1after -= 2; 
      force2after -= 1;          
    }
    message += `<ul><li>Winner: <b>${name2}</b></li>`;
    message += `<li>Loser: <b>${name1}</b></li>`;    
  } else {
    message += `<p><b>Draw:</b> Both sides lose one Force Token.</p>`;    
    force1after -= 1; 
    force2after -= 1;
    message += `<ul><li>The <b>${name1}</b> and <b>${name2}</b> are tied.</li>`;    
  }

  message += `<li><b>${name1}:</b> has ${force1after} force tokens</li>`;
  message += `<li><b>${name2}:</b> has ${force2after} force tokens</li></ul>`;
  
  message += `<h2 style="color:darkblue">Morale</h2><ul>`;
  if ( (force1-force1after)>0 ) {
    message += `<li>-${force1-force1after}: for <b>${name1}</b> spirit roll. It's -1 for each token lost.</li>`;
  }
  if ( (force2-force2after)>0 ) {
    message += `<li>-${force2-force2after}: for <b>${name2}</b> spirit roll. It's -1 for each token lost.</li>`;
  }
  message += `<li>+2: The army is made up mostly of undead or other fearless troops.</li>`;
  message += `<li>+2: The army is within fortifications or prepared positions.</li>`;
  message += `<li>+2: The army cannot retreat or will be killed if it does.</li></ul>`;

  return message;
}

async function createJournalEntry(data) {  
  const instantAdventure = await JournalEntry.create(data);
  await instantAdventure.sheet.render(true);    
}
