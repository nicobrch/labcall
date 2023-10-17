## Ejecución de Docker Compose para la Base de Datos

Siga los siguientes pasos para ejecutar la base de datos MySQL con Docker.

### Pre-requisitos

-   Asegúrese de tener [Docker](https://docs.docker.com/get-docker/) instalado en su sistema.

### Instrucciones

1. **Abrir la terminal**
   Navegue hasta el directorio del proyecto donde se encuentra su archivo `docker-compose.yml`.

2. **Ejecutar Docker Compose**
   Ejecute el siguiente comando para arrancar los servicios:

    ```bash
    docker-compose up -d
    ```

    Esto iniciará los contenedores en modo "detached" (segundo plano).

3. **Verificar la ejecución**
   Para asegurarse de que los contenedores están en ejecución, ejecute:

    ```bash
    docker ps
    ```

    Esto mostrará una lista de todos los contenedores en ejecución.

4. **Creación de tablas y esas cosas**
   Ir a la ruta /api/database
