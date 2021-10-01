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


    /*getMenor(){
        let menor = this._product[0];
        for (let i = 0; i < this._product.length; i++){
            if (this._product[i] < menor){
                menor = this._product[i];
            }
        }
        return menor; 
        //this._product._findPos(menor.getId());
    }*/

    acomodar(){
        if (this._product.length > 1){
            
        let menor = this._product[0]; 
        let a= 0;

        for (let i = 0; i < this._product.length; i++) {
                    if (this._product[i] < this._product[i + 1]){
                        menor= this._product[i];
                        console.log(menor);
                        } else {
                            menor= this._product[i + 1];
                            console.log(menor);
                        }
                a = this._product[i];
                this._product[i] = menor;
                let id= menor.getId()
                this._product[this._findPos(id)] = a;
                  }
            }
            
        }
            
    
    _findPos(id){
        for(let i = 0; i < this._product.length; i++){
            if(this._product[i].getId() == id){
                return i;
            }
        }
        if(i < 0){
            return null;
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
        let info = ``;
        console.log(this._product);
        for(let i = this._product.length - 1 ; i >= 0 ; i--){
            info += this._product[i].info(); 
            }
        return info;
    }
}