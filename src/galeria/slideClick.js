// Importar datos de fotos y la función cargarImagen desde archivos locales.
import datos from './../data/fotos';
import { cargarImagen } from './cargarImagen';

// Definir la función slideClick que manejará el clic en una imagen de la galería.
const slideClick = (e) => {
  // Declarar variables para almacenar información de la imagen clicada.
  let ruta, nombre, descripcion;

  // Obtener el identificador de la imagen clicada a partir del atributo "data-id".
  // El evento "e" representa el objeto del evento del clic.
  const id = parseInt(e.target.dataset.id);

  // Obtener el elemento con ID "galeria" y almacenarlo en la constante "galeria".
  const galeria = document.getElementById('galeria');

  // Obtener el valor del atributo "data-categoria" del elemento "galeria" y almacenarlo en "categoriaActiva".
  const categoriaActiva = galeria.dataset.categoria;

  // Recorrer todas las fotos de la categoría activa para encontrar la imagen con el mismo "id".
  datos.fotos[categoriaActiva].forEach(foto => {
    if (foto.id === id) {
      // Si se encuentra la imagen con el "id" correspondiente, asignar sus datos a las variables.
      ruta = foto.ruta;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });

  // Llamar a la función cargarImagen con los datos obtenidos para mostrar la imagen en la galería.
  cargarImagen(id, nombre, ruta, descripcion);
};

// Exportar la función slideClick para que esté disponible para su uso en otros archivos.
export default slideClick;
