// Se selecciona todos los elementos HTML que tienen la clase ".item"
const CATEGORIES = document.querySelectorAll('.item');
// Se imprime en la consola el número de CATEGORIES(item) encontradas
console.log(`Number of categories : ${CATEGORIES.length}`);

// Se utiliza el método forEach en CATEGORIES para iterar sobre cada elemento.
CATEGORIES.forEach(element => {
  // Se usa  element.firstElementChild.textContent para que escoja el primer elemento hijo y muestre su texto
  console.log(`Category: ${element.firstElementChild.textContent}`);
  // Se usa element.querySelectorAll('li').length para buscar el numero de elementos <li> que esta en cada categoria
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
});
