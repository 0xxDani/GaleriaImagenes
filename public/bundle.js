'use strict';

/* El archivo "fotos.js" contiene un objeto exportado con información de diversas fotos
 agrupadas por regiones geográficas. Cada región tiene un arreglo de objetos que representan
 diferentes fotos junto con sus detalles, como nombre, descripción y ruta de la imagen.

En este archivo, se definen seis regiones geográficas:
América, Europa, África, Asia, Oceanía y Antártida. Cada región tiene un arreglo
con 10 fotos asociadas. Cada foto se representa mediante un objeto que contiene
las siguientes propiedades:

id: Un identificador único para la foto.
nombre: El nombre de la foto.
descripcion: Una descripción detallada de la foto.
ruta: La ruta de la imagen en el sistema de archivos. */


var datos = {
	fotos: {
		america: [
			{
				id: 1,
				nombre: 'Cactus',
				descripcion:
					'La familia Cactaceae es conocida comúnmente como la familia de los cactus o la familia espinosa. Está compuesta por una amplia variedad de especies de plantas suculentas, generalmente adaptadas a entornos áridos y desérticos. Los cactus son nativos de América, especialmente de regiones como el suroeste de los Estados Unidos, México, América Central y América del Sur.',
				ruta: './img/america/1.jpg',
			},
			{
				id: 2,
				nombre: '',
				descripcion:
					'Los cactus almacenan agua en sus tallos para sobrevivir en climas secos y áridos.',
				ruta: './img/america/2.jpg',
			},
			{
				id: 3,
				nombre: '',
				descripcion:
					'Son pequeñas protuberancias en los tallos donde se desarrollan las espinas y flores.',
				ruta: './img/america/3.jpg',
			},
			{
				id: 4,
				nombre: '',
				descripcion:
					'Los cactus tienen espinas modificadas que actúan como una forma de protección y pueden variar en tamaño y forma.',
				ruta: './img/america/4.jpg',
			},
			{
				id: 5,
				nombre: '',
				descripcion:
					'A pesar de vivir en condiciones difíciles, muchos cactus producen flores impresionantes y coloridas.',
				ruta: './img/america/5.jpg',
			},
			{
				id: 6,
				nombre: '',
				descripcion:
					'Los cactus se encuentran principalmente en América, desde el norte de Canadá hasta el sur de Argentina.',
				ruta: './img/america/6.jpg',
			},
			{
				id: 7,
				nombre: '',
				descripcion:
					'Los cactus son conocidos por su crecimiento lento. Algunas especies pueden tardar años o incluso décadas en alcanzar su tamaño adulto. Además, algunos cactus pueden vivir durante cientos de años. Por ejemplo, el cactus saguaro (Carnegiea gigantea) puede vivir hasta 200 años o más.',
				ruta: './img/america/7.jpg',
			},
			{
				id: 8,
				nombre: '',
				descripcion:
					'La capacidad de almacenar grandes cantidades de agua en sus tejidos es una de las principales adaptaciones de los cactus para sobrevivir en entornos áridos. Esta reserva les permite sobrevivir en épocas de sequía prolongada.',
				ruta: './img/america/8.jpg',
			},
			{
				id: 9,
				nombre: '',
				descripcion:
					'Muchas especies de cactus tienen flores que se abren por la noche y están adaptadas para la polinización nocturna. Atraen a polinizadores como los murciélagos, mariposas nocturnas y algunos insectos que están activos durante la noche.',
				ruta: './img/america/9.jpg',
			},
			{
				id: 10,
				nombre: '',
				descripcion:
					'Algunas especies de cactus son comestibles y han sido utilizadas históricamente como fuente de alimento por las poblaciones indígenas de América. ',
				ruta: './img/america/10.jpg',
			},
		],
		europa: [
			{
				id: 11,
				nombre: 'Euphorbias',
				descripcion:
					'La familia Euphorbiaceae es una de las familias botánicas más grandes y diversas, compuesta por alrededor de 300 géneros y más de 7,500 especies. Se encuentran en una amplia gama de hábitats, desde regiones tropicales y subtropicales hasta desiertos y áreas templadas.',
				ruta: './img/europa/1.jpg',
			},
			{
				id: 12,
				nombre: '',
				descripcion:
					'Muchas especies de esta familia producen látex lechoso, que a menudo contiene compuestos tóxicos y puede ser irritante para la piel y mucosas.',
				ruta: './img/europa/2.jpg',
			},
			{
				id: 13,
				nombre: '',
				descripcion:
					'La forma y el tamaño de las hojas y las flores pueden variar significativamente entre las especies de esta familia.',
				ruta: './img/europa/3.jpg',
			},
			{
				id: 14,
				nombre: '',
				descripcion:
					'La familia Euphorbiaceae incluye plantas con diferentes hábitos de crecimiento, como arbustos, árboles, hierbas y suculentas.',
				ruta: './img/europa/4.jpg',
			},
			{
				id: 15,
				nombre: '',
				descripcion:
					'Las euforbias se encuentran en una amplia variedad de hábitats, desde regiones tropicales y subtropicales hasta zonas templadas y desérticas. Algunas especies son terrestres, mientras que otras son acuáticas o epífitas (crecen sobre otras plantas).',
				ruta: './img/europa/5.jpg',
			},
			{
				id: 16,
				nombre: '',
				descripcion:
					'A pesar de la toxicidad de su látex, algunas euforbias tienen aplicaciones medicinales en algunas culturas tradicionales. Algunas especies se han utilizado en la medicina herbal para tratar problemas de piel, dolores, infecciones y otros trastornos.',
				ruta: './img/europa/6.jpg',
			},
			{
				id: 17,
				nombre: '',
				descripcion:
					'Varias euforbias son apreciadas como plantas ornamentales en jardinería debido a su forma interesante, colores llamativos y facilidad de cultivo. Entre las más conocidas se encuentran las suculentas del género Euphorbia y las "poinsettias" (Euphorbia pulcherrima), famosas durante las festividades de Navidad.',
				ruta: './img/europa/7.jpg',
			},
			{
				id: 18,
				nombre: '',
				descripcion:
					'Algunas especies de euforbias se utilizan para la producción de caucho natural, aunque su importancia comercial es menor en comparación con otras fuentes de caucho, como el árbol del caucho (Hevea brasiliensis).',
				ruta: './img/europa/8.jpg',
			},
			{
				id: 19,
				nombre: '',
				descripcion:
					'La familia Euphorbiaceae es conocida por su diversidad química y muchas especies contienen compuestos bioactivos. Algunos de estos compuestos se han estudiado por su potencial en aplicaciones farmacéuticas, agrícolas e industriales.',
				ruta: './img/europa/9.jpg',
			},
			{
				id: 20,
				nombre: '',
				descripcion:
					'Muchas euforbias producen un látex blanco, lechoso y venenoso que contiene compuestos tóxicos y puede ser irritante para la piel y las mucosas. Este látex actúa como una defensa contra herbívoros y patógenos.',
				ruta: './img/europa/10.jpg',
			},
		],

		africa: [
			{
				id: 21,
				nombre: 'Crásulas',
				descripcion:
					'La familia Crassulaceae es conocida por incluir un grupo diverso de plantas suculentas, muchas de las cuales son populares en jardinería y colecciones de plantas debido a su forma atractiva y su capacidad para sobrevivir en condiciones secas.',
				ruta: './img/africa/1.jpg',
			},
			{
				id: 22,
				nombre: '',
				descripcion:
					'Las Crassula son suculentas muy populares en el mundo de la jardinería debido a su atractiva forma y fácil cuidado.',
				ruta: './img/africa/2.jpg',
			},
			{
				id: 23,
				nombre: '',
				descripcion:
					'El género Crassula contiene más de 200 especies diferentes, y muchas de ellas tienen variedades y cultivares adicionales.',
				ruta: './img/africa/3.jpg',
			},
			{
				id: 24,
				nombre: '',
				descripcion:
					'Al igual que otras plantas de la familia Crassulaceae, las Crassula tienen hojas gruesas y carnosas que almacenan agua, lo que les permite sobrevivir en condiciones secas.',
				ruta: './img/africa/4.jpg',
			},
			{
				id: 25,
				nombre: '',
				descripcion:
					'Las Crassula son fáciles de propagar mediante esquejes de hojas o tallos, lo que las convierte en plantas ideales para compartir con amigos o crear nuevas plantas a partir de fragmentos.',
				ruta: './img/africa/5.jpg',
			},
			{
				id: 26,
				nombre: '',
				descripcion:
					'Las Crassula son originarias de Sudáfrica, aunque algunas especies también se encuentran en otras regiones de África y Madagascar.',
				ruta: './img/africa/6.jpg',
			},
			{
				id: 27,
				nombre: '',
				descripcion:
					'Estas plantas están adaptadas para sobrevivir en condiciones de sequía y tienen la capacidad de entrar en un estado de letargo durante períodos de estrés hídrico.',
				ruta: './img/africa/7.jpg',
			},
			{
				id: 28,
				nombre: '',
				descripcion:
					'Las Crassula varían en tamaño desde pequeñas plantas suculentas de unos pocos centímetros de altura hasta especies arbustivas más grandes.',
				ruta: './img/africa/8.jpg',
			},
			{
				id: 29,
				nombre: '',
				descripcion:
					'Aunque no son tan llamativas como las flores de algunos otros géneros, las flores de las Crassula pueden ser delicadas y atractivas, generalmente en tonos de blanco, rosa o rojo.',
				ruta: './img/africa/9.jpg',
			},
			{
				id: 30,
				nombre: '',
				descripcion:
					'Algunas especies de Crassula son conocidas por sus nombres comunes, como "árbol del jade" (Crassula ovata), "collar de perlas" (Crassula perforata) y "planta de dinero" (Crassula argentea).',
				ruta: './img/africa/10.jpg',
			},
			{
				id: 31,
				nombre: '',
				descripcion:
					'Las Crassula son perfectas para el cultivo en macetas debido a su tamaño compacto y su tolerancia a las condiciones de interior. Son ideales para decorar ventanas o escritorios, especialmente en climas más fríos donde no pueden sobrevivir al aire libre durante todo el año.',
				ruta: './img/africa/11.jpg',
			}
		],
		asia: [
			{
				id: 32,
				nombre: 'Orquideas',
				descripcion:
					'Las orquídeas son una de las familias de plantas más grandes y diversas del reino vegetal, con aproximadamente 25,000 a 30,000 especies conocidas y más de 100,000 híbridos registrados.',
				ruta: './img/asia/1.jpg',
			},
			{
				id: 33,
				nombre: '',
				descripcion:
					'Las orquídeas se encuentran en casi todos los continentes del mundo, excepto en la Antártida. Su mayor diversidad se encuentra en los trópicos, especialmente en América del Sur, Centroamérica y el sudeste asiático',
				ruta: './img/asia/2.jpg',
			},
			{
				id: 34,
				nombre: '',
				descripcion:
					'Las orquídeas tienen adaptaciones únicas para la polinización. Algunas imitan a insectos, atrayéndolos para que los polinicen, mientras que otras se asemejan a partes del cuerpo de animales para atraer a los polinizadores.',
				ruta: './img/asia/3.jpg',
			},
			{
				id: 35,
				nombre: '',
				descripcion:
					'La orquídea más pequeña del mundo es la "Platystele jungermannioides", que puede medir menos de 2 mm de longitud.',
				ruta: './img/asia/4.jpg',
			},
			{
				id: 36,
				nombre: '',
				descripcion:
					'La orquídea más grande es la "Grammatophyllum speciosum", conocida como la orquídea tigre, que puede alcanzar más de 3 metros de altura y tener más de 5,000 flores.',
				ruta: './img/asia/5.jpg',
			},
			{
				id: 37,
				nombre: '',
				descripcion:
					'Las orquídeas pueden tener una vida extremadamente larga. Algunas especies pueden vivir más de 100 años si se cuidan adecuadamente.',
				ruta: './img/asia/6.jpg',
			},
			{
				id: 38,
				nombre: '',
				descripcion:
					'Muchas orquídeas tienen una relación simbiótica con hongos micorrícicos. Los hongos ayudan a las orquídeas a obtener nutrientes del suelo a cambio de azúcares y carbohidratos producidos por la planta.',
				ruta: './img/asia/7.jpg',
			},
			{
				id: 39,
				nombre: '',
				descripcion:
					'Las orquídeas son populares como plantas ornamentales y se cultivan comercialmente para su venta en todo el mundo. Algunas especies, como la "Vanilla planifolia", se cultivan por sus vainas, que se utilizan para producir extracto de vainilla.',
				ruta: './img/asia/8.jpg',
			},
			{
				id: 40,
				nombre: '',
				descripcion:
					'Muchas especies de orquídeas están en peligro de extinción debido a la destrucción del hábitat y la recolección excesiva. Algunas organizaciones y jardines botánicos trabajan para proteger y conservar estas especies.',
				ruta: './img/asia/9.jpg',
			},
			{
				id: 41,
				nombre: '',
				descripcion:
					'Las orquídeas tienen una larga historia cultural y simbolizan belleza, amor, elegancia y fertilidad en diversas culturas de todo el mundo. También son símbolos nacionales en países como Venezuela (flor nacional) y Singapur (flor nacional de Vanda Miss Joaquim).',
				ruta: './img/asia/10.jpg',
			},
		],
		oceania: [
			{
				id: 42,
				nombre: 'Anturios',
				descripcion:
					'Los anturios son plantas nativas de las regiones tropicales de América Central y del Sur. Se encuentran comúnmente en países como Colombia, Ecuador, Perú y Brasil.',
				ruta: './img/oceania/1.jpg',
			},
			{
				id: 43,
				nombre: '',
				descripcion:
					'Sus hojas son grandes y brillantes, con una forma característica que se asemeja a un corazón, lo que les ha dado el apodo de "plantas del corazón".',
				ruta: './img/oceania/2.jpg',
			},
			{
				id: 44,
				nombre: '',
				descripcion:
					'Su parte más llamativa es la espata, una hoja modificada que rodea la inflorescencia. La espata es a menudo de colores brillantes, como rojo, rosa, naranja o blanco, lo que le da a la planta un aspecto atractivo.',
				ruta: './img/oceania/3.jpg',
			},
			{
				id: 45,
				nombre: '',
				descripcion:
					'En el centro de la espata se encuentra el espádice, una estructura en forma de espiga que contiene las flores diminutas y los órganos reproductivos.',
				ruta: './img/oceania/4.jpg',
			},
			{
				id: 46,
				nombre: '',
				descripcion:
					'Las flores de los anturios pueden durar varias semanas, lo que los convierte en una opción popular como planta de interior ornamental.',
				ruta: './img/oceania/5.jpg',
			},
			{
				id: 47,
				nombre: '',
				descripcion:
					'En su hábitat natural, los anturios suelen crecer como epífitas, es decir, se aferran a los troncos de los árboles y toman nutrientes de la humedad del aire y los desechos vegetales en lugar de tomarlos del suelo.',
				ruta: './img/oceania/6.jpg',
			},
			{
				id: 48,
				nombre: '',
				descripcion:
					'Para crecer bien, los anturios necesitan un ambiente húmedo y bien drenado. No toleran bien el exceso de sequedad en el suelo o el aire.',
				ruta: './img/oceania/7.jpg',
			},
			{
				id: 49,
				nombre: '',
				descripcion:
					'Aunque necesitan ciertos cuidados específicos, los anturios son considerados en general como plantas de interior de bajo mantenimiento, siempre y cuando se proporcionen las condiciones adecuadas.',
				ruta: './img/oceania/8.jpg',
			},
			{
				id: 50,
				nombre: '',
				descripcion:
					'Algunos estudios sugieren que los anturios tienen la capacidad de eliminar ciertas toxinas del aire interior, lo que los convierte en una opción popular como planta purificadora.',
				ruta: './img/oceania/9.jpg',
			},
			{
				id: 51,
				nombre: '',
				descripcion:
					'Existen numerosas especies y variedades de anturios, cada una con sus propias características y colores únicos, lo que permite a los aficionados de las plantas tener una amplia gama de opciones para elegir.',
				ruta: './img/oceania/10.jpg',
			},
		],
		antartida: [
			{
				id: 52,
				nombre: 'Arte del bonsai',
				descripcion:
					'Los bonsáis son un tipo de arte hortícola que consiste en cultivar árboles y plantas en miniatura dentro de macetas, mediante técnicas de poda y estilización para lograr una apariencia estética y natural.',
				ruta: './img/antartida/1.jpg',
			},
			{
				id: 53,
				nombre: '',
				descripcion:
					'Aunque es más conocido por su asociación con Japón, el arte del bonsái tuvo sus orígenes en China, donde se practicaba ya en el siglo VI.',
				ruta: './img/antartida/2.jpg',
			},
			{
				id: 54,
				nombre: '',
				descripcion:
					'La característica más distintiva de un bonsái es su tamaño reducido, que puede variar desde unos pocos centímetros hasta alrededor de un metro, dependiendo de la especie y el estilo de bonsái.',
				ruta: './img/antartida/3.jpg',
			},
			{
				id: 55,
				nombre: '',
				descripcion:
					'A través de técnicas de poda, alambrado y trasplante, se logra la apariencia de árboles maduros en miniatura, conservando las proporciones y características de los árboles naturales.',
				ruta: './img/antartida/4.jpg',
			},
			{
				id: 56,
				nombre: '',
				descripcion:
					'Existen varios estilos tradicionales de bonsái, como el estilo cascada, el estilo formal vertical, el estilo informal inclinado, entre otros, cada uno con sus propias características y significados simbólicos.',
				ruta: './img/antartida/5.jpg',
			},
			{
				id: 57,
				nombre: '',
				descripcion:
					'Los bonsáis requieren cuidados especiales, que incluyen riego controlado, poda regular, alambrado para dar forma a las ramas y atención a la salud general de la planta.',
				ruta: './img/antartida/6.jpg',
			},
			{
				id: 58,
				nombre: '',
				descripcion:
					'Algunos bonsáis pueden vivir durante muchos años, incluso siglos, si se les proporciona el cuidado adecuado.',
				ruta: './img/antartida/7.jpg',
			},
			{
				id: 59,
				nombre: '',
				descripcion:
					'Los bonsáis se pueden crear a partir de árboles de hoja perenne, como el pino y el enebro, o de árboles de hoja caduca, como el arce y el olmo.',
				ruta: './img/antartida/8.jpg',
			},
			{
				id: 60,
				nombre: '',
				descripcion:
					'En Japón y otros países asiáticos, los bonsáis tienen un profundo significado cultural y espiritual. Se consideran una forma de meditación y una conexión con la naturaleza.',
				ruta: './img/antartida/9.jpg',
			},
			{
				id: 61,
				nombre: '',
				descripcion:
					'Los bonsáis se pueden dividir en dos categorías principales: los bonsáis de interior, que son especies adaptadas a vivir dentro de casa en ambientes controlados; y los bonsáis de exterior, que deben pasar la mayoría del tiempo al aire libre.',
				ruta: './img/antartida/10.jpg',
			},
			{
				id: 62,
				nombre: '',
				descripcion:
					'Los bonsáis se clasifican según su tamaño y edad. Los más pequeños, llamados "shohin", miden generalmente menos de 20 cm y los más grandes, "dai", pueden alcanzar más de 1 metro. Además, los bonsáis se valoran por su edad, con algunos ejemplares muy apreciados por su antigüedad.',
				ruta: './img/antartida/11.jpg',
			},
			{
				id: 63,
				nombre: '',
				descripcion:
					'Una técnica importante en la creación y mantenimiento de bonsáis es el alambrado. Los alambres se utilizan para dar forma a las ramas y troncos jóvenes, permitiendo así diseñar la apariencia deseada para el árbol.',
				ruta: './img/antartida/12.jpg',
			},
			{
				id: 64,
				nombre: '',
				descripcion:
					'Los bonsáis son populares no solo entre los cultivadores, sino también entre los coleccionistas y aficionados. Existen mercados y exposiciones especializadas donde los bonsáis se compran, venden e intercambian, siendo algunas piezas excepcionales muy valiosas.',
				ruta: './img/antartida/13.jpg',
			},
		],
	},
};

