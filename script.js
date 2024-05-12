// Array berisi alamat gambar
var gambar = ["./src/bg3.png", "./src/bg2.jpeg", "./src/spot2.jpg"];

// Variabel untuk melacak indeks gambar saat ini
var indeksSaatIni = 0;

// Fungsi untuk mengubah background
function ubahBackground() {
  // Dapatkan elemen dengan class 'image'
  var elemen = document.querySelector(".image");

  // Ubah background elemen
  elemen.style.backgroundImage = "url(" + gambar[indeksSaatIni] + ")";
}

// Fungsi untuk maju ke gambar berikutnya
function maju() {
  indeksSaatIni = (indeksSaatIni + 1) % gambar.length;
  ubahBackground();
}

// Fungsi untuk kembali ke gambar sebelumnya
function mundur() {
  indeksSaatIni = (indeksSaatIni - 1 + gambar.length) % gambar.length;
  ubahBackground();
}

// Dapatkan tombol dan tambahkan event listener
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
// Dapatkan elemen hamburger dan navigasi mobile
var hamburger = document.querySelector(".hamburger");
var navMobile = document.querySelector(".navigasi-mobile");

// Tambahkan event listener ke hamburger
hamburger.addEventListener("click", function () {
  // Toggle kelas 'show' pada navigasi mobile
  navMobile.classList.toggle("show");
});
