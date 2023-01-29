// v0.1
let myToken = canvas.tokens.controlled[0]

// ------------------------------------------------
const params =
    [{
        filterType: "splash",
        filterId: "incapacited",
        color: 0x900505,
        padding: 30,
        time: Math.random()*1000,
        seed: Math.random()/100,
        splashFactor: 2,
        spread: 7,
        blend: 1,
        dimX: 1,
        dimY: 1,
        cut: true,
        textureAlphaBlend: false
    }];

if ( TokenMagic.hasFilterId(myToken, "incapacited") ) {
  await TokenMagic.deleteFilters(token, "incapacited");
} else {
  (async () => { 
    await TokenMagic.deleteFilters(token, "incapacited");
    await TokenMagic.addUpdateFiltersOnSelected(params); //aplica
  })()  
}

