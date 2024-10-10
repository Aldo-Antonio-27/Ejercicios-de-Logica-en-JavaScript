/* Modificar propiedades de un objeto: Crea un programa que cambie el valor de una propiedad de un objeto y luego lo imprima. */

let html_E5_N3= `
  <h2>Ejercicio Número 5: Modificar propiedades de un objeto.</h2>

	<p>Ingrese la marca del carro:</p>
	<input type="text" id="marca_E5_N3" placeholder="Marca del Carro:">

	<br>
	<p>Ingrese el modelo del carro:</p>
	<input type="text" id="modelo_E5_N3" placeholder="Modelo del Carro:">

  <br>
	<p>Ingrese el año del carro:</p>
	<input type="number" id="anio_E5_N3" placeholder="Año del Carro:">

  <br>
  <br>
	<p>Ingrese el número de la propiedad que desea cambiar:</p>
	<input type="number" id="numeroPropiedad_E5_N3" placeholder="Número de la Propiedad:">

  <br>
	<p>Ingrese la nueva propiedad:</p>
	<input type="text" id="nuevaPropiedad_E5_N3" placeholder="Nueva Propiedad:">

	<br>
	<br>
	<button onclick="objetoCarro_E5_N3()">Crear Objeto</button>

	<br>
	<div id="resultados_E5_N3">
	</div>
`;

let div_E5_N3 = document.createElement('div');
div_E5_N3.innerHTML = html_E5_N3;
div_E5_N3.classList.add('divEspaciado');
document.body.appendChild(div_E5_N3);

function objetoCarro_E5_N3(){
  let carro_E5_N3= {};
  let marca_E5_N3= document.getElementById('marca_E5_N3').value;
  let modelo_E5_N3= document.getElementById('modelo_E5_N3').value;
  let anio_E5_N3= document.getElementById('anio_E5_N3').value;
  let numeroPropiedad_E5_N3= document.getElementById('numeroPropiedad_E5_N3').value;
  let nuevaPropiedad_E5_N3= document.getElementById('nuevaPropiedad_E5_N3').value;

  carro_E5_N3.marca= marca_E5_N3;
  carro_E5_N3.modelo= modelo_E5_N3;
  carro_E5_N3.año= anio_E5_N3;

  resultados_E5_N3.innerHTML= ("");
  resultados_E5_N3.innerHTML+= ("Las primeras propiedades del objeto son: " + JSON.stringify(carro_E5_N3) + "<br>" + "<br>");

  if (numeroPropiedad_E5_N3 == 1){
    carro_E5_N3.marca= nuevaPropiedad_E5_N3;

  } else if (numeroPropiedad_E5_N3 == 2){
    carro_E5_N3.modelo= nuevaPropiedad_E5_N3;

  } else if (numeroPropiedad_E5_N3 == 3){
    carro_E5_N3.año= nuevaPropiedad_E5_N3;
  }

  resultados_E5_N3.innerHTML+= ("Las primeras propiedades del objeto son: " + JSON.stringify(carro_E5_N3) + "<br>");
}