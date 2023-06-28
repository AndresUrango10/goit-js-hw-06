//  se selecciona el elemento del documento(clase)
const FORM = document.querySelector('.login-form');
// Se agrega un evento de escucha al formulario para el evento "submit".
// la función de callback se ejecutará cuando se envíe el formulario.
FORM.addEventListener('submit', event => {
  //  Se utiliza event.preventDefault() para evitar que el formulario se envíe y se actualice la página.
  event.preventDefault();
  //  Se utiliza la desestructuración de objetos para extraer los (elementos) de entrada de texto del formulario de manera más conveniente.
  const {
    elements: { email, password },
  } = event.currentTarget;
  // se verifica SI alguno de los campos está vacío,se mostrara una alerta utilizando alert() con un mensaje. sino
  // que se muestre en consola los datos.
  if (email.value === '' || password.value === '') {
    alert('Todos los espacios deben ser rellenados.!');
  } else {
    console.log({ email: email.value, password: password.value });
    //  Se restablece el formulario a sus valores iniciales utilizando FORM.reset().
    FORM.reset();
  }
});
