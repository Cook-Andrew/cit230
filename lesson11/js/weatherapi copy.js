//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=d121dd1ca6a86fe9f63a1745820a464b";
//api data reference doc: https://openweathermap.org/current#current_JSON
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent = jsObject.weather[0].main;
        var temp = jsObject.main.temp;
        document.getElementById('temp').textContent = temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        var windSpeed = jsObject.wind.speed
        document.getElementById('windSpeed').textContent = windSpeed;
        document.getElementById('windChill').textContent = (35.74 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16)).toFixed(2);

        //the following is provided by the example api-test.html. It is left untouched so that page still functions
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });