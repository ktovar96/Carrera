import Product from "./product.js"
import List from "./list.js";

let list1 = new List();

function clear(){
    document.getElementById("inpId").value ="";
    document.getElementById("inpName").value = "";
    document.getElementById("inpAmount").value = "";
    document.getElementById("inpPrice").value = "";
    document.getElementById("pos").value = "";

}

const btnAdd= document.getElementById("btnAdd");
btnAdd.addEventListener(`click`, () =>{
    let id= document.getElementById("inpId").value;
    let name= document.getElementById("inpName").value;
    let amount= document.getElementById("inpAmount").value;
    let price= document.getElementById("inpPrice").value;
    let product1 = new Product(id, name, amount, price);
   let added= list1.add(product1);
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

    row.setAttribute("id", `row${product1.getId()}` );
    colId.innerHTML = product1.getId();
    colName.innerHTML = product1.getName();
    colAmount.innerHTML = product1.getAmount();
    colPrice.innerHTML = product1.getPrice();
    colValue.innerHTML = product1.getValue();
    clear();
}) 

const btnDelete= document.getElementById("btnDelete");
btnDelete.addEventListener(`click`, () =>{
    let id= document.getElementById("inpId").value;
    if(list1.find(id) ==  null){
        text.innerHTML = "El producto con `ID " + id + "` ¡¡NO EXISTE!!";
    } else{
        let row = document.querySelector(`#row${id}`);
        row.remove();
        list1.delete(id);
        }

    clear();
})

const btnGet= document.getElementById("btnGet");
btnGet.addEventListener(`click`, () =>{
    let info= document.getElementById("info");
    info.innerHTML = list1.get();
})

const btnGetInv= document.getElementById("btnGetInv");
btnGetInv.addEventListener(`click`, () =>{
    let info= document.getElementById("info");
    info.innerHTML = list1.getInv();
})

const btnFind= document.getElementById("btnFind");
btnFind.addEventListener(`click`, () =>{
    
    let id= document.getElementById("inpId").value;
    let product= list1.find(id);
    let text= document.getElementById("text");

    if(product ==  null){
        text.innerHTML = "Producto con `ID: " + id + "` ¡¡NO ENCONTRADO!!";
    } else{
        let name = product.getName();
        let amount = product.getAmount();
        let price = product.getPrice();
        let value = product.getValue();

        text.innerHTML = "PRODUCTO BUSCADO: ID:" + id + " Nombre: " + name + " Cantidad: " + amount + " Precio: $" + price + " Total: $" + value;
    }

    clear();
})

const btnIns= document.getElementById("btnIns");
btnIns.addEventListener(`click`, () =>{
    let pos= document.getElementById("pos").value;
    let id= document.getElementById("inpId").value;
    let name= document.getElementById("inpName").value;
    let amount= document.getElementById("inpAmount").value;
    let price= document.getElementById("inpPrice").value;
    let product1 = new Product(id, name, amount, price);
    console.log(product1)

    let table = document.querySelector("#table");
    let row =  table.insertRow(parseInt(pos) + 1);
    let colId= row.insertCell(0);
    let colName= row.insertCell(1);
    let colAmount= row.insertCell(2);
    let colPrice= row.insertCell(3);
    let colValue= row.insertCell(4);

    row.setAttribute("id", `row${product1.getId()}` );
    colId.innerHTML = product1.getId();
    colName.innerHTML = product1.getName();
    colAmount.innerHTML = product1.getAmount();
    colPrice.innerHTML = product1.getPrice();
    colValue.innerHTML = product1.getValue();
    clear();

    list1.insert(pos, product1);
})



  