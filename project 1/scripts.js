document.addEventListener("DOMContentLoaded", function () {
    // Hide loading screen
    const loadingPage = document.getElementById("loading-page");
    loadingPage.style.display = "none";

    // Registration modal handlers
    const modal = document.getElementById("registration-modal");
    const registerButton = document.getElementById("register-button");
    const closeButton = document.getElementsByClassName("close-button")[0];

    registerButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});