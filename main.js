const contenido = document.querySelector("#contenido");


//Creamos los productos
function Producto(id, nombre, precio, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion
}

//Array productos
let stock = [];

function mostrarMenu() {
    return parseInt(prompt(" Menu    Dependiendo su Opcion se realizara la Siguiente Funcion:   Opcion 1: Crear un nuevo Producto   Opcion 2: Eliminar Producto     Opcion 0: Cerrar Menu"))
}

function crearProducto(){
    let id = parseInt(prompt("Ingrese el Id del nuevo Producto: "))
    let nombre = prompt("Ingrese el Nombre del Nuevo Producto: ")
    let precio = Number(prompt("Ingrese el Precio del Nuevo Producto: "))
    let descripcion = prompt("Ingrese la Descripcion del Producto: ")

    let producto = new Producto(id,nombre,precio,descripcion);
    stock.push(producto);
}


function eliminarProducto(){
    identificador = parseInt(prompt("Ingrese el Id a eliminar: "))
    let index = stock.findIndex((producto, indice, stock) =>{
        return producto.id === identificador;
    })
    if (index != -1){
        stock.splice(index, 1);
        console.log(stock);
    }

}

function main() {
    opcion = mostrarMenu();

    while (opcion != 0) {
        if (opcion == 1) {
            crearProducto();
        }
        else if (opcion == 2) {
            eliminarProducto();
        }
        else {
            alert("La opcion ingresada no es valida, reingresar Opcion")
        }
        opcion = mostrarMenu();
    }


}

//Crear usando Css y flex box una clase la cual se utilice dentro de un div, la cual va a permitir colocar los 3 parametros
//Uno al lado del otro

function usandoDom(){
    let lista = document.createElement("div");
    lista.classList.add("row");
    lista.classList.add("g-0");

    
    for (producto of stock){
        
        lista.innerHTML += `<div class="col-4"><p>Nombre del Producto: ${producto.nombre} </p></div>`;
        lista.innerHTML += `<div class="col-4"><p>Precio del Producto $${producto.precio} </p></div>`; 
        lista.innerHTML += `<div class="col-4"><p>Descripcion del Producto: ${producto.descripcion} </p></div>`;
        
        
        
    }
    contenido.append(lista);
}


main();
console.log(stock)
usandoDom();
