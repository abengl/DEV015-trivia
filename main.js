/*** 1. FUNCIÓN VALIDARNOMBRE ***/
/* Esta función toma el nombre del input y la almacena en la memoria local. Luego redige a category.html. 
Si el input está vacío, se mostrará una alerta pidiendo que se ingrese el nombre. */

// EventListener para el input username. Si la usuaria presiona Enter, se ejecutará la función validarNombre
document.getElementById("username").addEventListener("keypress", function (event) {
if (event.key === "Enter") {
  event.preventDefault();
  validarNombre();
}
});

function validarNombre() {
  // Selector getElementById accede al elemento input by id username y luego captura su valor, que es el nombre de la usuaria
  const username = document.getElementById("username").value;

  if (username !== "") {
    localStorage.setItem("username", username);
    //window.location.href = "/DEV015-trivia/Trivia/trivia.html"; *GITHUB*
    window.location.href = "Category/category.html";
  } else {
    alert("¡Por favor ingresa tu nombre para iniciar la trivia!");
  }
}
