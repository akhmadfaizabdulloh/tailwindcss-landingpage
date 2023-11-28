//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu =document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Play Pause Buttton
var video = document.getElementById("myVideo");
var playPauseBtn = document.getElementById("playPauseBtn");

    // Event listener untuk memantau perubahan status video
    video.addEventListener("play", function() {
        playPauseBtn.style.display = "none"; 
        // Menyembunyikan tombol saat video diputar
    });

    video.addEventListener("ended", function() {
        playPauseBtn.style.display = "block"; // Menampilkan kembali tombol saat video selesai
    });

    playPauseBtn.addEventListener("click", function() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });