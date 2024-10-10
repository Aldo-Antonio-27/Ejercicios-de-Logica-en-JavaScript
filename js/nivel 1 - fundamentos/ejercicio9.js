/* Arrays básicos: Declara un array con 5 nombres y muestra cada nombre en la consola usando un ciclo. */

let html_E9_N1= `
  <h2>Ejercicio Número 9: Arrays básicos.</h2>

	<p>Ingrese el Primer Nombre:</p>
	<input type="text" id="nombre1_E9_N1" placeholder="Primer Nombre:">

	<br>
	<p>Ingrese el Segundo Nombre:</p>
	<input type="text" id="nombre2_E9_N1" placeholder="Segundo Nombre:">

  <br>
	<p>Ingrese el Tercer Nombre:</p>
	<input type="text" id="nombre3_E9_N1" placeholder="Tercer Nombre:">

  <br>
	<p>Ingrese el Cuarto Nombre:</p>
	<input type="text" id="nombre4_E9_N1" placeholder="Cuarto Nombre:">

  <br>
	<p>Ingrese el Quinto Nombre:</p>
	<input type="text" id="nombre5_E9_N1" placeholder="Quinto Nombre:">

	<br>
	<br>
	<button onclick="imprimirNombres_E9_N1()">Imprimir Nombres</button>

	<br>
	<br>
	<div id="resultados_E9_N1">
	</div>
`;

let div_E9_N1 = document.createElement('div');
div_E9_N1.innerHTML = html_E9_N1;
div_E9_N1.classList.add('divEspaciado');
document.body.appendChild(div_E9_N1);

function imprimirNombres_E9_N1(){
  let nombres_E9_N1= [document.getElementById('nombre1_E9_N1').value, document.getElementById('nombre2_E9_N1').value, document.getElementById('nombre3_E9_N1').value, document.getElementById('nombre4_E9_N1').value, document.getElementById('nombre5_E9_N1').value];

  resultados_E9_N1.innerHTML= ("La lista de nombres es: " + "<br>");

  for(let contador_E9_N1= 0; contador_E9_N1<5; contador_E9_N1++){
    resultados_E9_N1.innerHTML+= ("* " + nombres_E9_N1[contador_E9_N1] + "<br>");
  }
}