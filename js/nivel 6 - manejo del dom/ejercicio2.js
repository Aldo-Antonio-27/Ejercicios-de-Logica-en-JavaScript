/* Crear elementos en el DOM: Escribe un programa que añada un nuevo elemento li a una lista ul en HTML al hacer clic en un botón. */

let html_E2_N6= `
  <h2>Ejercicio Número 2: Crear elementos en el DOM.</h2>

  <p>Agrega un Nuevo Elemento a la Lista:</p>
	<input type="text" id="elemento_E2_N6" placeholder="Nuevo Elemento:">

	<br>
	<br>
	<button onclick="agregarElemento_E2_N6()">Agregar Nuevo Elemento</button>

	<br>
	<div id="resultados_E2_N6">
    <p>Lista de Elementos:</p>
    <ul id="listaElementos_E2_N6">
    </ul>
	</div>
`;

let div_E2_N6 = document.createElement('div');
div_E2_N6.innerHTML = html_E2_N6;
div_E2_N6.classList.add('divEspaciado');
document.body.appendChild(div_E2_N6);

function agregarElemento_E2_N6(){
  let elemento_E2_N6= document.getElementById('elemento_E2_N6').value;
  let listaElementos_E2_N6= document.getElementById('listaElementos_E2_N6');
  let nuevoElemento_E2_N6= document.createElement('li');

  nuevoElemento_E2_N6.innerHTML= elemento_E2_N6;
  listaElementos_E2_N6.appendChild(nuevoElemento_E2_N6);
}