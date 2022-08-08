# App

- Recibe: Nada
- Estado : nada
- Muestra :
  - Componentes Listado
  - Componente Formulario
- Acciones del usuario

# Listado

- Ricibe: listado de tareas (desde un archivo)
- Estado: Nada
- Muestra: listado de tarea recibidas
- Accioines del usuario:
  - Eliminar
  - Modificar el estado de si esta echa

# Formulario

- Ricibe: Una tarea si el usuario quiere modificar una tarea
- Estado: Nada
- Muestra:
  - campo para nombrar la tarea
- Accioines del usuario:
  - Crear una tarea con un nombre
  - Modificar el nombre de la tarea

# Botton

- Recibe: accion + un texto
- Estado: nada
- Muestra:
  - Muestra un texto recibido por props
- Acciones del usuario:
  - llama la acción recibida por props.

# Data

- array de objetos de tareas

  - Formato:
    id: number
    name: string
    don: bolean

- Modificacion:
  - Eliminar (lista)
  - Añadir (Formulario)
  - Modificar
    - nombre (formulario)
    - Estado (listado)
