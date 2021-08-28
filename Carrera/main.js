import Dice from "./dice.js";

let dice1= new Dice();

//Asigna probabilidades al numero del dado.
function spaces (){
    let s = 0;
   let number = dice1.throw();
if (number == 1){
    s = 3;
} else if (number == 2 || number == 3){
     s = 1;
    } else {
        s = 2;
    }
    return s;
}

let player1=0;
let player2=0;
let i = 0;

while (player1 < 100 && player2 < 100){
    i++
    console.log ("***Tiro No." + i + "***"); //Lleva la cuenta de los tiros.
    player1= player1 + spaces();
    console.log("player1  " + player1); //Marca la posición del jugador 1.
    player2= player2 + spaces();
    console.log("player2  " + player2); //Marca la posición del jugador 2.
}

//Asigna un ganador o marca un empate. 

if (player1 >= 100 && player2 >= 100){
    console.log("¡Empate!");    
}

if (player1 >= 100) {
    if (player2 < 100){
        console.log ("Ganador: Player1")
    }
} else if (player2 >= 100) {
    if (player1 < 100){
        console.log ("Ganador: Player2")
    }
}
   



