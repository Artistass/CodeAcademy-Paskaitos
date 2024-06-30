const carsEndPoint = `http://127.0.0.1:5000/cars`;

const form = document.querySelector("#form");

const titleInput = document.querySelector("#title");
const imageInput = document.querySelector("#image");
const priceInput = document.querySelector("#price");
const numberPlatesInput = document.querySelector("#numberPlates");

const cancelButton = document.querySelector(".cancel_button");

const titleFill = document.querySelector("#titleFill");
const imageFill = document.querySelector("#imageFill");
const priceFill = document.querySelector("#priceFill");
const numberPlatesFill = document.querySelector("#numberPlatesFill");
const priceNote = document.querySelector("#note_p");


form.addEventListener ("submit", async (e) => {
  e.preventDefault();
  
  titleFill.textContent = "";
  imageFill.textContent = "";
  priceFill.textContent = "";
  numberPlatesFill.textContent = "";
  
  
  const title = titleInput.value.trim();
  const image = imageInput.value.trim();
  const price = priceInput.value.trim();
  const numberPlates = numberPlatesInput.value.trim();
  
    let isValid = true;
  
    if (!title) {
      titleFill.textContent = "Title is required.";
      isValid = false;
    }

    if (!image) {
      imageFill.textContent = "Picture is required.";
      isValid = false;
    }
  
    if (!price) {
      priceNote.textContent = "";
      priceFill.textContent = "Price is required.";
      isValid = false;
    }
    else if (!/^\d+(\.\d{1,2})?$/.test(price)) {
      priceFill.textContent = "Price must be a valid numbers. ";
      isValid = false;
    }
  
    if (!numberPlates) {
      numberPlatesFill.textContent = "Number Plates is required.";
      isValid = false;
    }
  
    if (!isValid) {
      return;
    }
  
  await fetch(carsEndPoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title,
      image,
      price,
      numberPlates
    })
  })
  
  alert(`Car is successfully added`)
  window.location.href = '../HTML/viewCars.html';
  })
  
  cancelButton.addEventListener("click", async (e) => {
    e.preventDefault();
    window.location.href = '../HTML/viewCars.html';
  })
  
