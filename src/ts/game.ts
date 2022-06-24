// Import PIXI
import * as PIXI from 'pixi.js';

// Import Images
import backGround from '../images/background.jpg';
import itemImage from '../images/item.png'

// Import Classes
import { Clickable } from './clickable';

export class Game{
    // Globals
    private pixiWidth = 800;
    private pixiHeight = 500;
    private backColor = 0xAAAAAA;

    private pixi : PIXI.Application;
    private loader : PIXI.Loader;

    background : PIXI.Sprite;
    itemimage : PIXI.Sprite;

    public clickable  : Clickable;
    
    constructor(){
        // Create PIXI Stage
        this.pixi = new PIXI.Application({width: this.pixiWidth, height: this.pixiHeight, backgroundColor: this.backColor});
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        // Create Loader
        this.loader = new PIXI.Loader();
        this.loader
            .add('backGround', backGround)
            .add('item', itemImage);
        this.loader.load(()=>this.loadCompleted());
    }

    private loadCompleted(){
        // Add background to stage
        this.background = new PIXI.Sprite(this.loader.resources["backGround"].texture!);
        this.background.scale.set(1);
        this.pixi.stage.addChild(this.background);
        
        this.pixi.ticker.add((delta) => this.update(5));

        // Add 'coin'
        let coin = new PIXI.Sprite(this.loader.resources["item"].texture!);
        coin.scale.set(0.3);
        coin.x = 60;
        coin.y = 15;
        this.pixi.stage.addChild(coin);

        coin.interactive = true; 
        coin.buttonMode = true;
        coin.on('pointerdown', () => this.onClick());
    }

    // Add text on click
    onClick() {
        let text = new PIXI.Text('Dit is een afbeelding',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
        this.pixi.stage.addChild(text);
    }

    // Update function
    update(delta: number){ 

    }
}

// Start game
new Game();
