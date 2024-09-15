document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const subjectField = document.getElementById("subject");
    const messageField = document.getElementById("message");
    const formMessageWarning = document.getElementById("form-message-warning");
    const formMessageSuccess = document.getElementById("form-message-success");
    const submittingDiv = document.querySelector(".submitting");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Reset previous warnings
        formMessageWarning.style.display = "none";
        formMessageSuccess.style.display = "none";
        submittingDiv.style.display = "none";
        removeErrorLabels();

        // Validate form fields
        let isValid = validateForm();

        if (isValid) {
            // Show submitting message
            submittingDiv.textContent = "Submitting...";
            submittingDiv.style.display = "block";

            // Simulate delay for submitting the message
            setTimeout(function () {
                submittingDiv.style.display = "none";
                formMessageSuccess.style.display = "block";
            }, 2000); // Show success message after 2 seconds
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate Name
        if (nameField.value.trim() === "") {
            showError(nameField, "Name is required.");
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+$/; // Example: char@gmail
        if (!emailPattern.test(emailField.value.trim())) {
            showError(emailField, "Valid email is required.");
            isValid = false;
        }

        // Validate Subject (minimum 5 characters)
        if (subjectField.value.trim().length < 5) {
            showError(subjectField, "Subject must be at least 5 characters long.");
            isValid = false;
        }

        // Validate Message
        if (messageField.value.trim() === "") {
            showError(messageField, "Message is required.");
            isValid = false;
        }

        return isValid;
    }

    function showError(inputField, message) {
        const label = document.createElement("label");
        label.textContent = message;
        label.style.color = "red";
        inputField.parentElement.appendChild(label);

        // Remove the error label after 5 seconds
        setTimeout(function () {
            label.remove();
        }, 10000); // 10 seconds timeout
    }

    function removeErrorLabels() {
        const errorLabels = document.querySelectorAll("label[style*='red']");
        errorLabels.forEach(label => label.remove());
    }
});
