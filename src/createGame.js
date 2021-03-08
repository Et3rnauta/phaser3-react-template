import { gameWidth, gameHeight } from './config/game.config'
import MyScene from './views/MyScene';

const gameConfig = {
    type: Phaser.AUTO,
    parent: "phaser",
    width: gameWidth,
    height: gameHeight,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: MyScene,
    pixelArt: true,
}

export default function createGame() {
    const game = new Phaser.Game(gameConfig);
    return game;
}