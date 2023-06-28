const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Se selecciona la clase ".gallery" y se asigna a la variable GALLERY_LIST
const GALLERY_LIST = document.querySelector('.gallery');

// Se crea una cadena de HTML utilizando el método map en el array (images), Para cada objeto (image) en el array.
// y utilizando el método join('') se unen las cadenas
const GALLERY_HTML = images
  .map(image => {
    return `<li><img src="${image.url}" alt="${image.alt}" width="300px" height="290px"></li>`;
  })
  .join('');

// Se utiliza el método (insertAdjacentHTML) para agregar la cadena de HTML generada,
// (afterbegin) indica que el HTML se insertará justo después del inicio del contenido existente dentro del elemento GALLERY_LIST
// (GALLERY_HTML) es la cadena de HTML que se va a insertar

GALLERY_LIST.insertAdjacentHTML('afterbegin', GALLERY_HTML);

// Se agregan estilos CSS
GALLERY_LIST.style.display = 'flex';
GALLERY_LIST.style.justifyContent = 'space-around';
GALLERY_LIST.style.listStyle = 'none';
