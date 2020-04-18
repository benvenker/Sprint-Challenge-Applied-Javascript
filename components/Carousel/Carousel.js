/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function makeCarousel() {
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");

  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");

  const image1 = document.createElement("img");
  image1.src = "./assets/carousel/mountains.jpeg";
  image1.id = 1;

  const image2 = document.createElement("img");
  image2.src = "./assets/carousel/computer.jpeg";
  image2.id = 2;

  const image3 = document.createElement("img");
  image3.src = "./assets/carousel/trees.jpeg";
  image3.id = 3;

  const image4 = document.createElement("img");
  image4.src = "./assets/carousel/turntable.jpeg";
  image4.id = 4;

  const carouselContainer = document.querySelector(".carousel-container");

  carouselContainer.appendChild(carousel);
  carousel.appendChild(leftButton);
  carousel.appendChild(image1);
  carousel.appendChild(image2);
  carousel.appendChild(image3);
  carousel.appendChild(image4);
  carousel.appendChild(rightButton);

  // event handlers

  // get all of the images
  const images = document.querySelectorAll("img");
  console.log(images);

  let currentIndex = 0;

  rightButton.addEventListener("click", (e) => {
    toggleSlide(true);
    // nextImage();
  });

  leftButton.addEventListener("click", (e) => {
    toggleSlide(false);
  });

  function nextImage() {
    console.log("next image");
    // images[currentIndex].className = "image";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].display = "block";
  }

  function toggleSlide(direction) {
    let visibleID = getVisible(images);
    images[visibleID].style.display = "none";
    let makeVisible;
    if (!direction) {
      makeVisible = prev(visibleID, images.length);
    } else {
      makeVisible = next(visibleID, images.length);
    }
    images[makeVisible].style.display = "block";
  }

  function getVisible(images) {
    let visibleID = -1;
    for (let i = 0; i < images.length; i++) {
      if (images[i].style.display !== "none") {
        console.log(images[i]);
        visibleID = i;
      }
    }
    return visibleID;
  }
}

function prev(num, arrayLength) {
  if (num === 0) return arrayLength - 1;
  else return num - 1;
}

function next(num, arrayLength) {
  if (num === arrayLength + 1) return 0;
  else return num + 1;
}

makeCarousel();
