/*** 1. SALUDO ***/
/* Este bloque de código detalla cómo obtener el nombre de la usuaria de la memoria del navegador (local storage) para usarlo en esta vista y saludar a la usuaria */

// Accede al elemento parrafo y asignalo a una variable
const saludo = document.getElementById("saludo");

// Accede a la memoria del navegador para obtener el nombre
const username = localStorage.getItem("username");

// Inserta el nombre de la usuaria en el elemento parrafo
saludo.textContent = "Hola " + username;


/*** 2. FUNCION CONTEO DE REPUESTAS ***/
/* En esta sección se desarrolla la función para contar el número de aciertos y mostrar el resultado acertado en la pantalla.
La función toma el parametro event ya que el boton de tipo submit genera un evento*/

function conteoRespuestas(event) {

    /* Prevenimos que el navegador aplique acciones default luego del envío del formulario, en este caso, lo normal sería que refresque la página, pero no es lo que queremos ya que seguiremos con otro proceso. Esto es un estandard */
    event.preventDefault();

    /* Accedemos a las respuestas de la usuaria del formulario. Se usa queryselector para acceder elementos en base a sus atributos no únicos */
    const p1Respuesta = document.querySelector('input[name="p1"]:checked').value;
    const p2Respuesta = document.querySelector('input[name="p2"]:checked').value;
    const p3Respuesta = document.querySelector('input[name="p3"]:checked').value;

    // Variable para contar las respuestas correctas
    let countRespuestasCorrectas = 0;

    // Comparamos las respuesta de la usuaria con las respuestas correctas. 1 representa una respuesta correcta y 0 incorrecta. Si la respuesta es correcta, sumamos 1 al contador.
    if (p1Respuesta === "1") {
        countRespuestasCorrectas++;
    }
    if (p2Respuesta === "1") {
        countRespuestasCorrectas++;
    }
    if (p3Respuesta === "1") {
        countRespuestasCorrectas++;
    }

    // Accede al elemento parrafo y asignalo a una variable
    const aciertosConteo = document.getElementById("conteo");

    // Llamamos a la función validarResultado para mostrar las respuestas correctas/incorrectas debajo de cada sección de pregunta
    validarResultado();

    // Inserta el número de respuestas correctas en el elemento parrafo
    aciertosConteo.textContent = "Puntaje final: " + countRespuestasCorrectas;
}


/*** 3. FUNCION VALIDAR RESPUESTAS CORRECTAS ***/
/* En esta sección se desarrolla la función para validar las respuestas correctas de la usuaria y mostrar los resultados al final de cada sección de preguntas */

function validarResultado() {

    // Arreglo que contiene las repsuestas correctas como texto
    const respuestasCorrectasTexto = [
        "¿Te gusta Messi?",
        "Strong woman Do Bong Soon",
        "Kim Woo Bin",
    ];

    // Accedemos a las respuestas de la usuaria del formulario. Se usa queryselector para acceder elementos en base a sus atributos no únicos. 
    const p1Respuesta = document.querySelector('input[name="p1"]:checked').value;
    const p2Respuesta = document.querySelector('input[name="p2"]:checked').value;
    const p3Respuesta = document.querySelector('input[name="p3"]:checked').value;

    // Creamos variables que mostrarán mensajes indicando respuestas correctas/incorrectas
    let mensajeTrivia1 = "";
    let mensajeTrivia2 = "";
    let mensajeTrivia3 = "";

    // Comparamos las respuesta de la usuaria. Primero si es correcta, mostramos un mensaje de correcto, si no, mostramos la respuesta correcta sacándola del arreglo
    if (p1Respuesta === "1") {
        mensajeTrivia1 = "Correcto!";
    } else {
        mensajeTrivia1 = "Incorrecto! La respuesta es " + respuestasCorrectasTexto[0];
    }
    if (p2Respuesta === "1") {
        mensajeTrivia2 = "Correcto!";
    } else {
        mensajeTrivia2 = "Incorrecto! La respuesta es " + respuestasCorrectasTexto[1];
    }
    if (p3Respuesta === "1") {
        mensajeTrivia3 = "Correcto!";
    } else {
        mensajeTrivia3 = "Incorrecto! La respuesta es " + respuestasCorrectasTexto[2];
    }

    // Accede al elemento parrafo y asignalo a una variable
    const resultado1 = document.getElementById("resultado1");
    const resultado2 = document.getElementById("resultado2");
    const resultado3 = document.getElementById("resultado3");

    // Inserta el número de respuestas correctas en el elemento parrafo
    resultado1.textContent = mensajeTrivia1;
    resultado2.textContent = mensajeTrivia2;
    resultado3.textContent = mensajeTrivia3;
}

/*** 4. FUNCION RESETEAR TRIVIA ***/
/* En esta sección se desarrolla la función para resetear la trivia y volver al inicio */

function resetTrivia() {
    // Navegamos a la página index al actualizar la ubicación actual de la página con la propiedad href
    window.location.href = "index.html";
}
