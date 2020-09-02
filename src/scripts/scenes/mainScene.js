import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.renderJoystick()
    this.renderPlayer()
  }

  renderPlayer() {
    const { width, height } = this.cameras.main
    this.player = this.physics.add.image(width / 2, height / 2, 'player')
    this.setScale(this.player, 1, 0.55)
    this.player.setOrigin(0.5)
  }

  renderJoystick() {
    const { width, height } = this.cameras.main

    let x, y
    if (width > 767) {
      // tablet and desktop
      x = width / 7
      y = height / 1.25
    } else {
      // mobile
      x = width / 6.5
      y = height / 1.4
    }
    this.baseJoystick = this.physics.add.image(x, y, 'base')
    this.controller = this.physics.add.image(x, y, 'controller')
    this.setScale(this.baseJoystick, 1.25, 0.7)
    this.setScale(this.controller, 1.25, 0.7)
  }

  setScale(sprite, tablet, mobile) {
    const { width } = this.cameras.main
    if (width > 767) {
      sprite.setScale(tablet)
    } else {
      sprite.setScale(mobile)
    }
  }

  update() {}
}
