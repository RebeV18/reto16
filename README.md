# Reto 16
Crea una aplicación web utilizando Express que permita a los usuarios registrar y obtener información sobre una lista de tareas. La aplicación debe tener las siguientes funcionalidades:
- Agregar una tarea a la lista.
- Ver todas las tareas de la lista.
- Marcar una tarea como completada.
- Eliminar una tarea de la lista.

## Pasos que debes seguir:
- Crea una aplicación Node.js y agregar el paquete Express.
- Crea una ruta HTTP GET que muestre todas las tareas de la lista en formato JSON. Esta ruta debe ser accesible a través de la URL "/tareas" y debe devolver un arreglo de objetos JSON con las tareas.
- Crea una ruta HTTP POST que permita agregar una tarea a la lista. Esta ruta debe ser accesible a través de la URL "/tareas" y debe recibir la información de la tarea en el cuerpo de la solicitud en formato JSON. La tarea debe ser agregada a una lista de tareas que se encuentre almacenada en la memoria de la aplicación.
- Crea una ruta HTTP PUT que permita marcar una tarea como completada. Esta ruta debe ser accesible a través de la URL "/tareas/:id" y debe recibir el ID de la tarea a marcar como completada en la URL. La tarea debe ser marcada como completada en la lista de tareas almacenada en la memoria de la aplicación.
- Crea una ruta HTTP DELETE que permita eliminar una tarea de la lista. Esta ruta debe ser accesible a través de la URL "/tareas/:id" y debe recibir el ID de la tarea a eliminar en la URL. La tarea debe ser eliminada de la lista de tareas almacenada en la memoria de la aplicación.
- Probar las rutas HTTP creadas utilizando Insomnia o Postman, realizando solicitudes GET, POST, PUT y DELETE para verificar que la aplicación funciona correctamente.
