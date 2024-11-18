
// Scroll gallerie asse X
function scrollGallery(galleryId, direction) {
    const gallery = document.getElementById(galleryId); // Seleziona la galleria specifica
    const scrollAmount = 300; // Distanza di scorrimento in pixel

    gallery.scrollBy({
        left: direction * scrollAmount, // Scorrimento verso destra o sinistra
        behavior: 'smooth', // Animazione fluida
    });
}

// Fade asse Y

document.addEventListener("scroll", () => {
    let galleria = document.querySelectorAll(".fadeElement");
  
    galleria.forEach((element) => {
      let riga = element.getBoundingClientRect();
  
      // Verifica se la galleria sta per uscire dalla viewport
      if (riga.top > window.innerHeight-150) {
        element.classList.add("out"); // Fade-out
      }
      else {
        element.classList.remove("out"); // Fade-in
      }

    });
  });


  