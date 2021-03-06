// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var game, boss, button, clickedIt;
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create
  });
  function preload(){
    game.load.image('boss', '../../../phaser/examples/assets/misc/boss1.png');
    return game.load.spritesheet('button', '../../../phaser/examples/assets/buttons/button_sprite_sheet.png', 193, 71);
  }
  function create(){
    boss = game.add.sprite(game.world.centerX, game.world.centerY, 'boss');
    boss.scale.setTo(0.5, 0.5);
    boss.anchor.setTo(0.5, 0.5);
    return button = game.add.button(32, 32, 'button', clickedIt, this, 2, 1, 0);
  }
  clickedIt = function(){
    boss.scale.x += 0.5;
    return boss.scale.y += 0.5;
  };
}).call(this);
