// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var game, background, btn1, btn2, btn3, btn4, btn5, btn6, changeSky;
  game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create,
    render: render
  });
  function preload(){
    game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
    game.load.image('sky0', 'assets/skies/space2.png');
    game.load.image('sky1', 'assets/skies/cavern1.png');
    game.load.image('sky2', 'assets/skies/chrome.png');
    game.load.image('sky3', 'assets/skies/fire.png');
    game.load.image('sky4', 'assets/skies/fog.png');
    game.load.image('sky5', 'assets/skies/sky1.png');
    return game.load.image('sky6', 'assets/skies/toxic.png');
  }
  function create(){
    background = game.add.sprite(0, 0, 'sky0');
    background.name = 'background';
    btn1 = game.add.button(100, 100, 'button', changeSky, this, 2, 1, 0);
    btn1.name = 'sky1';
    btn1.anchor.setTo(0.5, 0.5);
    btn2 = game.add.button(330, 200, 'button', changeSky, this, 2, 1, 0);
    btn2.name = 'sky2';
    btn2.angle = 24;
    btn2.anchor.setTo(0.5, 0.5);
    btn3 = game.add.button(100, 300, 'button', changeSky, this, 2, 1, 0);
    btn3.name = 'sky3';
    btn3.width = 300;
    btn3.anchor.setTo(0.5, 0.5);
    btn4 = game.add.button(300, 450, 'button', changeSky, this, 2, 1, 0);
    btn4.name = 'sky4';
    btn4.scale.setTo(2, 2);
    btn5 = game.add.button(100, 450, 'button', changeSky, this, 2, 1, 0);
    btn5.name = 'sky5';
    btn5.scale.setTo(0.5, 0.5);
    btn6 = game.add.button(570, 200, 'button', changeSky, this, 2, 1, 0);
    btn6.name = 'sky6';
    btn6.angle = 32;
    btn6.scale.setTo(2, 2);
    game.world.setBounds(0, 0, 2000, 2000);
    game.world.angle = 3;
    return game.camera.x = 40;
  }
  changeSky = function(button){
    return background.loadTexture(button.name);
  };
  function render(){
    return game.debug.renderSpriteCorners(btn1, false, true);
  }
}).call(this);
