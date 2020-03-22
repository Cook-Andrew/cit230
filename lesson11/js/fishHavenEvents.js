const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const towns = jsonObject['towns']; //create an array constant
        for (let i = 0; i < towns.length; i++) { //iterate through the array
            if (towns[i].name == "Fish Haven") {
                //creating the elements example: <h2></h2>
                let sched = document.createElement('ul');
                for ( z = 0; z < towns[i].events.length; z++){
                    let event = document.createElement('li');
                    let br = document.createElement('br');

                    //setting the inner text example: <h2>CONTENT</h2>
                    event.textContent = towns[i].events[z];

                    //add the created element to it's parent
                    sched.appendChild(event);
                    sched.appendChild(br);
                }
                //add sched to the sched container
                document.querySelector('.events').appendChild(sched);
            }
        }
    });