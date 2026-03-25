async function searchWeather() {
    console.log("Button clicked");
    var city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city");
        return;
    }
    console.log(city);
    var url = `/.netlify/functions/getWeather?city=${city}`;

    try {
        var response = await fetch(url);
        var data = await response.json();

        if (data.cod === "404") {
            alert("City not found");
            return;
        }

        var weather = data.weather[0].main;
        let wind = data.wind.speed;
        let humidity = data.main.humidity;
        console.log(data);

        document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("desc").innerText = `${weather} 🌤️ • Wind ${wind} m/s 💨 • Humidity ${humidity}% 💧`;
    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("An error occurred while fetching the weather.");
    }
}

document.getElementById("city").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});