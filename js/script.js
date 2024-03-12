let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeColor = document.querySelector(".js-themecolor");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeColor.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});
