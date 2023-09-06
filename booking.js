// JavaScript for Table Booking Page
document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Here, you can add code to send the booking data to your backend for processing.
    // For this example, we'll simulate a successful booking.

    const responseMessage = document.getElementById("response-message");
    responseMessage.textContent = "Table booked successfully!";
    responseMessage.style.color = "#4CAF50";
    responseMessage.style.backgroundColor = "#e9f9e2";

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
});
