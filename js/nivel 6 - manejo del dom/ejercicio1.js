/* Manipulación del DOM: Crea un programa que cambie el texto de un párrafo en una página HTML al hacer clic en un botón. */

let html_E1_N6= `
  <h1>Nivel 6: Manejo del DOM</h1>
  <h2>Ejercicio Número 1: Manipulación del DOM.</h2>

  <p>Ingrese su Nombre:</p>
	<input type="text" id="nombre_E1_N6" placeholder="Nombre:">

	<br>
	<br>
	<button onclick="claseCalculadora_E1_N6()">Clase de Calculadora</button>

	<br>
	<div id="resultados_E1_N6">
    <p id="textoBienvenida_E1_N6">Hola desconocido, ingrese su nombre para dale la bienvenida.</p>
	</div>
`;

let div_E1_N6 = document.createElement('div');
div_E1_N6.innerHTML = html_E1_N6;
div_E1_N6.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E1_N6);

function claseCalculadora_E1_N6(){
  let nombre_E1_N6= document.getElementById('nombre_E1_N6').value;
  let textoBienvenida_E1_N6= document.getElementById('textoBienvenida_E1_N6');

  textoBienvenida_E1_N6.innerHTML= ("Hola " + nombre_E1_N6 + " bienvenido!" + "<br>");
}