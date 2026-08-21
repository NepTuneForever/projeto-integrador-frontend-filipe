window.addEventListener("load", () => {
    const intro = document.getElementById("intro-overlay");

    setTimeout(() => {
        intro.classList.add("show-wordmark");
    }, 2100);

    setTimeout(() => {
        intro.classList.add("hidden");
    }, 4400);
});
