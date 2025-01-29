document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("eb9hS_CcaZufSwiUH"); // EmailJS public key

    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const userName = document.getElementById("userName").value.trim();
        const feedbackMessage = document.getElementById("feedbackMessage").value.trim();

        if (userName === "" || feedbackMessage === "") {
            alert("Please enter your name and feedback before submitting.");
            return;
        }

        const templateParams = {
            name: userName,  // Sending the user's name
            feedback: feedbackMessage  //Sending the user's feedback message
        };

        const serviceID = "service_qwemcr7";  // EmailJS service id
        const templateID = "template_r9qxsql";  // EmailJS template id

        emailjs.send(serviceID, templateID, templateParams)
            .then(function (response) {
                window.location.href = "thank_you.html"; // Redirect to thank-you page
            })
            .catch(function (error) {
                console.error("Error sending feedback:", error);
                alert("An error occurred. Please try again.");
            });
    });
});
