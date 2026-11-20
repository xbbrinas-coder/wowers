// PASADA Shared Components
// Injects the shared header + footer on every page (works when opened from a
// local folder too, since nothing is fetched over the network).
//
// Usage in a page:
//   <header id="site-header" data-variant="circle"></header>   (Privacy, Contact, About)
//   <header id="site-header" data-variant="mark"></header>     (Product pages)
//   <header id="site-header" data-variant="home"></header>     (Home – floats over hero)
//   <footer id="site-footer"></footer>

const PRODUCTS = [
    { name: "Don’t Be Late Tee",     keywords: ["dont be late", "don't be late", "late"],        url: "product-dont-be-late.html" },
    { name: "Do Good Work",          keywords: ["do good work", "good work", "work"],            url: "product-do-good-work.html" },
    { name: "Everyday Comfort Tee",  keywords: ["everyday comfort", "everyday", "comfort"],      url: "product-everyday-comfort.html" }
];

const HEADERS = {
    circle: `
        <div class="page-container">
            <a href="index.html" class="brand">
                <img src="logo.png" alt="PASADA logo" class="brand-circle">
                <span class="brand-word">PASADA</span>
            </a>
        </div>`,
    mark: `
        <div class="page-container">
            <a href="index.html" class="brand">
                <img src="images/logo-white.png" alt="PASADA logo" class="brand-mark">
                <span class="brand-word">PASADA</span>
            </a>
        </div>`,
    home: `
        <a href="index.html" class="brand">
            <img src="images/logo-white.png" alt="PASADA logo" class="brand-mark">
            <span class="brand-word">PASADA</span>
        </a>
        <form class="search-pill" id="search-form" role="search">
            <i class="bi bi-search" aria-hidden="true"></i>
            <input type="search" id="search-input" placeholder="Search PASADA..." aria-label="Search PASADA">
        </form>`
};

const FOOTER = `
    <div class="page-container">
        <div class="footer-inner">
            <nav class="footer-nav" aria-label="Footer">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
                <a href="privacy.html">Privacy</a>
            </nav>
            <a href="index.html" class="footer-word">PASADA</a>
        </div>
    </div>`;

document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("site-header");
    if (header) {
        const variant = header.dataset.variant || "circle";
        header.classList.add(variant === "home" ? "home-header" : "site-header");
        header.innerHTML = HEADERS[variant] || HEADERS.circle;
    }

    const footer = document.getElementById("site-footer");
    if (footer) {
        footer.classList.add("site-footer");
        footer.innerHTML = FOOTER;
    }

    // Simple product search (Home header)
    const searchForm = document.getElementById("search-form");
    if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const q = document.getElementById("search-input").value.trim().toLowerCase();
            if (!q) return;
            const hit = PRODUCTS.find(p => p.name.toLowerCase().includes(q) || p.keywords.some(k => k.includes(q) || q.includes(k)));
            if (hit) {
                window.location.href = hit.url;
            } else {
                alert("No products found for “" + q + "”.");
            }
        });
    }
});
