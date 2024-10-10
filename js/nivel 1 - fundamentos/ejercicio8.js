/* Ciclo for y suma: Escribe un programa que sume todos los números del 1 al 100 usando un ciclo for. */

let html_E8_N1= `
  <h2>Ejercicio Número 8: Ciclo for y suma.</h2>

	<button onclick="sumaDeNumeros_E8_N1()">Suma de Numeros</button>

	<br>
	<div id="resultados_E8_N1">
	</div>
`;

let div_E8_N1 = document.createElement('div');
div_E8_N1.innerHTML = html_E8_N1;
div_E8_N1.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E8_N1);

function sumaDeNumeros_E8_N1(){
	let contador_E8_N1= 0;
  let suma_E8_N1= 0;

	while(contador_E8_N1<=100){
    suma_E8_N1+= contador_E8_N1; 
		contador_E8_N1+= 1;
	}

  resultados_E8_N1.innerHTML= ("El total de la suma es: " + suma_E8_N1 + "<br>");
}