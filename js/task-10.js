// Se selceccionan los elementos del documento
const INPUT = document.querySelector('input');
const BTN_CREATE = document.querySelector('[data-create]');
const BTN_DESTROY = document.querySelector('[data-destroy]');
const BOXES = document.querySelector('#boxes');

// Funcion de color aleatorio
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  // Se inicializa la variable size con el valor de 30, que será el tamaño inicial de las cajas.
  let size = 30;
  // Se utiliza un ciclo for que se ejecutará amount(cantidad) veces para crear las cajas:
  for (let i = 0; i < amount; i++) {
    // Se crea un nuevo elemento <div>
    const box = document.createElement('div');
    // Se le aplican estilos en linea al box para establecer su ancho, alto y color de fondo utilizando las propiedades style.
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    // El box se agrega como hijo del elemento BOXES utilizando append
    BOXES.append(box);
    // El tamaño de la caja se incrementa en +10 para la siguiente iteración.
    size += 10;
  }
}

// Se define la función destroyBoxes(), que elimina todas las cajas del contenedor boxes
// al establecer su propiedad innerHTML como una cadena vacía.
function destroyBoxes() {
  BOXES.innerHTML = '';
}
// Se agregan los event listeners a los botones (BTN_CREATE),(BTN_DESTROY)

BTN_CREATE.addEventListener('click', () => {
  // Convierte el valor del input en un número utilizando Number.
  const amount = Number(INPUT.value);
  // Llama a la función createBoxes pasando el valor del input como argumento.
  createBoxes(amount);
});

BTN_DESTROY.addEventListener('click', () => {
  // Llama a la función destroyBoxes(), que se encarga de eliminar todas las cajas que se hayan creado previamente.
  destroyBoxes();
});
