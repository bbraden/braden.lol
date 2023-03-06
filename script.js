const counter = document.querySelector(".counter");
const title = document.querySelector("#title");
const incrementBtn = document.querySelector("#incrementBtn");
const instagram = document.querySelector("#instagram");

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
    afterlyfeImg.src = 'afterlyfe.png';
    afterlyfeImg.classList.add('hover-zoom');
    afterlyfeImg.id = 'afterlyfeImg';
    document.body.appendChild(afterlyfeImg);

    // Add lyfe image
    const lyfeImg = document.createElement('img');
    lyfeImg.title = 'Lyfe - yeat';
    lyfeImg.src = 'lyfe.png';
    lyfeImg.classList.add('hover-zoom');
    lyfeImg.id = 'lyfeImg';
    document.body.appendChild(lyfeImg);

    // Add lyfe image
    const aliveImg = document.createElement('img');
    aliveImg.title = '2 Alive - yeat';
    aliveImg.src = '2alive.png';
    aliveImg.classList.add('hover-zoom');
    aliveImg.id = 'aliveImg';
    document.body.appendChild(aliveImg);

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
    logoImage.src = 'instagram.png';
    logoImage.id = 'instagram';
    instagramLogo.appendChild(logoImage);
    document.body.appendChild(instagramLogo);

    // create music label
    const music = document.createElement('b');
    music.innerText = 'music';
    music.id = 'music';
    document.body.appendChild(music);

  }
});
