import data from './fotos';

// Destructurando la propiedad 'fotos' del objeto 'data'
const { fotos } = data;

// Esto nos permite acceder directamente al objeto que contiene las fotos clasificadas por categorías.
// Exportando un objeto con información sobre las categorías


export default {
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
