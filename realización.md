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
