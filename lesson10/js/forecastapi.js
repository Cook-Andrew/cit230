const wapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d121dd1ca6a86fe9f63a1745820a464b&units=imperial";
//api data reference doc: https://openweathermap.org/forecast5#JSON
fetch(wapiURL)
    .then((response) => response.json())
    .then((jsWObject) => {
        console.log(jsWObject);
        var c = 0;
        for (i in jsWObject.list) {
            if (jsWObject.list[i].dt_txt.includes("18:00:00")) {
                c += 1;
                var wdate = "Sun.";
                switch(new Date().getDay() + c) {
                    case 1:
                        wdate = "Sun.";
                        break;
                    case 2:
                        wdate = "Mon.";
                        break;
                    case 3:
                        wdate = "Tue.";
                        break;
                    case 4:
                        wdate = "Wed.";
                        break;
                    case 5:
                        wdate = "Thu.";
                        break;
                    case 6:
                        wdate = "Fri.";
                        break;
                    case 7:
                        wdate = "Sat.";
                        break;
                    case 8:
                        wdate = "Sun.";
                        break;
                    case 9:
                        wdate = "Mon.";
                        break;
                    case 10:
                        wdate = "Tue.";
                        break;
                    case 11:
                        wdate = "Wed.";
                        break;
                    case 12:
                        wdate = "Thu.";
                        break;
                    case 13:
                        wdate = "Fri.";
                        break;
                    case 14:
                        wdate = "Sat.";
                        break;

                }
                document.getElementById('date' + c).textContent = wdate;
                var wimagesrc = 'https://openweathermap.org/img/w/' + jsWObject.list[i].weather[0].icon + '.png';
                var wdesc = jsWObject.list[i].weather[0].description;
                document.getElementById('icon' + c).setAttribute("src", wimagesrc);
                document.getElementById('icon' + c).setAttribute('alt', wdesc);
                var wtemp = jsWObject.list[i].main.temp;
                document.getElementById('temp' + c).textContent = wtemp; 
            }
        }
        
    });