// Obtener el botón y la ventana emergente
const acceptButton = document.getElementById('acceptButton');
const cookiePopup = document.getElementById('cookiePopup');

// Al hacer clic en el botón de aceptar, se oculta la ventana emergente
acceptButton.addEventListener('click', function() {
    cookiePopup.classList.add('hidden'); // Agrega la clase "hidden" para ocultar el popup
});