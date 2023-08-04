const galeria = document.getElementById('galeria')

const carousel= (direccion) => {
    //intersectionObserver => es la encargada de observar los cambios en el carrusel
    //e idientificar cuales son los elementos visibles
    const opciones = {
        //raiz de lo que se observa
        root: document.querySelector('.galeria__carousel'),

        //evitamos que el contenedor contenga espacios entre imagenes 
        rootMargin: '0px', 

        //cuanto es el porcentaje de imagen visible para considerarse visible
        threshold: 0.9
    }

    const observer = new IntersectionObserver((entradas) => {
        //TRAEMOS SOLO LOS VISIBLES
        const slidesVisibles = entradas.filter((entrada) => {
            if(entrada.isIntersecting === true){
                return entrada;
            }
        });

        if(direccion === 'atras'){
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

            if(indexPrimerSlideVisible >= 1){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'end'
                });
            };

        }else if(direccion === 'adelante'){
            const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);

            // console.log(indexUltimoSlideVisible);
            if(entradas.length - 1 > indexUltimoSlideVisible){
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    //indicamos que el movimiento del scroll será suave
                    behavior: 'smooth',
                    //indicamos que elultimo elemento que seesta mostrando lo ubique al inicio el array en pantalla
                    inline: 'start'
                });
            };
            
        }
        const slides = galeria.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide) => {
            //removemos elobservador en los elementos del carrusel
            observer.unobserve(slide);
        })

    }, opciones);

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
        //Agregamos el observador en los elements del carrusel
        observer.observe(slide);
    });
}

export default carousel;