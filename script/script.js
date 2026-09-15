window.addEventListener("load", () => {
    const intro = document.getElementById("intro-overlay");
    if (!intro) return;

    setTimeout(() => {
        intro.classList.add("show-wordmark");
    }, 2100);

    setTimeout(() => {
        intro.classList.add("hidden");
    }, 4400);
});

const login_form = document.getElementById("login-form")

if (login_form) {
    login_form.addEventListener("submit", function(event) {
        event.preventDefault()
        document.location.href = "front.html"
    })
}