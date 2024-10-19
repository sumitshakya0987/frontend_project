// ContactUs.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = this.elements["name"].value;
    const email = this.elements["email"].value;
    const subject = this.elements["subject"].value;
    const message = this.elements["message"].value;

    // Here you can add logic to send the form data to a
});