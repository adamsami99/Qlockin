document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signup-form"); // Uppdaterad till .signup-form
    const emailInput = document.querySelector(".email-input"); // Uppdaterad till .email-input
    const passwordInput = document.querySelector(".password-input"); // Uppdaterad till .password-input
    const confirmPasswordInput = document.querySelector(".confirm-password-input"); // Uppdaterad till .confirm-password-input
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Förhindrar att formuläret skickas direkt
        let isValid = true;
        let email = emailInput.value.trim();
        let password = passwordInput.value;
        let confirmPassword = confirmPasswordInput.value;

        // Validera e-post med egen regex för att säkerställa korrekt format
        if (!isValidEmail(email)) {
            showError("Please enter a valid email address.");
            isValid = false;
        }

        // Validera lösenord
        if (!validatePassword(password)) {
            showError("Password must be at least 8 characters long and contain letters and numbers.");
            isValid = false;
        }

        // Kontrollera om lösenorden matchar
        if (password !== confirmPassword) {
            showError("Password does not match!");
            isValid = false;
        }

        // Om allt är rätt, skicka formuläret
        if (isValid) {
            alert("Sign-In successful!");
            form.submit();
        }
    });

    // Funktion för att validera e-postadress med en egen regex
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        const lengthRequirement = password.length >= 8 && password.length <= 64;
        const complexityRequirement = /[a-zA-Z]/.test(password) && /[0-9!@#$%^&*]/.test(password);
        return lengthRequirement && complexityRequirement;
    }

    function showError(message) {
        errorMessage.textContent = message;
        form.insertBefore(errorMessage, form.firstChild);
    }
});

