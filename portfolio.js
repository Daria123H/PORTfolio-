document.addEventListener("scroll", function () {
    const container = document.querySelector(".container");
    const scrollThreshold = 100; // Поріг скролу, після якого текст зникає
    if (window.scrollY > scrollThreshold) {
        container.classList.add("hidden");
    } else {
        container.classList.remove("hidden");
    }
});
