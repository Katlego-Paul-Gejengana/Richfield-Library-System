
// Login Page
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value.trim().toLowerCase();
      const password = document.getElementById("password").value.trim();

    
      if (username === "librarian") {
        window.location.href = "librarian.html";
      } else if (username === "admin" || username === "administrator") {
        window.location.href = "admin.html";
      } else if (username === "student") {
        window.location.href = "student.html";
      } else {
        alert("Invalid username. Please try librarian, admin, or student.");
      }
    });
  }
});

// Slideshow
const slides = document.querySelectorAll('.slides img');
let index = 0;

document.getElementById('next').addEventListener('click', () => {
slides[index].classList.remove('active');
index = (index + 1) % slides.length;
slides[index].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
slides[index].classList.remove('active');
index = (index - 1 + slides.length) % slides.length;
slides[index].classList.add('active');
});

// Auto play every 3 seconds
setInterval(() => {
slides[index].classList.remove('active');
index = (index + 1) % slides.length;
slides[index].classList.add('active');
}, 5000);

