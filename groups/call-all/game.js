// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var ref$, map, each, preload, create, render, createItems, createKillableSprite, kill, reviveAll, g;
  ref$ = require('prelude-ls'), map = ref$.map, each = ref$.each;
  preload = function(){
    g.load.spritesheet('item', '../../../phaser/examples/assets/buttons/number-buttons-90x90.png', 90, 90);
    return g.load.image('revive-button', '../../../phaser/examples/assets/buttons/revive-button.png');
  };
  create = function(){
    map(createItems, [0, 1, 2]);
    return g.add.button(270, 400, 'revive-button', reviveAll, this, 0, 0, 0);
  };
  render = function(){
    return g.debug.renderText('Tap or click an item to kill it, and press the revive button to revive them all', 80, 500);
  };
  createItems = function(i){
    createKillableSprite(290, 98, i, 0);
    return createKillableSprite(388, 98, i, 3);
  };
  createKillableSprite = function(x, y, i, j){
    var item;
    item = g.add.sprite(x, y * (i + 1), 'item', i + j);
    item.input.start(0, true);
    return item.events.onInputUp.add(kill);
  };
  kill = function(item){
    return item.kill();
  };
  reviveAll = function(){
    return g.world.callAll('revive');
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create,
    render: render
  });
}).call(this);
