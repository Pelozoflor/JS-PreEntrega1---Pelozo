
 let menu = "1 - Cafeteria\n2 - Hamburguesas\n3 - Combos\n4 - Terminar la compra \n5 - Opciones Delivery sin cargo"
const menuCategorias = [
    {id:1, opcion:1, desc: "Cafe Grande", precio: 350, deliveryGratis: "NO",categoria: "Cafeteria", img: "cafeGrande.jpg"},
    {id:2, opcion:2, desc: "Cafe Chico", precio: 300, deliveryGratis: "NO", categoria: "Cafeteria", img: "cafeChico.jpg"}, 
    {id:3, opcion:3, desc: "Latte", precio: 380, deliveryGratis: "NO", categoria: "Cafeteria", img: "latte.jpg"},
    {id:4, opcion:1, desc: "Array de Sabores", precio: 600, deliveryGratis: "NO", categoria: "Hamburguesas", img: "ArrayDeSabores.jpg"},
    {id:5, opcion:2, desc: "Destructuring", precio: 750, deliveryGratis: "SI", categoria: "Hamburguesas", img: "Destructuring.jpg"}, 
    {id:6, opcion:3, desc: "Alert-Alert", precio: 1000, deliveryGratis: "SI", categoria: "Hamburguesas", img: "Alert-Alert.jpg"},
    {id:7, opcion:1, desc: "Combo Inner", precio: 1100, deliveryGratis: "SI", categoria: "Combos", img: "ComboInner.jpg"},
    {id:8, opcion:2, desc: "Combo Constructor", precio: 1250, deliveryGratis: "SI", categoria: "Combos", img: "ComboConstructor.jpg"}, 
    {id:9, opcion:3, desc: "Combo Todo al Imput", precio: 1500, deliveryGratis: "SI", categoria: "Combos", img: "ComboTodoImput.jpg"},
    
]

const menuCafeteria = menuCategorias.filter ((el) => el.categoria === "Cafeteria") 
const menuHamburguesas = menuCategorias.filter ((el) => el.categoria === "Hamburguesas") 
const menuCombos = menuCategorias.filter ((el) => el.categoria === "Combos")  

const btnHam = document.querySelector(".menu_Ham")
const btnCom = document.querySelector(".menu_Com")
const btnCaf = document.querySelector(".menu_Caf")
const btnFree = document.querySelector(".menu_Free")
const btnOn = document.querySelector(".menu_On")
const cartas = document.querySelector(".cards")


function Producto(categoria, opcion, desc, precio, deliveryGratis) {
    this.id = menuCategorias.length + 1;
    this.categoria = categoria;
    this.opcion = opcion;
    this.desc = desc;
    this.precio = precio;
    this.deliveryGratis = deliveryGratis;
}

function crearHTML(elem) {
    cartas.innerHTML = "";
    
    elem.forEach((el) => {
      const cardHTML = `
        <div class="card">
          <img src="img/${el.img}" alt="Imagen">
          <h3>${el.desc}</h3>
          <p>$ ${el.precio}</p>
        </div>`;
      cartas.innerHTML += cardHTML;
    });
  }

function DeliveryFree() {
    const resultado = menuCategorias.filter((el) => el.deliveryGratis === "SI");
    return resultado;
}

btnHam.addEventListener("click", () => {
    crearHTML(menuHamburguesas);
})
  
btnCom.addEventListener("click", () => {
    crearHTML(menuCombos);
})
  
btnCaf.addEventListener("click", () => {
    crearHTML(menuCafeteria);
})
  
btnFree.addEventListener("click", () => {
    let delFree= DeliveryFree();
    crearHTML(delFree);
})


function ordenOnlineHTML() {
    cartas.innerHTML =`
          <form id="pedidoOnLine">
          <p>Gracias por usar nuestro servicio de pedidos Online</p>
          <div>
            <input id= "nombreCliente" type="text" placeholder="Ingrese su nombre">
            <select id="opcionesSelect">
            <option value=""></option>            
            </select>
          </div>
          <div>
            <button id="btnAgregar" class= "btnOL">Agregar</button>
            <button id="btnFinalizar" class= "btnOL">Finalizar Pedido</button>
          </div>
          </form>`;
    menuCategorias.forEach((el) => {
    const opcion = document.createElement('option');
    opcion.value = el.desc;
    opcion.textContent = el.desc;
    opcionesSelect.appendChild(opcion);
});

const btnAgregar = document.getElementById('btnAgregar');
const btnFinalizar = document.getElementById('btnFinalizar');
const opcionesDeSeleccion = document.getElementById('opcionesSelect');
const nombreInput = document.getElementById('nombreCliente')
const nombre = nombreInput.value;

btnAgregar.addEventListener('click', () => {
const opcionElegida = opcionesDeSeleccion.value;
const opcion = menuCategorias.find((el) => el.desc === opcionElegida);

const pedido = sessionStorage.getItem('pedido') ? JSON.parse(sessionStorage.getItem('pedido')) : [];
pedido.push(opcion);
sessionStorage.setItem('pedido', JSON.stringify(pedido));
nombreInput.value = '';
opcionesDeSeleccion.selectedIndex = 0;

const pedidoAgregado=
cartas.innerHTML = "<p>El producto ${opcion.Elegida} se agregó al carrito de pedidos. Puede seleccionar otra opcion o finalizar el pedido</p>";
});

btnFinalizar.addEventListener('click', () => {
const pedido = sessionStorage.getItem('pedido') ? JSON.parse(sessionStorage.getItem('pedido')) : [];

let total = 0;
pedido.forEach((opcion) => {
   total += opcion.precio;
  });

alert(`El total del pedido a abonar es: $${total}`);

sessionStorage.removeItem('pedido');
});
}

btnOn.addEventListener("click", () => {
  ordenOnlineHTML()  
})