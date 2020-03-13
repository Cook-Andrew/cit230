/* The formula to calculate the wind chill factor is
f=35.74+0.6215t-35.75s^{0.16}+0.4275ts^{0.16}, 
where f is the wind chill factor in Fahrenheit,
t is the air average temperature in Fahrenheit, 
and s is the wind speed in miles per hour. Input requirements: 
"Wind Chill Temperature is officially defined for temperatures
at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)." */

var temp = document.getElementById("temp").innerHTML;
var windSpeed = document.getElementById("windSpeed").innerHTML;
var windChill = document.getElementById("windChill");
if (temp <= 50 && windSpeed > 3) {
    windChill.innerHTML = (35.74 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16)).toFixed(2);
}