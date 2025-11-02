// js/search.js

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// Search form logic
const form = document.getElementById("searchForm");
const resultsContainer = document.getElementById("resultsContainer");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.trim();

    if (query === "") {
        resultsContainer.innerHTML = `<p class='text-red-500 text-center'>Please enter a search term.</p>`;
        return;
    }

    // Mock results
    const results = [
        { title: "Modern Database Systems", author: "Dr. Alan Parker", year: "2023", status: "Available" },
        { title: "Artificial Intelligence in Education", author: "Jane Doe", year: "2022", status: "Checked Out" },
        { title: "Advanced Java Programming", author: "Samuel Nkosi", year: "2021", status: "Available" }
    ];

    resultsContainer.innerHTML = results.map(r => `
        <div class="bg-white border border-gray-200 rounded-lg shadow p-4 hover:shadow-md transition">
            <h4 class="text-lg font-semibold text-blue-800">${r.title}</h4>
            <p class="text-gray-600">Author: ${r.author}</p>
            <p class="text-gray-500 text-sm">Published: ${r.year}</p>
            <span class="inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${r.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">${r.status}</span>
        </div>
    `).join('');
});

// Dashboard link redirect based on user role
const dashboardLink = document.getElementById('dashboardLink');
const mobileDashboardLink = document.getElementById('mobileDashboardLink');

function redirectToDashboard() {
    const role = localStorage.getItem('userRole');
    if (!role) {
        alert('User not logged in!');
        return;
    }

    if (role === 'student') window.location.href = 'student.html';
    else if (role === 'librarian') window.location.href = 'librarian.html';
    else if (role === 'admin') window.location.href = 'admin.html';
    else alert('Unknown user role!');
}

dashboardLink.addEventListener('click', (e) => { e.preventDefault(); redirectToDashboard(); });
mobileDashboardLink.addEventListener('click', (e) => { e.preventDefault(); redirectToDashboard(); });
