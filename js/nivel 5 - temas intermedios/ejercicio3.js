/* Funciones flecha: Escribe una función flecha que reciba un array de números y devuelva un array con los números multiplicados por 2. */

let html_E3_N5= `
  <h2>Ejercicio Número 3: Funciones flecha.</h2>

  <p>Ingrese el Primer Número:</p>
	<input type="number" id="numero1_E3_N5" placeholder="Primer Número:">

  <br>
  <p>Ingrese el Segundo Número:</p>
	<input type="number" id="numero2_E3_N5" placeholder="Segundo Número:">

  <br>
  <p>Ingrese el Tercer Número:</p>
	<input type="number" id="numero3_E3_N5" placeholder="Tercer Número:">

	<br>
	<br>
	<button id="boton_E3_N5">Multiplicar Lista de Números</button>

	<br>
	<div id="resultados_E3_N5">
	</div>
`;

let div_E3_N5 = document.createElement('div');
div_E3_N5.innerHTML = html_E3_N5;
div_E3_N5.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E3_N5);

let boton_E3_N5= document.getElementById("boton_E3_N5");

const multiplicacion= (listaNumeros) =>{
  return listaNumeros.map(elemento => elemento * 2);
}

boton_E3_N5.addEventListener('click', function(){
  let listaNumeros_E3_N5= [parseFloat(document.getElementById('numero1_E3_N5').value), parseFloat(document.getElementById('numero2_E3_N5').value), parseFloat(document.getElementById('numero3_E3_N5').value)];
  let resultado_E3_N5= multiplicacion(listaNumeros_E3_N5);
  resultados_E3_N5.innerHTML= ("El resultado de la lista multiplicada es: " + resultado_E3_N5.join(', ') + "<br>");
});