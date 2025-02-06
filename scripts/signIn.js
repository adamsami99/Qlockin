document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signin-form");
    const emailInput = document.querySelector(".email-input");
    const passwordInput = document.querySelector(".password-input");
    const clearEmailBtn = document.querySelector(".clear-email");
    const togglePasswordBtn = document.querySelector(".toggle-password");
    const errorMessage = document.createElement("p");

    errorMessage.style.color = "red";

    form.addEventListener("submit", function (event) {
        event.preventDefault();
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

        if (isValid) {
            alert("Sign-In successful!");
            form.submit();
        }
    });

    // Funktion för att visa/dölja rensningsknapp och ögonknapp
    function toggleIcons() {
        clearEmailBtn.style.display = emailInput.value.length > 0 ? "flex" : "none";
        togglePasswordBtn.style.display = passwordInput.value.length > 0 ? "flex" : "none";
    }

    // Lyssnar på input och uppdaterar ikonernas synlighet
    emailInput.addEventListener("input", toggleIcons);
    passwordInput.addEventListener("input", toggleIcons);

    // Dölj ikoner från start
    clearEmailBtn.style.display = "none";
    togglePasswordBtn.style.display = "none";

    // Funktion för att validera e-post
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Funktion för att validera lösenord
    function validatePassword(password) {
        const lengthRequirement = password.length >= 8;
        const complexityRequirement = /[a-zA-Z]/.test(password) && /\d/.test(password);
        return lengthRequirement && complexityRequirement;
    }

    // Funktion för att visa felmeddelande
    function showError(message) {
        errorMessage.textContent = message;
        form.insertBefore(errorMessage, form.firstChild);
    }

    // Funktion för att visa/dölja lösenord och rensa lösenord med Shift + klick
    togglePasswordBtn.addEventListener("click", function (event) {
        if (event.shiftKey) {
            passwordInput.value = ""; // Rensa lösenord om Shift hålls nere
            toggleIcons(); // Uppdatera ikonernas synlighet
        } else {
            passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        }
    });

    // Funktion för att rensa e-postfältet
    clearEmailBtn.addEventListener("click", function () {
        emailInput.value = "";
        toggleIcons(); // Uppdatera ikonernas synlighet
    });
});
