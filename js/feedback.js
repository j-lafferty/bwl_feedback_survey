document.addEventListener("DOMContentLoaded", function () {
    emailjs.init({publicKey: "eb9hS_CcaZufSwiUH",}); // Replace with your EmailJS public key

    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const feedbackMessage = document.getElementById("feedbackMessage").value.trim();

        if (feedbackMessage === "") {
            alert("Please enter your feedback before submitting.");
            return;
        }

        const templateParams = {
            message: feedbackMessage
        };

        emailjs.send("service_qwemcr7", "template_r9qxsql", templateParams)
            .then(function (response) {
                window.location.href = "thank_you.html"; // Redirect to thank-you page
            })
            .catch(function (error) {
                console.error("Error sending feedback:", error);
                alert("An error occurred. Please try again.");
            });
    });
});
