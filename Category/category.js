/*** 1. SALUDO ***/

// Accede al elemento parrafo y asignalo a una variable
const saludo = document.getElementById("saludo");

// Accede a la memoria del navegador para obtener el nombre
const username = localStorage.getItem("username");

// Inserta el nombre de la usuaria en el elemento parrafo
saludo.textContent = "Hola " + username;


/*** 4. FUNCION RESETEAR TRIVIA ***/
/* Función para resetear la trivia y volver al inicio */

function resetTrivia() {
  // Navegamos a la página index al actualizar la ubicación actual de la página con la propiedad href
  //window.location.href = "/DEV015-trivia/index.html"; *GTIHUB*
  window.location.href = "../index.html";
}