// Destructurando la propiedad 'fotos' del objeto 'data'
const { fotos } = datos;

// Esto nos permite acceder directamente al objeto que contiene las fotos clasificadas por categorías.
// Exportando un objeto con información sobre las categorías


var dataCategorias = {
	categorias: [
		{ id: 'america', nombre: 'Cactaceae', numeroFotos: fotos['america'].length, imagenPortada: './img/america.jpg' },
		{ id: 'europa', nombre: 'Euphorbiaceae', numeroFotos: fotos['europa'].length, imagenPortada: './img/europa.jpg' },
		{ id: 'africa', nombre: 'Crassulaceae', numeroFotos: fotos['africa'].length, imagenPortada: './img/africa.jpg' },
		{ id: 'asia', nombre: 'Orchidaceae', numeroFotos: fotos['asia'].length, imagenPortada: './img/asia.jpg' },
		{ id: 'oceania', nombre: 'Araceae', numeroFotos: fotos['oceania'].length, imagenPortada: './img/oceania.jpg' },
		{ id: 'antartida', nombre: 'Bonsai', numeroFotos: fotos['antartida'].length, imagenPortada: './img/antartida.jpg',},
	],
};



/* el archivo "categoria.js" exporta un objeto con información sobre las categorías disponibles
  en el sitio web. Cada categoría tiene un identificador ('id'), un nombre, la cantidad de fotos
  que contiene ('numeroFotos'), y la ruta de la imagen de portada ('imagenPortada') que se mostrará
  en la lista de categorías. Esta información se utiliza para crear las opciones de categorías en el
  sitio web y se emplea junto con el archivo "fotos.js" para mostrar las fotos de la categoría
  seleccionada en la galería.

 */

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
});

