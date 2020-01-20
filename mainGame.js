var phaserGame = {};
var centerX = 1366/2;
var centerY = 768/2;
var manager; //main character
var vel = 200;
phaserGame.mainGame = function() {};
phaserGame.mainGame.prototype = {
    preload: function() {
        game.load.spritesheet('manager', 'spritesheets/dzida.png',150 ,117);
    },
    create: function() {
        game.stage.backgroundColor = "#DCDCDC";
        console.log('State 0');
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
        game.physics.startSystem(Phaser.Physics.ARCADE);

        manager = game.add.sprite(centerX, centerY, 'manager');
        manager.anchor.x = 0.5;
        manager.anchor.y = 0.5;
        game.physics.enable(manager);
        manager.body.collideWorldBounds = true;
        manager.animations.add('walkDown', [0,1,2,3,4,5,6]);
        manager.animations.add('walkUp', [11,12,13,14,15,16,17]);
        manager.animations.add('walkLeft', [22,23,24,25,26,27,28]);
        manager.animations.add('walkRight', [33,34,35,36,37,38,39]);
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function() {
        if(cursors.left.isDown){
            manager.body.velocity.x = -vel;
            manager.animations.play('walkLeft',15,true);
        }
         else if(cursors.right.isDown){
            manager.body.velocity.x = vel;
            manager.animations.play('walkRight',15,true);
        }else {
            manager.body.velocity.x = 0;
        }
        if(cursors.up.isDown){
            manager.body.velocity.y = -vel;
            manager.animations.play('walkUp',15,true);
        }
         else if(cursors.down.isDown){
            manager.body.velocity.y = vel;
            manager.animations.play('walkDown',15,true);
        }else {
            manager.body.velocity.y = 0;
        }
        if((cursors.left.isUp)&&(cursors.right.isUp)&&(cursors.up.isUp)&&(cursors.down.isUp)){
            manager.animations.stop('walkLeft');
            manager.animations.stop('walkRight');
            manager.animations.stop('walkUp');
            manager.animations.stop('walkDown');
        }
    }
}