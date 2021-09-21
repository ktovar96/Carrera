export default class List {
    constructor(){
        this._product = new Array();
    }

    add(product){
        if(this._product.length < 20){
            let find=this.find(product.getId())
        if (find == null){
            this._product.push(product);
            return this._product;
        }
        return null
        }
    }

    _findPos(id){
        for(let i = 0; i < this._product.length; i++){
            if(this._product[i].getId() == id){
                return i;
        }
    }
    }

    delete(id){
        let pos= this._findPos(id)
        let a= this._product[pos];
        for(let i= pos; i < this._product.length; i++){
            this._product[i] = this._product[i + 1];
        }
        this._product[this._product.length -1 ] = a;
        this._product.pop();
        return pos;
    }

    find(id){
       for (let i = 0; i < this._product.length; i++){
            if(id == this._product[i].getId()){
                return this._product[i];
            }
        }
                return null;
    }

    get(){
        let info=``;
        for (let i = 0; i < this._product.length; i++) {
            info += this._product[i].info();
            }
        return info;
    }

    getInv(){
        let info = 0;
        for(let i =this._product.length; i > 0 ; i++){
            info += this._product[i].info(); //no se porque aquí me marca como indefinido el this._product[i] :(
        }
        return info;
    }

    insert(pos, product){

        this._product.push(this._product[this._product.length-1])
        
        for (let i = pos, j=this._product.length-2, z=j-1; i < this._product.length-1; i++,j--,z--) {
             this._product[j]=this._product[z];
        }

        this._product[pos]=product
        return this._product;
       
    }
}