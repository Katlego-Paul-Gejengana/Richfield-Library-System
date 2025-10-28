document.addEventListener("DOMContentLoaded", () => {
  // ===== LOGIN HANDLER =====
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document.getElementById("username").value.trim().toLowerCase();
      const password = document.getElementById("password").value.trim();

      // Simple username-based redirection
      switch (username) {
        case "student":
          window.location.href = "student.html";
          break;
        case "librarian":
          window.location.href = "librarian.html";
          break;
        case "admin":
        case "administrator":
          window.location.href = "admin.html";
          break;
        default:
          alert("Invalid username. Please try librarian, admin, or student.");
      }
    });
  }

  // ===== SLIDESHOW HANDLER =====
  const slides = document.querySelectorAll('.slides img');
  let currentIndex = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };

  // Event listeners
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Auto-play every 3 seconds
  setInterval(nextSlide, 3000);
});
