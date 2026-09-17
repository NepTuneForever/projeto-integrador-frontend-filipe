const b = document.getElementById("carregar");
const usuarios_lista = document.querySelector(".usuarios");
const seletor = document.getElementById("filtro-filial");
const input = document.getElementById("busca-usuario");

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
    var base = evento.target.value;
    const filtro = base.replace("Filial ", "");

    const filtrado = users.filter((user) => {
        if (filtro == "") {
            return true;
        }

        if (user.filial === filtro) {
            return true;
        };
        return false;
        //return `<tr><td>${user.nome}</td><td>${user.email}</td><td>${user.filial}</td><td>N/A</td></tr>\n`;
    }).map((user) => {
        return `<tr><td>${user.nome}</td><td>${user.email}</td><td>${user.filial}</td><td>N/A</td></tr>\n` || "Nenhum usuário encontrado.";
    }).join("");

    //console.log(filtrado);
    usuarios_lista.innerHTML = filtrado;
});

input.addEventListener("input", (evento) => {
    var texto = evento.target.value;

    const filtrado = users.filter((user) => {
        if (user.nome.toUpperCase().includes(texto.toUpperCase()) || user.email.toUpperCase().includes(texto.toUpperCase())) {
            return true;
        } else {
            return false;
        };
    }).map((user) => {
        return `<tr><td>${user.nome}</td><td>${user.email}</td><td>${user.filial}</td><td>N/A</td></tr>\n` || "Nenhum usuário encontrado.";
    }).join("");

    usuarios_lista.innerHTML = filtrado;
})

b.addEventListener("click", async () => {

    try {
        const resposta = await fetch("../user.json");
        const usuarios = await resposta.json();
        
        usuarios_lista.innerHTML = "";
        users = []
        
        objeto_pra_lista(usuarios);

        let lista = users.reduce(listar_usuarios, "");
        
        usuarios_lista.innerHTML = lista;
    } catch (erro) {
        console.error("Erro:", erro);
    }
});
