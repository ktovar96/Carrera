import Producto from "./producto.js"
import Inventario from "./inventario.js";

let inventario = new Inventario();

function clear(){
    document.getElementById("inpId").value ="";
    document.getElementById("inpName").value = "";
    document.getElementById("inpAmount").value = "";
    document.getElementById("inpPrice").value = "";
}

const btnFind= document.getElementById("btnFind");
btnFind.addEventListener(`click`, () =>{
    
    let id= document.getElementById("inpId").value;
    let producto= inventario.encontrarProducto(id);
    let text= document.getElementById("text");

    if(producto ==  null){
        text.innerHTML = "Producto con `ID: " + id + "` ¡¡NO ENCONTRADO!!";
    } else{
        let name = producto.getName();
        let amount = producto.getAmount();
        let price = producto.getPrice();
        let value = producto.getValue();

        text.innerHTML = "PRODUCTO BUSCADO: ID:" + id + " Nombre: " + name + " Cantidad: " + amount + " Precio: $" + price + " Total: $" + value;
    }

    clear();
})

const btnAdd= document.getElementById("btnAdd");
btnAdd.addEventListener(`click`, () =>{
    let id= document.getElementById("inpId").value;
    let name= document.getElementById("inpName").value;
    let amount= document.getElementById("inpAmount").value;
    let price= document.getElementById("inpPrice").value;
    let producto = new Producto(id, name, amount, price);
    let added= inventario.agregar2(producto);
        if(added==null){
            clear();
            return
        }
    let table = document.querySelector("#table");
    let row =  table.insertRow(-1);
    let colId= row.insertCell(0);
    let colName= row.insertCell(1);
    let colAmount= row.insertCell(2);
    let colPrice= row.insertCell(3);
    let colValue= row.insertCell(4);

    row.setAttribute("id", `row${producto.getId()}` );
    colId.innerHTML = producto.getId();
    colName.innerHTML = producto.getName();
    colAmount.innerHTML = producto.getAmount();
    colPrice.innerHTML = producto.getPrice();
    colValue.innerHTML = producto.getValue();
    clear();
    console.log(inventario);    
}) 

const btnDelete= document.getElementById("btnDelete");
btnDelete.addEventListener(`click`, () =>{
    let id= document.getElementById("inpId").value;
    if(inventario.encontrarProducto(id) ==  null){
        text.innerHTML = "El producto con `ID " + id + "` ¡¡NO EXISTE!!";
    } else{
        let row = document.querySelector(`#row${id}`);
        row.remove();
        inventario.eliminar(id);
        }
    clear();
    console.log(inventario);
})

const btnGet= document.getElementById("btnGet");
btnGet.addEventListener(`click`, () =>{
    let info= document.getElementById("info");
    info.innerHTML = inventario.listar();
})

const btnGetInv= document.getElementById("btnGetInv");
btnGetInv.addEventListener(`click`, () =>{
    let info= document.getElementById("info");
    info.innerHTML = inventario.listarInv();
})

const btnIns= document.getElementById("btnIns");
btnIns.addEventListener(`click`, () =>{
    let pos= document.getElementById("pos").value;
    let id= document.getElementById("inpId").value;
    let name= document.getElementById("inpName").value;
    let amount= document.getElementById("inpAmount").value;
    let price= document.getElementById("inpPrice").value;
    let nuevo = new Producto (id, name, amount, price);
    console.log(nuevo)

    let table = document.querySelector("#table");
    let row =  table.insertRow(parseInt(pos) + 1);
    let colId= row.insertCell(0);
    let colName= row.insertCell(1);
    let colAmount= row.insertCell(2);
    let colPrice= row.insertCell(3);
    let colValue= row.insertCell(4);

    row.setAttribute("id", `row${nuevo.getId()}` );
    colId.innerHTML = nuevo.getId();
    colName.innerHTML = nuevo.getName();
    colAmount.innerHTML = nuevo.getAmount();
    colPrice.innerHTML = nuevo.getPrice();
    colValue.innerHTML = nuevo.getValue();
    clear();

    inventario.insertar(pos, nuevo);
    console.log(inventario);
})