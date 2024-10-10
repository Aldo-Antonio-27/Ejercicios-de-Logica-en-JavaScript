/* Objetos y métodos: Crea un objeto que represente una calculadora con métodos para sumar, restar, multiplicar y dividir. */

let html_E6_N5= `
  <h2>Ejercicio Número 6: Objetos y métodos.</h2>

  <p>Ingrese el Primer Número:</p>
	<input type="number" id="numero1_E6_N5" placeholder="Primer Número:">

  <br>
  <p>Ingrese el Segundo Número:</p>
	<input type="number" id="numero2_E6_N5" placeholder="Segundo Número:">

	<br>
	<br>
	<button onclick="claseCalculadora_E6_N5()">Clase de Calculadora</button>

	<br>
	<div id="resultados_E6_N5">
	</div>
`;

let div_E6_N5 = document.createElement('div');
div_E6_N5.innerHTML = html_E6_N5;
div_E6_N5.classList.add('divEspaciado');
document.body.appendChild(div_E6_N5);

function claseCalculadora_E6_N5(){
  let numero1_E6_N5= parseInt(document.getElementById('numero1_E6_N5').value);
  let numero2_E6_N5= parseInt(document.getElementById('numero2_E6_N5').value);

  class calculadora_E6_N5{ constructor(numero1, numero2){
    this.numero1= numero1;
    this.numero2= numero2;
    }
    suma_E6_N5(numero1, numero2){
      resultados_E6_N5.innerHTML= ("");
      resultados_E6_N5.innerHTML+= (`La suma de los numero es: ${this.numero1 + this.numero2}` + "<br>");
    }

    resta_E6_N5(numero1, numero2){
      resultados_E6_N5.innerHTML+= (`La resta de los numero es: ${this.numero1 - this.numero2}` + "<br>");
    }

    multiplicacion_E6_N5(numero1, numero2){
      resultados_E6_N5.innerHTML+= (`La multiplicación de los numero es: ${this.numero1 * this.numero2}` + "<br>");
    }

    division_E6_N5(numero1, numero2){
      resultados_E6_N5.innerHTML+= (`La división de los numero es: ${this.numero1 / this.numero2}` + "<br>");
    }
  }

  const operacion_E6_N5 = new calculadora_E6_N5(numero1_E6_N5, numero2_E6_N5);

  operacion_E6_N5.suma_E6_N5();
  operacion_E6_N5.resta_E6_N5();
  operacion_E6_N5.multiplicacion_E6_N5();
  operacion_E6_N5.division_E6_N5();
}