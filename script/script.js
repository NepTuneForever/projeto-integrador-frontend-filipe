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

        const dados = new FormData(event.target);

        const nome = dados.get('nome');
        const email = dados.get('email');
        const senha = dados.get('password');
        const filial = dados.get('filial');
        const perfil = dados.get('perfil');

        console.log('--- Dados do Login ---');
        console.log('E-mail:', email);
        console.log('Senha:', senha);
        console.log('Filial:', filial);
        console.log('Perfil:', perfil);

        document.location.href = "front.html"
    })
}