//  se selecciona los elementos del documento
let fontSizeControl = document.querySelector('#font-size-control');
let textElement = document.querySelector('#text');

// inicializar
textElement.style.fontSize = fontSizeControl.value + 'px';

// se añade un event listener al elemento fontSizeControl para el evento "input"
fontSizeControl.addEventListener('input', e => {
  // se guarda el valor que la persona seleccione en el contro deslizante y se guarda en la variable "INCREMENT_FONSIZE"
  // se agg "px" al valor para que sea reconocido como una medida de tamaño en CSS.
  const INCREMENT_FONSIZE = e.target.value + 'px';
  //  se actualiza el tamaño de fuente del texto para que coincida con el valor seleccionado por el usuario en el control deslizante
  textElement.style.fontSize = INCREMENT_FONSIZE;
});
