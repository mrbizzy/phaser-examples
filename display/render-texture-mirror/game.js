// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var game, ball, texture;
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
  });
  function preload(){
    return game.load.image('ball', '../../../phaser/examples/assets/sprites/pangball.png');
  }
  function create(){
    texture = game.add.renderTexture('mousetrail', 800, 600);
    ball = game.add.sprite(0, 0, 'ball');
    ball.visible = false;
    ball.anchor.setTo(0.5, 0.5);
    return game.add.sprite(0, 0, texture);
  }
  function update(){
    texture.renderXY(ball, game.input.activePointer.x, game.input.activePointer.y, false);
    return texture.renderXY(ball, game.input.activePointer.x, 600 - game.input.activePointer.y, false);
  }
}).call(this);
