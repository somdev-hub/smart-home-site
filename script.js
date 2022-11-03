var user1 = document.querySelector(".testimonial1");
var user2 = document.querySelector(".testimonial2");
var user3 = document.querySelector(".testimonial3");
var user4 = document.querySelector(".testimonial4");
var body = document.querySelector("body");

user1.onmouseover = function () {
  user1.classList.add("Active");
  user2.classList.remove("Active");
  user3.classList.remove("Active");
  user4.classList.remove("Active");
};
user2.onmouseover = function () {
  user1.classList.remove("Active");
  user2.classList.add("Active");
  user3.classList.remove("Active");
  user4.classList.remove("Active");
};
user3.onmouseover = function () {
  user1.classList.remove("Active");
  user2.classList.remove("Active");
  user3.classList.add("Active");
  user4.classList.remove("Active");
};
user4.onmouseover = function () {
  user1.classList.remove("Active");
  user2.classList.remove("Active");
  user3.classList.remove("Active");
  user4.classList.add("Active");
};
body.onclick = function () {
  user1.classList.remove("Active");
  user2.classList.remove("Active");
  user3.classList.remove("Active");
  user4.classList.remove("Active");
};

const items = document.querySelectorAll(".faq-btn");

function toggleFaq() {
  const itemToggle = this.getAttribute("aria-expanded");
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }
  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleFaq));

if ($(window).width() < 768) {
  var logo = document.querySelector(".navbar-brand");
  logo.innerHTML = "SH";
}

var nav = document.querySelector(".navbar-toggler");
var head = document.getElementById("header");

nav.onclick = function () {
  if (head.style.height == "100vh") {
    head.style.height = "50vh";
  } else {
    head.style.height = "100vh";
  }
};

if ($(window).height() >= 914) {
  document.querySelector("header h1").style.width = "90%";
}
