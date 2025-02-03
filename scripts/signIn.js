document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signin-form"); // Updated to .signin-form
    const emailInput = document.querySelector(".email-input"); // Updated to .email-input
    const passwordInput = document.querySelector(".password-input"); // Updated to .password-input
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from submitting immediately
        let isValid = true;
        let email = emailInput.value.trim();
        let password = passwordInput.value;

        // Validate email
        if (!isValidEmail(email)) {
            showError("Please enter a valid email address.");
            isValid = false;
        }

        // Validate password
        if (!validatePassword(password)) {
            showError("Password must be at least 8 characters long and contain letters and numbers.");
            isValid = false;
        }

        // If everything is valid, submit the form (you can modify this part to send a request to your server)
        if (isValid) {
            alert("Sign-In successful!");
            form.submit();
        }
    });

    // Function to validate the email with regex
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Function to validate password (at least 8 characters and contains letters & numbers)
    function validatePassword(password) {
        const lengthRequirement = password.length >= 8;
        const complexityRequirement = /[a-zA-Z]/.test(password) && /\d/.test(password);
        return lengthRequirement && complexityRequirement;
    }

    // Function to show error messages
    function showError(message) {
        errorMessage.textContent = message;
        form.insertBefore(errorMessage, form.firstChild);
    }
});
