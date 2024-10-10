/* Buscar en un array: Escribe un programa que busque un valor en un array y muestre su posición. */

let html_E6_N3= `
  <h2>Ejercicio Número 6: Buscar en un array.</h2>

	<p>Ingrese el primer objeto de la lista:</p>
	<input type="text" id="objeto1_E6_N3" placeholder="Primer Objeto:">

	<br>
	<p>Ingrese el segundo objeto de la lista:</p>
	<input type="text" id="objeto2_E6_N3" placeholder="Segundo Objeto:">

  <br>
	<p>Ingrese el tercer objeto de la lista:</p>
	<input type="text" id="objeto3_E6_N3" placeholder="Tercer Objeto:">

  <br>
	<p>Ingrese el cuarto objeto de la lista:</p>
	<input type="text" id="objeto4_E6_N3" placeholder="Cuarto Objeto:">

  <br>
  <br>
	<p>Ingrese el objeto que esta buscar:</p>
	<input type="text" id="objetoBuscar_E6_N3" placeholder="Objeto a buscar:">

	<br>
	<br>
	<button onclick="buscarObjeto_E6_N3()">Crear Objeto</button>

	<br>
	<br>
	<div id="resultados_E6_N3">
	</div>
`;

let div_E6_N3 = document.createElement('div');
div_E6_N3.innerHTML = html_E6_N3;
div_E6_N3.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E6_N3);

function buscarObjeto_E6_N3(){
  let listaObjetos_E3_N3= [document.getElementById('objeto1_E6_N3').value, document.getElementById('objeto2_E6_N3').value, document.getElementById('objeto3_E6_N3').value, document.getElementById('objeto4_E6_N3').value];
  let objetoBuscar_E6_N3= document.getElementById('objetoBuscar_E6_N3').value;

  resultados_E6_N3.innerHTML= ("");
  resultados_E6_N3.innerHTML+= ("El objeto que busca " + "'" + objetoBuscar_E6_N3 + "'" +", se encuentra en la posición: " + (listaObjetos_E3_N3.indexOf(objetoBuscar_E6_N3) + 1) + "<br>");
}