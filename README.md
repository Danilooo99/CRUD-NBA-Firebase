# DAW II - CRUD de jugadores de la NBA con Firebase

### Autor del proyecto

Danilo Rivero Pérez - Grado en Ingeniería Informática - DAW II.

### Descripción de la aplicación

Se ha creado una aplicación que gestiona los diferentes jugadores de la NBA. Los jugadores y sus datos se guardan en una base de datos (```FireStore```) y además se ha hecho uso de la carga perezoza (```lazy load```) para mejorar el rendimiento de la aplicación. Con esta aplicación, se pueden añadir nuevos jugadores, editar los datos de los distintos jugadores de la NBA, eliminar jugadores de la NBA y ver el listado de jugadores de la NBA en formato de tabla. Además, es indispensable iniciar sesión o registrarse para poder hacer uso de la aplicación y realizar operaciones con los jugadores de la NBA (ver, crear, editar o eliminar). Para la realización de este proyecto se ha usado [Angular](https://angular.io/) y para maquetar el diseño del proyecto, se ha usado [Material](https://material.io/). También, se ha hecho uso de una base de datos de Firebase como es [FireStore](https://cloud.google.com/firestore?hl=es-419) y de [Firebase Authentication](https://firebase.google.com/docs/auth) para el inicio de sesión y el registro.

### Funcionalidades de la aplicación

- Permite ```listar``` los diferentes jugadores de la NBA en forma de tabla.
- Permite ```crear``` nuevos jugadores de la NBA (y serán mostrados automáticamente en el listado en forma de tabla).
- Permite ```editar``` los datos de los jugadores de la NBA.
- Permite ```eliminar``` jugadores de la NBA.
- Permite ```ver los datos``` de los los diferentes jugadores de la NBA del listado (en la tabla se encuentran los datos de los distintos jugadores).
- Permite ```filtrar``` por nombre, apellido, edad, posición, equipo y valor de mercado los distintos jugadores de la NBA del listado en forma de tabla.
- Permite ```mostrar``` los diferentes jugadores del listado en forma de tabla de 6 en 6, de 10 en 10, de 25 en 25, etc., ya que se ha hecho uso de paginación en la tabla.
- La aplicación cuenta con un ```inicio de sesión``` y un ```registro```.



### Credenciales para iniciar sesión

Se han creado dos usuarios con los que se puede iniciar sesión en la aplicación para poder usarla. Las credenciales de estos dos usuarios son:

**Usuario1**: daw2@gmail.com
<br />
**Contraseña1**: daw2firebase
<br />

**Usuario2**: danilo@gmail.com
<br />
**Contraseña2**: daw2basket

De igual manera, se tiene la opción de registrarse rellenando el formulario de registro y de esta forma poder iniciar sesión con las credenciales registradas en el formulario de registro.


### Ejecutar el proyecto

Para ejecutar este proyecto en ***local*** se deben seguir los siguientes pasos:

  1. Ejecutar en la terminal desde la ruta del proyecto, el comando: ```mpm install``` para instalar todas las dependencias del proyecto en Angular.
  2. Ejecutar desde la terminal, el servidor local con el comando: ```ng serve --open```
  3. Se abrirá en un navegador el proyecto realizado a través de la URL ```localhost:nºpuerto```
  
### Hosting de alojamiento del proyecto

Podrá ver el proyecto de la gestión de los jugadores de la NBA realizado haciendo uso de Firebase [aquí](https://daw2-nba-players.netlify.app).

## Tecnologías utilizadas en el Proyecto

| Tecnologías                                                           | Descripción                               |
| --------------------------------------------------------------------- | ----------------------------------------- |
| **[Angular](https://angular.io/)**                                    | Framework de JavaScript                   |
| **[TypeScript](https://www.typescriptlang.org/)**                     | Superset de Javascript con tipado         |
| **[Material](https://material.io/)**                                  | Librería de diseño de Angular             |
| **[Firebase](https://console.firebase.google.com/)**                  | Base de datos de documentos de Google     |
