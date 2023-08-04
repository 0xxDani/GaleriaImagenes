import dataFotos from './data/fotos';

// Importando la función 'cargarImagen' desde el archivo './galeria/cargarImagen'
import { cargarImagen } from './galeria/cargarImagen';

// Obteniendo elementos HTML por su ID desde el DOM
const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

// Agregando un evento 'click' al contenedor de categorías
contenedorCategorias.addEventListener('click', (e) => {
    // e.preventDefault();
    // Prevenimos el comportamiento predeterminado del enlace ('a') para evitar redirecciones.

    if (e.target.closest('a')) {
        // Verificamos si el clic ocurrió en un enlace ('a') dentro del contenedor de categorías

        // Mostrando la galería y ocultando el desplazamiento vertical del cuerpo
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        // Obteniendo la categoría activa (seleccionada) desde el atributo personalizado 'data-categoria'
        const categoriaActiva = e.target.closest('a').dataset.categoria;

        // Obteniendo las fotos correspondientes a la categoría activa desde la fuente de datos 'dataFotos'
        const fotos = dataFotos.fotos[categoriaActiva];

        // Configurando el atributo personalizado 'data-categoria' en el elemento 'galeria'
        galeria.dataset.categoria = categoriaActiva;

        // Obteniendo los detalles de la primera foto y cargándola en el visor de la galería
        const { id, nombre, ruta, descripcion } = fotos[0];
        cargarImagen(id, nombre, ruta, descripcion);

        // Obteniendo el carrusel (contenedor de imágenes) dentro del elemento 'galeria'
        const carousel = galeria.querySelector('.galeria__carousel-slides');
        carousel.innerHTML = '';

        // Iterando sobre todas las fotos de la categoría y creando los elementos de carrusel
        fotos.forEach(foto => {
            const slide = `<a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="" />
            </a>`;
            // Cada foto se representará como un enlace ('a') con una imagen dentro.

            // Agregando el elemento de carrusel al carrusel en el DOM
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        // Añadiendo la clase 'galeria__carousel-slide--active' al primer elemento del carrusel
        // para marcar la primera foto como activa y mostrarla en el visor de la galería.
        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});

/* 
El archivo "eventoCategorias.js" maneja el evento de clic en las categorías del sitio web.
 Cuando se hace clic en una categoría, muestra la galería con las imágenes asociadas a esa
categoría y permite navegar a través de ellas en un carrusel. La función 'cargarImagen' es
responsable de cargar una imagen en el visor de la galería cuando se selecciona una categoría
específica.
 */