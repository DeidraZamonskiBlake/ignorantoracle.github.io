const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("navbar-container");
const navItems = document.getElementById("navbar-list");

const funFactButton = document.getElementById("fun-fact-button");
const funFacts = [
  "Deidra is a leo!",
  "Deidra is a The Sims connoisseur!",
  "Deidra lives under a rock!",
];
const funFactsLength = funFacts.length;

function getRandomNumber(maximum) {
  return Math.floor(Math.random() * maximum);
}

const funFact = document.getElementById("fun-fact");

funFactButton.addEventListener("click", () => {
  let randomNumber;
  let newFunFact;

  do {
    randomNumber = getRandomNumber(funFactsLength);
    newFunFact = funFacts[randomNumber];
  } while (newFunFact === funFact.innerText);

  const funFactText = funFact.innerText;
  funFact.innerText = newFunFact;
  console.log({ funFactText });
});

var images = [];
let index = 0;

const contents = document.querySelectorAll(".slider-content h3");
const indicators = document.querySelectorAll(".slider-indicators span");
const slide = document.querySelector(".slider-item");

images[0] = "/images/ss1.jpg";
images[1] = "/images/ss2.jpg";
images[2] = "/images/ss3.jpeg";
images[3] = "/images/ss4.jpg";

function initSlider() {
  contents.forEach((content) => {
    content.style.opacity = "0";
  });

  slide.src = images[index];
  indicators[index].classList.add("active");
  contents[index].style.opacity = "1";

  setInterval(() => {
    changeSlide(1);
  }, 7000);
}

function changeSlide(step) {
  index += step;
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  showSlide();
}

function moveTo(newIndex) {
  index = newIndex;
  showSlide();
}

function showSlide() {
  slide.src = images[index];

  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  contents.forEach((content) => {
    content.style.opacity = "0";
  });

  indicators[index].classList.add("active");
  contents[index].style.opacity = "1";
}

// Initialize slider
initSlider();

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }
});
