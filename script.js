window.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main-content');

  // Ждём окончания анимации логотипа
  setTimeout(() => {
    mainContent.classList.remove('hidden');
    mainContent.style.opacity = '1';
  }, 2000);
});
