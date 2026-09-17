const b = document.getElementById("carregar");
const usuarios_lista = document.querySelector(".usuarios");
const seletor = document.getElementById("filtro-filial");

var users = []

const listar_usuarios = (acumulador, user) => {
    return acumulador + `<tr><td>${user.nome}</td><td>${user.email}</td><td>${user.filial}</td><td>N/A</td></tr>\n`;
};

const objeto_pra_lista = (objeto) => {
    Object.values(objeto).forEach((usuario) => {
        users.push({nome: usuario.nome, email: usuario.email, filial: usuario.filial});
    });
    // console.log(users);
    return users;
};

seletor.addEventListener("change", (evento) => {
    let filtro = evento.target.value;

    console.log(filtro);
});

b.addEventListener("click", async () => {

    try {
        const resposta = await fetch("../user.json");
        const usuarios = await resposta.json();
        
        objeto_pra_lista(usuarios);

        let lista = users.reduce(listar_usuarios, "");
        
        usuarios_lista.innerHTML = lista;
    } catch (erro) {
        console.error("Erro:", erro);
    }
});
