const cropData = [
  { crop: "Tomato", moisture: "45%", temp: "28°C", health: "Healthy" },
  { crop: "Rice", moisture: "60%", temp: "30°C", health: "Needs Attention" },
  { crop: "Wheat", moisture: "40%", temp: "26°C", health: "Healthy" }
];

const tableBody = document.getElementById("crop-data");

cropData.forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.crop}</td>
    <td>${item.moisture}</td>
    <td>${item.temp}</td>
    <td>${item.health}</td>
  `;
  tableBody.appendChild(row);
});