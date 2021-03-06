// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var assets, emitter, gPreload, gCreate, gUpdate, gRender, g;
  assets = '../../../phaser/examples/assets/';
  gPreload = function(){
    g.load.image('carrot', assets + 'sprites/carrot.png');
    g.load.image('star', assets + 'misc/star_particle.png');
    g.load.image('diamond', assets + 'sprites/diamond.png');
  };
  gCreate = function(){
    emitter = g.add.emitter(g.world.centerX, 200, 200);
    emitter.makeParticles(['diamond', 'carrot', 'star']);
    emitter.start(false, 5000, 20);
  };
  gUpdate = function(){};
  gRender = function(){};
  g = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate,
    render: gRender
  });
}).call(this);
