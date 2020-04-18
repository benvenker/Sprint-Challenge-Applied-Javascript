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

  const image2 = document.createElement("img");
  image2.src = "./assets/carousel/computer.jpeg";

  const image3 = document.createElement("img");
  image3.src = "./assets/carousel/trees.jpeg";

  const image4 = document.createElement("img");
  image4.src = "./assets/carousel/turntable.jpeg";

  const carouselContainer = document.querySelector(".carousel-container");

  carouselContainer.appendChild(carousel);
  carousel.appendChild(leftButton);
  carousel.appendChild(image1);
  carousel.appendChild(image2);
  carousel.appendChild(image3);
  carousel.appendChild(image4);
  carousel.appendChild(rightButton);
}

makeCarousel();

// function imageMaker(iamgeUrl) {
//   const image = document.createElement("img");
//   image.src = imageUrl;
// }
