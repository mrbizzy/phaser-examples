// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var baseIncSpeed, preload, create, resetAlpha, render, g;
  baseIncSpeed = 0.006;
  preload = function(){
    return g.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);
  };
  create = function(){
    var i$, i;
    for (i$ = 0; i$ < 3; ++i$) {
      i = i$;
      g.add.sprite(290, 98 * (i + 1), 'item', i).alphaIncSpeed = baseIncSpeed * (i + 1);
      g.add.sprite(388, 98 * (i + 1), 'item', i + 3).alphaIncSpeed = baseIncSpeed * (i + 45);
    }
    return g.input.onTap.add(resetAlpha, this);
  };
  resetAlpha = function(){
    return g.world.setAll('alpha', Math.random());
  };
  render = function(){
    return g.debug.renderText("Click an item to randomize alpha", 240, 480);
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create,
    render: render
  });
}).call(this);
