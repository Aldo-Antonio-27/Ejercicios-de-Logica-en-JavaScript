/* Eliminar elementos del DOM: Crea un programa que elimine el último elemento de una lista ul cuando se haga clic en un botón. */

let html_E3_N6= `
  <h2>Ejercicio Número 3: Eliminar elementos del DOM.</h2>

  <p>Agrega un Nuevo Elemento a la Lista:</p>
	<input type="text" id="elemento_E3_N6" placeholder="Nuevo Elemento:">

	<br>
	<br>
	<button onclick="agregarElemento_E3_N6()">Agregar Nuevo Elemento</button>
  <button onclick="eliminarElemento_E3_N6()">Eliminar Ultimo Elemento</button>

	<br>
	<div id="resultados_E3_N6">
    <p>Lista de Elementos:</p>
    <ul id="listaElementos_E3_N6">
    </ul>
	</div>
`;

let div_E3_N6 = document.createElement('div');
div_E3_N6.innerHTML = html_E3_N6;
div_E3_N6.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E3_N6);

function agregarElemento_E3_N6(){
  let elemento_E3_N6= document.getElementById('elemento_E3_N6').value;
  let listaElementos_E3_N6= document.getElementById('listaElementos_E3_N6');
  let nuevoElemento_E3_N6= document.createElement('li');

  nuevoElemento_E3_N6.innerHTML= elemento_E3_N6;
  listaElementos_E3_N6.appendChild(nuevoElemento_E3_N6);
}

function eliminarElemento_E3_N6(){
  let elementos_E3_N6= document.querySelectorAll('ul li');

  elementos_E3_N6[elementos_E3_N6.length - 1].remove();
}