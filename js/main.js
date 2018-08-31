(function() {
  var container = document.getElementById('particle-container'),
      particle = new Particles(container),
      viewPortWd = document.documentElement.clientWidth,
      theme = container.dataset.theme,
      size = Number(container.dataset.size),
      maxParticles = Math.floor(viewPortWd/size) - 10,
      numParticles = 10 + Math.floor(Math.random()*maxParticles),
      i, ran, speed, sizeVar, lastRan = 0;
  
  console.log(viewPortWd, maxParticles, numParticles);

  for(i = 0; i < numParticles; i++){
    ran = Math.random().toFixed(2);
    ran = (lastRan == ran) ? Math.random().toFixed(2) : ran;
    lastRan = ran;

    sizeVar = 2 + Math.floor(size*(1-ran));
    speed = (1 + 4*ran).toFixed(2);
    //particle.triangle(sizeVar, sizeVar, speed, randomColor(theme));
    //particle.rectangle(sizeVar, sizeVar, speed, randomColor(theme));
    particle.plus(sizeVar, speed, randomColor(theme));
    //particle.flakes(sizeVar, speed, randomColor(theme));
    //particle.word(sizeVar, sizeVar, sizeVar , speed, randomColor(theme), randomLetters());
    //particle.word(sizeVar, sizeVar, sizeVar , speed, randomColor(theme), "A");
  }
})();