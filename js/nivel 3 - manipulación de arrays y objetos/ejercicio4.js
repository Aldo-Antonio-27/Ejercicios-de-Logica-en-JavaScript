/* Objetos básicos: Crea un objeto que represente un coche, con propiedades como marca, modelo y año. Imprime sus propiedades. */

let html_E4_N3= `
  <h2>Ejercicio Número 4: Objetos básicos.</h2>

	<p>Ingrese la marca del carro:</p>
	<input type="text" id="marca_E4_N3" placeholder="Marca del Carro:">

	<br>
	<p>Ingrese el modelo del carro:</p>
	<input type="text" id="modelo_E4_N3" placeholder="Modelo del Carro:">

  <br>
	<p>Ingrese el año del carro:</p>
	<input type="number" id="anio_E4_N3" placeholder="Año del Carro:">

	<br>
	<br>
	<button onclick="objetoCarro_E4_N3()">Crear Objeto</button>

	<br>
	<div id="resultados_E4_N3">
	</div>
`;

let div_E4_N3 = document.createElement('div');
div_E4_N3.innerHTML = html_E4_N3;
div_E4_N3.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E4_N3);

function objetoCarro_E4_N3(){
  let carro_E4_N3= {};
  let marca_E4_N3= document.getElementById('marca_E4_N3').value;
  let modelo_E4_N3= document.getElementById('modelo_E4_N3').value;
  let anio_E4_N3= document.getElementById('anio_E4_N3').value;

  carro_E4_N3.marca= marca_E4_N3;
  carro_E4_N3.modelo= modelo_E4_N3;
  carro_E4_N3.año= anio_E4_N3;

  resultados_E4_N3.innerHTML= ("");
  resultados_E4_N3.innerHTML+= ("Las propiedades del objeto son: " + JSON.stringify(carro_E4_N3) + "<br>");
}