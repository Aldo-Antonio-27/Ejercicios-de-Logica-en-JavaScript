/* Número par o impar: Escribe un programa que pida un número al usuario y diga si es par o impar. */

let html_E3_N2= `
  <h2>Ejercicio Número 3: Número par o impar.</h2>

	<p>Ingrese un Número:</p>
	<input type="number" id="numero_E3_N2" placeholder="Número:">

	<br>
	<br>
	<button onclick="verificarNumero_E3_N2()">Verificar Número</button>

	<br>
	<div id="resultados_E3_N2">
	</div>
`;

let div_E3_N2 = document.createElement('div');
div_E3_N2.innerHTML = html_E3_N2;
div_E3_N2.classList.add('divEspaciado');
document.body.appendChild(div_E3_N2);

function verificarNumero_E3_N2(){
  let numero_E3_N2= document.getElementById('numero_E3_N2').value;
  let parImpar_E3_N2= numero_E3_N2 % 2;

  if (parImpar_E3_N2 == 0){
    resultados_E3_N2.innerHTML= ("El número ingresado es par, el número es: " + numero_E3_N2 + "<br>");
  
  } else{
    resultados_E3_N2.innerHTML= ("El número ingresado es impar, el número es: " + numero_E3_N2 + "<br>");
  }
}