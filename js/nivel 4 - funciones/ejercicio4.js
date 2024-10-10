/* Promedio de un array: Crea una función que reciba un array de números y devuelva su promedio. */

let html_E4_N4= `
  <h2>Ejercicio Número 4: Promedio de un array.</h2>

  <p>Ingrese el Primer Número de la Lista:</p>
	<input type="number" id="numero1_E4_N4" placeholder="Primer Número:">

  <br>
  <p>Ingrese el Segundo Número de la Lista:</p>
	<input type="number" id="numero2_E4_N4" placeholder="Segundo Número:">

  <br>
  <p>Ingrese el Tercer Número de la Lista:</p>
	<input type="number" id="numero3_E4_N4" placeholder="Tercer Número:">

  <br>
  <p>Ingrese el Cuarto Número de la Lista:</p>
	<input type="number" id="numero4_E4_N4" placeholder="Cuarto Número:">

	<br>
	<br>
	<button onclick="promedioLista_E4_N4()">Promedio Lista</button>

	<br>
	<div id="resultados_E4_N4">
	</div>
`;

let div_E4_N4 = document.createElement('div');
div_E4_N4.innerHTML = html_E4_N4;
div_E4_N4.classList.add('divEspaciado');
document.body.appendChild(div_E4_N4);

function promedioLista_E4_N4(){
  let lista_E4_N4= [parseFloat(document.getElementById('numero1_E4_N4').value), parseFloat(document.getElementById('numero2_E4_N4').value), parseFloat(document.getElementById('numero3_E4_N4').value), parseFloat(document.getElementById('numero4_E4_N4').value),];
  
  resultados_E4_N4.innerHTML = ("");
  resultados_E4_N4.innerHTML += ("El promedio de los números ingresados es: " + (lista_E4_N4.reduce((suma, elemento) => suma + elemento, 0) / lista_E4_N4.length) + "<br>");
}