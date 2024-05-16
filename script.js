var gambar = ["./src/bg3.png", "./src/bg2.jpeg", "./src/spot2.jpg"];

var indeksSaatIni = 0;

function ubahBackground() {
  var elemen = document.querySelector(".image");

  elemen.style.backgroundImage = "url(" + gambar[indeksSaatIni] + ")";
}

function maju() {
  indeksSaatIni = (indeksSaatIni + 1) % gambar.length;
  ubahBackground();
}

function mundur() {
  indeksSaatIni = (indeksSaatIni - 1 + gambar.length) % gambar.length;
  ubahBackground();
}

var tombolKanan = document.querySelector(".kanan");
tombolKanan.addEventListener("click", maju);

var tombolKiri = document.querySelector(".kiri");
tombolKiri.addEventListener("click", mundur);

// _________________________________________________________________________________
function pindahGaleri() {
  window.location.href = "https://bottleneck14.github.io/UTS/galeri.html";
}

var tombol = document.querySelectorAll(".galeri-tombol");

tombol.forEach(function (elem) {
  elem.addEventListener("click", pindahGaleri);
});

// _________________________________________________________________________________
var hamburger = document.querySelector(".hamburger");
var navMobile = document.querySelector(".navigasi-mobile");

hamburger.addEventListener("click", function () {
  navMobile.classList.toggle("show");
});
