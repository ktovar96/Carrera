export default class Inventario{
    constructor(){
        this.inicio = null;
    }

    agregar(nuevo){
        if (this.inicio == null){
            this.inicio =  nuevo;
            return nuevo;
        } else {
            let aux= this.inicio;
            if (this.encontrarProducto(nuevo.getId()) == null){
                while (aux.siguiente != null){
                    aux = aux.siguiente;
                }
                aux.siguiente = nuevo;
                return nuevo;
            }
            return null
        }
        
    }

    encontrarProducto(id){
        let aux = this.inicio; 
        while(aux.siguiente != null){
            aux = aux.siguiente;
            if (aux.getId() == id){
                return aux;
            } 
        }

    }

    eliminar(id){
        let elim = null;

        if(this.inicio.getId() == id){
            elim=this.inicio;
            this.inicio = this.inicio.siguiente;
            elim.siguiente = null;
            return elim;
        }
        let aux= this.inicio;
        while(aux.siguiente != null && elim == null){
            if(aux.siguiente.getId() == id){
                elim = aux.siguiente;
                aux.siguiente = aux.siguiente.siguiente;
                elim.siguiente = null;
                return elim;
            } else {
                aux = aux.siguiente;
            }
        }
        return elim;
    }

    listar2(){
        let texto = "";
        if (!this.inicio){
            return "";
        }
        let aux = this.inicio;
        while(aux!=null){
            texto += aux.info()
            aux = aux.siguiente;
        }
        return texto;
    }

    listar(){
        if (!this.inicio){
            return "";
        } else {
            return this._listarRec(this.inicio);
        }
    }

    _listarRec(nodo){
        if (nodo.siguiente == null){
            return nodo.info();
        } else {
            return nodo.info() + this._listarRec(nodo.siguiente) ;
        }
    }

    _listarRecInv(nodo){
        if (nodo.siguiente == null){
            return nodo.info();
        } else {
            return this._listarRecInv(nodo.siguiente) + nodo.info() ;
        }
    }

    listarInv(){
        if (!this.inicio){
            return "";
        } else {
            return this._listarRecInv(this.inicio);
        }
    }

    /*insertar(anterior, nuevo){
        let aux =  this.inicio;
        while (aux != null){
            if (aux.siguiente == anterior){
                nuevo.siguiente = aux.siguiente.siguiente;
                anterior.siguiente = nuevo;
                return nuevo;
            }
            aux= aux.siguiente;
        }
    }*/

        //                            j
    //(1-> 2 -> 4 -> 5 -> 6)
                //2

    insertar(pos, nuevo){
        let aux =  this.inicio;
        let i = 0;
        if (pos == 0){
            this.inicio = nuevo;
            nuevo.siguiente = aux;
            return nuevo;
        }
        while (aux != null){
            if(i == pos - 1){
                nuevo.siguiente = aux.siguiente;
                aux.siguiente = nuevo;
                //nuevo.siguiente = aux.siguiente.siguiente;
                return nuevo;
            }
            aux= aux.siguiente;
            i++;
        }
        return null;
    }
}