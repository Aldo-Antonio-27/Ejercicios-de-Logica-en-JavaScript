/* Ciclos for: Crea un ciclo for que imprima los números del 1 al 10. */

let html_E6_N1= `
  <h2>Ejercicio Número 6: Ciclos for.</h2>

	<button onclick="imprimirNumeros_E6_N1()">Imprimir Numeros</button>

	<br>
	<br>
	<div id="resultados_E6_N1">
	</div>
`;

let div_E6_N1 = document.createElement('div');
div_E6_N1.innerHTML = html_E6_N1;
div_E6_N1.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E6_N1);

function imprimirNumeros_E6_N1(){
  resultados_E6_N1.innerHTML = ("");

	for (numero_E6_N1 = 1; numero_E6_N1 <= 10; numero_E6_N1++){
		resultados_E6_N1.innerHTML += (numero_E6_N1 + "<br>");
	}
}