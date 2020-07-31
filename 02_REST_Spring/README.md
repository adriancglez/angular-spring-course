# BACKEND REST CON SPRING 5

## SERVICIOS REST

Transferencia de Estado Representacional (REpresentational State Transfer REST). Es un protocolo entre cliente y servidor sin estado (Stateless). Por lo tanto en el BackEnd no se maneja ningún tipo de sesiones, eso se maneja por el lado del cliente con Angular por ejemplo utilizando session storage o local storage de HTML5.

Una de las caracteristicas fundamentales es poder integrar aplicaciones utilizando REST, poder obtener datos desde el BackEnd en formato JSON o desde Angular desde cualquier cliente que quiere enviar datos al BackEnd y realizar operaciones.

La transferencia y envío de datos se realiza a través de un `endpoint`, que es una URI que envía una petición HTTP al servidor con diferentes métodos o verbos.

## GENERANDO PROYECTO SPRING BOOT

Al generar un nuevo proyecto, veremos una serie de archivos que son importantes identificar y conocer, ya que trabajaremos con ellos a lo largo del curso.

* `pom.xml`: Es la estructura del proyecto, las versiones de Spring, Java, nombre del proyecto y las dependencias que se usarán para que el proyecto funcione.

* `application.propoerties`: Es el archivo principal de configuración, nos permite sobreescribir cualquier configuración de nuestro proyecto, ya que por defecto SpringBoot viene todo configurado.

* `SpringBoot...Application.java`: Es la clase principal, la mas importante, ya que es el corazón de una aplicación, es el arranque.

### ENTITY

Las `entity` son las entidades o modelos (clases en Java) que se mapearán con las tablas de la Base de Datos. Una `entity` contiene las propiedades que hacen referencia a las columnas de una tabla.

Para indicar que una clase será una `entity` se debe anotar con la anotación `@Entity`, posteriormente, se debe especificar a qué tabla hará referencia esa `entity` con la anotación `@Table` dentro el argumento con el nombre de la tabla, y finalmente, para indicar que esa `entity` viajrá por la red se debe implementar la interfaz `Serializable`.

    @Entity
    @Table(name = "my_entity")
    public class MyEntity implements Serializable {
        ...
    }

Para especificar qué propiedad hará referencia a la llave primaria (primary key) de la tabla, dicha propiedad debe decorarse con la anotación `@Id` y para indicar que el valor esa propiedad será manejado por la Base de Datos (valores autoincrementables), se debe decorar con la anotación `@GeneratedValue`, dentro especificar el argumento `strategy` cuyo valor debe ser `GenerationType.IDENTITY`.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

Para especificar cada una de las propiedades de la `entity` que harán referencia a las columnas de la tabla, a cada propiedad se recomienda anotarla con la anotación `@Column`, dentro el argumento con el nombre de la columna, esto siempre y cuando el nombre de la propiedad en la `entity` sea diferente al nombre especificado en la columna de la tabla. Si el nombre de la propiedad de la `Entity` es exactamente igual al de la columna de la tabla a mapear no será necesario decorarla con la anotación `@Column`

    @Column(name = "create_at")
    private Date createAt;

Se debe encapsular (generar los getters y setters de las propiedades) la `entity` y se recomienda sobreescribir el método `toString`, devolviendo el objeto con las propiedades y sus valores.

<hr>

### REPOSITORY

El `repository` es la interfaz que se encargará de realizar las operaciones a la Base de Datos (insertar registros, editar registros, buscar registros, eliminar registros, etc.) solicitadas por la clase `service`.

Se recomienda que la interfaz `repository` herede a la interfaz `CrudRepository`, puesto que esta contiene ya declarados todos los métodos necesarios para realizar las operaciones a la Base de Datos ahorrándonos extensas líneas de código. Al heredar la interfaz mencionada, debemos asignarle la clase `Entity` y el tipo de dato de su clave primaria a la que hará referencia.

    public interface IMyEntityRepository extends CrudRepository<MyEntity, Long> {
        ...
    }

<hr>

### SERVICE

El `service` es una clase que contiene toda la lógica de negocio de nuestra aplicación, es la que realizará la llamada a la clase `repository` para que ella efectúe las operaciones a la Base de Datos que sean necesarias. Esto se recomienda para evitar saturar con extensas líneas de código al `controller`, así como también evitar realizar las llamadas a la Base de Datos directamente desde el mismo.

Se debe crear una interfaz `service` donde se declaran los métodos que se utilizarán para desarollar la lógica de negocio.

    public interface IMyEntityService {
        ...
    }

Posteriormente, creamos una clase que implementará esa interfaz, la cual, será decorada con la anotación `Service`.

    @Service
    public class MyEntityServiceImpl implements IMyEntityService {
        ...
    }

Dentro de esa clase, declaramos una variable que será la interfaz `repository` creada con anterioridad y la inicializaremos en el constructor, a este lo decoramos con la anotación `@Autowired`, para que Spring nos devuelva una instancia del objeto `repository`.

    private final IMyEntityRepository iMyEntityRepository;

    @Autowired
    public MyEntityServiceImpl(IMyEntityRepository iMyEntityRepository) {
        this.iMyEntityRepository = iMyEntityRepository;
    }

y de esta forma `this.iMyEntityRepository` podemos llamar a los métodos de la interfáz `repository`.

<hr>