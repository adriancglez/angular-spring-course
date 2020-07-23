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