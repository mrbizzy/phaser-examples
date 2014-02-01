// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var map, baseAlphaIncSpeed, preload, create, update, render, createSprites, createSprite, g;
  map = require('prelude-ls').map;
  baseAlphaIncSpeed = 0.006;
  preload = function(){
    return g.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);
  };
  create = function(){
    return map(createSprites, [0, 1, 2]);
  };
  update = function(){
    return g.world.forEach(function(item){
      item.alpha -= item.alphaIncSpeed;
      if (item.alpha < 0.01 || item.alpha > 0.99) {
        return item.alphaIncSpeed *= -1;
      }
    });
  };
  render = function(){
    return g.debug.renderText('Alpha of the items are always changing', 280, 480);
  };
  createSprites = function(i){
    createSprite(i, 0);
    return createSprite(i, 3);
  };
  createSprite = function(i, displacement){
    var s;
    s = g.add.sprite(290 + 33 * displacement, 98 * (i + 1), 'item', i + displacement);
    s.alpha = Math.random().toFixed(2);
    return s.alphaIncSpeed = baseAlphaIncSpeed;
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
  });
}).call(this);
