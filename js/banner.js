// banner.js
const bannerImages = [
  'assets/banners/banner_1.jpg',
  'assets/banners/banner_2.jpg',
  'assets/banners/banner_3.jpg'
];
let currentBanner = 0;
let bannerInterval;

function showBanner(index) {
  const bannerImg = document.getElementById('banner-img');
  bannerImg.src = bannerImages[index];
}

function showNextBanner() {
  currentBanner = (currentBanner + 1) % bannerImages.length;
  showBanner(currentBanner);
}

function showPrevBanner() {
  currentBanner = (currentBanner - 1 + bannerImages.length) % bannerImages.length;
  showBanner(currentBanner);
}

function resetInterval() {
  clearInterval(bannerInterval);
  // ⏱️ Tiempo de cambio de imagen del banner
  bannerInterval = setInterval(showNextBanner, 6000);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.next-btn').addEventListener('click', () => {
    showNextBanner();
    resetInterval();
  });
  document.querySelector('.prev-btn').addEventListener('click', () => {
    showPrevBanner();
    resetInterval();
  });
  // ⏱️ Tiempo de cambio de imagen del banner
  bannerInterval = setInterval(showNextBanner, 5000);
});