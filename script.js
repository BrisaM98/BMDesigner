// Mostrar el banner y la capa oscura si el usuario no ha aceptado las cookies antes
window.onload = function() {
  if (!localStorage.getItem("cookies-accepted")) {
      document.getElementById("cookie-banner").style.display = "block";
      document.getElementById("overlay").style.display = "block";
  }
};

// Función para aceptar cookies
document.getElementById("accept-btn").onclick = function() {
  localStorage.setItem("cookies-accepted", "true");
  document.getElementById("cookie-banner").style.display = "none";
  document.getElementById("overlay").style.display = "none";
};
