document.addEventListener("DOMContentLoaded", async (event) => {
    const data = await getAllCats();

    async function displayCats(data) {

        const cardsContainer = document.getElementById("cat-cards");
        cardsContainer.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            createCard(data[i]);
        }
    }

    function createCard(cat) {
        const image = document.createElement("img");
        image.classList.add("cats-photos");
        image.src = cat.image;

        const name = document.createElement("p");
        name.classList.add("cats-names");
        name.textContent = cat.name;

        const origin = document.createElement("p");
        origin.classList.add("cats-origin");
        origin.textContent = cat.origin;

        const card = document.createElement("div");

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(origin);
        card.classList.add("cat-card")

        document.getElementById("cat-cards").appendChild(card);
    }

    async function getAllCats() {
        const url = new URL('/api/v1/cats', "https://freetestapi.com");
        const request = new Request(url);

        const response = await fetch(request);
        if (response.ok) {
            const data = response.json();
            return data;
        } else throw new Error("Network error");
    }

    async function displaySortedCats() {
        const sortValue = document.getElementById('sortCards').value;

        if (sortValue === 'default') {
            displayCats(data);
        }
        else {
            const data = await getSortedCats(sortValue);
            const cardsContainer = document.getElementById('cat-cards');
            cardsContainer.innerHTML = '';

            for (let i = 0; i < data.length; i++) {
                createCard(data[i]);
            }
        }

    }

    async function getSortedCats(order) {
        const url = new URL("/api/v1/cats", "https://freetestapi.com");
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

    displayCats(data);

    document.getElementById("search").addEventListener("input", async function () {
        const query = document.getElementById('search').value.toLowerCase();

        const url = new URL("/api/v1/cats", "https://freetestapi.com");
        url.searchParams.set('search', query);
        const request = new Request(url);
        const response = await fetch(request);

        if (response.ok) {
            const data = await response.json();

            displayCats(data);
        }
    });

    document.getElementById('sortCards').addEventListener('change', displaySortedCats);
});