$(document).ready(function() {
    var skycons = new Skycons({"color": "#FFFFFF"});
    skycons.add("weatherIcon", Skycons.CLEAR_DAY); // Initial icon (you can change this)
    skycons.play(); // Start animation loop

    function updateWeather() {
        var temperature = getRandomInt(20, 23); // Temperature range typically for AC indoors
        var humidity = getRandomInt(50, 55); // Comfortable humidity range indoors
        var summary = "cloud"; // Example summary text

        var weatherResult = `
            <div class="col-md-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Summary</h5>
                        <p class="card-text">${summary}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Temperature</h5>
                        <p class="card-text">${temperature} °C</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Humidity</h5>
                        <p class="card-text">${humidity} %</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Pressure</h5>
                        <p class="card-text">${getRandomInt(950, 1050)} hPa</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Wind Speed</h5>
                        <p class="card-text">${getRandomInt(0.1, 0.3)} m/s</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Altitude</h5>
                        <p class="card-text">${getRandomInt(120, 122)} m</p>
                    </div>
                </div>
            </div>
        `;
        $('#weatherResult').html(weatherResult);

        // Update animated weather icon based on summary (example)
        switch(summary.toLowerCase()) {
            case "clear":
                skycons.set("weatherIcon", Skycons.CLEAR_DAY);
                break;
            case "partly cloudy":
                skycons.set("weatherIcon", Skycons.PARTLY_CLOUDY_DAY);
                break;
            case "cloudy":
                skycons.set("weatherIcon", Skycons.CLOUDY);
                break;
            case "rain":
                skycons.set("weatherIcon", Skycons.RAIN);
                break;
            case "snow":
                skycons.set("weatherIcon", Skycons.SNOW);
                break;
            default:
                skycons.set("weatherIcon", Skycons.CLEAR_DAY);
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Initial call to display weather
    updateWeather();

    // Update weather every 3 to 5 seconds
    setInterval(updateWeather, getRandomInt(3000, 5000));
});

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const icon = document.querySelector('.glowing-icon');
    const status = document.querySelector('.connect-status');
    const message = document.getElementById('message');
    const passwordContainer = document.getElementById('passwordContainer');

    if (passwordInput === 'Admin321') {
        icon.classList.add('connected');
        status.textContent = 'Connected with ESP32 WI-FI';
        message.textContent = 'Connection successful!';
        message.style.color = 'green';
        passwordContainer.style.display = 'none'; // Hide the password input and button
    } else {
        icon.classList.remove('connected');
        status.textContent = 'Disconnected';
        message.textContent = 'Connection failed. Please check your password.';
        message.style.color = 'red';
    }
}
