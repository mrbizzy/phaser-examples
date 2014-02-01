// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var map, spriteAtari1, spriteAtari2, gamePreload, gameCreate, gameRender, swapSprites, game;
  map = require('prelude-ls').map;
  gamePreload = function(){
    game.load.image('image-atari1', 'assets/sprites/atari130xe.png');
    return game.load.image('image-atari2', 'assets/sprites/atari800xl.png');
  };
  gameCreate = function(){
    spriteAtari1 = game.add.sprite(100, 100, 'image-atari1');
    spriteAtari2 = game.add.sprite(250, 90, 'image-atari2');
    return game.input.onTap.add(swapSprites, this);
  };
  gameRender = function(){
    return game.debug.renderText('Tap screen to swap the children (and therefore their indexes)', 10, 280);
  };
  swapSprites = function(){
    return game.world.swap(spriteAtari1, spriteAtari2);
  };
  game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gamePreload,
    create: gameCreate,
    render: gameRender
  });
}).call(this);