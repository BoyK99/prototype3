import * as PIXI from 'pixi.js';

import { Game } from './game';

export class Clickable extends PIXI.Sprite { 

    game: Game

    constructor(texture: PIXI.Texture) {
        super(texture)
        this.x = 400
        this.y = 200
        this.interactive = true  // make clickable
        this.buttonMode = true   // show hand cursor
        this.on('pointerdown', () => this.onClick())
    }

    onClick() {
        console.log("je klikt op een vis")
    }
}