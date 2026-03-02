// Se não estiver na rota correta, redireciona
if (window.location.pathname === "/") {
  window.location.href = "/schumacher";
}

// Scroll suave
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Efeito navbar ao rolar
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  header.style.background =
    window.scrollY > 50
      ? "rgba(0,0,0,0.95)"
      : "rgba(0,0,0,0.85)";
});