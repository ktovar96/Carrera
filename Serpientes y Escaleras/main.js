import Board from "./board.js";
import Player from "./player.js";

let player1= new Player();
let player2 = new Player();
let board1 = new Board();

let i=0;
let newPos= 0;

console.log(board1)

while (player1.getPos() < 100 && player2.getPos() < 100){
    i++
    console.log("***Tiro No. " + i + "***");
    newPos= player1.getPos() +  player1.go();
    player1.setPos(newPos);
    player1.setPos(board1.getBox(newPos));
    console.log("player1  " + player1.getPos());


    newPos = player2.getPos() + player2.go();
    player2.setPos(newPos);
    player2.setPos(board1.getBox(newPos));
    console.log("player2  " + newPos);
}

