function togglePassword() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        document.getElementById("toggle-password").classList.add("bx-lock-open-alt");
        document.getElementById("toggle-password").classList.remove("bxs-lock-alt");
    } else {
        passwordInput.type = "password";
        document.getElementById("toggle-password").classList.add("bxs-lock-alt");
        document.getElementById("toggle-password").classList.remove("bx-lock-open-alt");
    }
}