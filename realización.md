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

8. CSS adaptable a móviles y PCs

  8.1. Definir los 3 estilos que se van a utilizar

  En la carpeta *public/stylesheets* hay que modificar el archivo  *style.css* para convertirlo en el estilo base de todos los medias y después añadir los archivos *wide.css* y *smartphone.css* que modificarán el estilo base para adaptarlo a su media.

  Una vez echo esto se modifica el archivo *layout.ejs* para añadir las referencias a los nuevos estilos con sus respectivos medias.

  8.2. Guardar una nueva versión de git y subirla al servidor GitHub
  ```
  git add --all
  git commit -m "CSS adaptable a móviles y PCs"
  git push origin master
  ```

9. Añadir link a la página GitHub del proyecto

  9.1. Añadir los [Octicons](https://octicons.github.com/) para que en el link a GitHub se muestre su icono.

  9.2. Modificar el archivo *layout.ejs* para añadir la referencia a la hoya de estilos de los octicons y el link a la página GitHub del proyecto.

  9.3. Guardar una nueva versión de git
  ```
  git add --all
  git commit -m "Link a GitHub"
  ```

10. Añadir página de créditos

  10.1. Crear la nueva rama en el repositorio git
  ```
  git checkout -b creditos
  ```
  Con esta instrucción se crea la rama **_creditos_** y al mismo tiempo se canvia de la rama master a la nueva rama.

  10.2. Crear nuevo enlace el la barra de navegación editando el archivo *layout.ejs* para añadir el nuevo link.

  10.3. Modificar el archivo *index.js* para habilitar la atención a las peticiones `GET /author`.

  10.4. Añadir la nueva vista *author.ejs*

  10.5. Añadir la imagen *public/images/IMG_0508.JPG*

  10.6. Editar las hojas de estilos para la correcta visualización

  10.7. Guardar una nueva versión en la rama creditos
  ```
  git add --all
  git commit -m "Añadida la página de créditos"
  ```

  10.8. Integrar la rama creditos con la rama master
  ```
  git checkout master
  git merge creditos
  ```

  10.9. Subir los cambios a GitHub
  ```
  git push origin master
  ```

11. Despliegue en [Heroku](https://www.heroku.com)

  11.1. Preparación previa:

  Editar el archivo *package.json* para añadir el repositorio de GitHub
  ```json
  "repository": {
      "type": "git",
      "url": "git@github.com:jordidepablos/quiz.git"
  },
  ```
  Con esta modificación el comando heroku será capaz de añadir el repositorio remoto *heroku* a la aplicación automáticamente

  Editar el archivo */bin/www* cambiar el contenido
  ```javascript
  var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
  });
  ```
  por este:
  ```javascript
  app.listen(app.get('port'), function() {
    console.log("Node app is running on port:" + app.get('port'))
  })
  ```

  Este cambio permite mostrar el puerto en el que escucha la aplicación node en la consola cuando se ejecuta con `foreman` simulando la ejecución en heroku.

  11.2. Instalación de [Heroku Toolbelt](https://toolbelt.heroku.com/)

  Como estoy utilizando una máquina linux con un distribución basada en Debian, la instalación de [Heroku Toolbelt](https://toolbelt.heroku.com/) se realiza mediante el siguiente comando:
  ```
  wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
  ```

  11.3. Login remoto en [Heroku](https://www.heroku.com)

  Ejecutar
  ```
  heroku login
  ```
  e introducir el email y el password

  > ```
    Enter your Heroku credentials.
    Email: jordi.depablos@gmail.com
    Password (typing will be hidden):
    Authentication successful.
    ```

  11.4. Creación de la aplicación en [Heroku](https://www.heroku.com)

  Ejecutar
  ```
  heroku apps:create quiz-jordi-depablos
  ```

  > ```
  Creating quiz-jordi-depablos... done, stack is cedar-14
  https://quiz-jordi-depablos.herokuapp.com/ | https://git.heroku.com/quiz-jordi-depablos.git
  Git remote heroku added
  ```

  11.5. Adaptar quiz a [Heroku](https://www.heroku.com)

  Se tiene que crear el archivo *Procfile* cuyo contenido es:
  ```
  web: node ./bin/www
  ```

  Hecho esto también hay que modificar *package.json* para añadir los "engines" y sus versiones que utiliza la aplicación:
  ```json
  "engines": {
      "node": "0.10.25",
      "npm": "1.3.10"
  },
  ```

  11.6. Crear una nueva versión en el repositorio local
  ```
  git add --all
  git commit -m "Despliegue en heroku"
  ```

  11.7. Publicar en GitHub y en Heroku
  ```
  git push orgin master
  git push heroku master
  ```
