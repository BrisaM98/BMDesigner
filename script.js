// Obtener el banner, los botones y el overlay
const cookieBanner = document.getElementById('cookie-banner');
const cookieOverlay = document.getElementById('cookie-overlay');
const acceptButton = document.getElementById('accept-btn');
const rejectButton = document.getElementById('reject-btn');

// Comprobar si ya se ha aceptado el aviso previamente
if (!localStorage.getItem('cookieAccepted')) {
  // Mostrar el banner y el overlay
  setTimeout(() => {
    cookieBanner.classList.add('show');  // Mostrar el banner con animación
    cookieOverlay.style.display = 'block';  // Mostrar el overlay bloqueante
  }, 100); // Añadimos un pequeño retraso para que la animación de desvanecimiento funcione
}

// Función para ocultar el banner (aceptar cookies)
acceptButton.addEventListener('click', function() {
  cookieBanner.classList.remove('show'); // Animación de desvanecimiento
  cookieOverlay.style.display = 'none'; // Ocultar el overlay
  // Guardar que el usuario aceptó el aviso en el almacenamiento local
  localStorage.setItem('cookieAccepted', 'true');
});

// Función para ocultar el banner (rechazar cookies)
rejectButton.addEventListener('click', function() {
  cookieBanner.classList.remove('show'); // Animación de desvanecimiento
  cookieOverlay.style.display = 'none'; // Ocultar el overlay
  // No se guarda nada en localStorage si el usuario rechaza
  localStorage.removeItem('cookieAccepted');
});
