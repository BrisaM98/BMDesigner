let indiceImagen = 0;
const imagenes = document.querySelectorAll('.carrusel .imagen');
const carrusel = document.querySelector('.carrusel');

// Asegúrate de agregar el atributo `data-text` en cada imagen en el HTML.
const textosImagenes = [
    "Vectorizado en Adobe Ilustrador", // Texto para la primera imagen
    "Ilustración para un cumpleaños InklingGirl y Octoling Boy", // Texto para la segunda imagen
    "Fondo de un pueblo para videojuego", // Texto para la tercera imagen
    "Escena de fondo de batalla", // Texto para la cuarta imagen
    "Diseño de stickers y llaveros" // Texto para la quinta imagen
];

// Función para mover el carrusel
function moverCarrusel(direccion) {
    if (direccion === 'derecha') {
        indiceImagen = (indiceImagen + 1) % imagenes.length;
    } else if (direccion === 'izquierda') {
        indiceImagen = (indiceImagen - 1 + imagenes.length) % imagenes.length;
    }
    // Desplazar el carrusel para mostrar solo la imagen o video actual
    carrusel.style.transform = `translateX(-${indiceImagen * 100}%)`;
}

// Modelado 3D
let indiceImagen3D = 0;
const imagenes3D = document.querySelectorAll('.carrusel-3d-inner .imagen');
const carrusel3D = document.querySelector('.carrusel-3d-inner');

// Función para mover el carrusel de modelados 3D
function moverCarrusel3D(direccion) {
    if (direccion === 'derecha') {
        indiceImagen3D = (indiceImagen3D + 1) % imagenes3D.length;
    } else if (direccion === 'izquierda') {
        indiceImagen3D = (indiceImagen3D - 1 + imagenes3D.length) % imagenes3D.length;
    }
    // Desplazar el carrusel para mostrar solo la imagen o video actual
    carrusel3D.style.transform = `translateX(-${indiceImagen3D * 100}%)`;
}


// Carrusel de videos
let indiceVideo = 0;
const videos = document.querySelectorAll('.carrusel-videos-inner .video-item');
const carruselVideos = document.querySelector('.carrusel-videos-inner');

// Función para mover el carrusel de videos
function moverCarruselVideos(direccion) {
    if (direccion === 'derecha') {
        indiceVideo = (indiceVideo + 1) % videos.length;  // Avanza al siguiente video
    } else if (direccion === 'izquierda') {
        indiceVideo = (indiceVideo - 1 + videos.length) % videos.length;  // Retrocede al video anterior
    }
    // Desplazar el carrusel para mostrar solo el video actual
    carruselVideos.style.transform = `translateX(-${indiceVideo * 100}%)`;
}



// Animaciones 2D
let indiceImagen2D = 0;
const imagenes2D = document.querySelectorAll('.carrusel-2d-inner .imagen');
const carrusel2D = document.querySelector('.carrusel-2d-inner');

// Función para mover el carrusel de Animaciones 2D
function moverCarrusel2D(direccion) {
    if (direccion === 'derecha') {
        indiceImagen2D = (indiceImagen2D + 1) % imagenes2D.length;
    } else if (direccion === 'izquierda') {
        indiceImagen2D = (indiceImagen2D - 1 + imagenes2D.length) % imagenes2D.length;
    }
    // Desplazar el carrusel para mostrar solo la imagen o video actual
    carrusel2D.style.transform = `translateX(-${indiceImagen2D * 100}%)`;
}