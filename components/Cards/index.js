// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const makeArticle = (article) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = article.headline;
  const author = document.createElement("div");
  author.classList.add("author");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = article.authorPhoto;

  const authorName = document.createElement("span");
  authorName.textContent = `By ${article.authorName}`;

  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(authorName);
};

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then((response) => {
    const articles = response.data.articles;
    const topics = [...Object.keys(articles).map((article) => article)];
    Object.keys(articles).map((_, i) => {
      return articles[topics[i]].map((article) => makeArticle(article));
    });
  });
