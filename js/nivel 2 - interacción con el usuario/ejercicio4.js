/* Conversión de temperaturas: Crea un programa que convierta grados Celsius a Fahrenheit. */

let html_E4_N2= `
  <h2>Ejercicio Número 4: Conversión de temperaturas.</h2>

	<p>Ingrese los Grados Celsius:</p>
	<input type="number" id="grados_E4_N2" placeholder="Grados:">

	<br>
	<br>
	<button onclick="convertirTemperatura_E4_N2()">Convertir Temperatura</button>

	<br>
	<div id="resultados_E4_N2">
	</div>
`;

let div_E4_N2 = document.createElement('div');
div_E4_N2.innerHTML = html_E4_N2;
div_E4_N2.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E4_N2);

function convertirTemperatura_E4_N2(){
  let grados_E4_N2= document.getElementById('grados_E4_N2').value;
  let conversion_E4_N2= ((grados_E4_N2 * 1.8) + 32);

  resultados_E4_N2.innerHTML= ("La temperatura en grados fahrenheit es: " + conversion_E4_N2 + " °F" + "<br>");
}