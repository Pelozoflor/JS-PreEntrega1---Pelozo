
let menuCategorias = []; 

const menuBD = async () => {
    const response = await fetch('../data/db.json');
    menuCategorias = await response.json();
    crearHTML(menuCategorias);
  }

window.addEventListener('load', menuBD);

const menuCafeteria = [];
const menuHamburguesas = [];
const menuCombos = [];
const deliveryFree = [];

const menuSeleccionado= async ()=> {
    const response = await fetch('../data/db.json');
    menuCategorias = await response.json();
    menuCafeteria = menuCategorias.filter((el) => el.categoria === "Cafeteria");
    menuHamburguesas = menuCategorias.filter((el) => el.categoria === "Hamburguesas");
    menuCombos = menuCategorias.filter((el) => el.categoria === "Combos");
    deliveryFree = menuCategorias.filter((el) => el.deliveryGratis === "SI");  
  } 

const btnHam = document.querySelector(".menu_Ham")
const btnCom = document.querySelector(".menu_Com")
const btnCaf = document.querySelector(".menu_Caf")
const btnFree = document.querySelector(".menu_Free")
const btnOn = document.querySelector(".menu_On")
const cartas = document.querySelector(".cards")
const elegidos = document.querySelector(".elegidos")
const miPedido = document.querySelector(".pedido")

function producto(categoria, opcion, desc, precio, deliveryGratis) {
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
        <button class="btnAgregar">Agregar</button>
      </div>`;
    cartas.innerHTML += cardHTML;
  });

  const btnAgrega = document.getElementsByClassName('btnAgregar');

  for (let i = 0; i < btnAgrega.length; i++) {
    btnAgrega[i].addEventListener('click', (e) => {
      e.preventDefault();
      const pedido = sessionStorage.getItem('pedido') ? JSON.parse(sessionStorage.getItem('pedido')) : [];
      pedido.push(elem[i]);
      sessionStorage.setItem('pedido', JSON.stringify(pedido));
      Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        className: "btnOL",
      }).showToast();
    });
  }
}
-

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
    crearHTML(deliveryFree);
})

btnOn.addEventListener("click", () => {
  ordenOnlineHTML()  
})

miPedido.addEventListener("click", () => {
  Swal.fire({
    title: '¿Deseas finalizar la compra?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Mi Pedido',
    cancelButtonText: 'Seguir comprando',
  }).then((result) => {
    if (result.isConfirmed) {
      ordenOnlineHTML()
    }
  });
});




function ordenOnlineHTML() {
  const pedidoRealizado = sessionStorage.getItem('pedido') ? JSON.parse(sessionStorage.getItem('pedido')) : [];
  cartas.innerHTML = `
    <form id="pedidoOnLine">
      <p>Gracias por usar nuestro servicio de pedidos Online</p>
      <div>
        <input id="nombreCliente" type="text" placeholder="Ingrese su nombre">
        <button id="btnFinalizar" class="btnOL">Finalizar Pedido</button>
      </div>
    </form>`;
  pedidoRealizado.forEach((opcion) => {
  elegidos.innerHTML += `<p class="agregado">${opcion.desc} $${opcion.precio}</p>`;
  });

  const nombreInput = document.getElementById('nombreCliente')
  const btnFinalizar = document.getElementById('btnFinalizar');

  btnFinalizar.addEventListener('click', (e) => {
  e.preventDefault();
  if (nombreInput.value === '') {
    Swal.fire({
      title: 'Debe ingresar su nombre',
      icon: 'error',
    });
    return;
  }
  const totalAbonar = pedidoRealizado.reduce((total, opcion) => total + opcion.precio, 0);
    Swal.fire({
      title: `Gracias ${nombreInput.value} por tu pedido`,
      text: `El total a abonar es: $${totalAbonar}`,
      icon: 'success',
    });
  });
  
sessionStorage.removeItem('pedido');
nombreInput.value = '';

btnHam.addEventListener("click", () => {
  elegidos.innerHTML = "";
  crearHTML(menuHamburguesas);
})

btnCom.addEventListener("click", () => {
  elegidos.innerHTML = "";
  crearHTML(menuCombos);
})

btnCaf.addEventListener("click", () => {
  elegidos.innerHTML = "";
  crearHTML(menuCafeteria);
})

btnFree.addEventListener("click", () => {
  elegidos.innerHTML = "";
  crearHTML(deliveryFree);
})
}






