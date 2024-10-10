/* Variables y tipos de datos: Escribe un programa que declare dos variables: una para almacenar tu nombre y otra para tu edad. Imprime ambos valores en la consola. */

let html_E1_N1= `
  <h1>Nivel 1: Fundamentos</h1>
  <h2>Ejercicio Número 1: Variables y tipos de datos.</h2>

	<br>
	<div id="resultados_E1_N1">
	</div>
`;

let div_E1_N1 = document.createElement('div');
div_E1_N1.innerHTML = html_E1_N1;
div_E1_N1.classList.add('divEspaciado');
document.body.appendChild(div_E1_N1);

let nombre_E1_N1= "Aldo Antonio";
let edad_E1_N1= 21;

resultados_E1_N1.innerHTML += ("<p>El nombre del usuario es: " + nombre_E1_N1 + "." + "<br></p>");
resultados_E1_N1.innerHTML += ("<p>La edad del usuario es: " + edad_E1_N1 + " años." + "</p>" + "<br>");