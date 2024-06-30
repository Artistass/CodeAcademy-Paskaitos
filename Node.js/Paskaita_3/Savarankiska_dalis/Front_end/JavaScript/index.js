const nameForm = document.querySelector("#nameForm");
const name = document.querySelector("#name").value;

addEventListener("submit", addName())

const addName = async (e) => {
  e.preventDefault();

  const response = await fetch("/names", {
    method: "POST",
    headers: {
      `Content-Type`: `application/json`,
    },
    body: JSON.stringify({ name }),
  });
  if (response.ok) {
    alert(`Name added successfully!`)
  }
}