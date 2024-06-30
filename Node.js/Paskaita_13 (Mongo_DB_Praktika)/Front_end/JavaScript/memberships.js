const membershipsEndPoint = `http://127.0.0.1:4000/memberships`;

const membershipCard = document.querySelector("#membershipCardInfo");

async function getMemberships() {
  const response = await fetch(membershipsEndPoint);
  const data = await response.json(response);
  console.log(data);
  return data;
}
getMemberships();

async function displayMemberships () {
  const memberships = await getMemberships();

  memberships.forEach(membership => {

    membership.innerHTML = "";

    const section = document.createElement("section");
    section.classList.add("membership_card");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("membership_info");

    const price = document.createElement("h1");
    price.textContent = `$${membership.price}`;
    price.classList.add("membership_price");

    const name = document.createElement("h1");
    name.textContent = membership.name;
    name.classList.add("membership_name");

    infoDiv.append(price, name)

    const description = document.createElement("p");
    description.textContent = membership.description;
    description.classList.add("membership_description");

    const hrLine = document.createElement("hr");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteButton.classList.add("delete_button");

    deleteButton.addEventListener("click", async (e) => {
      e.preventDefault();
      const response = await fetch(membershipsEndPoint + `/${membership._id}`, {
        method: "DELETE"
      })
      if (response.ok) {
        section.remove();
        
        const updateMembership = await getMemberships();
        membershipCard.innerHTML = "";
        
      displayMemberships(updateMembership);
      }
    })

    section.append(infoDiv, description, deleteButton, hrLine);
  
    membershipCard.append(section);
  })
}

const membership = await getMemberships();
console.log(membership);
displayMemberships(membership);