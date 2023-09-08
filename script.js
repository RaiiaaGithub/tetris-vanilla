"use strict";

import { Block, Tetromino, TETRIS_I, TETRIS_J, TETRIS_L, TETRIS_O, TETRIS_S, TETRIS_T, TETRIS_Z } from "./blocks.js";

const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");

function main() {
    setupCanvas();
    temp();
}
main();


function setupCanvas() {
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight - 10;
}

function temp() {
    // const block = new Block(context)
    // block.draw()

    // const square = new Tetromino(context, TETRIS_O);
    // square.draw();

    // const line = new Tetromino(context, TETRIS_I);
    // line.draw();

    // const ele = new Tetromino(context, TETRIS_L);
    // ele.draw();

    // const jota = new Tetromino(context, TETRIS_J);
    // jota.draw();

    // const ese = new Tetromino(context, TETRIS_S);
    // ese.draw();

    // const ze = new Tetromino(context, TETRIS_Z);
    // ze.draw();

    const te = new Tetromino(context, TETRIS_T);
    te.draw();
}
