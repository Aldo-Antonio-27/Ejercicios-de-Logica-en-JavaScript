/* Funciones básicas: Escribe una función que reciba dos números como parámetros y devuelva su suma. */

let html_E1_N4= `
  <h1>Nivel 4: Funciones</h1>
  <h2>Ejercicio Número 1: Funciones básicas.</h2>

  <p>Ingrese el Primer Número:</p>
	<input type="number" id="numero1_E1_N4" placeholder="Primer Número:">

	<p>Ingrese el Segundo Número:</p>
	<input type="number" id="numero2_E1_N4" placeholder="Segundo Número:">

	<br>
	<br>
	<button onclick="sumarNumeros_E1_N4()">Sumar Números</button>

	<br>
	<div id="resultados_E1_N4">
	</div>
`;

let div_E1_N4 = document.createElement('div');
div_E1_N4.innerHTML = html_E1_N4;
div_E1_N4.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E1_N4);

function sumarNumeros_E1_N4(){
  let numero1_E1_N4= parseFloat(document.getElementById('numero1_E1_N4').value);
  let numero2_E1_N4= parseFloat(document.getElementById('numero2_E1_N4').value);

  resultados_E1_N4.innerHTML = ("");
  resultados_E1_N4.innerHTML += ("La suma de los números es: " + (numero1_E1_N4 + numero2_E1_N4) + "<br>");
}