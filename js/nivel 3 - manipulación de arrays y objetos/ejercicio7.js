/* Agregar y eliminar elementos en arrays: Crea un programa que agregue un elemento a un array y luego elimine el último elemento. */

let html_E7_N3= `
  <h2>Ejercicio Número 7: Agregar y eliminar elementos en arrays.</h2>

	<p>Ingrese el primer elemento de la lista:</p>
	<input type="text" id="elemento1_E7_N3" placeholder="Primer Elemento:">

	<br>
	<p>Ingrese el segundo elemento de la lista:</p>
	<input type="text" id="elemento2_E7_N3" placeholder="Segundo Elemento:">

  <br>
	<p>Ingrese el tercer elemento de la lista:</p>
	<input type="text" id="elemento3_E7_N3" placeholder="Tercer Elemento:">

  <br>
	<p>Ingrese el cuarto elemento de la lista:</p>
	<input type="text" id="elemento4_E7_N3" placeholder="Cuarto Elemento:">

  <br>
  <br>
	<p>Ingrese un nuevo elemento a agregar:</p>
	<input type="text" id="elementoAgregar_E7_N3" placeholder="Elemento a agregar:">

	<br>
	<br>
	<button onclick="agregarElemento_E7_N3()">Agregar elemento</button>

	<br>
	<div id="resultados_E7_N3">
	</div>
`;

let div_E7_N3 = document.createElement('div');
div_E7_N3.innerHTML = html_E7_N3;
div_E7_N3.classList.add('divEspaciado');
document.body.appendChild(div_E7_N3);

function agregarElemento_E7_N3(){
  let listaElementos_E3_N3= [document.getElementById('elemento1_E7_N3').value, document.getElementById('elemento2_E7_N3').value, document.getElementById('elemento3_E7_N3').value, document.getElementById('elemento4_E7_N3').value];
  let elementoAgregar_E7_N3= document.getElementById('elementoAgregar_E7_N3').value;

  resultados_E7_N3.innerHTML= ("");
  resultados_E7_N3.innerHTML+= ("Lista de elementos original es: " + listaElementos_E3_N3 + "<br>" + "<br>");

  listaElementos_E3_N3.unshift(elementoAgregar_E7_N3);
  listaElementos_E3_N3.pop();

  resultados_E7_N3.innerHTML+= ("Lista de elementos actualizada es: " + listaElementos_E3_N3 + "<br>");
}