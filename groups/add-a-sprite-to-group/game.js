// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var game, friendAndFoe, enemies;
  game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create
  });
  function preload(){
    game.load.image('ufo', 'assets/sprites/ufo.png');
    return game.load.image('baddie', 'assets/sprites/space-baddie.png');
  }
  function create(){
    var friendAndFoe, enemies, i$, i, x, y, ufo;
    friendAndFoe = game.add.group();
    enemies = game.add.group();
    for (i$ = 0; i$ < 16; ++i$) {
      i = i$;
      x = 320 + Math.random() * 200;
      y = 120 + Math.random() * 200;
      enemies.create(x, y, 'baddie');
    }
    ufo = game.add.sprite(200, 240, 'ufo');
    return friendAndFoe.add(ufo);
  }
}).call(this);
