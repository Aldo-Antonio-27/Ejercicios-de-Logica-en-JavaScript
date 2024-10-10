/* Condicionales: Crea un programa que verifique si un número es positivo, negativo o cero, e imprima el resultado. */

let html_E4_N1= `
  <h2>Ejercicio Número 4: Condicionales.</h2>

  <p>Ingrese un Numero:</p>
	<input type="number" id="numero_E4_N1" placeholder="Ingrese un Numero:">

	<br>
	<br>
	<button onclick="verificacion_E4_N1()">Verificar Numero</button>

	<br>
	<br>
	<div id="resultados_E4_N1">
	</div>
`;

let div_E4_N1 = document.createElement('div');
div_E4_N1.innerHTML = html_E4_N1;
div_E4_N1.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E4_N1);

function verificacion_E4_N1(){
	let numero_E4_N1= parseInt(document.getElementById('numero_E4_N1').value);

  if (numero_E4_N1 > 0){
		resultados_E4_N1.innerHTML = ("El numero ingresado es positivo, el numero que ingreso es: " + numero_E4_N1 + "<br>");

	} else if (numero_E4_N1 < 0){
		resultados_E4_N1.innerHTML = ("El numero ingresado es negativo, el numero que ingreso es: " + numero_E4_N1 + "<br>");

	} else if (numero_E4_N1 == 0){
		resultados_E4_N1.innerHTML = ("El numero ingresado es cero." + "<br>");
	}
}