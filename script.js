document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const foodImage = document.getElementById('foodImage');

  // Toggle mobile menu
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    burger.classList.toggle('toggle');
  });

  // Tab functionality
  tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = tabLink.getAttribute('data-tab');
      
      tabLinks.forEach(link => link.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      tabLink.classList.add('active');
      document.getElementById(tabId).classList.add('active');
      
      // Close mobile menu if open
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });

  // Smooth scrolling for navigation items
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Image carousel
  const images = [
    'https://source.unsplash.com/random/800x600?food',
    'https://source.unsplash.com/random/800x600?restaurant',
    'https://source.unsplash.com/random/800x600?dish'
  ];
  let currentImageIndex = 0;

  function updateImage() {
    foodImage.src = images[currentImageIndex];
  }

  leftArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  });

  rightArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  });
});