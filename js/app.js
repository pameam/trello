// Versión 0.0.1
//
// Se mostrará el texto "Añadir una lista ...".
// Al hacer click se debe ocultar el texto y mostrar un formulario.
window.addEventListener('load', function() {
  var container = document.body.children[2].children[0];
  var button = document.body.children[2].children[0].children[0];
  var containerList = document.body.children[2].children[1];
  var newInput = document.body.children[2].children[1].children[0].children[0];
  var newButton = document.body.children[2].children[1].children[0].children[2];
  var form = document.body.children[2].children[1].children[0];
  containerList.classList.add('hidden');
  button.addEventListener('click', function() {
    container.setAttribute('id', 'hidden');
    button.classList.add('hidden');
    containerList.classList.add('show');
    form.classList.add('show');
    newInput.classList.add('show');
    newButton.classList.add('show');
  });
});
// Versión 0.0.2
// Al dar click en el botón de "Guardar", se mostrará un nuevo cuadro donde estará el nombre de la lista agregada.
// Mostrar un texto de "Añadir una tarea" dentro de la lista.

// Versión 0.0.3
//
// Al dar click en "Añadir una tarea", deberá mostrar un formulario con un textarea y un botón que diga "Añadir".
// Versión 0.0.4
//
// Poner focus al input al dar click en "Agregar nueva tarea".
// Al dar click en el botón de "Añadir", deberá aparecer el texto de la tarea debajo del título de la lista.
// Versión 0.0.5
//
// Mostrar el formulario nuevamente debajo de la última tarea añadida.
// Versión 0.0.6 (Extra)
//
// Poder agregar múltiples listas con tarjetas. Para esto, el formulario de "Añadir una lista" debe aparecer a la derecha de la lista anteriormente creada.
