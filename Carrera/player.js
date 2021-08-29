import Dice from "./dice.js";

export default class Player {
    constructor(pos){
        this._pos= pos;
        this._dice= new Dice();
    }

    getPos(){
        return this._pos;
    }

    setPos(pos){
        return this._pos = pos;
    }

    go(pos){
        let number = this._dice.throw();
    if (number == 1){
        pos = 3;
    } else if (number == 2 || number == 3){
         pos = 1;
        } else {
            pos = 2;
        }
        return pos;
    }
}