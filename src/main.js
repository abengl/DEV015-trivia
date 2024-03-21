/*** 1. FUNCIÓN VALIDARNOMBRE ***/ 
/* Esta función toma el nombre de la usuaria del input y la almacenará en la memoria local para usarlo en la siguiente vista. Luego redige a la página Trivia.html. Si el input está vacío, se mostrará una alerta pidiendo que se ingrese el nombre. */

function validarNombre() {
  // Selector getElementById accede al elemento input by id username y luego captura su valor, que es el nombre de la usuaria
  const username = document.getElementById("username").value;

  // Si el nombre no está vacío, se almacenará en la memoria local y se redirigirá a la página Trivia.html
  if (username !== "") {
    localStorage.setItem("username", username);
    window.location.href = "trivia.html";
  } else {
    // Si el nombre está vacío, se mostrará una alerta pidiendo que se ingrese el nombre
    alert("¡Por favor ingresa tu nombre para iniciar la trivia!");
  }
}
