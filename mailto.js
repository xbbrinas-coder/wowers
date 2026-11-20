// Contact form: opens the visitor's email app with the message already written
const TO_ADDRESS = "hello@examplewebsite142.com";
const form = document.querySelector("#contact-form");
const statusMsg = document.querySelector("#form-status");

function buildMailto() {

    const name = document.querySelector("#customer-name").value;
    const email = document.querySelector("#customer-email").value;
    const text = document.querySelector("#customer-inquiry").value;

    const subject = "Customer Inquiry: " + name;

    const body =
        "Name: " + name + "\r\n" +
        "Email: " + email + "\r\n\r\n" +
        text;

    return (
        "mailto:" + TO_ADDRESS +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body)
    );
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    statusMsg.textContent = "Opening your email app… If nothing opens, please email " + TO_ADDRESS + " directly.";
    window.location.href = buildMailto();
});
