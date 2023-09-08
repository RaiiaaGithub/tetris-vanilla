import { Position } from "./logic.js";

export class Block {
    size = 20;
    gap = 2;

    constructor(context = null, position = new Position(0, 0)) {
        this.context = context;
        this.position = position;
    }

    draw() {
        this.context.fillRect(
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
        );
    }

    redraw(position = new Position(this.position.x, this.position.y)) {
        this.context.clearRect(
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
        );
        this.position = position;
        this.draw();
    }
}

export class Tetromino {
    rotation = 0;

    constructor(context, blockType, position = new Position(0, 0), isRotatable = true) {
        this.context = context;
        this.blockType = blockType;
        this.position = position;
        this.isRotatable = isRotatable;

        this.updateBlockContext()
    }

    draw() {
        for(let i = 0; i < this.blockType.length; i++) {
            const block = this.blockType[i];

            if (block === null) {
                continue;
            }

            const blockSize = block.size;

            block.position = new Position(
                this.position.x + (i % 4 * blockSize),
                i < this.blockType.length / 2 ? this.position.y : this.position.y + blockSize
            );
            block.draw();
        }
    }

    redraw(position = new Position(0, 0)) {

        for(let i = 0; i < this.blockType.length; i++) {
            const block = this.blockType[i];

            if (block === null) {
                continue;
            }

            const blockSize = block.size;

            block.redraw(new Position(
                position.x + (i % 4 * blockSize ),
                i < this.blockType.length / 2 ? position.y : position.y + blockSize
            ))
        }
        this.position = position;
    }

    updateBlockContext() {
        for(let i = 0; i < this.blockType.length; i++) {
            const block = this.blockType[i];

            if (block === null) {
                continue;
            }

            this.blockType[i].context = this.context;
        }
    }
}

export const TETRIS_O = [
    null, new Block(), new Block(), null, 
    null, new Block(), new Block(), null
]

export const TETRIS_I = [
    new Block(), new Block(), new Block(), new Block(), 
    null, null, null, null
]

export const TETRIS_L = [
    new Block(), new Block(), new Block(), null, 
    new Block(), null, null, null
]

export const TETRIS_J = [
    new Block(), new Block(), new Block(), null, 
    null, null, new Block(), null
]

export const TETRIS_S = [
    null, new Block(), new Block(), null, 
    new Block(), new Block(), null, null
]

export const TETRIS_Z = [
    new Block(), new Block(), null, null,
    null, new Block(), new Block(), null
]

export const TETRIS_T = [
     new Block(), new Block(), new Block(), null,
     null, new Block(), null, null
]