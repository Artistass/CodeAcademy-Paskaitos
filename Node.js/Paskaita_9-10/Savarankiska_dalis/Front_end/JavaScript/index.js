const bookEndPoint = `http://localhost:3000/books`;

const bookCard = document.querySelector("#bookCard");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const genre = document.querySelector("#genre");
const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");

async function getBooks () {
  const response = await fetch(bookEndPoint);
  const data = await response.json(response);
  console.log(data);
  return data;
}


async function displayBooks() {

  const books = await getBooks();

  books.forEach(book => {

    books.innerHTML = "";

    const section = document.createElement("section");

    const title = document.createElement("h1");
    title.textContent = book.title;

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const genre = document.createElement("p");
    genre.textContent = `Genre: ${book.genre}`;

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
    const price = document.createElement("p");
    price.textContent = `Price: ${book.price},99`;

    const quantity = document.createElement("p");
    quantity.textContent = `Quantity: ${book.quantity}`;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    deleteButton.addEventListener("click", async () => {
      const response = await fetch(bookEndPoint + `/${book._id}`, {
        method: "DELETE"
      })

      if (response.ok) {
        section.remove();

        const updatedBooks = await getBooks();

        bookCard.innerHTML = ""; 

        displayBooks(updatedBooks); 
      }

    })

   
    infoDiv.appendChild(author);
    infoDiv.appendChild(genre);
    priceDiv.appendChild(price);
    priceDiv.appendChild(quantity);
    
    
    section.appendChild(title);
    section.appendChild(infoDiv);
    section.appendChild(priceDiv);
    section.appendChild(deleteButton);

    bookCard.appendChild(section);

  });
}

const books = await getBooks();
console.log(books);
displayBooks(books);