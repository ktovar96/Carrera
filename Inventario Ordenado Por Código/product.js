export default class Product{
    constructor(id, name, amount, price){
        this._id = id;
        this._name = name;
        this._amount = amount;
        this._price = price;
    }

    getId(){
        return this._id;
    }

    getName(){
        return this._name;
    }

    getAmount(){
        return this._amount;
    }

    getPrice(){
        return this._price;
    }

    getValue(){
        return this._amount * this._price;
    }

    info(){
        return `<p>ID: ${this._id} Nombre: ${this._name}</p>`;
    }
}