// función getRandomHexColor para generar un color aleatorio.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//  se selecciona los elementos del documento
const COLOR_BUTTON = document.querySelector('.change-color');
const SPAN = document.querySelector('.color');
const BODY = document.querySelector('body');

// Se agrega un event listener al botón de cambio de color
COLOR_BUTTON.addEventListener('click', () => {
  // se le asigna la funcion aleatoria a la variable (randomColor)
  let randomColor = getRandomHexColor();
  // Se actualiza el estilo del fondo del elemento body asignando el valor del color aleatorio
  BODY.style.backgroundColor = randomColor;
  // Se actualiza el contenido del span con el valor del color aleatorio.
  SPAN.textContent = randomColor;
});
