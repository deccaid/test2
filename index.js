let timer;
let totalTime = 30 * 60;

function startTimer() {
  timer = setInterval(() => {
    if (totalTime <= 0) {
      totalTime = 30 * 60;
    } else {
      totalTime--;
    }
    displayTime();
  }, 1000);
}

function displayTime() {
  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = totalTime % 60;
  document.getElementById("timer").textContent = `${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

window.onload = () => {
  startTimer();
};
const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // Показывать 1 слайд
  spaceBetween: 10, // Отступ между слайдами
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Сделать пагинацию кликабельной
  },
  autoplay: {
    delay: 2000, // Задержка между слайдами в миллисекундах
    disableOnInteraction: false, // Включить автоплей даже после взаимодействия
  },
  loop: true, // Включить зацикливание слайдов
});
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  // Применяем эффект параллакса
  const leftImage = document.querySelector(".patter-left");
  const rightImage = document.querySelector(".patter-right");

  leftImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  rightImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
