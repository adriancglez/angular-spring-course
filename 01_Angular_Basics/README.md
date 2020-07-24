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