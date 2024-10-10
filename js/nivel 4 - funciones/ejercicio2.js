/* Funciones y condicionales: Crea una función que reciba un número y devuelva true si es par y false si es impar. */

let html_E2_N4= `
  <h2>Ejercicio Número 2: Funciones y condicionales.</h2>

  <p>Ingrese el Número a Verificar:</p>
	<input type="number" id="numero_E2_N4" placeholder="Número:">

	<br>
	<br>
	<button onclick="verificarNumero_E2_N4()">Verificar Número</button>

	<br>
  <br>
	<div id="resultados_E2_N4">
	</div>
`;

let div_E2_N4 = document.createElement('div');
div_E2_N4.innerHTML = html_E2_N4;
div_E2_N4.classList.add('divEspaciado');
document.body.appendChild(div_E2_N4);

function verificarNumero_E2_N4(){
  let numero_E2_N4= parseFloat(document.getElementById('numero_E2_N4').value);
  let valorNumero_E2_N4;

  if ((numero_E2_N4 % 2) == 0){
    valorNumero_E2_N4= true;

    resultados_E2_N4.innerHTML = ("");
    resultados_E2_N4.innerHTML += ("El valor ingresado equivale a '" + valorNumero_E2_N4 + "', esto corresponde a que es un número par." + "<br>");

  } else{
    valorNumero_E2_N4= false;

    resultados_E2_N4.innerHTML = ("");
    resultados_E2_N4.innerHTML += ("El valor ingresado equivale a '" + valorNumero_E2_N4 + "', esto corresponde a que es un número impar." + "<br>");
  } 
}