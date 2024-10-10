/* Funciones anónimas: Escribe una función anónima que multiplique dos números. */

let html_E1_N5= `
  <h1>Nivel 5: Temas intermedios</h1>
  <h2>Ejercicio Número 1: Funciones anónimas.</h2>

  <p>Ingrese el Primer Número:</p>
	<input type="number" id="numero1_E1_N5" placeholder="Primer Número:">

  <br>
  <p>Ingrese el Segundo Número:</p>
	<input type="number" id="numero2_E1_N5" placeholder="Segundo Número:">

	<br>
	<br>
	<button id="boton_E1_N5">Suma Números</button>

	<br>
  <br>
	<div id="resultados_E1_N5">
	</div>
`;

let div_E1_N5 = document.createElement('div');
div_E1_N5.innerHTML = html_E1_N5;
div_E1_N5.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E1_N5);

let boton_E1_N5= document.getElementById("boton_E1_N5");

boton_E1_N5.addEventListener('click', function(){
  let numero1_E1_N5= parseFloat(document.getElementById('numero1_E1_N5').value);
  let numero2_E1_N5= parseFloat(document.getElementById('numero2_E1_N5').value);
  
  resultados_E1_N5.innerHTML = ("");
  resultados_E1_N5.innerHTML += ("La suma de los números es igual a: " + (numero1_E1_N5 + numero2_E1_N5) + "<br>");
});