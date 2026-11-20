// Order form: opens the visitor's email app with the t-shirt info filled in
const TO_ADDRESS = "orders@examplewebsite142.com";
const form = document.querySelector("#order-form");
const qtyOutput = document.querySelector("#qty-value");
const cartMsg = document.querySelector("#cart-msg");

function getQuantity() {
    return qtyOutput ? parseInt(qtyOutput.textContent, 10) || 1 : 1;
}

function getSize() {
    const checked = document.querySelector('input[name="size"]:checked');
    return checked ? checked.id : null;
}

function buildMailto() {
    const size = getSize();
    const shirt = document.querySelector("#shirt-variant").textContent;

    const subject = "Customer Order";

    const body =
        "Shirt: " + shirt + "\r\n" +
        "Size: " + size + "\r\n" +
        "Quantity: " + getQuantity() + "\r\n\r\n" +
        "Order will be processed once E-Mail is received. Thank you for shopping with us!";

    return (
        "mailto:" + TO_ADDRESS +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body)
    );
}

// Quantity stepper  ( - 1 + )
document.querySelector("#qty-minus").addEventListener("click", function () {
    qtyOutput.textContent = Math.max(1, getQuantity() - 1);
});
document.querySelector("#qty-plus").addEventListener("click", function () {
    qtyOutput.textContent = Math.min(99, getQuantity() + 1);
});

// Order Now -> opens the order e-mail (a size must be chosen: "required" on the radios)
form.addEventListener("submit", function (event) {
    event.preventDefault();
    cartMsg.textContent = "Opening your email app… If nothing opens, please email " + TO_ADDRESS + " directly.";
    window.location.href = buildMailto();
});

// Add to Cart -> there is no cart page yet, so confirm on the page
document.querySelector("#add-to-cart").addEventListener("click", function () {
    if (!getSize()) {
        cartMsg.textContent = "Please choose a size first.";
        return;
    }
    cartMsg.textContent = "Added " + getQuantity() + " × " + document.querySelector("#shirt-variant").textContent + " (" + getSize() + ") to your cart.";
});
