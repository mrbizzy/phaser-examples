// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var game, tiles, sprite, carryOn, collisionHandler;
  game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
  });
  function preload(){
    game.load.spritesheet('tiles', 'assets/tiles/platformer_tiles.png', 16, 16);
    return game.load.image('carrot', 'assets/sprites/carrot.png');
  }
  function create(){
    var i$, i, tile;
    game.stage.backgroundColor = '#2d2d2d';
    tiles = game.add.group();
    for (i$ = 0; i$ < 40; ++i$) {
      i = i$;
      tile = tiles.create(100 + i * 16, 300, 'tiles', 4);
      tile.body.immovable = true;
    }
    sprite = game.add.sprite(300, 150, 'carrot');
    sprite.name = 'mushroom';
    sprite.body.collideWorldBounds = true;
    sprite.body.velocity.x = 40;
    sprite.body.velocity.y = 120;
    sprite.body.bounce.setTo(1, 1);
    return game.input.onDown.add(carryOn, this);
  }
  carryOn = function(){
    return game.paused = false;
  };
  function update(){
    return game.physics.collide(sprite, tiles, collisionHandler, null, this);
  }
  collisionHandler = function(sprite, tile){
    tile.alpha = 0.5;
    console.log('---------------------------------------------');
    console.log(tile.body);
    return game.paused = true;
  };
  function render(){
    return game.debug.renderSpriteBody(sprite);
  }
}).call(this);