const galeria$4 = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) => { //Para cargar correctamente toda la data 
    galeria$4.querySelector('.galeria__imagen').src = ruta;
    galeria$4.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria$4.querySelector('.galeria__titulo').innerText = nombre;
    galeria$4.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActual = galeria$4.dataset.categoria;
    const fotos = datos.fotos[categoriaActual];

    let indexImgActual; //PARA CAPTURAR EL INDICE DE LA IMAGEN ACTUAL // EN EL FOREACH CON INDEX 
    fotos.forEach((foto, index) => {
        if(foto.id === id){
            indexImgActual = index;
            console.log(categoriaActual, indexImgActual);
        }
    });

    //PARA PONER EL RECUADRO BLANCO 
    if(galeria$4.querySelectorAll('.galeria__carousel-slide').length > 0){

        //Eliminar el recuadro de la imagen anterior 
        galeria$4.querySelector('.galeria__carousel-slide--active')
        .classList.remove('galeria__carousel-slide--active');

        galeria$4.querySelectorAll('.galeria__carousel-slide')[indexImgActual] //queryselectorall crea una lista de todas las clases galeria_carousel-slide
        .classList.add('galeria__carousel-slide--active');
    }

};

const cargarAnteriorSiguiente = (direccion) => { //para capturar izquierda/derecha
    const categoriaActual = galeria$4.dataset.categoria;  
    const fotos = datos.fotos[categoriaActual]; 
    
    const idImgActual = parseInt (galeria$4.querySelector('.galeria__imagen').dataset.idImagen);  //EL QUERY SELECTOR ES PARA ENCONTRAR CLASES CSS


    let indexImgActual;
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
};
 //El export default es para un solo metodo y este export{} es para cargar varios métodos

