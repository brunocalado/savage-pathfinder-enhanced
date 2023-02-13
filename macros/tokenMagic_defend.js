// v0.3
let myToken = canvas.tokens.controlled[0];
let myTarget = Array.from(game.user.targets)[0];
const xspeed = 0.025; // 0.125
const yspeed = 0.035; // 0.035
const duration = 1600; // 2400

// ------------------------------------------------
const params =
    [{
        filterType: "transform",
        filterId: "dodgeStance",
        padding: 50,
        animated:
        {
            translationX:
            {
                animType: "sinOscillation",
                val1: -xspeed,
                val2: +xspeed,
                loopDuration: duration,
            },
            translationY:
            {
                animType: "cosOscillation",
                val1: -yspeed,
                val2: +yspeed,
                loopDuration: duration,
            }
        }
    }];

if (!myTarget) {
  
  if ( TokenMagic.hasFilterId(myToken, "dodgeStance") ) {
    await TokenMagic.deleteFilters(token, "dodgeStance");
  } else {
    (async () => { 
      await TokenMagic.deleteFilters(token, "dodgeStance");
      await TokenMagic.addUpdateFiltersOnSelected(params); //aplica
    })()  
  }

}