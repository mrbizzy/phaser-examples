// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var assets, music, gPreload, gCreate, gUpdate, gRender, g;
  assets = '../../../phaser/examples/assets/';
  gPreload = function(){
    g.load.audio('boden', [assets + 'audio/bodenstaendig_2000_in_rock_4bit.mp3', assets + 'audio/bodenstaendig_2000_in_rock_4bit.ogg']);
  };
  gCreate = function(){
    g.stage.backgroundColor = '#182d3b';
    music = g.sound.play('boden');
  };
  gUpdate = function(){};
  gRender = function(){
    g.debug.renderSoundInfo(music, 32, 32);
    if (music.isDecoding) {
      g.debug.renderText("Decoding MP3 ...", 32, 200);
    }
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate,
    render: gRender
  });
}).call(this);
