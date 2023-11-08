document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("emission-form");
    const emissionsStatistics = document.getElementById("emissions-statistics");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const country = document.getElementById("country").value;
        const interval = document.getElementById("interval").value;
        const pollutant = document.getElementById("pollutant").value;

        fetchEmissionsStatistics(country, interval, pollutant);
    });

    function fetchEmissionsStatistics(country, interval, pollutant) {
        // Construct the API URL
        const apiUrl = `https://api.v2.emissions-api.org/api/v2/${pollutant}/statistics.json?country=${country}&interval=${interval}&begin=2019-02-10&end=2019-02-11&limit=100&offset=0`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                displayEmissionsStatistics(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }

    function displayEmissionsStatistics(data) {
        emissionsStatistics.innerHTML = "";

        if (data && Array.isArray(data)) {
            data.forEach((statistic) => {
                const li = document.createElement("li");
                li.textContent = `Interval Start: ${statistic.time.interval_start}, Average: ${statistic.value.average}`;
                emissionsStatistics.appendChild(li);
            });
        } else {
            const li = document.createElement("li");
            li.textContent = "No data available.";
            emissionsStatistics.appendChild(li);
        }
    }
});
