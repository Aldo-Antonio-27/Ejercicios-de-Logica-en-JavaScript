/* Suma de elementos de un array: Crea un programa que sume todos los números de un array. */

let html_E2_N3= `
  <h2>Ejercicio Número 2: Suma de elementos de un array.</h2>

	<p>Ingrese el Primer Valor de la Lista:</p>
	<input type="number" id="valor1_E2_N3" placeholder="Primer Valor:">

	<br>
	<p>Ingrese el Segundo Valor de la Lista:</p>
	<input type="number" id="valor2_E2_N3" placeholder="Segundo Valor:">

  <br>
	<p>Ingrese el Tercer Valor de la Lista:</p>
	<input type="number" id="valor3_E2_N3" placeholder="Tercer Valor:">

	<br>
	<br>
	<button onclick="imprimirSuma_E2_N3()">Imprimir Suma</button>

	<br>
	<div id="resultados_E2_N3">
	</div>
`;

let div_E2_N3 = document.createElement('div');
div_E2_N3.innerHTML = html_E2_N3;
div_E2_N3.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E2_N3);

function imprimirSuma_E2_N3(){
  let listaValores_E2_N3= [parseFloat(document.getElementById('valor1_E2_N3').value), parseFloat(document.getElementById('valor2_E2_N3').value), parseFloat(document.getElementById('valor3_E2_N3').value)];
  let numeroElementos_E2_N3= listaValores_E2_N3.length;
  let sumaValores_E2_N3= 0;

  while (numeroElementos_E2_N3 > 0){
    sumaValores_E2_N3+= listaValores_E2_N3[numeroElementos_E2_N3 - 1];
    numeroElementos_E2_N3-= 1;
  }

  resultados_E2_N3.innerHTML= ("");
  resultados_E2_N3.innerHTML+= ("La suma de los valores es: " + sumaValores_E2_N3 + "<br>");
}