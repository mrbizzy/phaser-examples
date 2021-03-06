// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var game, button, onClick;
  game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create
  });
  function preload(){
    game.load.spritesheet('button', '../../../phaser/examples/assets/buttons/number-buttons-90x90.png', 90, 90);
    return game.load.image('background', '../../../phaser/examples/assets/misc/starfield.jpg');
  }
  function create(){
    game.stage.backgroundColor = '#182d3b';
    button = game.add.button(game.world.centerX, game.world.centerY, 'button', onClick, this, 1, 0, 2);
    return button.anchor.setTo(0.5, 0.5);
  }
  onClick = function(){
    return button.setFrames(4, 3, 5);
  };
}).call(this);
