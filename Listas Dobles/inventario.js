export default class Inventario{
    constructor(){
        this.inicio = null;
        this.final = null;
    }

    agregar(nuevo){
        let temp = this.inicio;
        let antemp = temp.anterior;

        while (temp != null){
            if (nuevo.getId() >= temp.getId()){
                antemp = temp;
                temp = temp.siguiente;
            } else {
                break;
            }            
        }
        this._insertarEntre(temp, antemp, nuevo);
    }

    _insertarEntre(dato, datoAnterior, nuevo){
        nuevo.siguiente = dato;
        nuevo.anterior = datoAnterior;

        if (dato != null){
            dato.anterior = nuevo;
        } else {
            this.final = nuevo;
        }

        if (datoAnterior != null){
            datoAnterior.siguiente = nuevo;
        } else {
            this.inicio = nuevo;
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

}