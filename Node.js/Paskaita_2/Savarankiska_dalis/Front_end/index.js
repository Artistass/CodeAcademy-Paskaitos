

const getCarBrands = async () => {
  const response = await fetch("http://127.0.0.1:5000")
  const brands = await response.json()
  console.log(brands);


  const ul = document.getElementById("carBrands");
  
  brands.forEach(brand => {
    const li = document.createElement("li");
    li.textContent = brand;
    ul.appendChild(li);
  });

}
getCarBrands();
