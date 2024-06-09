document.addEventListener("DOMContentLoaded", async (event) => {
    const data = await getAllBirds();

    async function displayBirds(data) {
        const cardsContainer = document.getElementById('bird-cards')
        cardsContainer.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            createCard(data[i]);
        }
    }

    function createCard(bird) {
        const image = document.createElement("img");
        image.classList.add("birds-photos");
        image.src = bird.image;

        const name = document.createElement("p");
        name.classList.add("birds-names");
        name.textContent = bird.name;

        const origin = document.createElement("p");
        origin.classList.add("birds-origin");
        origin.textContent = bird.place_of_found;

        const card = document.createElement("div");

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(origin);
        card.classList.add("bird-card")

        document.getElementById("bird-cards").appendChild(card);
    }

    async function getAllBirds() {
        const url = new URL('/api/v1/birds', "https://freetestapi.com");
        const request = new Request(url);

        const response = await fetch(request);
        if (response.ok) {
            const data = response.json();
            return data;
        } else throw new Error("Network error");
    }

    async function displaySortedBirds() {
        const sortValue = document.getElementById('sortCards').value;

        if (sortValue === 'default') {
            displayBirds(data);
        }
        else {
            const data = await getSortedBirds(sortValue);

            const cardsContainer = document.getElementById('bird-cards');
            cardsContainer.innerHTML = '';

            for (let i = 0; i < data.length; i++) {
                createCard(data[i]);
            }
        }
    }

    async function getSortedBirds(order) {
        const url = new URL("/api/v1/birds", "https://freetestapi.com");
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
            const data = response.json();
            return data;
        } else throw new Error("Network error");
    }

    displayBirds(data);

    document.getElementById("search").addEventListener("input", async function () {
        const query = document.getElementById('search').value.toLowerCase();
        const cards = document.querySelectorAll('.bird-card');

        const url = new URL("/api/v1/birds", "https://freetestapi.com");
        url.searchParams.set('search', query);
        const request = new Request(url);
        const response = await fetch(request);

        if (response.ok) {
            const data = await response.json();
            displayBirds(data);
        }
    });
    document.getElementById('sortCards').addEventListener('change', displaySortedBirds);
});