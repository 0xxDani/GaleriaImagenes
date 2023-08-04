import data from './../data/fotos';

const galeria = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) => { //Para cargar correctamente toda la data 
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];

    let indexImgActual; //PARA CAPTURAR EL INDICE DE LA IMAGEN ACTUAL // EN EL FOREACH CON INDEX 
    fotos.forEach((foto, index) => {
        if(foto.id === id){
            indexImgActual = index;
            console.log(categoriaActual, indexImgActual);
        }
    })

    //PARA PONER EL RECUADRO BLANCO 
    if(galeria.querySelectorAll('.galeria__carousel-slide').length > 0){

        //Eliminar el recuadro de la imagen anterior 
        galeria.querySelector('.galeria__carousel-slide--active')
        .classList.remove('galeria__carousel-slide--active');

        galeria.querySelectorAll('.galeria__carousel-slide')[indexImgActual] //queryselectorall crea una lista de todas las clases galeria_carousel-slide
        .classList.add('galeria__carousel-slide--active');
    }

};

const cargarAnteriorSiguiente = (direccion) => { //para capturar izquierda/derecha
    const categoriaActual = galeria.dataset.categoria;  
    const fotos = data.fotos[categoriaActual]; 
    
    const idImgActual = parseInt (galeria.querySelector('.galeria__imagen').dataset.idImagen)  //EL QUERY SELECTOR ES PARA ENCONTRAR CLASES CSS


    let indexImgActual
    fotos.forEach((foto, index) => {          //AL TRABAJAR CON EL INDICE SIEMPRE SE VA A MAPEAR POR LAS POSICIONES QUE EMPIEZAN DESDE 0
        if(foto.id ===idImgActual){
            indexImgActual = index;
        }   
    });

    //DESTRUCTURACION DE LA DATA

    if(direccion === 'siguiente'){
        if(fotos[indexImgActual + 1]) {       //IMAGEN ACTUAL + 1 PERO, MENOR AL NUMERO DE FOTOS DEL CARRUSEL CON FOTOS. LENGTH 
            const { id, nombre, ruta, descripcion } = fotos[indexImgActual + 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }else if(direccion === 'anterior'){
        if(fotos[indexImgActual - 1]) { 
            const { id, nombre, ruta, descripcion } = fotos[indexImgActual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
}

export { cargarImagen, cargarAnteriorSiguiente }; //El export default es para un solo metodo y este export{} es para cargar varios métodos