var formulario = document.querySelector(".formulario")//se cambia a clase pues estaba como id

formulario.onsubmit = function(e) {

  e.preventDefault();//preventDefault
  
  var nombreInput = formulario.elements[0]//cambio nombre de variables por unas más reconocibles
  var edadInput = formulario.elements[1]
  var nacionalidadInput = formulario.elements[2]

  var nombre = nombreInput.value
  var edad = edadInput.value

  var i = nacionalidadInput.selectedIndex
  var nacionalidad = nacionalidadInput.options[i].value
  //console.log(nombre, edad)
  //console.log(nacionalidad) se comentaron estos console log

  if (nombre.length === 0) {
    nombreInput.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error")
  }

if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista") //se cambia el "added" por add
lista.appendChild(elementoLista)

//Se elimina toda la función repetida

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}
// que cochinero era este codigo :c