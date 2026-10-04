document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".section, .contact, .hero-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(22px)";
  item.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(item);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".visible").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});

const style = document.createElement("style");
style.textContent = ".visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
