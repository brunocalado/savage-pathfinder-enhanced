const variaParaCima = +0.15;  // quanto se move para cima
const variaParaBaixo = -0.15; // quanto se move para baixo
const velocidade = 5500;      // quanto maior, mais lenta a animação

let myToken = canvas.tokens.controlled[0]

// ------------------------------------------------
const params =
    [{
        filterType: "transform",
        filterId: "myTransform",
        padding: 30,
        animated:
        {
            translationY: {
                animType: "sinOscillation",
                val1: variaParaBaixo,
                val2: variaParaCima,
                loopDuration: 5500
            }           
        }
    }];

const params2 =
[{
    filterType: "shadow",
    filterId: "myShadow",
    rotation: 35,
    blur: 2,
    quality: 5,
    distance: 20,
    alpha: 0.7,
    padding: 10,
    shadowOnly: false,
    color: 0x000000,
    zOrder: 6000,
    animated:
    {
        blur:     
        { 
           active: true, 
           loopDuration: 500, 
           animType: "syncCosOscillation", 
           val1: 2, 
           val2: 4
        },
        rotation:
        {
           active: true,
           loopDuration: 100,
           animType: "syncSinOscillation",
           val1: 33,
           val2: 37
        }
     }
}];


if ( TokenMagic.hasFilterType(myToken, "transform") ) {
  await TokenMagic.deleteFiltersOnSelected(); // Delete all filters on the selected tokens/tiles
} else {
  (async () => { 
    await TokenMagic.deleteFiltersOnSelected(); // Delete all filters on the selected tokens/tiles
    await TokenMagic.addUpdateFiltersOnSelected(params); //aplica
    await TokenMagic.addUpdateFiltersOnSelected(params2);
  })()  
}

