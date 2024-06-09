async function displayDogs() {
    const data = await getFirstFiveDogs();

    for (let i = 0; i < data.length; i++) {
        createDogCard(data[i]);
    }
}

function createDogCard(dog){
    const image = document.createElement('img');
    image.classList.add('dogs-photos');
    image.src = dog.image;

    const name = document.createElement('p');
    name.classList.add('dogs-names');
    name.textContent = dog.name;

    const origin = document.createElement('p');
    origin.classList.add('dogs-origin');
    origin.textContent = dog.origin;

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.dogId = dog.id;
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(origin);

    const modalCard = document.createElement('div');
    modalCard.id = `modal-${dog.id}`;
    modalCard.classList.add('modal-card');

    const modalImage = document.createElement('img');
    modalImage.classList.add('dogs-modal-image');
    modalImage.src = dog.image;

    const modalName = document.createElement('p');
    modalName.classList.add('dogs-modal-name');
    modalName.textContent = dog.name;

    const modalDescription = document.createElement('p');
    modalDescription.classList.add('dogs-modal-description');
    modalDescription.textContent = dog.description;

    const closeModal = document.createElement('button');
    closeModal.textContent = 'Close';
    closeModal.classList.add('close-modal');
    closeModal.addEventListener('click', () => {
        modalCard.style.display = 'none';
        document.getElementById('modal').style.display = 'none';
    });

    modalCard.appendChild(modalImage);
    modalCard.appendChild(modalName);
    modalCard.appendChild(modalDescription);
    modalCard.appendChild(closeModal);
    
    document.getElementById('modal').appendChild(modalCard);

    
    card.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal-card');
        modals.forEach(modal => modal.style.display = 'none');
        document.getElementById('modal').style.display = 'grid';
        modalCard.style.display = 'block';
    });     

    document.getElementById("card-container").appendChild(card);

}

async function getFirstFiveDogs() {
    const url = new URL("/api/v1/dogs?limit=5", "https://freetestapi.com");
    const request = new Request(url);
    const response = await fetch(request);

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    else {
        throw new Error("Network error");
    }
}

displayDogs();

async function displayCats() {
    const data = await getFirstFiveCats();

    for (let i = 0; i < data.length; i++) {
        createCatCard(data[i]);
    }
}

function createCatCard(cat){
    const image = document.createElement('img');
    image.classList.add('cats-photos');
    image.src = cat.image;

    const name = document.createElement('p');
    name.classList.add('cats-names');
    name.textContent = cat.name;

    const origin = document.createElement('p');
    origin.classList.add('cats-origin');
    origin.textContent = cat.origin;

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.catId = cat.id;
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(origin);

    const modalCard = document.createElement('div');
    modalCard.id = `modal-${cat.id}`;
    modalCard.classList.add('modal-card');

    const modalImage = document.createElement('img');
    modalImage.classList.add('cats-modal-image');
    modalImage.src = cat.image;

    const modalName = document.createElement('p');
    modalName.classList.add('cats-modal-name');
    modalName.textContent = cat.name;

    const modalDescription = document.createElement('p');
    modalDescription.classList.add('cats-modal-description');
    modalDescription.textContent = cat.description;

    const closeModal = document.createElement('button');
    closeModal.textContent = 'Close';
    closeModal.classList.add('close-modal');
    closeModal.addEventListener('click', () => {
        modalCard.style.display = 'none';
        document.getElementById('modal').style.display = 'none';
    });

    modalCard.appendChild(modalImage);
    modalCard.appendChild(modalName);
    modalCard.appendChild(modalDescription);
    modalCard.appendChild(closeModal);
    
    document.getElementById('modal').appendChild(modalCard);

    
    card.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal-card');
        modals.forEach(modal => modal.style.display = 'none');
        document.getElementById('modal').style.display = 'grid';
        modalCard.style.display = 'block';
    }); 

    document.getElementById("card-container1").appendChild(card);

}

async function getFirstFiveCats() {
    const url = new URL("/api/v1/cats?limit=5", "https://freetestapi.com");
    const request = new Request(url);
    const response = await fetch(request);

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    else {
        throw new Error("Network error");
    }
}

displayCats();

async function displayBirds() {
    const data = await getFirstFiveBirds();

    for (let i = 0; i < data.length; i++) {
        createBirdCard(data[i]);
    }
}

function createBirdCard(bird){
    const image = document.createElement('img');
    image.classList.add('birds-photos');
    image.src = bird.image;

    const name = document.createElement('p');
    name.classList.add('birds-names');
    name.textContent = bird.name;

    const origin = document.createElement('p');
    origin.classList.add('birds-origin');
    origin.textContent = bird.place_of_found;

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.birdId = bird.id;
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(origin);

    
    const modalCard = document.createElement('div');
    modalCard.id = `modal-${bird.id}`;
    modalCard.classList.add('modal-card');

    const modalImage = document.createElement('img');
    modalImage.classList.add('birds-modal-image');
    modalImage.src = bird.image;

    const modalName = document.createElement('p');
    modalName.classList.add('birds-modal-name');
    modalName.textContent = bird.name;

    const modalDescription = document.createElement('p');
    modalDescription.classList.add('birds-modal-description');
    modalDescription.textContent = bird.description;

    const closeModal = document.createElement('button');
    closeModal.textContent = 'Close';
    closeModal.classList.add('close-modal');
    closeModal.addEventListener('click', () => {
        modalCard.style.display = 'none';
        document.getElementById('modal').style.display = 'none';
    });

    modalCard.appendChild(modalImage);
    modalCard.appendChild(modalName);
    modalCard.appendChild(modalDescription);
    modalCard.appendChild(closeModal);
    
    document.getElementById('modal').appendChild(modalCard);

    
    card.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal-card');
        modals.forEach(modal => modal.style.display = 'none');
        document.getElementById('modal').style.display = 'grid';
        modalCard.style.display = 'block';
    }); 
    document.getElementById("card-container2").appendChild(card);

}

async function getFirstFiveBirds() {
    const url = new URL("/api/v1/birds?limit=5", "https://freetestapi.com");
    const request = new Request(url);
    const response = await fetch(request);

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    else {
        throw new Error("Network error");
    }
}

displayBirds();


document.getElementById("search").addEventListener("input",function(){
    const query = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const name = card.querySelector('.dogs-names, .cats-names, .birds-names').textContent.toLowerCase();
        if(name.includes(query)){
            card.classList.remove('hidden');
        }else{
            card.classList.add('hidden');
        }
    });
});

function redirectToDogs(){
    window.location.href = "dogs.html";
}

function redirectToCats(){
    window.location.href = "cats.html";
}

function redirectToBirds(){
    window.location.href = "birds.html";
}

console.log(window.location.href);