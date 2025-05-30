document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navbar ul');
  
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });
  


