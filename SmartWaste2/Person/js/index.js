function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


document.addEventListener("DOMContentLoaded", function() {
// Открыть второе модальное окно
document.getElementById("open-modal-btn1").addEventListener("click", function () {
  document.getElementById("my-modal1").classList.add("open");
});

// Закрыть второе модальное окно
document.getElementById("close-my-modal-btn1").addEventListener("click", function () {
  document.getElementById("my-modal1").classList.remove("open");
});

// Закрыть второе модальное окно при нажатии на Esc
window.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    document.getElementById("my-modal1").classList.remove("open");
  }
});

// Закрыть второе модальное окно при клике вне его
document.querySelector("#my-modal1 .modal__box1").addEventListener('click', function (event) {
  event._isClickWithInModal = true;
});

document.getElementById("my-modal1").addEventListener('click', function (event) {
  if (event._isClickWithInModal) return;
  document.getElementById("my-modal1").classList.remove('open');
});
});