// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var sprite, bullet, bullets, bulletTime, gPreload, gCreate, gUpdate, bulletFire, bulletReset, game;
  bulletTime = 0;
  gPreload = function(){
    game.load.image('image-phaser', 'assets/sprites/phaser-dude.png');
    game.load.image('image-bullet', 'assets/misc/bullet0.png');
  };
  gCreate = function(){
    game.stage.backgroundColor = '#2d2d2d';
    bullets = game.add.group();
    bullets.createMultiple(10, 'image-bullet');
    bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', bulletReset, this);
    sprite = game.add.sprite(400, 550, 'image-phaser');
    game.input.keyboard.addKeyCapture([Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR]);
  };
  gUpdate = function(){
    sprite.body.velocity.x = 0;
    sprite.body.velocity.y = 0;
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      sprite.body.velocity.x = -200;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      sprite.body.velocity.x = 200;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      bulletFire(3);
    }
  };
  bulletFire = function(roundsPerSecond){
    if (game.time.now > bulletTime) {
      bullet = bullets.getFirstExists(false);
      if (bullet) {
        bullet.reset(sprite.x + 6, sprite.y - 8);
        bullet.body.velocity.y = -300;
        return bulletTime = game.time.now + 1000 / roundsPerSecond;
      }
    }
  };
  bulletReset = function(bullet){
    return bullet.kill();
  };
  game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate
  });
}).call(this);
