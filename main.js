function incFont() {
    document.querySelector("div").classList.add("increases");
    document.querySelector("div").classList.remove("lacks");
}

function lacFont() {
    document.querySelector("div").classList.add("lacks");
    document.querySelector("div").classList.remove("increases");
}

document.querySelector(".incBtn").onclick =incFont;

document.querySelector(".lacBtn").onclick =lacFont;