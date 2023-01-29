// v0.1
let myToken = canvas.tokens.controlled[0]

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
                val1: -0.125,
                val2: +0.125,
                loopDuration: 1400,
            },
            translationY:
            {
                animType: "cosOscillation",
                val1: -0.035,
                val2: +0.035,
                loopDuration: 1400,
            }
        }
    }];

if ( TokenMagic.hasFilterId(myToken, "dodgeStance") ) {
  await TokenMagic.deleteFilters(token, "dodgeStance");
} else {
  (async () => { 
    await TokenMagic.deleteFilters(token, "dodgeStance");
    await TokenMagic.addUpdateFiltersOnSelected(params); //aplica
  })()  
}

