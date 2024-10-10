/* Clases básicas: Crea una clase Persona con propiedades nombre y edad , y un método que salude con el nombre de la persona. */

let html_E4_N5= `
  <h2>Ejercicio Número 4: Clases básicas.</h2>

  <p>Ingrese su Nombre:</p>
	<input type="text" id="nombre_E4_N5" placeholder="Nombre:">

  <br>
  <p>Ingrese su Edad:</p>
	<input type="number" id="edad_E4_N5" placeholder="Edad:">

	<br>
	<br>
	<button onclick="claseSaludar_E4_N5()">Clase para Saludar</button>

	<br>
  <br>
	<div id="resultados_E4_N5">
	</div>
`;

let div_E4_N5 = document.createElement('div');
div_E4_N5.innerHTML = html_E4_N5;
div_E4_N5.classList.add('divEspaciado');
document.body.appendChild(div_E4_N5);

function claseSaludar_E4_N5(){
  let nombre_E4_N5= document.getElementById('nombre_E4_N5').value;
  let edad_E4_N5= document.getElementById('edad_E4_N5').value;

  class persona_E4_N5{ 
    constructor(nombre, edad){
      this.nombre= nombre;
      this.edad= edad;
    }
    saludar_E4_N5(){
      resultados_E4_N5.innerHTML = (`Hola ${this.nombre} con una edad de ${this.edad} años bienvenido.` + "<br>");
    }
  }

  const primeraPersona_E4_N5 = new persona_E4_N5(nombre_E4_N5, edad_E4_N5);

  primeraPersona_E4_N5.saludar_E4_N5();
}