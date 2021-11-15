export default class Inventario{
    constructor(){
        this.inicio = null;
        this.final=null;
    }

    /*agregar(nuevo){
        let temp = this.inicio;

        while (temp != null){
            let antemp = temp.anterior;
            if (nuevo.getId() >= temp.getId()){
                antemp = temp;
                temp = temp.siguiente;
                this._insertarEntre(temp, antemp, nuevo);
            } else {
                break;
            }            
        }
        this._insertarEntre(temp, null, nuevo);
        return nuevo;
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
        return nuevo;
    }*/

    agregar2(nuevo){
        let temp = this.inicio;
        if (this.inicio == null){
            this.inicio = nuevo;
            return nuevo;
        } else if (nuevo.getId() < temp.getId()){
            nuevo.siguiente = temp;
            temp.anterior = nuevo;
            this.inicio = nuevo;
            return nuevo; 
        }
        if (this.encontrarProducto(nuevo.getId()) == null){
            while(temp.siguiente != null){
            temp = temp.siguiente;
            if(temp.getId() > nuevo.getId()){ 
            nuevo.siguiente = temp;
            nuevo.anterior= temp.anterior;
            temp.anterior= nuevo;
            nuevo.anterior.siguiente= nuevo;
            return nuevo;
        }else {
            temp.siguiente = nuevo;
            nuevo.anterior = temp;
            return nuevo;
        }
    }   
    return null;
    }
}  
    encontrarProducto(id){
        let aux= this.inicio;
        while (aux != null){
            if (aux.getId() == id){
                return aux;
            }
        else if (aux.getId() < id)
            return null;
            aux= aux.siguiente;
        }
    }

    eliminar(id){
        let temp = this.inicio;
        
        if (temp.getId() == id){
            this.inicio = temp.siguiente;
            this.inicio.anterior = null;
            temp.anterior = null;
            temp.siguiente = null;
            return temp;
        }

        while (temp.siguiente != null){
            temp = temp.siguiente;
            if (id == temp.getId()){
                temp.anterior.siguiente = temp.siguiente;
                temp.siguiente.anterior = temp.anterior;
                temp.anterior = null;
                temp.siguiente = null;
                return temp;
            }
            temp.anterior.siguiente = null;
            temp.anterior= null;
            temp.siguiente = null;
            return temp;
        }
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