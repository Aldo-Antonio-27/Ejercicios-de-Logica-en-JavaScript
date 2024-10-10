/* Contar vocales: Crea una función que cuente cuántas vocales hay en una palabra. */

let html_E6_N4= `
  <h2>Ejercicio Número 6: Contar vocales.</h2>

  <p>Ingrese la Palabra a la Cual Desea Contar sus Vocales:</p>
	<input type="text" id="palabra_E6_N4" placeholder="Palabra a Contar Vocales:">

	<br>
	<br>
	<button onclick="contarVocales_E6_N4()">Contar Vocales</button>

	<br>
	<div id="resultados_E6_N4">
	</div>
`;

let div_E6_N4 = document.createElement('div');
div_E6_N4.innerHTML = html_E6_N4;
div_E6_N4.classList.add('divEspaciado');
document.body.appendChild(div_E6_N4);

function contarVocales_E6_N4(){
  let palabra_E6_N4= document.getElementById('palabra_E6_N4').value.toLowerCase();
  let listaPalabra_E6_N4= palabra_E6_N4.split("");
  let listaVocales_E6_N4= ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  let contador_E6_N4= 0;

  for(let i= 0; i < listaPalabra_E6_N4.length; i++){
    let letraActual_E6_N4= listaPalabra_E6_N4[i];

    for(let n= 0; n < listaVocales_E6_N4.length; n++){
      
      if(letraActual_E6_N4 == listaVocales_E6_N4[n]){
        contador_E6_N4+= 1;
      }
    }
  }

  resultados_E6_N4.innerHTML = ("");
  resultados_E6_N4.innerHTML += ("La palabra ingresada tiene un total de " + "'" + contador_E6_N4 + "'" + " vocales." + "<br>");
}