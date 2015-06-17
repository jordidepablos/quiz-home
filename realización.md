#Módulo 6
##Ejercicio P2P Obligatorio
###Realización del Ejercicio

1. Instalación de express-generator

  1.1. Crear una carpeta (projects) y acceder a ella

  1.2. Instalar express-generator

  Con el comando
  ```
  npm install express-generator@4.9.0
  ```
  se instala express-generator en la carpeta en la que nos encontramos.

2. Creación del proyecto **quiz**

  Nuevamente ejecutamos un comando en la terminal para generar el proyecto en el que vamos a trabajar:
  ```
  node_modules/express-generator/bin/express --ejs quiz
  ```

3. Generar repositorio local de GitHub.

  3.1. Acceder a la carpeta quiz que se ha creado después del punto anterior i ejectar los siguientes comandos:
  ```
  git init
  git remote add origin git@github.com:jordidepablos/quiz.git
  ```

  3.2. Crear los archivos *.gitignore* y *README.md*

  3.3. Añadir todos los archivos al *staging area* y hacer la primera versión.
  ```
  git add -all
  git commit -m "Esqueleto del proyecto con express-generator"
  git push orgin master
  ```

4. Instalación de las dependecias del proyecto **quiz**

  Con el comando siguiente, `npm` lee el archivo *package.json* que generó express-generator e instala las dependecias necesarias:
  ```
  npm install
  ```

  En este punto ya se puede arrancar la aplicación de node.js con cualquiera de los siguientes comandos:
  ```
  npm start
  npm bin/www
  ```

  El primer comando lee del archivo *package.json* qué ejecutable debe lanzar y el segundo comando lanza directamente el ejecutable.

5. Primera página y favicon

  5.1. Modificaciones en los archivos generados por express-generator para adaptarlos a la aplicación quiz.

  5.2. Añadir el favicon.ico

  5.3. Guardar una nueva versión de git y subirla al servidor GitHub
  ```
  git add --all
  git commit -m "Primera página y favicon"
  git push origin master
  ```

6. Primera pregunta

  6.1. Añadir un nuevo controlador

  Crear el directorio *controllers* y crear en él un nuevo archivo llamado *quiz_controller.js*.

  Después hay que modificar *routes/index.js* para que importe el nuevo controlador y crear las nuevas rutas `GET /quizes/question` y `GET /quizes/answer`.

  6.2. Añadir nuevas vistas para las preguntas y respuestas

  Crear un nuevo directorio *wiews/quizes* y en él crear los archivos *question.ejs* y *answer.ejs*.

  Modificar la página incial para añadir un link a la pregunta.

  6.3. Guardar una nueva versión de git y subirla al servidor GitHub
  ```
  git add --all
  git commit -m "Primera pregunta"
  git push origin master
  ```
7. Vistas parciales y marco

  7.1. Instalar e importar el paquete **express-partials**

  Para instalar el paquete **express-partials** hay que ejecutar el comando  
  ```
  npm install --save express-partials@0.3.0
  ```

  nótese el modificador `--save` que modifica el archivo *package.json* para incluir la nueva dependencia.

  Una vez instalada la dependencia de express-partials, se precede a importar el middelware en el archivo app.js.

  7.2. Modificar las vistas

  Se añade el archivo *layout.ejs* en la carpeta *views*.
  Se modifican los archivos *views/index.ejs*, *views/quizes/answer.ejs* y *views/quizes/question.ejs* para convertirlos en vistas parciales.

  7.3. Guardar una nueva versión de git y subirla al servidor GitHub
  ```
  git add --all
  git commit -m "Vistas parciales y marco"
  git push origin master
  ```
