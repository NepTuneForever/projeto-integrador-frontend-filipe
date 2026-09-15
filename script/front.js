const sections = document.querySelectorAll("main > section")
const links = document.querySelectorAll(".menu a")

function mostrarSection(id) {
    sections.forEach((section) => {
        section.style.display = section.id === id ? "block" : "none"
    })
}

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        const id = link.getAttribute("href").slice(1)
        mostrarSection(id)
    })
})

mostrarSection(sections[0].id)
