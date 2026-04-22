// Efek hover atau animasi tambahan
document.querySelectorAll('.progress-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
    card.style.transition = '0.2s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Bisa tambah fitur dark mode nanti, atau console.log sambutan
console.log("✨ Website About Me siap!");