// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var map, items, preload, create, render, dropHandler, g;
  map = require('prelude-ls').map;
  preload = function(){
    g.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);
    return g.load.image('rect', 'assets/tests/200x100corners.png');
  };
  create = function(){
    var i$, i, item;
    items = g.add.group();
    for (i$ = 0; i$ < 6; ++i$) {
      i = i$;
      item = items.create(90, 90 * i, 'item', i);
      item.input.start(0, true);
      item.input.enableDrag();
      item.input.enableSnap(90, 90, false, true);
      item.events.onDragStop.add(dropHandler);
    }
    return function(it){
      return it.scale.setTo(2.0, 3.0);
    }(
    g.add.sprite(390, 0, 'rect'));
  };
  render = function(){
    g.debug.renderText("Size of group " + items.length, 100, 560);
    return g.debug.renderText("Drop here to cut items from group entirely.", 390, 24);
  };
  dropHandler = function(item, pointer){
    if (item.x < 90) {
      return item.x = 90;
    } else if (item.x > 400) {
      items.remove(item);
      return console.log("Group length: " + items.length);
    }
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create
  });
}).call(this);