/* Entrada de usuario: Crea un programa que pida al usuario ingresar su nombre y luego lo salude. */

let html_E1_N2= `
  <h1>Nivel 2: Interacción con el usuario</h1>
  <h2>Ejercicio Número 1: Entrada de usuario.</h2>

	<p>Ingrese su Nombre:</p>
	<input type="text" id="nombre_E1_N2" placeholder="Nombre:">

	<br>
	<br>
	<button onclick="imprimirSaludo_E1_N2()">Imprimir Saludo</button>

	<br>
	<br>
	<div id="resultados_E1_N2">
	</div>
`;

let div_E1_N2 = document.createElement('div');
div_E1_N2.innerHTML = html_E1_N2;
div_E1_N2.classList.add('divEspaciado');
document.body.appendChild(div_E1_N2);

function imprimirSaludo_E1_N2(){
  let nombre_E1_N2= document.getElementById('nombre_E1_N2').value;

  resultados_E1_N2.innerHTML= ("Hola bienvenido " + nombre_E1_N2 + "." + "<br>");
}