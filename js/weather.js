const API_KEY = "8569bb7a8c48e33e253da2f5a9e3c1aa";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        city.innerText = data.name;
        weather.innerText  = `${data.weather[0].main} / ${data.main.temp}`;
});
    
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)