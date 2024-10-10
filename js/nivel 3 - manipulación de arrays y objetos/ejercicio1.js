/* Array invertido: Escribe un programa que invierta el orden de los elementos en un array y lo imprima. */

let html_E1_N3= `
  <h1>Nivel 3: Manipulación de arrays y objetos</h1>
  <h2>Ejercicio Número 1: Array invertido.</h2>

	<p>Ingrese el Primer Elemento de la Lista:</p>
	<input type="text" id="elemento1_E1_N3" placeholder="Primer Elemento:">

	<br>
	<p>Ingrese el Segundo Elemento de la Lista:</p>
	<input type="text" id="elemento2_E1_N3" placeholder="Segundo Elemento:">

  <br>
	<p>Ingrese el Tercer Elemento de la Lista:</p>
	<input type="text" id="elemento3_E1_N3" placeholder="Tercer Elemento:">

	<br>
	<br>
	<button onclick="imprimirElementos_E1_N3()">Imprimir Elementos</button>

	<br>
	<br>
	<div id="resultados_E1_N3">
	</div>
`;

let div_E1_N3 = document.createElement('div');
div_E1_N3.innerHTML = html_E1_N3;
div_E1_N3.classList.add('divEspaciado');
document.body.appendChild(div_E1_N3);

function imprimirElementos_E1_N3(){
  let listaElementos_E1_N3= [document.getElementById('elemento1_E1_N3').value, document.getElementById('elemento2_E1_N3').value, document.getElementById('elemento3_E1_N3').value];

  resultados_E1_N3.innerHTML= ("");
  resultados_E1_N3.innerHTML+= ("La lista de elementos es: " + listaElementos_E1_N3 + "<br>" + "<br>");
  resultados_E1_N3.innerHTML+= ("La lista de elementos invertida es: " + listaElementos_E1_N3.reverse() + "<br>");
}