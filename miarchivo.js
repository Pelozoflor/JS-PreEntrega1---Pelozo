let nombreCliente = prompt("Ingrese su nombre para realizar su pedido")
let menu = "1 - Cafeteria\n2 - Hamburguesas\n3 - Combos\n4 - Terminar la compra"
let menuCafeteria = "1 - Cafe Grande\n2 - Cafe Chico\n3 - Latte\n4 - Medialunas\n5 - Volver"
let menuHamburguesas = "1 - H/ Con queso\n2 - h/ Completa\n3 - Super hamburguesa \n4 - Volver"
let menuCombos = "1 - H/ Con queso Combo\n2 - h/ Completa Combo\n3 - Super hamburguesa Combo\n4 - Volver"
let menuTerminar = "¿Desea terminar su pedido?\n\n1 - SI\n2 - NO"
let opcion1 = 0
let opcion2 = 0
let opcionTerminar = 0
let valorItem = 0
let valorTotal = 0

function Orden () {
        alert("¡Bienvenido/a al servicio de autopedido!\n"+nombreCliente+" te pedimos que elijas una de las siguientes opciones para que empezemos a preparar tu pedido.. \n\n"+menu)
        opcion1= Number(prompt("Ingrese una opción: "))
        if(opcion1===1){
        alert(menuCafeteria)
        opcion2= Number(prompt("Ingrese una opción: "))
        alert("La opcion elegida fue agregada al pedido")
        }else if(opcion1===2){
        alert(menuHamburguesas)
        opcion2= Number(prompt("Ingrese una opción: "))
        alert("La opcion elegida fue agregada al pedido")
        }else if(opcion1===3){
        alert(menuCombos)
        opcion2= Number(prompt("Ingrese una opción: "))
        alert("La opcion elegida fue agregada al pedido")
        }else if(opcion1===4){
        alert(menuTerminar)
        opcion2= Number(prompt("Ingrese una opción: "))
        }
}

Orden()

while (opcion2!=0){
 if (opcion1===1) {
    if (opcion2===1){
        valorItem= 350
        valorTotal+=valorItem
        Orden()
    }else if (opcion2===2){
        valorItem= Number(300)
        valorTotal+=valorItem
        Orden() 
    }else if (opcion2===3){
        valorItem= 380
        valorTotal+=valorItem
        Orden()
    }else if (opcion2===4){
        valorItem= 180
        valorTotal+=valorItem
        Orden()
    }else if (opcion2===5){
        Orden()
    }       
 }else if (opcion1===2) {
    if (opcion2===1){
        valorItem= 600
        valorTotal+=valorItem
        Orden()
    }else if (opcion2===2){
        valorItem= 750
        valorTotal+=valorItem
        Orden()
    }else if (opcion2===3){
        valorItem= 1000
        valorTotal+=valorItem
        Orden()
    }else if (opcion2===4){
        Orden()
    }         
 }else if (opcion1===3) {
    if (opcion2===1){
        valorItem= 1100
        valorTotal+=valorItem
        Orden()
    }else if (opcion2===2){
        valorItem= 1250
        valorTotal+=valorItem
        Orden()
    }else if (opcion2===3){
        valorItem= 1500
        valorTotal+=valorItem
        Orden()
    }else if (opcion2===4){
        Orden()
    }        
 }else if (opcion1===4) {
    if (opcion2===1){
    alert("El valor a abonar de su orden es : $"+ valorTotal + "\nEl pago sera recibido en caja al momento de retirar su Pedido\n\nMuchas Gracias "+nombreCliente + " por utilizar el servicio de autopedido.")
    break
    }else if (opcion2===2)
       Orden()
    }
}


