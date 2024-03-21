# K-Drama Trivia App

## 1. Preámbulo

K-Drama Trivia es un app de juego en la que recibirás preguntas con alternativas y elegir una respuesta
según tu criterio. Al final podrás ver tus aciertos y conocer cuanto sabes del mundo de los k-dramas 💜

## 2. Resumen del proyecto

### 2.1 Temática

Nos decidimos por una trivia de K-dramas ya que es algo en lo que ambas tenemos afinidad y nos gustaría compartir.

### 2.2 UX

- Investigamos ejemplos sobre trivias relacionadas a nuetro tema e inspeccionamos las páginas web para conocer un sobre ellas.
- Vimos qué tipos de preguntas y diseños mostraban, lo cual nos sirvió como referencia para crear nuestro prototipo.
- Creemos que nuestras usuarias potenciales estarán contentas de jugar con estas trivias que ofrecen preguntas divertidas
  sobre el tema, con un diseño minimalista.
- Usamos atributos alt para describir las imágenes de nuestra web para hacerla amigable para usuarias que usen lectores de pantalla.

## 2.3 Prototipo

En nuestra primera charla, comentamos como veíamos el proyecto y lo plasmamos de forma sencilla en un **Documento
de Slides** [PRESENTACIÓN](https://docs.google.com/presentation/d/1cf80Zl6xTA0XR9SaBEZiid2BOfMK3gDsWUKCOxtSEHU/edit?usp=sharing)
Acordamos que nuestra App tendría una vista, con tres secciones que representan cada pregunta y un botón que
permita ver los resultados. También incluímos un bosquejo de la estructura HTML con lo que ya conocíamos:
![Prototipo](https://cdn.glitch.global/c5e872d1-ff8b-4bbd-8176-93c13a2240da/ca2e98e2-63d5-4938-930d-6ca1dca73361.image.png?v=1710864190471)

### 2.4 Estilo
Elegimos usar el color lila y una paleta similar para nuestros colores de la web. Básicamente con una tonalidad ligera e incluir
imágenes relacionadas con nuestra trivia.

### 2.5 Metodología
Decidimos seguir las recomendaciones de los hitos ya que nos permite ir incrementando el nivel de complejidad del proyecto
así como ir añadiendo nuevos features a medida que vamos dominando un concepto nuevo. Usamos la metodología Scrum
para organizar nuestro proyecto inicialmente en **Documento Docs** [Documentación](https://docs.google.com/document/d/1xtxzLLFupz_BHFi5uC_Qn85S-TlXVQYcwK01z9ZYaxg/edit?usp=sharing)
y ya finalmente en este README.md

---

## 3. Hito 1
Nuestro objetivo inicial fue realizar solo el hito 1, para lo cual nos propusimos leer los materiales propuestos y
buscar otros recursos como tutoriales y/o preguntar en slack.

##### Objetivos
✅ Crear 1 sola pantalla o vista.

✅ 3 preguntas con 3 alternativas de respuesta (botones de radio) cada una.

✅ 1 botón para responder.

💬 El botón para “Resultados” que muestre las respuestas correctas.

![Versión 1](https://cdn.glitch.global/c5e872d1-ff8b-4bbd-8176-93c13a2240da/Screenshot%20from%202024-03-19%2011-18-22.png?v=1710865114248)

##### Reflexiones

- Iniciamos en nuestro index.html armando la estructura con HTML semántico. También colocamos nombres de
clase a los elementos HTML para poder identificarlos con facilidad al momento de aplicar estilos. Creamos
las secciones de preguntas con el elemento section y añadimos un botón para ver los resultados.
- Al finalizar, nos dimos cuenta que ya habíamos avanzado más de lo que nos propusimos
- Nos falto poder hacer que el boton de ver resultados funcione, no sabiamoa como plantear la función en JS aún.

---

## 4. Hito 2
En esta parte ya estabamos mas familiarizadas con el proyecto, por lo que nos planteamos en el dia 2 poder
crear una función que cuente cuantas preguntas fueron correctas.
Tambien se creo en el navegador la parte donde el usuario debe insertar su nombre y darle click en el botón
comencemos.

##### Objetivos

✅ Una caja de texto (input text) en la que escribe su nombre quien juega.

✅ Antes de las peguntas debe decir "Hola nombre usuaria"

✅ Boton para mostrar el número de aciertos

✅ El botón para “Enviar” resultados y contar aciertos

![Versión 2-Parte 1](https://cdn.glitch.global/c5e872d1-ff8b-4bbd-8176-93c13a2240da/Screenshot%20from%202024-03-19%2021-03-18.png?v=1710900443427)
![Versión 2-Parte 2](https://cdn.glitch.global/c5e872d1-ff8b-4bbd-8176-93c13a2240da/Screenshot%20from%202024-03-19%2021-06-20.png?v=1710900448825)

##### Reflexiones

- En la parte de la interactividad, usamos funciones para asociarlas a los elementos botones de la
web, así al hacer clic en un botón, la función específica en main.js se ejecuta. Allí aplicamos
variables, selectores, eventos y if statement para lograr que el nombre de la usuaria y los
resultados de la trivia (conteo) se muestren.
- Pulimos más con estilos y añadimos una imagen

---

## 5. Hito 3
Para este hito tenemos pensado darle el diseño respectivo a la parte del texto y preguntas para que este ordenado.
Nos propusimos hacer que el botón tengo un sombreado cuando se pase el cursor sobre el.
Tambien dividiremos la página en dos vistas mediante funciones en js.

##### Objetivos
✅ Mensaje de alerta al no ingresar input en la vista 1.

✅ Crear una segunda vista separando la página de inicio de la trivia (vista 2).

✅ El botón para responder muestra la alternativa correcta para cada pregunta y, además, muestra si cada una de las 
respuestas fue correcta o incorrecta (vista 2).

✅ Un botón para volver a jugar que vuelve a la pantalla inicial en la que se pide el nombre (vista 2).

✅ Un botón de "jugar" o "comenzar" para ir a las preguntas (vista 2).

![Versión 3-Parte 1](https://cdn.glitch.global/c5e872d1-ff8b-4bbd-8176-93c13a2240da/Screenshot%20from%202024-03-20%2021-24-23.png?v=1710990414487)
![Versión 3-Parte 2](https://cdn.glitch.global/c5e872d1-ff8b-4bbd-8176-93c13a2240da/Screenshot%20from%202024-03-20%2021-24-36.png?v=1710990405484)
![Versión 3-Parte 3](https://cdn.glitch.global/c5e872d1-ff8b-4bbd-8176-93c13a2240da/2024-03-20_21-27.png?v=1710988044378)

##### Reflexiones
- Nos enfocamos en la funcionalidad de JS, creamos nuestra función para validar las respuestas de la usuaria,
pero nos atascamos y esta no se ejecutaba. Contamos con la ayuda de la coach para revisar el código y determinar
el problema, y hacer ajustes en los valores de nuestras respuestas.
- Mejoramos el CSS de nuestra web, armonizando la paleta de colores, y cuadrando los elementos de la web.

---

## 6. Hito 4
Ahora estamos revisando una vez más nuestro código para añadir los comentarios, verificar los elementos, sus clases,
atributos, formatos. Decidimos dar los últimos ajustes de estilos.

##### Objetivos

✅ Revisar código (coherencia, formato, comentarios)

✅ Revisar estilos 

##### Reflexiones
- 

---