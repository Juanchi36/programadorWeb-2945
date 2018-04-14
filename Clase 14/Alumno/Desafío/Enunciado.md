# Usando de base el desafío de la clase anterior, crear un formulario que valide campos antes de enviar la información

- El formulario deberá contar con los siguientes campos y validarlo la primera vez cuando el usuario pierda el foco, pero a partir de la siguiente revalidarlo en cada cambio del input usando jQuery para manipular el DOM.
   - Nombre: Deberá tener contenido.
   - Email: Deberá contener arroba, punto y contenido.
   - Comentarios: Deberá tener contenido.

- Si existe algún error deberá mostrar el campo en rojo y un mensaje indicando el tipo de error debajo del input.

- Deberá tener un botón para enviar la información que deberá habilitarse solo si todos los campos son validos.

> Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase `is-valid` y mostrar que es invalido agregando la clase `is-invalid`. Para deshabilitar el botón hay que poner en `true` la propiedad `disabled` en el botón y para habilitarlo hay que cambiarla a `false`. Ej: `$('myButton').attr('disabled', true)`.

[Evento change jQuery](http://api.jquery.com/change/)

[One jQuery](http://api.jquery.com/one/)

[Listado de eventos jQuery](http://api.jquery.com/Types/#Event)
