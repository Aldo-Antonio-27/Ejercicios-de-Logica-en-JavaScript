/* Máximo y mínimo en un array: Escribe una función que encuentre el valor más grande y el más pequeño en un array de números. */

let html_E5_N4= `
  <h2>Ejercicio Número 5: Máximo y mínimo en un array.</h2>

  <p>Ingrese el Primer Número de la Lista:</p>
	<input type="number" id="numero1_E5_N4" placeholder="Primer Número:">

  <br>
  <p>Ingrese el Segundo Número de la Lista:</p>
	<input type="number" id="numero2_E5_N4" placeholder="Segundo Número:">

  <br>
  <p>Ingrese el Tercer Número de la Lista:</p>
	<input type="number" id="numero3_E5_N4" placeholder="Tercer Número:">

  <br>
  <p>Ingrese el Cuarto Número de la Lista:</p>
	<input type="number" id="numero4_E5_N4" placeholder="Cuarto Número:">

	<br>
	<br>
	<button onclick="ordenarLista_E5_N4()">Promedio Lista</button>

	<br>
	<div id="resultados_E5_N4">
	</div>
`;

let div_E5_N4 = document.createElement('div');
div_E5_N4.innerHTML = html_E5_N4;
div_E5_N4.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E5_N4);

function ordenarLista_E5_N4(){
  let lista_E5_N4= [parseFloat(document.getElementById('numero1_E5_N4').value), parseFloat(document.getElementById('numero2_E5_N4').value), parseFloat(document.getElementById('numero3_E5_N4').value), parseFloat(document.getElementById('numero4_E5_N4').value),];
  let listaOrdenada_E5_N4= lista_E5_N4.sort((a, b) => a - b);

  resultados_E5_N4.innerHTML = ("");
  resultados_E5_N4.innerHTML += ("El valor máximo de la lista es: " + listaOrdenada_E5_N4[listaOrdenada_E5_N4.length -1] + "<br>");
  resultados_E5_N4.innerHTML += ("El valor mínimo de la lista es: " + listaOrdenada_E5_N4[0] + "<br>");
}