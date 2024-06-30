const membershipsEndPoint = `http://127.0.0.1:4000/memberships`;

const form = document.querySelector("#form");

const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#membership_price");
const descriptionTextarea = document.querySelector("#description");

const cancelButton = document.querySelector(".cancel_button");

const nameFill = document.querySelector("#name_fill");
const priceFill = document.querySelector("#price_fill");
const descriptionFill = document.querySelector("#description_fill");

const priceNote = document.querySelector("#note_p");

form.addEventListener ("submit", async (e) => {
e.preventDefault();

nameFill.textContent = "";
priceFill.textContent = "";
descriptionFill.textContent = "";


const name = nameInput.value.trim();
  const price = priceInput.value.trim();
  const description = descriptionTextarea.value.trim();

  let isValid = true;

  // Validate name
  if (!name) {
    nameFill.textContent = "Name is required.";
    isValid = false;
  }

  // Validate price
  if (!price) {
    priceNote.textContent = "";
    priceFill.textContent = "Price is required.";
    isValid = false;
  }
  else if (!/^\d+(\.\d{1,2})?$/.test(price)) {
    priceFill.textContent = "Price must be a valid numbers. ";
    isValid = false;
  }

  // Validate description
  if (!description) {
    descriptionFill.textContent = "Description is required.";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

const response = await fetch(membershipsEndPoint, {
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({
    name,
    price,
    description
  })
})

if (response.ok) {
  try {
    const membership = await getMemberships();
    displayMemberships(membership);
  } catch (error) {
    console.error("Error processing memberships:", error);
  }
  window.location.href = '../HTML/memberships.html';
}

})

cancelButton.addEventListener("click", async (e) => {
  e.preventDefault();
  window.location.href = '../HTML/memberships.html';
})
