
const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");
const strengthBar = document.getElementById("strengthBar");

if (passwordInput) {
    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        let score = 0;

        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        let strength = "Very Weak";

        if (password.length === 0) {
            strength = "Enter a password";
            score = 0;
        } else if (score <= 2) {
            strength = "Weak";
        } else if (score === 3) {
            strength = "Medium";
        } else if (score === 4) {
            strength = "Strong";
        } else {
            strength = "Very Strong";
        }

        if (strengthText) {
            strengthText.textContent = strength;
        }

        if (strengthBar) {
            strengthBar.style.width = (score * 20) + "%";
        }
    });
}
