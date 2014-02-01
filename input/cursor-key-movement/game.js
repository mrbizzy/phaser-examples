// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var cursors, gPreload, gCreate, gUpdate, gRender, game;
  gPreload = function(){
    game.stage.backgroundColor = '#007236';
    game.load.image('image-mushroom', 'assets/sprites/mushroom2.png');
    return game.load.image('image-phaser', 'assets/sprites/sonic_havok_sanity.png');
  };
  gCreate = function(){
    var i$, i;
    game.world.setBounds(0, 0, 1600, 1200);
    for (i$ = 0; i$ < 100; ++i$) {
      i = i$;
      game.add.sprite(game.world.randomX, game.world.randomY, 'image-mushroom');
    }
    return cursors = game.input.keyboard.createCursorKeys();
  };
  gUpdate = function(){
    if (cursors.up.isDown) {
      if (cursors.up.shiftKey) {
        game.world.rotation += 0.05;
      } else {
        game.camera.y -= 4;
      }
    } else if (cursors.down.isDown) {
      if (cursors.down.shiftKey) {
        game.world.rotation -= 0.05;
      } else {
        game.camera.y += 4;
      }
    }
    if (cursors.left.isDown) {
      return game.camera.x -= 4;
    } else if (cursors.right.isDown) {
      return game.camera.x += 4;
    }
  };
  gRender = function(){
    return game.debug.renderCameraInfo(game.camera, 32, 32);
  };
  game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate,
    render: gRender
  });
}).call(this);
