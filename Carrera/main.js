import Player from "./player.js";

let player1= new Player(1);
let player2= new Player(1);
let newPos= 0;
let i = 0;

while (player1.getPos() < 100 && player2.getPos() < 100){
    i++
    console.log ("***Tiro No." + i + "***"); //Lleva la cuenta de los tiros.
    newPos= player1.getPos() + player1.go();
    player1.setPos(newPos);
    console.log("player1  " + newPos); 
    newPos= player2.getPos() + player2.go();
    player2.setPos(newPos);
    console.log("player2  " + newPos); 
}

//Asigna un ganador o marca un empate. 

if (player1.getPos() >= 100 && player2.getPos() >= 100){
    console.log("¡Empate!");    
}

if (player1.getPos() >= 100) {
    if (player2.getPos() < 100){
        console.log ("Ganador: Player1")
    }
} else if (player2.getPos() >= 100) {
    if (player1.getPos() < 100){
        console.log ("Ganador: Player2")
    }
}
   



