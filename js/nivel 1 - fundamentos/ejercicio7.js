/* Ciclo while: Crea un ciclo while que imprima los números del 10 al 1. */

let html_E7_N1= `
  <h2>Ejercicio Número 7: Ciclo while.</h2>

	<button onclick="imprimirNumeros_E7_N1()">Imprimir Numeros</button>

	<br>
	<br>
	<div id="resultados_E7_N1">
	</div>
`;

let div_E7_N1 = document.createElement('div');
div_E7_N1.innerHTML = html_E7_N1;
div_E7_N1.classList.add('divEspaciado');
document.body.appendChild(div_E7_N1);

function imprimirNumeros_E7_N1(){
	let numero_E7_N1= 10;

  resultados_E7_N1.innerHTML = ("");

	while(numero_E7_N1>0){
		resultados_E7_N1.innerHTML += (numero_E7_N1 + "<br>");
		numero_E7_N1-= 1
	}
}