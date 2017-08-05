import anime from 'animejs';

// define animations which can be handle by animejs

export function enterSample1(flake, metadata = {}, finishCallback) {
  anime({
    targets: flake,
    translateX: function(el) {
      return anime.random(-500, 500);
    },
    translateY: function(el, i) {
      return anime.random(-500, 500);
    },
    scale: function(el, i, l) {
      return anime.random(0.7, 2.0);
    },
    rotate: function(el, i) {
      return anime.random(-1000, 1000);
    },
    duration: function() { return anime.random(1200, 1800); },
    duration: function() { return anime.random(800, 1600); },
    delay: function() { return anime.random(0, 1000); },
    direction: metadata.direction | 'alternate', 
    loop: metadata.loop | 1
  });
}

export function enterSample2(flake, metadata = {}, finishCallback) {
  anime.timeline({ 
    direction: metadata.direction | 'alternate', 
    loop: metadata.loop | 1
  })
  .add({
    targets: flake,
    translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
    translateY: [ { value: 30 }, { value: 60 }, { value: 60 } ],
    duration: 3000
  })
  .add({
    targets: flake,
    translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
    translateY: [ { value: 30 }, { value: -30 }, { value: -30 } ],
    duration: 3000,
    offset: 200
  })
  .add({
    targets: flake,
    translateX: [ { value: 80 }, { value: 250 } ],
    translateY: [ { value: -60 }, { value: -30 }, { value: -30 } ],
    duration: 3000,
    offset: 400
  });
}

export function enterSample3(flake, metadata = {}, finishCallback) {
  const timeline = anime.timeline();
  timeline.add({
    targets: flake,
    opacity: [ 0, 1],
    duration: 5000,
    delay: function (el, i, l) {
      return i * 2000
    },
    direction: 'alternate', 
    loop: true
  });
}

export function leaveSample1(flake, metadata = {}, finishCallback) {
  anime.timeline().add({
    targets: flake,
    duration: 700,
    opacity: [1, 0],
    translateY: -30,
    delay: function (el, i, l) {
      return i * 100
    }
  })
  .add({
    targets: flake,
    translateX: 1000,
    opacity: [1, 0],
    duration: 1000,
    complete: finishCallback,
    offset: '-=200'
  });
}
