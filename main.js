var game = new Phaser.Game(1366, 768, Phaser.AUTO);
game.state.add('mainGame', phaserGame.mainGame);

game.state.start('mainGame');