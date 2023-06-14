(async function () {
    new Chart(
        document.getElementById('grafico2'),
        {
            type: 'bar',
            data: {
                labels: ["1°", "2°", "3°", "4°",],
                datasets: [
                    {
                        label: 'Semanal',
                        backgroundColor: "#fed766",
                        pointBorderColor: "#fed766",
                        pointBackgroundColor: "#fed766",
                        pointHoverBackgroundColor: "#fed766",
                        pointHoverBorderColor: "#fed766",
                        pointBorderWidth: 5,
                        data: [3, 5, 7, 9, 10],
                    }]

            }
        }
    )
})();