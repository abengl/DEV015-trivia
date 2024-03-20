// Accede al elemento parrafo para asignarle a una variable
const saludo = document.getElementById("saludo");

const username = localStorage.getItem("username");

// Inserta el nombre de la usuaria en el elemento parrafo
saludo.innerHTML = `Hola ${username}! `;

/*--------------------------------------------------------------------*/

/* En esta sección se desarrolla la función para validar las respuestas correctas */

// Arreglo que contiene las repsuestas correctas
const respuestasCorrectas = ["1", "1", "3"];

// Obtenemos el elemento formulario para luego sacar las respuestas de la usuaria
const form = document.getElementById("form");

// Creamos una función para obtener las respuestas de la usuaria y comparar sus resultados
// La función toma el parametro event ya que el boton de tipo submit genera un evento
function conteoRespuestas(event) {
    // Prevenimos que el navegador aplique acciones default luego del envío del formulario,
    // en este caso, lo normal sería que refresque la página, pero no es lo que queremos
    // ya que seguiremos con otro proceso. Esto es un estandard
    event.preventDefault();

    // Accedemos a las respuestas de la usuaria del formulario
    // Se usa queryselector para acceder elementos en base a sus atributos no únicos
    const p1Respuesta = document.querySelector('input[name="p1"]:checked').value;
    const p2Respuesta = document.querySelector('input[name="p2"]:checked').value;
    const p3Respuesta = document.querySelector('input[name="p3"]:checked').value;

    // variable para contar las respuestas correctas
    let countRespuestasCorrectas = 0;

    const resultado1 = "";
    const resultado2 = "";
    const resultado3 = "";

    // Comparamos las respuesta de la usuaria con las respuestas correctas
    if (p1Respuesta === respuestasCorrectas[0]) {
        countRespuestasCorrectas++;
        resultado1 = validarResultado(true, 0);
    }
    if (p2Respuesta === respuestasCorrectas[1]) {
        countRespuestasCorrectas++;
        resultado2 = validarResultado(true, 1);
    }
    if (p3Respuesta === respuestasCorrectas[2]) {
        countRespuestasCorrectas++;
        resultado3 = validarResultado(true, 2);
    }

    // Creamos una variables que bote los aciertos del conteo
    const aciertosConteo = document.getElementById("conteo");

    const p1resultado = document.getElementById("resultado2");
    const p2resultado = document.getElementById("resultado2");
    const p3resultado = document.getElementById("resultado3");

    aciertosConteo.innerHTML = `Puntaje final: ${countRespuestasCorrectas}`;

    p1resultado.innerHTML = resultado1;
    p2resultado.innerHTML = resultado2;
    p3resultado.innerHTML = resultado3;

}

function validarResultado(estado, pregunta) {
    const respuestasCorrectasTexto = [
        "¿Te gusta Messi?",
        "Strong woman Do Bong Soon",
        "Kim Woo Bin"
    ];

    let resultado = "";

    if (estado) {
        resultado = "Correcto! La respuesta es: " + respuestasCorrectasTexto[pregunta];
    } else {
        resultado = "Incorrecto! La respuesta es: " + respuestasCorrectasTexto[pregunta];
    }

    return resultado;
}