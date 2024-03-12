{
    const welcome = () => {
        console.log("Witam developerów na mojej stronie!")
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeColor = document.querySelector(".js-themecolor");

        body.classList.toggle("body--dark");
        themeColor.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}
