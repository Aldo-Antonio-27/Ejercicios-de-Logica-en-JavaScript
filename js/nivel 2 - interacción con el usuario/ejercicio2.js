/* Verificación de edad: Pide al usuario su edad y muestra un mensaje dependiendo de si es mayor o menor de edad. */

let html_E2_N2= `
  <h2>Ejercicio Número 2: Verificación de edad.</h2>

	<p>Ingrese su Edad:</p>
	<input type="text" id="edad_E2_N2" placeholder="Edad:">

	<br>
	<br>
	<button onclick="verificarEdad_E2_N2()">Verificar Edad</button>

	<br>
	<div id="resultados_E2_N2">
	</div>
`;

let div_E2_N2 = document.createElement('div');
div_E2_N2.innerHTML = html_E2_N2;
div_E2_N2.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E2_N2);

function verificarEdad_E2_N2(){
  let edad_E2_N2= document.getElementById('edad_E2_N2').value;

  if (edad_E2_N2 >= 18){
    resultados_E2_N2.innerHTML= ("El usuario es mayor de edad, su edad es: " + edad_E2_N2 + "<br>");
  
  } else{
    resultados_E2_N2.innerHTML= ("El usuario es menor de edad, su edad es: " + edad_E2_N2 + "<br>");
  }
}