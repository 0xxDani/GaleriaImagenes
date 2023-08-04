// Obtener el elemento HTML con el ID "galeria" y almacenarlo en la constante "galeria".
const galeria = document.getElementById('galeria');

// Definición de la función "cerrarGaleria" que se encarga de ocultar la galería y restaurar el scroll del cuerpo.
const cerrarGaleria = () => {
    // Remover la clase "galeria--active" para ocultar la galería. Esta clase probablemente tenga estilos CSS para mostrar la galería.
    galeria.classList.remove('galeria--active');

    // Devolver el scroll al cuerpo del documento permitiendo que el usuario pueda hacer scroll nuevamente.
    document.body.style.overflow = '';
};

// Exportar la función "cerrarGaleria" como valor predeterminado (default) para que pueda ser utilizada en otros archivos.
export default cerrarGaleria;
