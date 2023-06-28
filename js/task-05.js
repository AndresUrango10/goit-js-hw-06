//  se seleccionan los elementos del documento
const INPUT_NAME = document.querySelector('#name-input');
const OUTPUT_NAME = document.querySelector('#name-output');

// Se agrega un manejador de eventos ala variable (INPUT_NAME) para el evento (input)
// que se activara cada vez que se escriba o modifique el input.
INPUT_NAME.addEventListener('input', event => {
  // se actualiza el contenido del elemento (OUTPUT_NAME("Anonymous")), con el (event.target.value) para que muestre lo que se escriba.
  OUTPUT_NAME.textContent = event.target.value;
  // Se verifica si el valor del campo de entrada es una cadena vacía (''). Si es así, se asigna el texto "Anonymous" al elemento outputName.
  if (event.target.value === '') {
    return (OUTPUT_NAME.textContent = 'Anonymous');
  }
});

// SOLUCION 2
// const INPUT_NAME = document.querySelector('#name-input');
// const OUTPUT_NAME = document.querySelector('#name-output');

// INPUT_NAME.addEventListener('input', event => {
//   OUTPUT_NAME.textContent = event.target.value || 'Anonymous';
// });
