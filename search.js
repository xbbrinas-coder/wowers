// Home page search: jumps to a matching product page
const PRODUCTS = [
    { name: "Don’t Be Late Tee",    keywords: ["dont be late", "don't be late", "late"],   url: "product-dont-be-late.html" },
    { name: "Do Good Work",         keywords: ["do good work", "good work", "work"],       url: "product-do-good-work.html" },
    { name: "Everyday Comfort Tee", keywords: ["everyday comfort", "everyday", "comfort"], url: "product-everyday-comfort.html" }
];

document.getElementById("search-form").addEventListener("submit", function (event) {
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
