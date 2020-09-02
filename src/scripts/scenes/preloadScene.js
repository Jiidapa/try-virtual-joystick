export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('base', 'assets/img/base.png')
    this.load.image('controller', 'assets/img/controller.png')
    this.load.image('player', 'assets/img/rocket.png')
  }

  create() {
    this.scene.start('MainScene')
  }
}
