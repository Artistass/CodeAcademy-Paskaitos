const usersEndPoint = `http://localhost:4000/users/:order`;
const deleteUsersEndPoint = `http://localhost:4000/users`;

const userCard = document.querySelector("#userCardInfo");
const sortByName = document.querySelector("#sortByName");

async function getUsers(order = "desc") {
  const response = await fetch(`${usersEndPoint}?order=${order}`);
  const data = await response.json();
  return data;
}

async function displayUsers(order = "asc") {
  try {
    userCard.innerHTML = '';
    const users = await getUsers(order);
    users.forEach(user => {
      const section = document.createElement("section");
      section.classList.add("user_card");

      const nameDiv = document.createElement("div");
      nameDiv.classList.add("first_and_lastName");

      const name = document.createElement("h4");
      name.classList.add("user_name");
      name.textContent = user.name;

      const surName = document.createElement("h4");
      surName.classList.add("user_surName");
      surName.textContent = user.surname;

      nameDiv.append(name, surName);

      const email = document.createElement("div");
      email.classList.add("user_email");

      const emailText = document.createElement("span");
      emailText.classList.add("email_text");
      emailText.textContent = "Email Address:";

      const userEmail = document.createElement("span");
      userEmail.classList.add("user_email_text");
      userEmail.textContent = user.email;

      email.append(emailText, userEmail);

      const membershipId = document.createElement("div");
      membershipId.classList.add("user_membershipId");

      const membershipText = document.createElement("span");
      membershipText.classList.add("membership_text");
      membershipText.textContent = "Membership:";

      const userMembership = document.createElement("span");
      userMembership.classList.add("user_membership_text");
      userMembership.textContent = user.membership_id ? user.membership_id.name : 'No membership'; 
      
      membershipId.append(membershipText, userMembership);

      const hrLine = document.createElement("hr");
      hrLine.classList.add("hr_line");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteButton.classList.add("delete_button");


    deleteButton.addEventListener("click", async (e) => {
      e.preventDefault();
      const response = await fetch(deleteUsersEndPoint + `/${user._id}`, {
        method: "DELETE"
      })
      if (response.ok) {
        section.remove();
        
        const updateUser = await getUsers();
        userCard.innerHTML = "";
        
      displayUsers(updateUser);
      }
    })

      section.append(nameDiv, email, membershipId, hrLine, deleteButton);
      userCard.append(section);
    });
  } catch (error) {
    console.error('Error displaying users:', error);
  }
}

displayUsers();

sortByName.addEventListener("click", async () => {
  try {
    // Check the current sorting order
    const currentOrder = sortByName.dataset.order || "asc";

    // Toggle the sorting order
    const newOrder = currentOrder === "asc" ? "desc" : "asc";

    if (currentOrder === "asc") {
      sortByName.firstChild.textContent = "Sorting By Name: DESC  ";
    } else {
      sortByName.firstChild.textContent = "Sorting By Name: ASC  ";
    }

    // Update the dataset attribute to reflect the new sorting order
    sortByName.dataset.order = newOrder;

    // Update the icon based on the sorting order
    const icon = sortByName.querySelector("i");
    icon.className = `fa-solid fa-sort-${newOrder === "asc" ? "up" : "down"}`;

    // Fetch and display users with the new sorting order
    await displayUsers(newOrder);
  } catch (error) {
    console.error('Error sorting users:', error);
  }
});