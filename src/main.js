// arreglo   que contiene las repsuestas correctas
let correctas= [1,1,2];

//arreglo donde se guarda las repsuestas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma el num de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
  //guardo la respuesta elegida
  opcion_elegida[num_pregunta]= seleccionada.value;
  //color blanco el fondo de las preguntas que no amrcas
  //armo el id para seleccionar el section correspondiente
  id="p" +num_pregunta;
  
  labels= document.getElementById(id).childNotes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";
  
  //doy el color a label seleccionado
  seleccionada.parentNode.style.backgroundColor="#cec0fc"
}

//funcion que compara los arreglos para saber cuantas estuvieron correctas
function corregir(){
  cantidad correctas=0;
  for(i=0: i< correctas.length;i++){
    if(correctas[i]==opcion_elegida[i]){
      cantidad_correctas++;
    }
  }
  
  document.getElementById("resultado").innerHTML = cantidad_correctas;
}