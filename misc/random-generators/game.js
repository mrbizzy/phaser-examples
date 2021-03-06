// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var assets, gPreload, gCreate, gUpdate, gRender, g;
  assets = '../../../phaser/examples/assets/';
  gPreload = function(){};
  gCreate = function(){
    var style;
    g.stage.backgroundColor = '#454545';
    style = {
      font: '14px Arial',
      fill: '#ff0044',
      align: 'center'
    };
    g.add.text(10, 20, g.rnd.integer());
    g.add.text(10, 50, g.rnd.frac());
    g.add.text(10, 80, g.rnd.real());
    g.add.text(10, 110, g.rnd.integerInRange(100, 200));
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
