// v0.2
let myToken = canvas.tokens.controlled[0];
let myTarget = Array.from(game.user.targets)[0];

// ------------------------------------------------
const params = [{
    filterType: "fire",
    filterId: "onFireCondition",
    intensity: 1,
    color: 0xFFFFFF,
    amplitude: 1,
    time: 0,
    blend: 2,
    fireBlend : 1,
    animated :
    {
      time : 
      { 
        active: true, 
        speed: -0.0024, 
        animType: "move" 
      },
      intensity:
      {
        active:true,
        loopDuration: 15000,
        val1: 0.8,
        val2: 2,
        animType: "syncCosOscillation"
      },
      amplitude:
      {
        active:true,
        loopDuration: 4400,
        val1: 1,
        val2: 1.4,
        animType: "syncCosOscillation"
      }
      
    }
}];

if (!myTarget) {
  
  if ( TokenMagic.hasFilterId(myToken, "onFireCondition") || TokenMagic.hasFilterId(myToken, "flyShadow") ) {
    await TokenMagic.deleteFilters(token, "onFireCondition");
  } else {
    (async () => { 
      await TokenMagic.deleteFilters(token, "onFireCondition");
      await TokenMagic.addUpdateFiltersOnSelected(params); //aplica
    })()  
  }

}