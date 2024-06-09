
document.addEventListener('DOMContentLoaded', async (event) => {
    const data = await getAllDogs();

    async function displayDogs(data) {

        const cardsContainer = document.getElementById('dog-cards');
        cardsContainer.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            createCard(data[i]);
        }
    }

    function createCard(dog) {
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
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(origin);

        card.classList.add('dog-card');

        document.getElementById('dog-cards').appendChild(card);
    }

    async function getAllDogs() {
        const url = new URL("/api/v1/dogs", "https://freetestapi.com");
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



    async function displaySortedDogs() {
        const sortOrder = document.getElementById('sortCards').value;

        if (sortOrder === 'default') {
            displayDogs(data);
        }
        else {
            const data = await getSortedDogs(sortOrder);

            const cardsContainer = document.getElementById('dog-cards');
            cardsContainer.innerHTML = '';

            for (let i = 0; i < data.length; i++) {
                createCard(data[i]);
            }
        }
    }

    async function getSortedDogs(order) {
        const url = new URL("/api/v1/dogs", "https://freetestapi.com");
        if (order === 'name_desc') {
            url.searchParams.set('sort', 'name');
            url.searchParams.set('order', 'desc');
        } else if (order === 'name_asc') {
            url.searchParams.set('sort', 'name');
            url.searchParams.set('order', 'asc');
        }
    
        const request = new Request(url);
        const response = await fetch(request);
    
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Network error");
        }
    }

    displayDogs(data);

    document.getElementById("search").addEventListener("input", async function () {
        const query = document.getElementById('search').value.toLowerCase();
        const url = new URL("/api/v1/dogs", "https://freetestapi.com");
        url.searchParams.set('search', query);
        const request = new Request(url);
        const response = await fetch(request);

        if (response.ok) {
            const data = await response.json();

            displayDogs(data);
        }
    });
    document.getElementById('sortCards').addEventListener('change', displaySortedDogs);
});