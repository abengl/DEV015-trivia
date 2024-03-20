/*Esta es la función saludo, toma el nombre de la usuaria del input con el método getElementById, 
lo almacena en una variable y la retorna anclado en el elemento párrafo en el archivo index*/
//Se usa la declaración de una función como método para crear la función por ser la más intuitiva 
//y sencilla para este caso
function validarNombre() {
  //Uso de const para definir la variable porque esta asumirá un solo valor no modificable
  //Se utilizan los selectores getElementById para acceder a los valores de los elementos del DOM
  //Accede al input by id username y luego captura su valor, que es el nombre de la usuaria
  const username = document.getElementById("username").value; 
  console.log(username);

  if(username !== ""){
    localStorage.setItem("username", username);
    window.location.href = "trivia.html";
  } else {
    alert("¡Por favor ingresa tu nombre para iniciar la trivia!");
}
}
