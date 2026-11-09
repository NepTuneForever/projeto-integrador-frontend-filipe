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

const login_form = document.getElementById("login-form");
var users = [];

const validar_users = async () => {
    users = [];
    const resposta = await fetch("../user.json");
    const usuarios = await resposta.json();

    Object.values(usuarios).forEach((user) => {
        users.push({email: user.email, filial: user.filial});
    });
};

if (login_form) {
    login_form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const form = new FormData(login_form);
    const email = form.get('email');
    const filial = form.get('filial');

    await validar_users();

    const appvrd = users.find(obj => obj.email == email && obj.filial == filial);
    const r = appvrd ? 'aprovado' : 'reprovado';

    console.log(r);

    if (r === 'aprovado') {
        document.location.href = "front.html";
    } else {
        console.log("email ou filial incorretos");
    }
});


};