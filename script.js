

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
