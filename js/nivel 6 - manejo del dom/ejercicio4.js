/* Eventos: Crea un programa que detecte cuándo se ha presionado una tecla y lo muestre en la consola. */

let html_E4_N6= `
  <h2>Ejercicio Número 4: Eventos.</h2>

  <p>Precione la Tecla que Desee que se Detecte:</p>
	<input type="text" id="tecla_E4_N6" placeholder="Presione una Tecla:">

	<br>
	<div id="resultados_E4_N6">
	</div>
`;

let div_E4_N6 = document.createElement('div');
div_E4_N6.innerHTML = html_E4_N6;
div_E4_N6.classList.add('divEspaciado');
document.body.appendChild(div_E4_N6);

let teclaPulsada_E4_N6= document.getElementById("tecla_E4_N6");

teclaPulsada_E4_N6.addEventListener('keydown', function(event){
  resultados_E4_N6.innerHTML= ("<br>" + "La tecla pulsada es: " + event.key);
})