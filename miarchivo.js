
let menu = "1 - Cafeteria\n2 - Hamburguesas\n3 - Combos\n4 - Terminar la compra \n5 - Opciones Delivery sin cargo"
const menuCategorias = [
    {id:1, opcion:1, desc: "Cafe Grande", precio: 350, deliveryGratis: "NO",categoria: "Cafeteria"},
    {id:2, opcion:2, desc: "Cafe Chico", precio: 300, deliveryGratis: "NO", categoria: "Cafeteria"}, 
    {id:3, opcion:3, desc: "Latte", precio: 380, deliveryGratis: "NO", categoria: "Cafeteria"},
    {id:4, opcion:4, desc: "Volver", precio: "", deliveryGratis: "", categoria: "Cafeteria"},
    {id:5, opcion:1, desc: "H/ Con queso", precio: 600, deliveryGratis: "NO", categoria: "Hamburguesas"},
    {id:6, opcion:2, desc: "h/ Completa", precio: 750, deliveryGratis: "SI", categoria: "Hamburguesas"}, 
    {id:7, opcion:3, desc: "Super hamburguesa", precio: 1000, deliveryGratis: "SI", categoria: "Hamburguesas"},
    {id:8, opcion:4, desc: "Volver", precio: "", deliveryGratis: "", categoria: "Hamburguesas"},
    {id:9, opcion:1, desc: "H/ Con queso Combo", precio: 1100, deliveryGratis: "SI", categoria: "Combos"},
    {id:10, opcion:2, desc: "h/ Completa Combo", precio: 1250, deliveryGratis: "SI", categoria: "Combos"}, 
    {id:11, opcion:3, desc: "Super hamburguesa Combo", precio: 1500, deliveryGratis: "SI", categoria: "Combos"},
    {id:12, opcion:4, desc: "Volver", precio: "", deliveryGratis: "", categoria: "Combos"},
]

const menuCafeteria = menuCategorias.filter ((el) => el.categoria === "Cafeteria") 
const menuHamburguesas = menuCategorias.filter ((el) => el.categoria === "Hamburguesas") 
const menuCombos = menuCategorias.filter ((el) => el.categoria === "Combos")  
let productoAgregado="Su eleccion se agrego al pedido, puede elegir otra opcion o Volver al Menu anterior"
let opcion1 = 0
let opcion2 = 0
let valorItem = 0
let valorTotal = 0

function Producto(categoria, opcion, desc, precio, deliveryGratis) {
    this.id= menuCategorias.lenght + 1;
    this.categoria = categoria; 
    this.opcion= opcion; 
    this.desc= desc;
    this.precio= precio;
    this.deliveryGratis= deliveryGratis;
}


function DeliveryFree () {
const resultado = menuCategorias.filter ((el) => el.deliveryGratis === "SI")
alert("Los resultados se muestran por consola, presione aceptar para ingresar una opción")
console.log (resultado)
opcion1=0
}


function seccionMenu (){
    opcion1= Number(prompt("Ingrese una opción: "))
    while(isNaN(opcion1)){
        opcion1= Number(prompt("Ingrese una opción valida: "))          
    }
    if(opcion1===4){
        alert("Gracias por usar nuestro servicio, hasta pronto!")
    }
}

function opcionMenu (){
    opcion2= Number(prompt("Ingrese una opción: "))
    while(isNaN(opcion2) || opcion2>4){
        opcion2= Number(prompt("Ingrese una opción valida: "))          
    }
}


function Orden () {
    if(opcion1!=4){
        switch (opcion1){
            case 1:
                console.log(menuCafeteria)
                break
            case 2:
                console.log(menuHamburguesas)
                break
            case 3:
                console.log(menuCombos)
                break
            case 4:
                break
            case 5:
                DeliveryFree()
                alert(elijaMenu)
                seccionMenu()
                Orden()
                break
            default:
                alert(elijaMenu)
                seccionMenu()
                Orden()
                break  
            } 
        alert("Los resultados se muestran por consola, presione aceptar para ingresar una opción")
        opcionMenu()  
    } 
    else if(opcion1==4){
        alert("El valor a abonar de su orden es : $"+ valorTotal + "\nEl pago sera recibido en caja al momento de retirar su Pedido\n\nMuchas Gracias "+nombreCliente + " por utilizar el servicio de autopedido.")
        opcion1=-1
        opcion2=-1
    }
}


function subMenu (){
      if (opcion1===1) {
        switch (opcion2){
            case 1:
                valorItem= 350
                alert(productoAgregado)
                break
            case 2:
                valorItem= 300
                alert(productoAgregado)
                break
            case 3:
                valorItem= 380
                alert(productoAgregado)
                break
            case 4:
                alert(elijaMenu)
                seccionMenu()
                Orden()
                break
            default:
                 break
        }       
      }else if (opcion1===2) {
        switch (opcion2){
            case 1:
                valorItem= 600
                alert(productoAgregado)
                break
            case 2:
                valorItem= 750
                alert(productoAgregado)
                break
            case 3:
                valorItem= 1000
                alert(productoAgregado)
                break
            case 4:
                alert(elijaMenu)
                seccionMenu()
                Orden()
                break
            default:
                break
        } 
      }else if (opcion1===3) {
        switch (opcion2){
            case 1:
                valorItem= 1100
                alert(productoAgregado)
                break
            case 2:
                valorItem= 1250
                alert(productoAgregado)
                break
            case 3:
                valorItem= 1500
                alert(productoAgregado)
                break
            case 4:
                alert(elijaMenu)
                seccionMenu()
                Orden()
                break
            default:
                break
        }        
      }
    valorTotal = valorTotal + valorItem
    opcion2 = 0
    Orden()
}

let nombreCliente = prompt("Ingrese su nombre para realizar un pedido")
while (nombreCliente === ""){
    nombreCliente= prompt("Debe ingresar un nombre para realizar el pedido")
}

let elijaMenu = nombreCliente+" Te pedimos que elijas una de las siguientes opciones para que empezemos a preparar tu pedido.. \n\n"+menu

alert("¡Bienvenido/a al servicio de autopedido!\n"+ elijaMenu)
seccionMenu()

Orden()

while(opcion1!=0){
    subMenu ()
}
