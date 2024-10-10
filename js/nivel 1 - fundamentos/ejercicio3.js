/* Concatenación de cadenas: Escribe un programa que concatene dos cadenas y las muestre en la consola. */

let html_E3_N1= `
  <h2>Ejercicio Número 3: Concatenación de cadenas.</h2>

  <p>Ingrese la Primera Cadena:</p>
	<input type="text" id="cadena1_E3_N1" placeholder="Primera Cadena:">

	<p>Ingrese la Segunda Cadena:</p>
	<input type="text" id="cadena2_E3_N1" placeholder="Segunda Cadena:">

	<br>
	<br>
	<button onclick="sumaDeCadenas_E3_N1()">Realizar Operaciones</button>

	<br>
	<br>
	<div id="resultados_E3_N1">
	</div>
`;

let div_E3_N1 = document.createElement('div');
div_E3_N1.innerHTML = html_E3_N1;
div_E3_N1.classList.add('divEspaciado');
document.body.appendChild(div_E3_N1);

function sumaDeCadenas_E3_N1(){
  let cadena1_E3_N1= document.getElementById('cadena1_E3_N1').value;
  let cadena2_E3_N1= document.getElementById('cadena2_E3_N1').value;

  resultados_E3_N1.innerHTML = ("");
  resultados_E3_N1.innerHTML += ("La Suma de sus Cadenas es: " + cadena1_E3_N1 + cadena2_E3_N1 + "<br>");
}