/* AE Builder
docs: https://gitlab.com/peginc/swade/-/wikis/active-effects#attribute-keys
*/

const version = 'v1.9';
const icon = "icons/magic/symbols/rune-sigil-green.webp";

if ( canvas.tokens.controlled[0]===undefined && Array.from(game.user.targets)[0]===undefined ) {
  ui.notifications.error("Please, select or target a token."); // No Token is Selected
} else {
  main();
}

function main() {
  let tokenD = canvas.tokens.controlled[0];
  let skills = tokenSkillReaderLabel(tokenD);

  let aeExpirationBehavior = `<select id="select-aeExpirationBehavior" name="select-aeExpirationBehavior">`;
  aeExpirationBehavior += `<option value="startOfTheTurn">Start of the Turn</option>`;
  aeExpirationBehavior += `<option value="EndOfTheTurn" selected="selected">End of the Turn</option>`;
  aeExpirationBehavior += `</select>`;
  
  let dialogue_content = `
    <form>
      <div class="form-group">
        <label>Name:</label>
        <input id="aename" name="aename" type="text" value="effect 1">
      </div>    
      <div class="form-group">
      
        <label for="aeType">Effect:</label>
        <input list="aeTypes" id="aeType" name="aeType">
        <datalist id="aeTypes">
          <option value="system.stats.toughness.armor">Armor</option>          
          <option value="system.stats.size">Size</option>
          
          <option value="system.stats.speed.value">Pace</option>
          <option value="system.stats.speed.runningDie">Running Die</option>          
          <option value="system.stats.speed.runningMod">Running Modifier</option>                    

          <option value="system.stats.parry.value">Parry</option>
          <option value="system.stats.toughness.value">Toughness</option>
          
          <option value="system.status.isShaken">Shaken</option>
          <option value="system.status.isDistracted">Distracted</option>
          <option value="system.status.isVulnerable">Vulnerable</option>
          <option value="system.status.isStunned">Stunned</option>
          <option value="system.status.isEntangled">Entangled</option>
          <option value="system.status.isBound">Bound</option>          
          
          <option value="system.attributes.agility.die.sides">Agility Die</option>         
          <option value="system.attributes.smarts.die.sides">Smarts Die</option>         
          <option value="system.attributes.spirit.die.sides">Spirit Die</option>         
          <option value="system.attributes.strength.die.sides">Strength Die</option>         
          <option value="system.attributes.vigor.die.sides">Vigor Die</option>         

          <option value="system.attributes.agility.die.modifier">Agility Modifier</option>         
          <option value="system.attributes.smarts.die.modifier">Smarts Modifier</option>         
          <option value="system.attributes.spirit.die.modifier">Spirit Modifier</option>         
          <option value="system.attributes.strength.die.modifier">Strength Modifier</option>         
          <option value="system.attributes.vigor.die.modifier">Vigor Modifier</option>         

          <option value="system.initiative.hasLevelHeaded">Level Headed</option>         
          <option value="system.initiative.hasImpLevelHeaded">Improved Level Headed</option>         
          <option value="system.initiative.hasHesitant">Hesitant</option>         
          <option value="system.initiative.hasQuick">Quick</option>         

          <option value="system.attributes.strength.encumbranceSteps">Encumbrance Steps</option>
          
          <option value="simple.tracker">Simple Tracker</option>                             
        </datalist>  
      </div>
      <div class="form-group">
        <label>Value:</label>
        <input id="aevalue" name="aevalue" type="text" value="2">
      </div>   

      <div class="form-group">
        <label>Turns:</label>
        <input id="aeturns" name="aeturns" type="text" value="0">
      </div>
      
      <div class="form-group">
        <label>Expiration Behavior:</label>
        ${aeExpirationBehavior}
      </div>      
    </form>

    <script>
      var list = document.getElementById('aeTypes');
      var skills2 = Array( ${skills} );
    
      skills2.forEach(function(item){
         var option = document.createElement('option');
         option.value = item + ' Skill Die';
         option.textContent = item;
         list.appendChild(option);
      });
      skills2.forEach(function(item){
         var option = document.createElement('option');
         option.value = item + ' Skill Modifier';
         option.textContent = item;
         list.appendChild(option);
      });    
    </script>
`;

  let applyChanges = false;
  let dialogButtons = {
    yes: {
      icon: "<i class='fas fa-check'></i>",
      label: `Apply Changes`,
      callback: (html) => {
        applyActiveEffect(html);
      }
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel Changes`
    }   
  }

  // Main Dialogue    
  new Dialog({
    title: `Active Effect Builder - ${version}`,
    content: dialogue_content,
    buttons: dialogButtons,
    default: "yes",
  }).render(true);
}

async function applyActiveEffect(html) {
  let aename = html.find('[name="aename"]')[0].value;
  let aekey = html.find("#aeType")[0].value;
  let aevalue = html.find('[name="aevalue"]')[0].value;
  let aeturns = html.find('[name="aeturns"]')[0].value;
  let aeExpirationBehavior = html.find('[name="select-aeExpirationBehavior"]')[0].value;

  let myActiveEffect;
  let myChanges=[];
  let aemode = keyToMode(aekey);
  aevalue = keyToValue(aekey, aevalue);
  let tagToKey = skillToKey(aekey);
  if (tagToKey!=-1) {
    aekey = tagToKey;
  }

  if ( aename=='effect 1') aename = autoNaming(aekey);
  
  if ( aekey!='simple.tracker') {
    myChanges = [{
      "key": aekey,
      "value": aevalue, mode: aemode 
    }];    
  }

  if ( aeturns!=0 ) {
    myActiveEffect = { // AE!!!
      embedded: {
        ActiveEffect: { 
          aename:{
            label: aename,
            icon : icon,
            changes: myChanges,
            duration: {
              "rounds": aeturns
            },
            flags: {
              swade: {
                "expiration": expirationBehaviorCode(aeExpirationBehavior),
                "favorite": true
              }
            }  
          }
        }
      }      
    };    
  } else {
    myActiveEffect = { // AE!!!
      embedded: {
        ActiveEffect:{ 
          aename: {
            label: aename,
            icon : icon,
            changes: myChanges,
            flags: {
              swade: {
                "favorite": true
              }
            }             
          }
        }
      }
    }
  }

  //----------------------------------
  for (let tokenD of canvas.tokens.controlled) {
    let activeEffectClass = getDocumentClass("ActiveEffect");
    const output = await warpgate.mutate(tokenD.document, myActiveEffect, {}, {permanent: true});
  }

  for (let tokenD of Array.from(game.user.targets)) {
    let activeEffectClass = getDocumentClass("ActiveEffect");
    const output = await warpgate.mutate(tokenD.document, myActiveEffect, {}, {permanent: true});
  }
  
}

function keyToMode(mykey) {
  //let aeTypeAdd = ['system.stats.toughness.armor', 'system.stats.size', 'system.stats.speed.value', 'system.sta0ts.parry.value', 'system.stats.toughness.value' ];
  let aeTypeOverride = [ 'system.status.isShaken', 'system.status.isDistracted', 'system.status.isVulnerable', 'system.status.isStunned', 'system.status.isEntangled', 'system.status.isBound', 'system.initiative.hasLevelHeaded', 'system.initiative.hasImpLevelHeaded', 'system.initiative.hasHesitant', 'system.initiative.hasQuick' ];

  if ( aeTypeOverride.includes(mykey) ) {
    return CONST.ACTIVE_EFFECT_MODES.OVERRIDE;
  } else { // ADD
    return CONST.ACTIVE_EFFECT_MODES.ADD;
  }  
}

function keyToValue(mykey, myvalue) {
  //let aeTypeAdd = ['system.stats.toughness.armor', 'system.stats.size', 'system.stats.speed.value', 'system.stats.parry.value', 'system.stats.toughness.value' ];
  let aeTypeOverride = [ 'system.status.isShaken', 'system.status.isDistracted', 'system.status.isVulnerable', 'system.status.isStunned', 'system.status.isEntangled', 'system.status.isBound', 'system.initiative.hasLevelHeaded', 'system.initiative.hasImpLevelHeaded', 'system.initiative.hasHesitant', 'system.initiative.hasQuick' ];
  let aeTypeSteps = ['system.attributes.agility.die.sides', 'system.attributes.smarts.die.sides', 'system.attributes.spirit.die.sides', 'system.attributes.strength.die.sides', 'system.attributes.vigor.die.sides' ];

  if ( aeTypeOverride.includes(mykey) ) {
    return true;
  } else if ( aeTypeSteps.includes(mykey) ) {
    if ([2,4,6,8,10].includes( Math.abs(myvalue) ) ) {
      return myvalue;
    } else {
      return 2;
    }
  } else {
    return myvalue;
  }  
}

function skillToKey(mykey) {
  let skillModifier = 'Skill Modifier';  
  let skillDie = 'Skill Die';  

  if ( mykey.search(skillModifier)>-1 ) {
    return skillToModifier(mykey);
  } else if ( mykey.search(skillDie)>-1 ) {
    return skillToDie(mykey);
  } else {
    return -1;
  }    
}

// Expiration
/* 1 start prompt
// 3 end promt
*/
function expirationBehaviorCode(expirationBehavior) {
  if ( expirationBehavior=='startOfTheTurn' ) {
    return 1;
  } else {
    return 3;
  }    
}

// return array skills
function tokenSkillReaderLabel(tokenD) {
  if (tokenD===undefined) return;
  let items = tokenD.actor.items.filter(e => e.type==='skill');
  let itemsLabel = [];
  let itemsList = ""; //Display the Chat Card for the selected item
  for (let item of items) {
    itemsLabel.push("\"" + item.name + "\"");
  }
  return itemsLabel;
} //return tokenD.actor.items.filter(i => (i.type === 'skill') ).map(i => (i.name));  
  
function skillToDie(skillName) {
  skillName = skillName.replace(' Skill Die', '');
  return '@Skill{'+ skillName + '}[system.die.sides]';
}

function skillToModifier(skillName) {
  skillName = skillName.replace(' Skill Modifier', '');
  return '@Skill{'+ skillName + '}[system.die.modifier]';
}

function autoNaming(mykey) {

  if ( mykey.search('system.status.is')>-1 ) {
    return mykey.replace('system.status.is', '');
  } else if ( mykey.search('system.stats.speed.runningMod')>-1 ) {    
    return toTitleCase( 'Running Modifier' );
  } else if ( mykey.search('system.stats.speed.runningDie')>-1 ) {    
    return toTitleCase( 'Running Die' );    
  } else if ( mykey.search('system.stats.')>-1 ) {    
    return toTitleCase( mykey.replace('system.stats.', '').replace('.value', '').replace('.', ' ') );    
  } else if ( mykey.search('system.attributes.strength.encumbranceSteps')>-1 ) {                
    return 'Encumbrance Steps';
  } else if ( mykey.search('system.initiative.has')>-1 ) {            
    return mykey.replace('system.initiative.has', '');
  } else if ( mykey.search('system.attributes.')>-1 ) {
    return toTitleCase( mykey.replace('system.attributes.', '').replace('.die', ' ') );
  } else if ( mykey.search('system.die.modifier')>-1 ) {                
    return mykey.replace('}[system.die.modifier]', '').replace('@Skill{', '') + ' Mod' ;
  } else if ( mykey.search('system.die.sides')>-1 ) {                    
    return mykey.replace('}[system.die.sides]', '').replace('@Skill{', '') + ' Die';
  } else {    
    return mykey;
  }  
} // end autoNaming

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