// Obteniendo elementos HTML por su ID desde el DOM
const contenedorCategorias = document.getElementById('categorias');
const galeria$3 = document.getElementById('galeria');

// Agregando un evento 'click' al contenedor de categorías
contenedorCategorias.addEventListener('click', (e) => {
    // e.preventDefault();
    // Prevenimos el comportamiento predeterminado del enlace ('a') para evitar redirecciones.

    if (e.target.closest('a')) {
        // Verificamos si el clic ocurrió en un enlace ('a') dentro del contenedor de categorías

        // Mostrando la galería y ocultando el desplazamiento vertical del cuerpo
        galeria$3.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        // Obteniendo la categoría activa (seleccionada) desde el atributo personalizado 'data-categoria'
        const categoriaActiva = e.target.closest('a').dataset.categoria;

        // Obteniendo las fotos correspondientes a la categoría activa desde la fuente de datos 'dataFotos'
        const fotos = datos.fotos[categoriaActiva];

        // Configurando el atributo personalizado 'data-categoria' en el elemento 'galeria'
        galeria$3.dataset.categoria = categoriaActiva;

        // Obteniendo los detalles de la primera foto y cargándola en el visor de la galería
        const { id, nombre, ruta, descripcion } = fotos[0];
        cargarImagen(id, nombre, ruta, descripcion);

        // Obteniendo el carrusel (contenedor de imágenes) dentro del elemento 'galeria'
        const carousel = galeria$3.querySelector('.galeria__carousel-slides');
        carousel.innerHTML = '';

        // Iterando sobre todas las fotos de la categoría y creando los elementos de carrusel
        fotos.forEach(foto => {
            const slide = `<a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="" />
            </a>`;
            // Cada foto se representará como un enlace ('a') con una imagen dentro.

            // Agregando el elemento de carrusel al carrusel en el DOM
            galeria$3.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        // Añadiendo la clase 'galeria__carousel-slide--active' al primer elemento del carrusel
        // para marcar la primera foto como activa y mostrarla en el visor de la galería.
        galeria$3.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});

/* 
El archivo "eventoCategorias.js" maneja el evento de clic en las categorías del sitio web.
 Cuando se hace clic en una categoría, muestra la galería con las imágenes asociadas a esa
categoría y permite navegar a través de ellas en un carrusel. La función 'cargarImagen' es
responsable de cargar una imagen en el visor de la galería cuando se selecciona una categoría
específica.
 */

// Obtener el elemento HTML con el ID "galeria" y almacenarlo en la constante "galeria".
const galeria$2 = document.getElementById('galeria');

// Definición de la función "cerrarGaleria" que se encarga de ocultar la galería y restaurar el scroll del cuerpo.
const cerrarGaleria = () => {
    // Remover la clase "galeria--active" para ocultar la galería. Esta clase probablemente tenga estilos CSS para mostrar la galería.
    galeria$2.classList.remove('galeria--active');

    // Devolver el scroll al cuerpo del documento permitiendo que el usuario pueda hacer scroll nuevamente.
    document.body.style.overflow = '';
};

// Importar datos de fotos y la función cargarImagen desde archivos locales.

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

const galeria$1 = document.getElementById('galeria');

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
    };

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
            }
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
            }            
        }
        const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide) => {
            //removemos elobservador en los elementos del carrusel
            observer.unobserve(slide);
        });

    }, opciones);

    const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
        //Agregamos el observador en los elements del carrusel
        observer.observe(slide);
    });
};

// Importar las funciones "cerrarGaleria" y "slideClick" desde sus respectivos archivos.

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
