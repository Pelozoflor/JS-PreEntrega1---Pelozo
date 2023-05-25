
let menu = "1 - Cafeteria\n2 - Hamburguesas\n3 - Combos\n4 - Terminar la compra \n5 - Opciones Delivery sin cargo"
const menuCafeteria = [
    {opcion:1, desc: "Cafe Grande", precio: 350, deliveryGratis: "NO"},
    {opcion:2, desc: "Cafe Chico", precio: 300, deliveryGratis: "NO"}, 
    {opcion:3, desc: "Latte", precio: 380, deliveryGratis: "NO"},
    {opcion:4, desc: "Volver", precio: "", deliveryGratis: ""},
]

const menuHamburguesas = [
    {opcion:1, desc: "H/ Con queso", precio: 600, deliveryGratis: "NO"},
    {opcion:2, desc: "h/ Completa", precio: 750, deliveryGratis: "SI"}, 
    {opcion:3, desc: "Super hamburguesa", precio: 1000, deliveryGratis: "SI"},
    {opcion:4, desc: "Volver", precio: "", deliveryGratis: ""},
]

const menuCombos = [
    {opcion:1, desc: "H/ Con queso Combo", precio: 1100, deliveryGratis: "SI"},
    {opcion:2, desc: "h/ Completa Combo", precio: 1250, deliveryGratis: "SI"}, 
    {opcion:3, desc: "Super hamburguesa Combo", precio: 1500, deliveryGratis: "SI"},
    {opcion:4, desc: "Volver", precio: "", deliveryGratis: ""},
]

let menuTerminar = "¿Desea terminar su pedido?\n\n1 - SI\n2 - NO"
let opcion1 = 0
let opcion2 = 0
let valorItem = 0
let valorTotal = 0

function DeliveryFree () {
const filtrado = menuHamburguesas.concat(menuCombos)
const resultado = filtrado.filter (el => el.deliveryGratis === "SI")
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
                break
            case 2:
                valorItem= 300
                break
            case 3:
                valorItem= 380
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
                break
            case 2:
                valorItem= 750
                break
            case 3:
                valorItem= 1000
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
                break
            case 2:
                valorItem= 1250
                break
            case 3:
                valorItem= 1500
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
