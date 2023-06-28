//  se selecciona el elemento del documento
let validationInput = document.querySelector('#validation-input');

// se agrega un manejador de eventos al elemento (validationInput) para el evento blur
// que se activa cuando el input pierde el foco.
validationInput.addEventListener('blur', e => {
  // se obtiene el texto que se agg en el input y se guarda en la variable INPUT_VALUE.
  const INPUT_VALUE = validationInput.value;
  // Se obtiene la longitud o cantidad de caracteres del texto ingresado en el input.
  const INPUT_LENGTH = INPUT_VALUE.length;

  // verifica la longitud del valor ingresado en el input y aplica las clases correspondientes para indicar si el valor es válido o no.
  //  Si la longitud es suficiente, se muestra como válido, y si no es suficiente, se muestra como inválido.
  if (INPUT_LENGTH >= e.target.dataset.length) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
  // console.log(e.target.dataset.length);
});
