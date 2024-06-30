const carsEndPoint = `http://127.0.0.1:5000/cars`;

const carCard = document.querySelector("#carCard");

 async function getCars() {
  try {
    const response = await fetch(carsEndPoint);
    const result = await response.json();
    console.log("Fetched data:", result);
    return result.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}

 async function displayCars() {
  const cars = await getCars();

  
  carCard.innerHTML = "";

  cars.forEach(car => {
    const section = document.createElement("section");
    section.classList.add("carCard");

    const numberplates = document.createElement("h3");
    numberplates.classList.add("numberPlates");
    numberplates.textContent = `${car.numberplates}`;

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("infoDiv");

    const title = document.createElement("h4");
    title.classList.add("title");
    title.textContent = `${car.title}`;

    const price = document.createElement("h4");
    price.classList.add("price");
    price.textContent = `$${car.price}`;

    infoDiv.append(title, price);

    const hrLine = document.createElement("hr");

    const picture = document.createElement("img");
    picture.classList.add("picture");
    picture.src = `${car.image}`;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteButton.classList.add("delete_button");

    deleteButton.addEventListener("click", async (e) => {
      e.preventDefault();
      const response = await fetch(carsEndPoint + `/${car.id}`, {
        method: "DELETE"
      })
      if (response.ok) {
        section.remove();
        
        const updateCars = await getCars();
        carCard.innerHTML = "";
        
      displayCars(updateCars);
      }
    })

    section.append(numberplates, infoDiv, hrLine, picture, deleteButton);
    carCard.append(section);
  });
}

displayCars();