const petEndPoint = `http://localhost:3000/pets`;

const tbody = document.querySelector("#petsTBody");
const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const typeInput = document.querySelector("#type");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
 
  const name = nameInput.value;
  const age = ageInput.value;
  const type = typeInput.value;

  const response = await fetch(petEndPoint, {
   method: "POST",
   headers: {
     "Content-type": "application/json"
   },
   body: JSON.stringify({
     name,
     age,
     type
   })
  });
 
  if (response.ok) {
   const pets = await getPets();
   generateTbody(pets);
  }
 
  console.log(response);
 })
