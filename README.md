# Ej Parcial

Segundo Parcial Programación Web - ISTEA 
Docente: Alex De Assis
En la empresa donde usted se encuentra prestando sus servicios como analista y desarrollador de sistemas Full Stack están actualmente realizando un sitio web de uno de los clientes más importantes , su manager le encomendó realizar una demo , las indicaciones recibidas son las siguientes:

Autenticacion-Login:
La aplicación deberá poseer un Login como vista principal del sitio en donde se permita el ingreso del usuario y clave, los datos ingresados para logearse se debe validar contra la siguiente api 

https://jsonplaceholder.typicode.com/users

Para el usuario se debe validar con la key  “email” y la clave con la key “zipcode”

Por ejemplo el user “Sincere@april.biz” tendrá la clave “92998-3874” 

*No se deberá poder acceder a ninguna de las rutas del sitio web si no se encuentra previamente logueado .

El sitio principal (cuando se realiza el logeo) debe mostrar los posteos  del user que esta logueado con el detalle del post (Id,userId, body  y title) que retorna el end point /posts ,

al presionar click en algún posteo en particular del punto 2 se debe mostrar los comentarios que tiene el posteo en cuestión  , estos comentarios se pueden obtener del end point /comments
Apis a utilizar:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/comments
 
En caso de necesitar información adicional la podrá encontrar en la documentación https://jsonplaceholder.typicode.com/


Importante:
Se deberán entregar el proyecto en la tarea del ClassRoom , el archivo debe tener el formato NombreApellido.rar



--------------------------------------------------------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
