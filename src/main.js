/*Esta es la función saludo, toma el nombre de la usuaria del input con el método getElementById, 
lo almacena en una variable y la retorna anclado en el elemento párrafo en el archivo index*/
//Se usa la declaración de una función como método para crear la función por ser la más intuitiva 
//y sencilla para este caso
function saludo() {
  //Uso de const para definir la variable porque esta asumirá un solo valor no modificable
  //Se utilizan los selectores getElementById para acceder a los valores de los elementos del DOM
  //Accede al input by id username y luego captura su valor, que es el nombre de la usuaria
  const username = document.getElementById("username").value; 
  //Accede al elemento parrafo para asignarle a una variable
  const saludo = document.getElementById("saludo");
  
  //Inserta el nombre de la usuaria en el elemento parrafo
  saludo.innerHTML = `Hola ${username}! Bienvenida a Trivias K-Drama`;
}

/*--------------------------------------------------------------------*/

/*En esta sección se desarrolla la función para validar las respuestas correctas*/

//Arreglo que contiene las repsuestas correctas
const respuestasCorrectas = ["1", "1", "3"];

//Obtenemos el elemento formulario para luego sacar las respuestas de la usuaria
const form = document.getElementById("form");

//Creamos una función para obtener las respuestas de la usuaria y comparar sus resultados
//La función toma el parametro event ya que el boton de tipo submit genera un evento
function validarRespuestas(event) {
  //Prevenimos que el navegador aplique acciones default luego del envío del formulario,
  //en este caso, lo normal sería que refresque la página, pero no es lo que queremos
  //ya que seguiremos con otro proceso. Esto es un estandard
  event.preventDefault();

  //Accedemos a las respuestas de la usuaria del formulario
  //Se usa queryselector para acceder elementos en base a sus atributos no únicos
  const p1Respuesta = document.querySelector('input[name="p1"]:checked').value;
  const p2Respuesta = document.querySelector('input[name="p2"]:checked').value;
  const p3Respuesta = document.querySelector('input[name="p3"]:checked').value;

  //variable para contar las respuestas correctas
  let countRespuestasCorrectas = 0;

  //Comparamos las respuesta de la usuaria con las respuestas correctas
  if (p1Respuesta === respuestasCorrectas[0]) {
    countRespuestasCorrectas++;
  }
  if (p2Respuesta === respuestasCorrectas[1]) {
    countRespuestasCorrectas++;
  }
  if (p3Respuesta === respuestasCorrectas[2]) {
    countRespuestasCorrectas++;
  }

  //Creamos una variables que bote los aciertos del conteo
  const aciertosConteo = document.getElementById("conteo");

  aciertosConteo.innerHTML = `Puntaje final: ${countRespuestasCorrectas}`;
}
