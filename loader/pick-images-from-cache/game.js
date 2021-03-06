// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var assets, gPreload, gCreate, gUpdate, gRender, g;
  assets = '../../../phaser/examples/assets/';
  gPreload = function(){
    g.load.image('atari1', assets + 'sprites/atari130xe.png');
    g.load.image('atari2', assets + 'sprites/atari800xl.png');
    g.load.image('atari4', assets + 'sprites/atari800.png');
    g.load.image('sonic', assets + 'sprites/sonic_havok_sanity.png');
    g.load.image('duck', assets + 'sprites/darkwing_crazy.png');
    g.load.image('firstaid', assets + 'sprites/firstaid.png');
    g.load.image('diamond', assets + 'sprites/diamond.png');
    g.load.image('mushroom', assets + 'sprites/mushroom2.png');
  };
  gCreate = function(){
    var images, i$, i, img, tmpSprite;
    images = g.cache.getImageKeys();
    for (i$ = 0; i$ < 20; ++i$) {
      i = i$;
      img = g.rnd.pick(images);
      tmpSprite = g.add.sprite(g.world.randomX, g.world.randomY, img);
      tmpSprite.inputEnabled = true;
      tmpSprite.input.enableDrag(false, true);
    }
  };
  gUpdate = function(){};
  gRender = function(){
    g.debug.renderInputInfo(32, 32);
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate,
    render: gRender
  });
}).call(this);
