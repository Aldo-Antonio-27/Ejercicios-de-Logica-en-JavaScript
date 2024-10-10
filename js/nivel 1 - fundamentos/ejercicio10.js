/* Acceder a un array: Crea un programa que modifique el tercer valor de un array y luego imprima el array completo. */

let html_E10_N1= `
  <h2>Ejercicio Número 10: Acceder a un array.</h2>

	<p>Ingrese el Primer Objeto de la Lista:</p>
	<input type="text" id="objeto1_E10_N1" placeholder="Primer Objeto:">

	<br>
	<p>Ingrese el Segundo Objeto de la Lista:</p>
	<input type="text" id="objeto2_E10_N1" placeholder="Segundo Objeto:">

  <br>
	<p>Ingrese el Tercer Objeto de la Lista:</p>
	<input type="text" id="objeto3_E10_N1" placeholder="Tercer Objeto:">

  <br>
  <br>
	<p>Ingrese el Numero del Objeto que Desea Cambiar:</p>
	<input type="number" id="indiceObjeto_E10_N1" placeholder="Numero del Objeto:">

  <br>
	<p>Ingrese el Nuevo Objeto de la Lista:</p>
	<input type="text" id="nuevoObjeto_E10_N1" placeholder="Nuevo Objeto:">

	<br>
	<br>
	<button onclick="imprimirLista_E10_N1()">Imprimir Lista</button>

	<br>
	<br>
	<div id="resultados_E10_N1">
	</div>
`;

let div_E10_N1 = document.createElement('div');
div_E10_N1.innerHTML = html_E10_N1;
div_E10_N1.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E10_N1);

function imprimirLista_E10_N1(){
  let listaObjetos_E10_N1= [document.getElementById('objeto1_E10_N1').value, document.getElementById('objeto2_E10_N1').value, document.getElementById('objeto3_E10_N1').value];
  let indiceObjeto_E10_N1= parseInt(document.getElementById('indiceObjeto_E10_N1').value) - 1;
  let nuevoObjeto_E10_N1= document.getElementById('nuevoObjeto_E10_N1').value;

  listaObjetos_E10_N1[indiceObjeto_E10_N1] = nuevoObjeto_E10_N1;

  resultados_E10_N1.innerHTML= ("La lista de objetos modificados es: " + listaObjetos_E10_N1 + "<br>");
}