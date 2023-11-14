const images = ["./img/image1.jpg", "./img/image2.jpg", "./img/image3.jpg"];

const imageContainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const navDots = document.getElementById("navDots");

let currentIndex = 0;

function updateImage() {
  const imgElement = document.createElement("img");
  imgElement.src = images[currentIndex];
  imgElement.alt = `Slide ${currentIndex + 1}`;
  imgElement.classList.add("image");
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
  updateDots();
}

function updateDots() {
  navDots.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === currentIndex) {
      dot.classList.add("active");
    }
    dot.setAttribute("data-index", i);
    dot.addEventListener("click", handleDotClick);
    navDots.appendChild(dot);
  }
}

function handleDotClick(event) {
  const clickedIndex = parseInt(event.target.getAttribute("data-index"));
  currentIndex = clickedIndex;
  updateImage();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);
updateImage();
