// different animation 'easings': https://easings.net
// import anime from 'node_modules/animejs/lib/anime.es.js';
// changes original shape's radius
anime({
  targets: "#bottoml", //secondl on grid
  backgroundColor: "#FFF",
  borderRadius: ["0%", "50%"],
  easing: "easeInOutQuad", //kind of easing animation
  duration: 3000, //duration of animation
  direction: "alternate", //iterate once all the way through
  loop: true, //loop iteration
});

//changes size of shape
anime({
  targets: "#top", //first on grid
  scale: {
    value: 2, //scale value
    duration: 1600,
    delay: 800, //delay current state
    easing: "easeOutBounce",
  },
  loop: true,
});

//rotates shape
anime({
  targets: "#bottom", //second on grid
  rotate: {
    value: 360,
    duration: 5000,
    delay: 500,
    easing: "easeInBack",
  },
  loop: true,
});

//moves shape with keyframes
anime({
  targets: "#topr", //firstr on grid
  keyframes: [
    //x and y movement
    { translateY: -60 },
    { translateX: 225 },
    { translateY: 60 },
    { translateX: 0 },
    { translateY: -50 },
  ],
  duration: 4000,
  easing: "easeOutElastic(1, .8)", // parameters are amplitude (Controls the overshoot of the curve.),period (how many times the curve goes back and forth)
  direction: "alternate", //forward and back
  loop: true,
});
