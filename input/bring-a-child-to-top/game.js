// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var map, gameImages, gamePreload, gameCreate, addRandomSprite, gameRender, game;
  map = require('prelude-ls').map;
  gamePreload = function(){
    game.load.image('image-atari1', 'assets/sprites/atari130xe.png');
    game.load.image('image-atari2', 'assets/sprites/atari800xl.png');
    game.load.image('image-atari4', 'assets/sprites/atari800.png');
    game.load.image('image-sonic', 'assets/sprites/sonic_havok_sanity.png');
    game.load.image('image-duck', 'assets/sprites/darkwing_crazy.png');
    game.load.image('image-firstaid', 'assets/sprites/firstaid.png');
    game.load.image('image-diamond', 'assets/sprites/diamond.png');
    return game.load.image('image-mushroom', 'assets/sprites/mushroom2.png');
  };
  gameCreate = function(){
    gameImages = game.cache.getImageKeys();
    return map(function(it){
      return addRandomSprite(gameImages);
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  };
  addRandomSprite = function(spriteImages){
    var image, sprite;
    image = game.rnd.pick(spriteImages);
    sprite = game.add.sprite(game.world.randomX, game.world.randomY, image);
    sprite.inputEnabled = true;
    return sprite.input.enableDrag(false, true);
  };
  gameRender = function(){
    return game.debug.renderInputInfo(32, 32);
  };
  game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gamePreload,
    create: gameCreate,
    render: gameRender
  });
}).call(this);
