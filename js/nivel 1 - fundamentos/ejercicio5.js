/* Comparaciones: Escribe un programa que compare dos números y diga cuál es mayor o si son iguales. */

let html_E5_N1= `
  <h2>Ejercicio Número 5: Comparaciones.</h2>

  <p>Ingrese el Primer Numero:</p>
	<input type="number" id="numero1_E5_N1" placeholder="Primer Numero:">

	<br>
	<p>Ingrese el Segundo Numero:</p>
	<input type="number" id="numero2_E5_N1" placeholder="Segundo Numero:">

	<br>
	<br>
	<button onclick="verificacion_E5_N1()">Verificar Numeros</button>

	<br>
	<br>
	<div id="resultados_E5_N1">
	</div>
`;

let div_E5_N1 = document.createElement('div');
div_E5_N1.innerHTML = html_E5_N1;
div_E5_N1.classList.add('divEspaciado');
document.body.appendChild(div_E5_N1);

function verificacion_E5_N1(){
	let numero1_E5_N1= parseFloat(document.getElementById('numero1_E5_N1').value);
	let numero2_E5_N1= parseFloat(document.getElementById('numero2_E5_N1').value);
  
  if (numero1_E5_N1 > numero2_E5_N1){
	  resultados_E5_N1.innerHTML = ("El numero mayor es el primer numero ingresado, su valor es: " + numero1_E5_N1 + "<br>");
    
	} else if (numero1_E5_N1 < numero2_E5_N1){
		resultados_E5_N1.innerHTML = ("El numero mayor es el segundo numero ingresado, su valor es: " + numero2_E5_N1 + "<br>");
  
	} else if (numero1_E5_N1 == numero2_E5_N1){
		resultados_E5_N1.innerHTML = ("Ambos numero son iguales, sus valores son: " + numero1_E5_N1 + "<br>");
	}
}