const trang = document.getElementById("tranghientai");
const trangtruoc = document.getElementById("trangtruoc");
const trangsau = document.getElementById("trangsau");

trangtruoc.addEventListener("click", () => {
    if (trang.innerHTML > 1) {
        trang.innerHTML--;
    }

});

trangsau.addEventListener("click", () => {
    trang.innerHTML++;
})