# Crear un formulario que valide campos antes de enviar la información

- El formulario deberá contar con los siguientes campos y validarlos cada vez que el usuario pierda el foco usando jQuery para manipular el DOM.
   - Nombre: Deberá tener contenido.
   - Email: Deberá contener arroba, punto y contenido.
   - Comentarios: Deberá tener contenido.

Si existe algún error deberá mostrar el campo en rojo

- Deberá tener un botón para enviar la información que deberá habilitarse solo si todos los campos son validos.

> Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase `is-valid` y mostrar que es invalido agregando la clase `is-invalid`. Para deshabilitar el botón hay que poner en `true` la propiedad `disabled` en el botón y para habilitarlo hay que cambiarla a `false`. Ej: `$('myButton').attr('disabled', true)`.

[Obtener o cambiar valor de un input jQuery](http://api.jquery.com/val/)

[Cambiar atributos en jQuery](http://api.jquery.com/attr/)

[Evento blur jQuery](http://api.jquery.com/blur/)

[Evento click jQuery](https://api.jquery.com/click/)

[Add class jQuery](http://api.jquery.com/addClass/)

[Remove class jQuery](http://api.jquery.com/removeClass/)

[Boostrap forms](https://getbootstrap.com/docs/4.0/components/forms/)