const petEndPoint = `http://localhost:3000/pets`;

const tbody = document.querySelector("#petsTBody");
const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const typeInput = document.querySelector("#type");

const dogButton = document.querySelector("#dogButton");
const catButton = document.querySelector("#catButton");
const bunnyButton = document.querySelector("#bunnyButton");
const allButton = document.querySelector("#allButton");

async function getPets () {
  const response = await fetch(petEndPoint);
  const data = await response.json(response);

  return data;
}

getPets();

function generateTbody (pets) {
  tbody.innerHTML = "";

  const petTrs = pets.map((pet) => {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = pet.name;

    const tdType = document.createElement("td");
    tdType.textContent = pet.type;

    const tdAge = document.createElement("td");
    tdAge.textContent = pet.age;

    const tdDelete = document.createElement("td");
    const deleteButton = document.createElement("i");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    deleteButton.addEventListener("click", async () => {
      const response = await fetch(petEndPoint + `/${pet._id}`, {
        method: "DELETE"
      })

      if (response.ok) {
        const pet = await getPets();
        generateTbody(pet);
      }

    })
    
    tdDelete.append(deleteButton);
    tr.append(tdName, tdType, tdAge, tdDelete);
    return tr;
  })
  tbody.append(...petTrs);
}

dogButton.addEventListener("click", async () => {
  const pets = await getPets();
  const dogPets = pets.filter(pet => pet.type === "Dog");
  generateTbody(dogPets);
});

catButton.addEventListener("click", async () => {
  const pets = await getPets();
  const catPets = pets.filter(pet => pet.type === "Cat");
  generateTbody(catPets);
});

bunnyButton.addEventListener("click", async () => {
  const pets = await getPets();
  const bunnyPets = pets.filter(pet => pet.type === "Bunny");
  generateTbody(bunnyPets);
});

allButton.addEventListener("click", async () => {
  const pets = await getPets();
  generateTbody(pets);
})


const pets = await getPets();
console.log(pets);
generateTbody(pets);

