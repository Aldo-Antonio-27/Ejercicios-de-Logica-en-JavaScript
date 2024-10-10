/* Formularios: Escribe un programa que valide que un formulario tiene todos sus campos llenos antes de enviarlo. */

let html_E5_N6= `
  <h2>Ejercicio Número 5: Formularios.</h2>

  <p>Ingrese su Nombre:</p>
	<input type="text" id="nombre_E5_N6" placeholder="Nombre:">

  <br>
  <p>Ingrese su Edad:</p>
	<input type="number" id="edad_E5_N6" placeholder="Edad:">

  <br>
  <p>Ingrese su Grado:</p>
	<input type="text" id="grado_E5_N6" placeholder="Grado:">

  <br>
	<br>
	<button onclick="validarFormulario_E5_N6()">Validar Formulario</button>

	<br>
  <br>
	<div id="resultados_E5_N6">
	</div>
`;

let div_E5_N6 = document.createElement('div');
div_E5_N6.innerHTML = html_E5_N6;
div_E5_N6.classList.add('divEspaciado', 'divColor');
document.body.appendChild(div_E5_N6);

function validarFormulario_E5_N6(){
  let nombre_E5_N6= document.getElementById('nombre_E5_N6').value;
  let edad_E5_N6= document.getElementById('edad_E5_N6').value;
  let grado_E5_N6= document.getElementById('grado_E5_N6').value;

  if(nombre_E5_N6 === "" || edad_E5_N6 === "" || grado_E5_N6 === ""){
    resultados_E5_N6.innerHTML= ("No fueron llenados todos los campos, porfavor ingrese los datos faltantes.");
  } else{
    resultados_E5_N6.innerHTML= ("Todos los campos fueron llenados, formulario enviado.");
  }
}