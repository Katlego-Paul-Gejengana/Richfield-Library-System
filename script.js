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

    if (!fullname || !email || !role || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    // Store role for later use
    localStorage.setItem("userRole", role);

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

    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("password")?.value.trim();
    const role = document.getElementById("role")?.value;

    if (!email || !password || !role) {
      alert("Please fill in all login fields.");
      return;
    }

    // Store role for later use
    localStorage.setItem("userRole", role);

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
