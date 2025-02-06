document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Ocultar todas las secciones
            sections.forEach(section => section.classList.remove('active'));
            // Remover la clase activa de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));

            // Mostrar la sección seleccionada
            targetSection.classList.add('active');
            // Añadir clase activa al botón correspondiente
            this.classList.add('active');
        });
    });
});
// Selecciona todas las imágenes dentro de la hilera de servicios
const serviceImages = document.querySelectorAll('.image-row img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Agrega el evento click a cada imagen
serviceImages.forEach(img => {
  img.addEventListener('click', function() {
    lightbox.style.display = 'flex'; // Usamos flex para centrar el contenido
    lightboxImg.src = this.src; // Asigna la imagen clickeada al modal
  });
});

// Cierra el lightbox al hacer clic en el botón de cerrar
closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
});

// También se puede cerrar haciendo clic fuera de la imagen
lightbox.addEventListener('click', function(event) {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.plan-btn');
    const plans = document.querySelectorAll('.plan-info');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Oculta todos los planes antes de mostrar el seleccionado
            plans.forEach(plan => plan.style.display = 'none');

            // Muestra solo el plan seleccionado
            document.getElementById(selectedPlan).style.display = 'block';
        });
    });
});