const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// seleccionar el elemento HTML con el ID "ingredients"
const SEARCH_LIST = document.getElementById('ingredients');

//iteramos cada elemento del array con el metodo map, generando un nuevo array con los resultados de
// (createElement)(textContent)(classList) y (append)
const COMPLETE_LIST = ingredients.map(ingredient => {
  // se crea un elemento <li> y se almacena en la variable item
  let item = document.createElement('li');
  // se asigna el contenido de texto al elemento (ingredient) del ciclo
  item.textContent = ingredient;
  // se añade la clase al elemento item
  item.classList.add('item');
  return item;
});

// se agrega el elemento COMPLETE_LIST como hijo de SEARCH_LIST(UL)
SEARCH_LIST.append(...COMPLETE_LIST);
