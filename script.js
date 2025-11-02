document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const role = document.getElementById("role").value;
      const password = document.getElementById("password").value.trim();

      if (!fullname) {
        alert("Please enter your full name.");
        return;
      }

      if (!role) {
        alert("Please select your role (Admin, Librarian, or Student).");
        return;
      }

      // Simple redirection based on role
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
});
