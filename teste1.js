// Adiciona um listener de evento para cada seção
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.style.backgroundColor = '#ddd';
  });
  section.addEventListener('mouseleave', () => {
    section.style.backgroundColor = '#eee';
  });
});

// Adiciona um listener de evento para cada link
const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});
