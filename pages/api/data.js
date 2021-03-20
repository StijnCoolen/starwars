import axios from 'axios'

const baseUrl = 'https://swapi.dev/api/'

async function getAll(resourceName) {
    const items = [];
    let currentPage = 1;
    let id = 0;
    let page = undefined;

    do {
        page = await axios.get(baseUrl + resourceName + '/?page=' + currentPage)

        page.data.results.map(item => {
            id = id + 1;
            item.id = id;
            items.push(item)
        })

        currentPage += 1;
    } while (items.length < page.data.count)

    return items;
}

async function getPopular(resourceName, amount) {
    const items = []
    let id = 0;
    const result = await axios.get(baseUrl + resourceName).then(res => res.data.results)

    result.map(item => {
        id = id + 1;
        item.id = id;
        items.push(item);
    })

    return items.slice(0, amount);
}

export async function getPopularPeople() {
    return await getPopular('people', 4)
}

export async function getAllPeople() {
   return await getAll('people')
}

export async function getPopularPlanets() {
    return await getPopular('planets', 6)
}

export async function getAllPlanets() {
    return await getAll('planets')
}

export async function getPopularStarShips() {
    return await getPopular('starships', 6)
}

export function getAllStarShips() {
   return getAll('starships')
}
