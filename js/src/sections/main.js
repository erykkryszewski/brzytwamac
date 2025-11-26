document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".header");
    let footer = document.querySelector(".footer");
    let main = document.querySelector("main#main");
    let body = document.body;

    let headerHeight = header.offsetHeight;
    let footerHeight = footer.offsetHeight + 60;
    let footerHeightWithAdminBar = footer.offsetHeight + 60 + 32;

    if (body.classList.contains("admin-bar")) {
        main.style.minHeight = "calc(100vh - " + footerHeightWithAdminBar + "px)";
    } else {
        main.style.minHeight = "calc(100vh - " + footerHeight + "px)";
    }

    if (body.classList.contains("theme-frontpage")) {
        main.style.paddingTop = "0";
    } else {
        main.style.paddingTop = headerHeight + "px";
    }
});
