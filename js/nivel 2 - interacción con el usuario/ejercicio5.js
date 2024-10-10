/* Validación de entrada: Pide al usuario que ingrese un número y verifica si es realmente un número. Si no lo es, muestra un mensaje de error. */

let html_E5_N2= `
  <h2>Ejercicio Número 5: Validación de entrada.</h2>

	<p>Ingrese un Numero:</p>
	<input type="text" id="numero_E5_N2" placeholder="Numero:">

	<br>
	<br>
	<button onclick="validarNumero_E5_N2()">Validar Numero</button>

	<br>
	<br>
	<div id="resultados_E5_N2">
	</div>
`;

let div_E5_N2 = document.createElement('div');
div_E5_N2.innerHTML = html_E5_N2;
div_E5_N2.classList.add('divEspaciado');
document.body.appendChild(div_E5_N2);

function validarNumero_E5_N2(){
  let numero_E5_N2= document.getElementById('numero_E5_N2').value;

  if (!isNaN(numero_E5_N2)){
    resultados_E5_N2.innerHTML= ("El valor ingresado es valido, es un número." + "<br>");

  } else{
    resultados_E5_N2.innerHTML= ("Error: El valor ingresado no es un número." + "<br>");
  }
}