// Obtener el popup y el botón de aceptación
const cookiePopup = document.getElementById('cookiePopup');
const acceptButton = document.getElementById('acceptButton');

// Comprobar si el usuario ya ha aceptado las cookies
if (!localStorage.getItem('cookiesAccepted')) {
    // Si no se ha almacenado la aceptación, mostrar el popup
    cookiePopup.style.display = 'flex';
}

// Manejar el evento de clic en el botón de aceptar
acceptButton.addEventListener('click', function() {
    // Al hacer clic en Aceptar, ocultar el popup
    cookiePopup.style.display = 'none';
    
    // Guardar que el usuario aceptó las cookies en localStorage
    localStorage.setItem('cookiesAccepted', 'true');
});
