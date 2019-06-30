function headermenu() {
    let header = document.getElementById("header");
    let menu = document.getElementById("menu");

    let header_height = header.offsetHeight;

    menu.style.top = `-${header_height}px`;

    console.log(`-${header_height}px`);
}

headermenu()