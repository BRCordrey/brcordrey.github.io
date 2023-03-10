const gradientBackground = document.querySelector('.radial-gradient-background');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  gradientBackground.style.setProperty('--bg-gradient-x', `${x * 100}%`);
  gradientBackground.style.setProperty('--bg-gradient-y', `${y * 100}%`);
});