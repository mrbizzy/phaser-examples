// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var map, grpFriends, grpEnemies, grpNormalMobs, grpPurpleMobs, preload, create, render, createMob, g;
  map = require('prelude-ls').map;
  preload = function(){
    g.load.image('sprite-ufo', 'assets/sprites/ufo.png');
    g.load.image('sprite-normal-mob', 'assets/sprites/space-baddie.png');
    return g.load.image('sprite-purple-mob', 'assets/sprites/space-baddie-purple.png');
  };
  create = function(){
    grpFriends = g.add.group();
    grpEnemies = g.add.group();
    grpNormalMobs = g.add.group();
    grpPurpleMobs = g.add.group();
    grpEnemies.add(grpNormalMobs._container);
    grpEnemies.add(grpPurpleMobs._container);
    grpFriends.create(200, 240, 'sprite-ufo');
    map(createMob, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    return g.input.onTap.add(createMob, this);
  };
  render = function(){
    g.debug.renderText('Tap screen or click to create new baddies', 16, 24);
    g.debug.renderText("grp-enemies: " + grpEnemies.length + " (actually " + grpEnemies.length + " groups)", 16, 48);
    g.debug.renderText("grp-normal-mobs: " + grpNormalMobs.length, 16, 60);
    g.debug.renderText("grp-purple-mobs: " + grpPurpleMobs.length, 16, 72);
    return g.debug.renderText("grp-friends:: " + grpFriends.length, 16, 96);
  };
  createMob = function(){
    var x, y;
    x = 360 + Math.random() * 200;
    y = 120 + Math.random() * 200;
    if (Math.random() > 0.5) {
      return grpNormalMobs.create(x, y, 'sprite-normal-mob');
    } else {
      return grpPurpleMobs.create(x, y, 'sprite-purple-mob');
    }
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create,
    render: render
  });
}).call(this);