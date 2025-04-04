document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
});

  let index = 0;
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  function mostrarSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove('activo');
    });
    slides[n].classList.add('activo');
  }

  function siguienteSlide() {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
  }

  function anteriorSlide() {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
  }

  nextBtn.addEventListener('click', siguienteSlide);
  prevBtn.addEventListener('click', anteriorSlide);

  // Avance automático cada 5 segundos
  setInterval(siguienteSlide, 5000);

