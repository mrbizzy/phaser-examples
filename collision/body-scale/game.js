// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var sprite, sprite2, gPreload, gCreate, gUpdate, gRender, g;
  gPreload = function(){
    g.load.spritesheet('gameboy', '../../../phaser/examples/assets/sprites/gameboy_seize_color_40x60.png', 40, 60);
  };
  gCreate = function(){
    g.stage.backgroundColor = '#124184';
    sprite = g.add.sprite(200, 300, 'gameboy', 2);
    sprite.name = 'green';
    sprite.anchor.setTo(0.5, 0.5);
    sprite.body.immovable = true;
    sprite2 = g.add.sprite(600, 270, 'gameboy', 3);
    sprite2.name = 'yellow';
    sprite2.body.rebound = false;
    sprite2.body.velocity.x = -200;
    g.add.tween(sprite.scale).to({
      x: 3,
      y: 3
    }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
  };
  gUpdate = function(){
    g.physics.collide(sprite, sprite2);
  };
  gRender = function(){
    g.debug.renderPhysicsBody(sprite.body);
    g.debug.renderPhysicsBody(sprite2.body);
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate,
    render: gRender
  });
}).call(this);
