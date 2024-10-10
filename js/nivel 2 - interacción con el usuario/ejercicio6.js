/* Palíndromos: Pide al usuario ingresar una palabra y determina si es un palíndromo (se lee igual al derecho y al revés). */

let html_E6_N2= `
  <h2>Ejercicio Número 6: Palíndromos.</h2>

	<p>Ingrese una Palabra:</p>
	<input type="text" id="palabra_E6_N2" placeholder="Palabra:">

	<br>
	<br>
	<button onclick="validarPalindromo_E6_N2()">Validar Palíndromo</button>

	<br>
  <br>
	<div id="resultados_E6_N2">
	</div>
`;

let div_E6_N2 = document.createElement('div');
div_E6_N2.innerHTML = html_E6_N2;
div_E6_N2.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E6_N2);

function validarPalindromo_E6_N2(){
  let palabra_E6_N2= document.getElementById('palabra_E6_N2').value;
  let validacion_E6_N2= palabra_E6_N2.split('').reverse().join('');

  if (palabra_E6_N2 == validacion_E6_N2){
    resultados_E6_N2.innerHTML= ("La palabra ingresada es un palíndromo." + "<br><br>");

  } else{
    resultados_E6_N2.innerHTML= ("La palabra ingresada no es un palíndromo." + "<br><br>");
  }

  resultados_E6_N2.innerHTML+= ("La palabra original es: " + palabra_E6_N2 + "<br>");
  resultados_E6_N2.innerHTML+= ("La palabra invertida es: " + validacion_E6_N2 + "<br>");
}