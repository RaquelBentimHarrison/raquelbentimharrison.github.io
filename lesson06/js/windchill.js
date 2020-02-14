var temp = document.getElementById("temp").textContent;
var windSpeed = document.getElementById("wind").textContent;

let itsCold = windChill(temp, windSpeed)

function windChill(t, w) {
    if (t <= 50 && w > 3) {
        let chill = (0.0817 * (3.71 * (Math.pow(w, 0.5)) +
            5.81 - 0.25 * w) * (t - 91.4) + 91.4);

        document.getElementById("windchill").textContent = Math.floor(chill) + "˚F";
    } else {
        document.getElementById("windchill").textContent = "N/A";
    }
}