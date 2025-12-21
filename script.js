console.log("Research Team Website Loaded");

// Function to adjust hero section and font size dynamically
function adjustHero() {
  const hero = document.querySelector('.hero');
  const heroHeading = document.querySelector('.hero h1');

  if (!hero || !heroHeading) return;

  const width = window.innerWidth;

  if (width <= 576) { // mobile
    hero.style.height = '60vh';
    heroHeading.style.fontSize = '1.5rem';
  } else if (width <= 768) { // tablet
    hero.style.height = '70vh';
    heroHeading.style.fontSize = '2rem';
  } else if (width <= 992) { // small desktop
    hero.style.height = '80vh';
    heroHeading.style.fontSize = '2.5rem';
  } else { // large screens
    hero.style.height = '100vh';
    heroHeading.style.fontSize = '3rem';
  }
}

// Initial adjustment
adjustHero();

// Adjust on window resize
window.addEventListener('resize', adjustHero);
