const btn = document.querySelector("#btn");
const butn = document.querySelector("#butn");
const menu = document.querySelector(".header__menu-1");

btn.addEventListener("click", open);

butn.addEventListener("click", close);

function open() {
    menu.style.height = "300px";

    menu.style.opacity = "1";

    btn.style.display = "none";

    butn.style.display = "block";
}

function close() {
    menu.style.height = "0";

    menu.style.opacity = "0";

    btn.style.display = "block";

    butn.style.display = "none";
}