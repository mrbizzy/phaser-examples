// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var assets, gPreload, gCreate, gUpdate, gRender, g;
  assets = '../../../phaser/examples/assets/';
  gPreload = function(){
    g.load.spritesheet('unique-key', assets + 'sprites/metalslug_mummy37x45.png', 37, 45, 18);
  };
  gCreate = function(){
    var sprite;
    sprite = g.add.sprite(0, 0, 'unique-key');
    sprite.animations.add('walk');
    sprite.animations.play('walk', 50, true);
  };
  gUpdate = function(){};
  gRender = function(){};
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate,
    render: gRender
  });
}).call(this);