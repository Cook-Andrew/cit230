const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const prophets = jsonObject['prophets']; //create an array constant
        for (let i = 0; i < prophets.length; i++) { //iterate through the array
            //creating the elements example: <h2></h2>
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let bDate = document.createElement('h3');//added this
            let bPlace = document.createElement('h4');//added this
            let image = document.createElement('img');//added this
            let description = document.createElement('p');//added this

            //setting the inner text example: <h2>CONTENT</h2>
            h2.textContent = 'con-man: ' + prophets[i].name + ' ' + prophets[i].lastname;
            bDate.textContent = "Date of Birth: " + prophets[i].birthdate;//added this
            bPlace.textContent = "Place of Birth: " + prophets[i].birthplace;//added this
            description.textContent = "This guy married multiple under-age teenagers.";

            //add the created element to it's parent
            card.appendChild(h2);
            card.appendChild(bDate);//added this
            card.appendChild(bPlace);//added this
            card.appendChild(image);//added this
            card.appendChild(description);//added this

            //add the container to the document
            document.querySelector('div.cards').appendChild(card);
            //set the img src and alt
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', h2.textContent + " - " + (i + 1))//added this
        }
    });