
let menu = "1 - Cafeteria\n2 - Hamburguesas\n3 - Combos\n4 - Terminar la compra"
let menuCafeteria = "1 - Cafe Grande\n2 - Cafe Chico\n3 - Latte\n4- Volver"
let menuHamburguesas = "1 - H/ Con queso\n2 - h/ Completa\n3 - Super hamburguesa \n4 - Volver"
let menuCombos = "1 - H/ Con queso Combo\n2 - h/ Completa Combo\n3 - Super hamburguesa Combo\n4 - Volver"
let menuTerminar = "¿Desea terminar su pedido?\n\n1 - SI\n2 - NO"
let opcion1 = 0
let opcion2 = 0
let valorItem = 0
let valorTotal = 0

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
                alert(menuCafeteria)
                break
            case 2:
                alert(menuHamburguesas)
                break
            case 3:
                alert(menuCombos)
                break
            default:
                seccionMenu()
                // Orden()
                break  
        }
        opcionMenu ()  
    } 
    else if(opcion1=4){
        alert("El valor a abonar de su orden es : $"+ valorTotal + "\nEl pago sera recibido en caja al momento de retirar su Pedido\n\nMuchas Gracias "+nombreCliente + " por utilizar el servicio de autopedido.")
        opcion1=0
        opcion2=0
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
                alert(nombreCliente+"  " + elijaMenu)
                seccionMenu()
                Orden()
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
                alert(nombreCliente+"  " + elijaMenu)
                seccionMenu()
                Orden()
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
                alert(nombreCliente+"  " + elijaMenu)
                seccionMenu()
                Orden()
            default:
                break
        }        
      }
    valorTotal = valorTotal + valorItem
    Orden()
}

let nombreCliente = prompt("Ingrese su nombre para realizar un pedido")
while (nombreCliente === ""){
    nombreCliente= prompt("Debe ingresar un nombre para realizar el pedido")
}

let elijaMenu = nombreCliente+" Te pedimos que elijas una de las siguientes opciones para que empezemos a preparar tu pedido.. \n\n"+menu

alert("¡Bienvenido/a al servicio de autopedido!\n"+nombreCliente+ elijaMenu)
seccionMenu()

Orden()

//opcionMenu()
do{
subMenu ()
}while(opcion1!=0)
