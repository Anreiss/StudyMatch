(async function () {
    new Chart(
        document.getElementById('grafico1'),
        {
            type: 'line',
            data: {
                labels: [
                    "Baixa", "Média", "Alta"],
                datasets: [
                    {
                        label: 'Antes do StudyMatch:',
                        backgroundColor: "red",
                        pointBorderColor: "red",
                        pointBackgroundColor: "red",
                        pointHoverBackgroundColor: "red",
                        pointHoverBorderColor: "red",
                        pointBorderWidth: 5,
                        data: [3, 5, 9, 10],
                    },
                    {
                        label: 'Após o StudyMatch:',
                        backgroundColor: "#fed766",
                        pointBorderColor: "#fed766",
                        pointBackgroundColor: "#fed766",
                        pointHoverBackgroundColor: "#fed766",
                        pointHoverBorderColor: "#fed766",
                        pointBorderWidth: 5,
                        data: [8, 4, 2, 0],
                    }

                ]

            }
        }
    )
})();