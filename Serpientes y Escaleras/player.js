import Dice from "./dice.js";

export default class Player {
    constructor(){
        this._pos = 0;
        this._dice= new Dice();
    }

    getPos(){
        return this._pos;
    }

    setPos(pos){
         return this._pos = pos;
    }

    go(){
        let s= this._dice.throw();
        console.log("Dado:" + s );
        return s;
    }
}