#Módulo 7
##Ejercicio P2P Obligatorio
###Realización del Ejercicio

1. Corrección de problemas en sequelize.js y despliegue a Heroku

  Al aplicar los cambios mostrados en los vídeos y las transparencias del módulo 7 a la aplicación que había entregado en el módulo 6, he encontrado algún problema que he tenido que solucionar.

  1. El método *find* de sequelize no funcionaba del modo en el que se está llamando según los ejemplos, el propio error proporcionaba la solución que consiste en utilizar el método *findById*. Este error seguramente aparece porque he utilizado la última versión estable de sequelize sin hacer caso de las advertencias del profesor que recomendaba usar la misma versión que él.

  2. La versión de sequelize que utilizo no permite el uso de *callbacks* y obliga el uso de *promises*. Con el método *then* del promise en vez del *success* se soluciona el problema.

  3. Después de desplegar en Heroku los cambios antes de empezar el ejercicio, la aplicación no funcionaba, me aparecía un mensaje de error en el que me remetía a los logs de ejecución. Para consultar los logs he ejecutado el comando:
  ```
  heroku logs -t
  ```
  Dónde he podido ver que hacía falta una dependencia de postgres, concretamente *pg-hstore*. La he instalado usando el comando:
  ```
  npm install --save pg-hstore
  ```
  Después he vuelto a desplegar la aplicación y, esta vez sí, ha funcionado como se esperaba.

2. Creación de la nueva rama **busquedas**

  Para crear la rama he ejecutado el siguiente comando:
  ```
  git checkout -b busquedas
  ```
  Este comando crea la rama **busquedas** y además cambia a ella.
