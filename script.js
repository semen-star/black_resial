window.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const mainContent = document.getElementById("main-content");
  const leftPanel = document.getElementById("left-panel");

  // Показать логотип с анимацией
  setTimeout(() => {
    logo.classList.add("move-up");
  }, 300);

  // Показать контент
  setTimeout(() => {
    mainContent.style.opacity = "1";
    leftPanel.classList.add("visible");
  }, 2300); // после окончания анимации логотипа
});
