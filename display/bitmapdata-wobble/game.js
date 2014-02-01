// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var game, bmd, waveSize, wavePixelChunk, waveData, waveDataCounter, updateWobblyBall;
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
  });
  function preload(){
    return game.load.image('ball', 'assets/sprites/shinyball.png');
  }
  waveSize = 8;
  wavePixelChunk = 2;
  function create(){
    var i$, i;
    bmd = game.add.bitmapData('ball', 32, 64);
    for (i$ = 0; i$ < 100; ++i$) {
      i = i$;
      game.add.sprite(game.world.randomX, game.world.randomY, bmd);
    }
    return waveData = game.math.sinCosGenerator(32, 8, 8, 2);
  }
  function update(){
    bmd.clear();
    return updateWobblyBall();
  }
  updateWobblyBall = function(){
    var s, copyRect, copyPoint, i$, step$, i;
    s = 0;
    copyRect = {
      x: 0,
      y: 0,
      w: wavePixelChunk,
      h: 32
    };
    copyPoint = {
      x: 0,
      y: 0
    };
    for (i$ = 0, step$ = wavePixelChunk; step$ < 0 ? i$ > 32 : i$ < 32; i$ += step$) {
      i = i$;
      copyPoint.x = x;
      copyPoint.y = waveSize + waveSize / 2 + waveData.sin[s];
      bmd.context.drawImage(game.cache.getImage('ball', copyRect.x, copyRect.y, copyRect.w, copyRect.h, copyPoint.x, copyPoint.y, copyRect.w, copyRect.h));
      copyRect.x += wavePixelChunk;
      s++;
    }
    bnd.render();
    game.math.shift(waveData.sin);
    waveDataCounter++;
    if (waveDataCounter === waveData.length) {
      return waveDataCounter = 0;
    }
  };
}).call(this);
