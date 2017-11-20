// Versión 0.0.1
//
// Se mostrará el texto "Añadir una lista ...".
// Al hacer click se debe ocultar el texto y mostrar un formulario.
window.addEventListener('load', function() {
  var container = document.body.children[1].children[0].children[1];
  var button = document.body.children[1].children[0].children[1].children[0];
  // var form = document.body.children[1].children[0].children[1].children[0];
  button.addEventListener('click', function() {
    // button.setAttribute('id', 'hidden');
    container.classList.add('hidden');
    button.classList.add('hidden');
    var form = document.body.children[1].children[0].children[2].children[0];
    form.classList.add('show');
    // form.setAttribute('id', 'hidden');
    // El formulario está conformado por un input y un botón para que pueda añadir tareas a tu lista.
    var input = document.createElement('input');
    var text = document.createTextNode(text);
    var inputButton = document.createElement('button');
    input.appendChild(text);
    // document.body.children[1].children[0].children[2].appendChild(input);
    document.body.children[1].children[0].children[2].children[0].appendChild(input);
    input.setAttribute('placeholder', 'añadir lista');
    input.setAttribute('id', 'inputList');
    // document.body.children[1].children[0].children[2].appendChild(inputButton);
    document.body.children[1].children[0].children[2].children[0].appendChild(inputButton);
    inputButton.innerHTML = 'Guardar';
    inputButton.setAttribute('id', 'append');
    // var content = document.body.children[1].children[0].children[2].children[0].children[0].value;
    // var save = document.getElementById('append');
    // save.addEventListener('click', function() {
    //   var input2 = document.createElement('p');
    //   var text2 = document.createTextNode(content);
    //   input2.appendChild(text2);
    //   document.body.children[1].children[0].children[2].appendChild(input2);
    // });
  });
});


var text = document.getElementById('inputList');
text.addEventListener('input', function() {
  var input2 = document.createElement('p');
  var text2 = document.createTextNode(text);
  input2.appendChild(text2);
  document.body.children[1].children[0].children[2].appendChild(input2);
});

// Versión 0.0.2
// Al dar click en el botón de "Guardar", se mostrará un nuevo cuadro donde estará el nombre de la lista agregada.
// Mostrar un texto de "Añadir una tarea" dentro de la lista.
// var list = document.getElementById('inputList').value;
// console.log(input.getAttribute('value'));
// var save = document.getElementById('append');
// save.addEventListener('click', function() {
//   var input2 = document.createElement('input');
//   var text2 = document.createTextNode(list);
//   input2.appendChild(text2);
//   document.body.children[1].children[0].children[2].children[0].appendChild(input2);
// });
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
