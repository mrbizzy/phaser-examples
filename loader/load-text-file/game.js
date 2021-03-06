// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var assets, text, gPreload, gCreate, gUpdate, gRender, g;
  assets = '../../../phaser/examples/assets/';
  gPreload = function(){
    g.load.text('html', 'http://phaser.io');
  };
  gCreate = function(){
    var html;
    g.stage.backgroundColor = '#0072bc';
    html = g.cache.getText('html');
    text = html.split('\n');
  };
  gUpdate = function(){};
  gRender = function(){
    var i$, i;
    for (i$ = 0; i$ < 30; ++i$) {
      i = i$;
      g.debug.renderText(text[i], 32, i * 20);
    }
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate,
    render: gRender
  });
}).call(this);
