document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("chartIndonesia").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2005", "2010", "2015", "2020", "2023"],
      datasets: [
        {
          label: "Jumlah Tsunami",
          data: [12, 10, 8, 6, 15],
          borderColor: "rgba(0, 123, 255, 0.8)",
          backgroundColor: "rgba(0, 123, 255, 0.2)",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });
});
