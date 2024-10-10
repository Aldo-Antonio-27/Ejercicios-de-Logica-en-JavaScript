/* Callbacks: Crea una función que reciba un callback. Usa el callback para imprimir un mensaje en la consola. */

let html_E2_N5= `
  <h2>Ejercicio Número 2: Callbacks.</h2>

  <p>Ingrese su Nombre:</p>
	<input type="text" id="nombre_E2_N5" placeholder="Nombre:">

	<br>
	<br>
	<button id="boton_E2_N5">Imprimir Mensaje</button>

	<br>
	<div id="resultados_E2_N5">
	</div>
`;

let div_E2_N5 = document.createElement('div');
div_E2_N5.innerHTML = html_E2_N5;
div_E2_N5.classList.add('divEspaciado');
document.body.appendChild(div_E2_N5);

let boton_E2_N5= document.getElementById("boton_E2_N5");

function imprimirMensaje_E2_N5(nombre, callback){
  resultados_E2_N5.innerHTML= ("");
  resultados_E2_N5.innerHTML+= ("Hola " + nombre + ".");
  callback();
}

function imprimirMensaje2_E2_N5(){
  resultados_E2_N5.innerHTML+= ("<br>" + "Bienvenido!" + "<br>");
}

boton_E2_N5.addEventListener('click', function(){
  let nombre_E2_N5= document.getElementById('nombre_E2_N5').value;
  imprimirMensaje_E2_N5(nombre_E2_N5, imprimirMensaje2_E2_N5);
});