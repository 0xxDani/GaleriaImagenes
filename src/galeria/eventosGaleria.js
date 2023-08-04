// Importar las funciones "cerrarGaleria" y "slideClick" desde sus respectivos archivos.
import cerrarGaleria from './cerrarGaleria';
import slideClick from './slideClick';
import carousel from './carousel';
import { cargarAnteriorSiguiente } from './cargarImagen';

// Obtener el elemento HTML con el ID "galeria" y almacenarlo en la constante "galeria".
const galeria = document.getElementById('galeria');

// Agregar un evento 'click' al elemento "galeria".
galeria.addEventListener('click', (e) => {
    // Utilizando "e.target" se obtiene el elemento del DOM donde ocurrió el evento 'click'.
    // El método "closest" busca el ancestro más cercano (de abajo hacia arriba) que cumpla con la etiqueta especificada.
    // En este caso, se está buscando un elemento "button" que haya sido clicado dentro de "galeria".
    const boton = e.target.closest('button');

    // Verificar si el elemento "button" tiene un atributo de datos llamado "accion" con el valor 'cerrar-galeria'.
    // Esto se hace para comprobar si se ha hecho clic en un botón destinado a cerrar la galería.
    if (boton?.dataset?.accion === 'cerrar-galeria') {
        // Si se ha hecho clic en un botón con el atributo "data-accion='cerrar-galeria'", se llama a la función "cerrarGaleria".
        cerrarGaleria();
    }

    // Verificar si el elemento donde ocurrió el evento tiene un atributo de datos llamado "id".
    // Esto se hace para comprobar si se ha hecho clic en un elemento dentro de la galería que representa una imagen.
    if (e.target.dataset.id) {
        // Si se ha hecho clic en un elemento con el atributo "data-id", se llama a la función "slideClick" pasando el evento como argumento.
        slideClick(e);
    }

    //IMAGEN SIGUIENTE 
    if(boton?.dataset?.accion === 'siguiente-imagen'){ // === compara contenido y tipo de dato
        cargarAnteriorSiguiente('siguiente');
    }

    if(boton?.dataset?.accion === 'anterior-imagen'){ 
        cargarAnteriorSiguiente('anterior');
    }

    //carrusel anterior 
    if(boton?.dataset?.accion === 'siguiente-slide'){ // === compara contenido y tipo de dato
        carousel('adelante');
    }

    //carrusel anterior
    if(boton?.dataset?.accion === 'anterior-slide'){ 
        carousel('atras');
    }
});




















/* el archivo "eventosGaleria.js" se encarga de agregar un evento 'click' al elemento con ID "galeria". Cuando ocurre un clic dentro de la galería, se comprueba si se hizo clic en un botón destinado a cerrar la galería (botón con atributo "data-accion='cerrar-galeria'"). Si es así, se llama a la función "cerrarGaleria" para cerrar la galería.

Además, se verifica si se hizo clic en un elemento dentro de la galería que representa una imagen (elemento con atributo "data-id"). Si se cumple esta condición, se llama a la función "slideClick" pasando el evento como argumento, lo que probablemente esté relacionado con mostrar más detalles o información sobre la imagen en la interfaz de la galería.

En resumen, este archivo gestiona los eventos de clic dentro de la galería y realiza acciones correspondientes según el tipo de elemento que se ha clicado (botón de cerrar o imagen). */