export default class Board {
    constructor(){
        this._casillas = new Array;

        for (let i = 0; i<=100; i++){
            this._casillas.push(i);
        }

        this._casillas[13] = 10;
        this._casillas[35] = 17;
        this._casillas[46] = 13;
        this._casillas[55] = 36;
        this._casillas[62] = 23;
        this._casillas[73] = 45;
        this._casillas[80] = 26;
        this._casillas[98] = 12;


        this._casillas[7] = 44;
        this._casillas[15] = 33;
        this._casillas[22] = 37;
        this._casillas[38] = 65;
        this._casillas[50] = 69;
        this._casillas[61] = 82;
        this._casillas[72] = 86;
        this._casillas[88] = 95;
 
    }

    getBox(box){
        return this._casillas[box];
    }
}