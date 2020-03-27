$(document).ready(function(){
    //var apiurl = "https://api.openweathermap.org/data/2.5/weather?id=4092267&units=imperial&appid=d121dd1ca6a86fe9f63a1745820a464b";
    var apiurl = "js/test.json"; //dummy data for debugging
    $.getJSON(apiurl, function (result) {
        weatherObj = result;
        console.log(weatherObj);
        $("#temp").text(weatherObj.main.temp);
        $("#feels").text(weatherObj.main.feels_like);
        $("#wind").text(weatherObj.wind.speed);
        $("#high").text(weatherObj.main.temp_max);
        $("#low").text(weatherObj.main.temp_min);
        $("#description").text(weatherObj.weather[0].description);
        $("#pressure").text(weatherObj.main.pressure);
        $("#humidity").text(weatherObj.main.humidity);
        $("#icon").attr("src","http://openweathermap.org/img/wn/" + weatherObj.weather[0].icon + "@2x.png");
        $("#icon").attr("alt", weatherObj.weather[0].main);
    });
});