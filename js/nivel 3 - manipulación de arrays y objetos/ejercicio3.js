/* Array de números pares: Escribe un programa que filtre los números pares de un array. */

let html_E3_N3= `
  <h2>Ejercicio Número 3: Array de números pares.</h2>

	<p>Ingrese el Primer Valor de la Lista:</p>
	<input type="number" id="valor1_E3_N3" placeholder="Primer Valor:">

	<br>
	<p>Ingrese el Segundo Valor de la Lista:</p>
	<input type="number" id="valor2_E3_N3" placeholder="Segundo Valor:">

  <br>
	<p>Ingrese el Tercer Valor de la Lista:</p>
	<input type="number" id="valor3_E3_N3" placeholder="Tercer Valor:">

  <br>
	<p>Ingrese el Cuarto Valor de la Lista:</p>
	<input type="number" id="valor4_E3_N3" placeholder="Cuarto Valor:">

	<br>
	<br>
	<button onclick="imprimirPares_E3_N3()">Imprimir Suma</button>

	<br>
  <br>
	<div id="resultados_E3_N3">
	</div>
`;

let div_E3_N3 = document.createElement('div');
div_E3_N3.innerHTML = html_E3_N3;
div_E3_N3.classList.add('divEspaciado');
document.body.appendChild(div_E3_N3);

function imprimirPares_E3_N3(){
  let listaValores_E3_N3= [parseFloat(document.getElementById('valor1_E3_N3').value), parseFloat(document.getElementById('valor2_E3_N3').value), parseFloat(document.getElementById('valor3_E3_N3').value), parseFloat(document.getElementById('valor4_E3_N3').value)];
  let numeroElementos_E3_N3= listaValores_E3_N3.length;
  let listaPares_E3_N3= [];
  let listaImpares_E3_N3= [];

  while (numeroElementos_E3_N3 > 0){
    if(listaValores_E3_N3[numeroElementos_E3_N3 - 1] % 2 == 0){
      listaPares_E3_N3.push(listaValores_E3_N3[numeroElementos_E3_N3 - 1]);
    
    } else{
      listaImpares_E3_N3.push(listaValores_E3_N3[numeroElementos_E3_N3 - 1]);
    }
    numeroElementos_E3_N3-= 1;
  }

  resultados_E3_N3.innerHTML= ("");
  resultados_E3_N3.innerHTML+= ("Los valores pares son: " + listaPares_E3_N3.reverse() + "<br>");
  resultados_E3_N3.innerHTML+= ("Los valores impares son: " + listaImpares_E3_N3.reverse() + "<br>");
}