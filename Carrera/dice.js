export default class Dice {
    throw(){
        return Math.floor(Math.random()* 6 +1);
    }
}