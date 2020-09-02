import 'phaser'
import '@babel/polyfill'
import VirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick-plugin.js'

import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'

const DEFAULT_WIDTH = document.documentElement.clientWidth
const DEFAULT_HEIGHT = document.documentElement.clientHeight

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  },
  plugins: {
    global: [
      {
        key: 'VirtualJoystick',
        plugin: VirtualJoystickPlugin,
        mapping: 'joystickPlugin'
      }
    ]
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
