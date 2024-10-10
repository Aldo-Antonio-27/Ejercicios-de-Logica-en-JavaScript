/* Factorial: Escribe una función que calcule el factorial de un número. */

let html_E3_N4= `
  <h2>Ejercicio Número 3: Factorial.</h2>

  <p>Ingrese el Número a Factorizar:</p>
	<input type="number" id="numero_E3_N4" placeholder="Número:">

	<br>
	<br>
	<button onclick="factorizarNumero_E3_N4()">Factorizar Número</button>

	<br>
	<div id="resultados_E3_N4">
	</div>
`;

let div_E3_N4 = document.createElement('div');
div_E3_N4.innerHTML = html_E3_N4;
div_E3_N4.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E3_N4);

function factorizarNumero_E3_N4(){
  let numero_E3_N4= parseInt(document.getElementById('numero_E3_N4').value);
  let numeroActual_E3_N4= numero_E3_N4 - 1;
  let factorial_E3_N4= 1;

  while(numero_E3_N4 > 0){
    factorial_E3_N4+= factorial_E3_N4 * numeroActual_E3_N4;
    numero_E3_N4-= 1;
    numeroActual_E3_N4-= 1;
  }

  resultados_E3_N4.innerHTML = ("");
  resultados_E3_N4.innerHTML += ("El factorial del número ingresado es: " + factorial_E3_N4 + "<br>");
}