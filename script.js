// Replace YOUR_API_KEY with your actual Google API key
const apiKey = 'AIzaSyB0mtZ0d-osE7DBA_UO8MoB5-VIjJJBybI';

// The name of the location you want to get the weather for
const locationName = 'Fort Worth, Texas';

// Construct the URL to the Google Places API
const placesUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${locationName}&inputtype=textquery&fields=formatted_address,geometry&key=${apiKey}`;

// Fetch the location data from the Google Places API
fetch(placesUrl)
  .then(response => response.json())
  .then(data => {
    const { lat, lng } = data.candidates[0].geometry.location;
    
    // Construct the URL to the OpenWeatherMap API
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

    // Fetch the weather data from the OpenWeatherMap API
    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        console.log(`The temperature in ${locationName} is ${temperature}°C and the weather is ${description}.`);
      });
  });


  const backgrounds = ['assets/mob.gif', 'assets/mob2.gif', 'assets/mob3.gif', 'assets/mob4.gif'];
const randomNum = Math.floor(Math.random() * backgrounds.length);

// Create a new style element
var style = document.createElement('style');
// Set the CSS rules
style.innerHTML = `
  body::before {
    content: "";
    background-image: url("${backgrounds[randomNum]}");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(15px); /* Add a 5-pixel blur effect */
    z-index: -1;
  }
`;
document.head.appendChild(style);


const counter = document.querySelector(".counter");
const title = document.querySelector("#title");
const incrementBtn = document.querySelector("#incrementBtn");
const instagram = document.querySelector("#instagram");

const password = 'password';

const passwordInput = document.createElement("input");
passwordInput.type = "text";
passwordInput.placeholder = "enter to submit...";
passwordInput.id = 'passwordInput';
document.body.appendChild(passwordInput);

passwordInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    if (passwordInput.value === password) {
      passwordInput.placeholder = 'correct...';
      passwordInput.value = '';
      passwordInput.style.borderColor = "#16ba42";
      passwordInput.style.background = "linear-gradient(to bottom right, #9ef5b0, #34a853)";

    } else {
      passwordInput.placeholder = 'wrong... try again';
      passwordInput.value = '';
      passwordInput.style.borderColor = "#ba2116";
      passwordInput.style.background = "linear-gradient(to bottom right, #ff8c8c, #B71C1C)";
    }
  }
});


let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;

  switch(count) {
    case 1: incrementBtn.innerText = 'click again...'; break;
    case 2: incrementBtn.innerText = 'another click?'; break;
    case 3: incrementBtn.innerText = 'do it again.'; break;
    case 4: incrementBtn.innerText = 'one more?'; break;
    case 5: incrementBtn.innerText = 'ok last one'; break;
    case 6: incrementBtn.innerText = 'sike! click again'; break;
    case 7: incrementBtn.innerText = 'not over yet...'; break;
    case 8: incrementBtn.innerText = 'almost there!'; break;
    case 9: incrementBtn.innerText = "you're in."; break;
  }

  if (count === 10) {
    // Remove other elements
    document.body.innerHTML = '';

    // Add afterlyfe image
    const afterlyfeImg = document.createElement('img');
    afterlyfeImg.title = 'Afterlyfe - yeat';
    afterlyfeImg.src = 'music/afterlyfe.png';
    afterlyfeImg.classList.add('hover-zoom');
    afterlyfeImg.id = 'musicID';
    document.body.appendChild(afterlyfeImg);

    afterlyfeImg.addEventListener('click', () => {
      window.open('https://yeat.lnk.to/Afterlyfe', '_blank')
    });
    // Add lyfe image
    const lyfeImg = document.createElement('img');
    lyfeImg.title = 'Lyfe - yeat';
    lyfeImg.src = 'music/lyfe.png';
    lyfeImg.classList.add('hover-zoom');
    lyfeImg.id = 'musicID';
    document.body.appendChild(lyfeImg);
    lyfeImg.addEventListener('click', () => {
      window.open('https://yeat.lnk.to/Lyfe', '_blank')
    });

    // Add lyfe image
    const aliveImg = document.createElement('img');
    aliveImg.title = '2 Alive - yeat';
    aliveImg.src = 'music/2alive.png';
    aliveImg.classList.add('hover-zoom');
    aliveImg.id = 'musicID';
    document.body.appendChild(aliveImg);
    aliveImg.addEventListener('click', () => {
      window.open('https://yeat.lnk.to/2Alive', '_blank')
    });

    // Add title
    const aTitle = document.createElement('a');
    aTitle.href = 'https://www.example.com/';
    const newTitle = document.createElement('b');
    newTitle.id = 'title';
    newTitle.innerText = 'braden @ 2023';
    aTitle.appendChild(newTitle);
    document.body.appendChild(aTitle);

    // Add Instagram logo and link
    const instagramLogo = document.createElement('a');
    instagramLogo.href = 'https://www.instagram.com/vhs2';
    const logoImage = document.createElement('img');
    logoImage.src = 'assets/instagram.png';
    logoImage.id = 'instagram';
    instagramLogo.appendChild(logoImage);
    document.body.appendChild(instagramLogo);

    // create music label
    const music = document.createElement('b');
    music.innerText = 'music';
    music.id = 'music';
    document.body.appendChild(music);

    // domain collection
    const domains = document.createElement('b');
    domains.innerText = 'domains';
    domains.id = 'domains';
    document.body.appendChild(domains)

    // Add tonka.lol image
    const tonka = document.createElement('img');
    tonka.title = 'tonka.lol';
    tonka.src = 'domains/tonkalol.png';
    tonka.classList.add('hover-zoom');
    tonka.id = 'domain';
    document.body.appendChild(tonka);

    // Add tonka.lol image
    const afterlyfelol = document.createElement('img');
    afterlyfelol.title = 'afterlyfe.lol';
    afterlyfelol.src = 'domains/afterlyfelol.png';
    afterlyfelol.classList.add('hover-zoom');
    afterlyfelol.id = 'domain';
    document.body.appendChild(afterlyfelol);

    // Add tonka.lol image
    const hoodielol = document.createElement('img');
    hoodielol.title = 'hoodie.lol';
    hoodielol.src = 'domains/hoodielol.png';
    hoodielol.classList.add('hover-zoom');
    hoodielol.id = 'domain';
    document.body.appendChild(hoodielol);

    // Add tonka.lol image
    const turbanlol = document.createElement('img');
    turbanlol.title = 'turban.lol';
    turbanlol.src = 'domains/turbanlol.png';
    turbanlol.classList.add('hover-zoom');
    turbanlol.id = 'domain';
    document.body.appendChild(turbanlol);

    // Add tonka.lol image
    const twizzylol = document.createElement('img');
    twizzylol.title = 'twizzy.lol';
    twizzylol.src = 'domains/twizzylol.png';
    twizzylol.classList.add('hover-zoom');
    twizzylol.id = 'domain';
    document.body.appendChild(twizzylol);

    // Add tonka.lol image
    const uruslol = document.createElement('img');
    uruslol.title = 'urus.lol';
    uruslol.src = 'domains/uruslol.png';
    uruslol.classList.add('hover-zoom');
    uruslol.id = 'domain';
    document.body.appendChild(uruslol);

    document.body.appendChild(passwordInput);
  }
});
