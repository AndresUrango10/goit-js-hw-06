// Se selecionan los elementos del documento
const DECREMENT_BTN = document.querySelector('[data-action="decrement"]');
const INCREMENT_BTN = document.querySelector('[data-action="increment"]');
const VALUE_OF_SPAN = document.querySelector('#value');

// inicializacion con el valor 0.
let counterValue = 0;

// Cuando se hace clic en el botón de (decremento), se disminuye el valor de (counterValue(0)) en (1) y
// se actualiza el contenido del elemento (valueOfSpan) con el nuevo valor.
// Decrement
DECREMENT_BTN.addEventListener('click', () => {
  counterValue -= 1;
  VALUE_OF_SPAN.textContent = counterValue;
});

// Cuando se hace clic en el botón de incremento, se aumenta el valor de (counterValue(0)) en (1) y
// se actualiza el contenido del elemento (valueOfSpan) con el nuevo valor.
// Increment
INCREMENT_BTN.addEventListener('click', () => {
  counterValue += 1;
  VALUE_OF_SPAN.textContent = counterValue;
});
