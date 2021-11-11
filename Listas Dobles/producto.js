export default class Prodcuto {
    constructor(id, name, amount, price){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.price = price;
        this.siguiente = null;
        this.anterior = null;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getAmount(){
        return this.amount;
    }

    getPrice(){
        return this.price;
    }

    getValue(){
        return this.amount * this.price;
    }

    info(){
        return `<p>ID: ${this.id} Nombre: ${this.name}</p>`;
    }
}