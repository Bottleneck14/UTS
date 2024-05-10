// Dapatkan elemen hamburger dan navigasi mobile
var hamburger = document.querySelector(".hamburger");
var navMobile = document.querySelector(".navigasi-mobile");

// Tambahkan event listener ke hamburger
hamburger.addEventListener("click", function () {
  // Toggle kelas 'show' pada navigasi mobile
  navMobile.classList.toggle("show");
});
