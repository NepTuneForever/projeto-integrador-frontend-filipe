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

const botao_login = document.getElementById("form-login-button")

if (botao_login) {
    botao_login.addEventListener("click", function() {
        document.location.href = "front.html"
    })
}