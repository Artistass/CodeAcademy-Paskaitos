const usersEndPoint = `http://127.0.0.1:4000/users`;
const membershipsEndPoint = `http://127.0.0.1:4000/memberships`;

const form = document.querySelector("form");

const firstNameInput = document.querySelector("#first_name");
const lastNameInput = document.querySelector("#last_name");
const emailInput = document.querySelector("#email_address");
const selectMembership = document.querySelector("#select_membership");

const cancelButton = document.querySelector(".cancel_button");

const firstNameFill = document.querySelector("#first_name_fill");
const lastNameFill = document.querySelector("#last_name_fill");
const emailAddressFill = document.querySelector("#email_address_fill");
const selectMembershipFill = document.querySelector("#select_membership_fill");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  firstNameFill.textContent = "";
  lastNameFill.textContent = "";
  emailAddressFill.textContent = "";
  selectMembershipFill.textContent = "";

  const name = firstNameInput.value.trim();
  const surname = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const membership = selectMembership.value.trim();  // Corrected variable name

  let isValid = true;

  if (!name) {
    firstNameFill.textContent = "First name is required.";
    isValid = false;
  }
  if (!surname) {
    lastNameFill.textContent = "Last name is required.";
    isValid = false;
  }
  if (!email) {
    emailAddressFill.textContent = "Email address is required.";
    isValid = false;
  } 
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailAddressFill.textContent = "Invalid email address.";
    isValid = false;
  }
  if (membership === "- - -") {
    selectMembershipFill.textContent = "You must select a membership package.";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const response = await fetch(usersEndPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      surname,
      email,
      membership_id: membership
    })
  });

  if (response.ok) {
    try {
      const users = await getUsers();
      displayUsers(users);
    } catch (error) {
      console.error("Error processing memberships:", error);
    }
    window.location.href = '../HTML/users.html';
  }
});

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = '../HTML/users.html';
});

async function getMemberships() {
  const response = await fetch(membershipsEndPoint);
  const data = await response.json();
  return data;
}

async function displayMembershipsNames() {
  const memberships = await getMemberships();
  selectMembership.innerHTML = ""; // Clear previous options


  const emptyOption = document.createElement("option");
  emptyOption.value = "- - -";
  emptyOption.textContent = "- - -";  // This makes it display as blank
  selectMembership.append(emptyOption);

  memberships.forEach(membership => {
    const membershipOption = document.createElement("option");
    membershipOption.value = membership._id; // Ensure you use the correct ID
    membershipOption.textContent = membership.name;
    selectMembership.append(membershipOption);
  });
}

displayMembershipsNames();
