const bookEndPoint = `http://localhost:3000/books`;

const form = document.querySelector("form");

const titleInput =document.querySelector("#title");
const authorInput =document.querySelector("#author");
const genreInput =document.querySelector("#genre");
const priceInput =document.querySelector("#price");
const quantityInput =document.querySelector("#quantity");


form.addEventListener("submit", async (e) => {
  e.preventDefault();
 
  const title = titleInput.value;
  const author = authorInput.value;
  const genre = genreInput.value;
  const price = priceInput.value;
  const quantity = quantityInput.value;

  const response = await fetch(bookEndPoint, {
   method: "POST",
   headers: {
     "Content-type": "application/json"
   },
   body: JSON.stringify({
     title,
     author,
     genre,
     price,
     quantity
   })
  });
 
  if (response.ok) {
   const books = await getBooks();
   displayBooks(books);
  }
 
  console.log(response);
 })
