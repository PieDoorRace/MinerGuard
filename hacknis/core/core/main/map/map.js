document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("mapper-form");
    const emissionsMap = document.getElementById("emissions-map");
  

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const country = document.getElementById("country").value;
        const pollutant = document.getElementById("pollutant").value;

        fetchEmissionsMap(country, pollutant);
    });

  
  
   function fetchEmissionsMap(country, pollutant) {
        // Construct the API URL
        const apiUrl = `https://api.v2.emissions-api.org/api/v2/${pollutant}/geo.json?country=${country}&begin=2019-05-01&end=2019-05-04`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                displayEmissionsStatistics(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
     deck = new deck.DeckGL({
    container: 'container',
    mapboxApiAccessToken: '<your mapbox token>',
    mapStyle: "mapbox://styles/mapbox/dark-v9",
    longitude: 69,
    latitude: 40,
    zoom: 3,
    pitch: 60,
    layers: [
        new deck.HexagonLayer({
            extruded: true,
            radius: 30000,
            data: apiUrl,
            dataTransform: d => d.features,
            elevationScale: 300,
            getColorValue: points => points.reduce((sum, point) => sum + point.properties.value, 0) / points.length,
            getElevationValue: points => points.reduce((sum, point) => sum + point.properties.value, 0) / points.length,
            getPosition: d => d.geometry.coordinates,
        }),
    ]
});
    }
  


    function displayEmissionsMap(data) {
        emissionsMap.innerHTML = "";

        if (data && Array.isArray(data)) {
            data.forEach((statistic) => {
                const li = document.createElement("li");
                li = deck
                emissionsMap.appendChild(li);
            });
        }
    }
});