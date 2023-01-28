const tokens = canvas.tokens.controlled;
const soundToPlay = 'modules/savage-pathfinder-enhanced/assets/sfx/Magic_Spell_2.ogg';
const sound_volume = 0.7; 

// await new Promise(r => setTimeout(r, 6000)); // wait 6s

for (var tokenD of tokens) {
  animation(tokenD);
}

async function animation(tokenD) {
  new Sequence()
  .animation()
  .on(tokenD)
  .opacity(0)
  .hide()

  .effect()
  .atLocation(tokenD, {
    offset: {
      y: -1.25
    },
    gridUnits: true
  })
  .shape("ellipse", {
    width: 0.75,
    height: 0.25,
    gridUnits: true,
    fillColor: "#ffffff",
    isMask: true,
    offset: {
      y: 0.25,
      gridUnits: true
    }
  })
  .file("jb2a.arms_of_hadar.dark_red")
  .animateProperty("sprite", "scale.x", {
    from: 0.75,
    to: 0,
    duration: 750,
    fromEnd: true,
    ease: "easeInOutElastic"
  })
  .animateProperty("sprite", "scale.y", {
    from: 0.75,
    to: 0,
    duration: 750,
    fromEnd: true,
    ease: "easeInOutElastic"
  })
  .scale(0.75)
  .duration(6250)
  .fadeOut(500)
  .zIndex(-1)
  .fadeIn(250)

  .sound(soundToPlay)
   .volume(sound_volume)

  .effect()
  .atLocation(tokenD, {
    offset: {
      y: -1
    },
    gridUnits: true
  })
  .scale(0.75)
  .file("jb2a.portals.vertical.ring_masked.dark_red")
  .animateProperty("sprite", "scale.x", {
    from: 0.75,
    to: 0,
    duration: 750,
    fromEnd: true,
    ease: "easeInOutElastic"
  })
  .animateProperty("sprite", "scale.y", {
    from: 0.75,
    to: 0,
    duration: 750,
    fromEnd: true,
    ease: "easeInOutElastic"
  })
  .zIndex(-500)
  .duration(6250)
  .fadeOut(500)
  .zIndex(1)
  .fadeIn(250)
  .name("portal")

  .effect()
  .atLocation(tokenD, {
    offset: {
      y: -1
    },
    gridUnits: true
  })
  .file("jb2a.explosion.02.orange")
  .startTimePerc(0.25)
  .scale({
    x: 0.5,
    y: 0.25
  })
  .delay(5800)

  .wait(2000)

  .effect()
  .from(tokenD, {
    offset: {
      y: -2
    },
    gridUnits: true
  })
  .animateProperty("sprite", "position.y", {
    from: 0.25,
    to: 2,
    duration: 2000,
    gridUnits: true,
    ease: "easeInOutSine"
  })
  .shape("circle", {
    radius: 1,
    gridUnits: true,
    fillColor: "#ffffff",
    offset: {
      y: 1.75,
      gridUnits: true
    },
    isMask: true
  })
  .duration(2250)
  .fadeOut(250)
  .waitUntilFinished(-300)

  .animation()
  .on(tokenD)
  .opacity(1)
  .show()

  .play()
}