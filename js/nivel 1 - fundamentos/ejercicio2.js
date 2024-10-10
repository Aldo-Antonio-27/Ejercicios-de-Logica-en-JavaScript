/* Operaciones matemáticas: Crea un programa que sume, reste, multiplique y divida dos números y muestre el resultado en la consola. */

let html_E2_N1= `
  <h2>Ejercicio Número 2: Operaciones matemáticas.</h2>

  <p>Ingrese el Primer Numero:</p>
	<input type="number" id="numero1_E2_N1" placeholder="Primer Numero:">

	<p>Ingrese el Segundo Numero:</p>
	<input type="number" id="numero2_E2_N1" placeholder="Segundo Numero:">

	<br>
	<br>
	<button onclick="operaciones_E2_N1()">Realizar Operaciones</button>

	<br>
	<div id="resultados_E2_N1">
	</div>
`;

let div_E2_N1 = document.createElement('div');
div_E2_N1.innerHTML = html_E2_N1;
div_E2_N1.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E2_N1);

function operaciones_E2_N1(){
  let numero1_E2_N1= parseFloat(document.getElementById('numero1_E2_N1').value);
  let numero2_E2_N1= parseFloat(document.getElementById('numero2_E2_N1').value);

  resultados_E2_N1.innerHTML = ("");
  resultados_E2_N1.innerHTML += ("La Suma es: " + (numero1_E2_N1 + numero2_E2_N1) + "<br>");
  resultados_E2_N1.innerHTML += ("La Resta es: " + (numero1_E2_N1 - numero2_E2_N1) + "<br>");
  resultados_E2_N1.innerHTML += ("La Multiplicacion es: " + (numero1_E2_N1 * numero2_E2_N1) + "<br>");
  resultados_E2_N1.innerHTML += ("La Division es: " + (numero1_E2_N1 / numero2_E2_N1) + "<br>");
}