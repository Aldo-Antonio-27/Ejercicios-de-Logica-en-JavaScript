/* Herencia: Crea una clase Estudiante que herede de Persona y agregue la propiedad grado. Agrega un método para imprimir el grado. */

let html_E5_N5= `
  <h2>Ejercicio Número 5: Herencia.</h2>

  <p>Ingrese su Nombre:</p>
	<input type="text" id="nombre_E5_N5" placeholder="Nombre:">

  <br>
  <p>Ingrese su Edad:</p>
	<input type="text" id="edad_E5_N5" placeholder="Edad:">

  <br>
  <p>Ingrese su Grado:</p>
	<input type="number" id="grado_E5_N5" placeholder="Grado:">

	<br>
	<br>
	<button onclick="claseSaludarGrado_E5_N5()">Clase para Saludar y Imprimir Grador</button>

	<br>
  <br>
	<div id="resultados_E5_N5">
	</div>
`;

let div_E5_N5 = document.createElement('div');
div_E5_N5.innerHTML = html_E5_N5;
div_E5_N5.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E5_N5);

function claseSaludarGrado_E5_N5(){
  let nombre_E5_N5= document.getElementById('nombre_E5_N5').value;
  let edad_E5_N5= document.getElementById('edad_E5_N5').value;
  let grado_E5_N5= document.getElementById('grado_E5_N5').value;

  class persona_E5_N5{ 
    constructor(nombre, edad){
      this.nombre= nombre;
      this.edad= edad;
    }
    saludar_E5_N5(){
      resultados_E5_N5.innerHTML = (`Hola ${this.nombre} con una edad de ${this.edad} años bienvenido.`);
    }
  }

  class estudiante_E5_N5 extends persona_E5_N5{
    constructor(nombre, edad, grado){
      super(nombre, edad);
      this.grado= grado;
    }
    datos_E5_N5(){
      resultados_E5_N5.innerHTML += (` Tu grado es ${this.grado}.` + "<br>");
    }
  }

  const primeraPersona_E5_N5 = new estudiante_E5_N5(nombre_E5_N5, edad_E5_N5, grado_E5_N5);

  primeraPersona_E5_N5.saludar_E5_N5();
  primeraPersona_E5_N5.datos_E5_N5();
}