import dataCategorias from './data/categorias'; //dataCategorias = variable

//Destructuramos la data para traer solo los arrays de las categorias
const {categorias} = dataCategorias;
const contenedor_categorias = document.getElementById('categorias');
categorias.forEach((categoria) => {
    
    const nueva_categoria = document.createElement ('a'); //Document se refiere a un documento html
    const plantilla = `<img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${categoria.nombre}</p>
        <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
    </div>`;
    nueva_categoria.innerHTML =  plantilla; //
    nueva_categoria.href = '#';
    nueva_categoria.classList.add('categoria');
    nueva_categoria.dataset.categoria = categoria.id; //dataset donde se guardan las etiquetas personalizadas
    contenedor_categorias.append(nueva_categoria);    //(categoria es el elemento de iteracion en el for each el
                                                      //.id es para llamar los ids de las diferentes categorias)
})