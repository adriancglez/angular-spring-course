# ANGULAR

## COMANDOS BÁSICOS

Para crear un proyecto nuevo usando Angular CLI, desde la terminal de comandos, escribir el comando

    ng new my-project

Para levantar angular, usamos el comando:

    ng serve -o

Al levantar el servidor, lo que se carga es el componente principal `app.components`

---

## ESTRUCTURA DE DIRECTORIO DE UN PROYECTO EN ANGULAR

### **e2e**

El directorio `e2e` contiene todas las herramientas necesarias para realizar pruebas unitarias.

### **node_modules**

El directorio `node_modules`, contiene todas las librerias y dependencias del proyecto.

### **src**

El directorio `src` es muy importante, ya que contiene todo el código fuente de la aplicación.

### **.editorconfig**

El archivo `.editorconfig` contiene toda la configuración del editor.

### **angular.json**

El archivo `angular.json` es el más importante, ya que en él se puede configurar todo.

### **package.json**

El archivo `package.json` es el archivo donde se declaran las dependencias a utilizar en el proyecto.

### **tslint.json**

El archivo `tslint.json` ayuda a detectar errores de sintaxis en el código.

---

## INTEGRAR BOOTSTRAP CON ANGULAR

Existen diferentes formas de integrar bootstrap a un proyecto en Angular

* *Por CDN* \
    Agregar las url al archivo `index.html`

    ~~~
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    ~~~

---

## CREACIÓN DE COMPONENTES EN ANGULAR

### FORMA MANUAL

Es recomendable que cada componente creado se considere lo siguiente:

* Se debe crear un directorio dentro de la carpeta `src\app\`.

* Dentro del directorio creado, crear archivo con la extensión `.ts`, usar la nomenclatura `component`.\
    `file.component.ts`

* Dentro de ese archivo crear una clase que tenga la expresión `export` y como buena práctica se recomienda que el nombre empiece en mayúscula y finalice con la palabra `Component`.
    ~~~
    export class ClaseComponent {
        ...
    }
    ~~~

* Se debe decorar o anotar la clase con el decorador `@Component()`
    ~~~
    @Component()
    export class ClaseComponent {
        ...
    }
    ~~~

* Importar la clase Component `import { Component } from '@angular/core';`
    ~~~
    import { Component } from '@angular/core';

    @Component()
    export class ClaseComponent {
        ...
    }
    ~~~

* Agregar los atributos al decorador `@Component`, los cuales son: `selector` y `template` ó `templateUrl`
    ~~~
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-name',
        template: `<h1>Content HTML</h1>`
    })
    export class ClaseComponent {
        ...
    }
    ~~~

    **Notas:** Existen dos formas de integrar contenido `HTML` a un componente, ya sea con el atributo `template` ó `templateUrl`. Con `template` se inserta el código `html` directo, esa práctica no es recomendada. Con `templateUrl` se inserta la url del archivo `.html` que contiene el código `HTML` a mostrar, esta práctica es la más recomendada.

* Registrar el nuevo componente en `app.module.ts`

    ~~~
    ...
    import { ClaseComponent } from './clase/clase.component';
    ...
    ~~~

* En el array `declarations`, registrar el componente:

    ~~~
    declarations: [
        ...,
        ClaseComponent
    ],
    ~~~

* En el archivo donde se desea integrar el contenido del componente, crear la etiqueta con el nombre del `selector` creado en la clase del componente:

    ~~~
    <app-name></app-name>
    ~~~

* Si se desea agregar estilos, se debe crear un archivo con extensión `.css`, con el mismo nombre que los componentes. Se manda a llamar en el componente `.ts` con el atributo `styleUrls`, este atributo es un array:

    ~~~
    @Component({
    ...,
    styleUrls: ['./clase.component.css']
  })
    ~~~

### FORMA AUTOMÁTICA CON CLI

Pocisionarse en la carpeta donde se creará el nuevo componente, escribir el comando:

> ng generate class name.component

Este comando crea los archivos `.ts`, el resto se realiza manualmente.

Para crear todo el componente completo, se usa el comando:

> ng generate component name

> ng g c name

## DIRECTIVAS

### *ngFor

Sirve para iternar una lista o array y mostrar cada uno de los elementos en la página web. La sintaxis para usar `*ngFor` es:

    <li ... *ngFor="let item of items">{{ item }}</li>

donde `item` es la variable que representará un elemento de la lista a mostrar y `items` es la lista a recorrer.

### *ngIf

Sirve para evaluar una expresión y así mostrar u ocultar contenido `HTML`. La sintaxis para *ngIf es:

    <ul ... *ngIf="expresión">

### SERVICE E INYECCIÓN DE DEPENDENCIAS

Para crear una clase `Service`, se ejecuta el comando dentro de la carpeta donde se creará el archivo:

> ng g service service-name

La clase servicio tiene un decorador denominado `Injectable`, este decorador, indica qué tipo de clase representa en Angular, cuál va a ser su rol dentro de la aplicación. En resumen, `Injectable` es para clases de Servicio y una clase de servicio representa la lógica de negocio y se puede inyectar a otros componentes.

Se debe importar en el archivo `app.module.ts`:

    import { ClassService } from './class/class.service';

Y declarar en el array `providers`:

    providers: [
        ClassService
    ],

### OBSERVABLES

Los observables nos sirven para trabajar de forma asíncrona consumiendo APIs REST del BackEnd, de tal modo que siempre están en modo escucha ante cualquier cambio en los datos desde el BackEnd.

Para trabajar con observables, se deben importar los siguientes paquetes:

    import { of, Observable } from 'rxjs';

### RUTAS

Utilizando rutas podemos dividir nuestra aplicación en diferentes secciones o áreas, las cuales se podrían llamar páginas, pero en realidad no son páginas aisladas.

Una aplicación en Angular es en una sola página SPA (Single Page Application), es decir tenemos una sola página para renderizar páginas diferentes y Angular utiliza esta técnica como routing.

La idea es dentro de esta página, a través de rutas, anidar un contenido de un componente que esté mapeado a una URL.

Para hacer uso de la técnica del routing, en el archivo `app.module.ts`, importar:

    import { RouterModule, Routes } from '@angular/router';

Crear el arreglo de rutas que aputará a cada componente:

    const routes: Routes = [
        {path: '', redirectTo: '/component-1', pathMatch: 'full'},
        {path: 'component-2', component: Class1Component},
        {path: 'component-1', component: Class2Component}
    ];

En el array `imports`, declarar el array de rutas:

    imports: [
        ...,
        RouterModule.forRoot(routes)
    ],

En el `HTML` principal, usar la directiva:

    <router-outlet></router-outlet>

Para apuntar a cada URL de las rutas:

    routerLink="/component-1"

Para determinar si un link está activo:

    routerLinkActive="active"

### INTEGRAR BOOTSTRAP

Existen diferentes formas de integrar Bootstrap a una aplicación en Angular, una buena práctica es que se instale vía CLI. Para ello se debe instalar: `bootstrap`, `jquery` y `popper`, con el comando:

> npm install bootstrap jquery popper.js --save

Integramos el path en el archivo `angular.json` en el array `styles` el css y en el array `scripts` los js.

    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        ...
    ],
    "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/popper.js/dist/umd/popper.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        ...
    ]