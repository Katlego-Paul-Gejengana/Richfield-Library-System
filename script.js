document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // REGISTER FORM HANDLER
  // =========================
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const role = document.getElementById("role").value;
      const password = document.getElementById("password").value.trim();

      if (!fullname) {
        alert("Please enter your full name.");
        return;
      }
      if (!email) {
        alert("Please enter your email.");
        return;
      }
      if (!role) {
        alert("Please select your role (Admin, Librarian, or Student).");
        return;
      }
      if (!password) {
        alert("Please enter your password.");
        return;
      }

      // Redirect based on role
      switch (role) {
        case "student":
          alert(`Welcome ${fullname}! Redirecting to Student Dashboard...`);
          window.location.href = "student.html";
          break;
        case "librarian":
          alert(`Welcome ${fullname}! Redirecting to Librarian Dashboard...`);
          window.location.href = "librarian.html";
          break;
        case "admin":
          alert(`Welcome ${fullname}! Redirecting to Admin Dashboard...`);
          window.location.href = "admin.html";
          break;
        default:
          alert("Invalid role selected. Please try again.");
      }
    });
  }

  // =========================
  // LOGIN FORM HANDLER
  // =========================
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
      const username = document.getElementById("username") ? document.getElementById("username").value.trim() : "";
      const password = document.getElementById("password").value.trim();
      const role = document.getElementById("role") ? document.getElementById("role").value : "student"; // Default role

      if ((!email && !username) || !password) {
        alert("Please enter your login credentials.");
        return;
      }

      // Redirect based on role
      switch (role) {
        case "student":
          alert(`Welcome back! Redirecting to Student Dashboard...`);
          window.location.href = "student.html";
          break;
        case "librarian":
          alert(`Welcome back! Redirecting to Librarian Dashboard...`);
          window.location.href = "librarian.html";
          break;
        case "admin":
          alert(`Welcome back! Redirecting to Admin Dashboard...`);
          window.location.href = "admin.html";
          break;
        default:
          alert("Invalid role. Please try again.");
      }
    });
  }
});
