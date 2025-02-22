const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
const cityList = document.getElementById("city-list");

cities.forEach((city) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `Температура в ${city}: <input type="number" class="temp-input" data-city="${city}" value="0">°C`;
  cityList.appendChild(listItem);
});

function calculateTemperatures() {
  const inputs = document.querySelectorAll(".temp-input");
  const temperatures = Array.from(inputs).map(
    (input) => parseFloat(input.value) || 0
  );

  const maxTemp = Math.max(...temperatures);
  const minTemp = Math.min(...temperatures);

  document.getElementById("max-temp").textContent = `${maxTemp}°C`;
  document.getElementById("min-temp").textContent = `${minTemp}°C`;
}
