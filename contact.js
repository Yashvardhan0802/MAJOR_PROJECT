// JavaScript for Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here, you can add code to send the form data to your backend for processing.
    // For this example, we'll simulate a successful submission.

    const responseMessage = document.getElementById("response-message");
    responseMessage.textContent = "Message sent successfully!";
    responseMessage.style.color = "#4CAF50";
    responseMessage.style.backgroundColor = "#e9f9e2";

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
