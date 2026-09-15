const dashboard = document.querySelector(".dashboard");
const produtos = document.querySelector(".produtos");
const clientes = document.querySelector(".clientes");
const relatorios = document.querySelector(".relatorios");

const buttons = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("section")

const exibirSection = (sectionName) => {
    sections.forEach((s) => {
        if (sectionName == s.id) {
            s.style.display = "block";
        } else {
            s.style.display = "none";
        };
    });
};

buttons.forEach((b) => {
    b.addEventListener("click", () => {
        exibirSection(b.className);
    });
});