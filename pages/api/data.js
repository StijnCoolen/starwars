import axios from 'axios'

const baseUrl = 'https://swapi.dev/api'

export async function getAllPeople() {
    return axios.get(`${baseUrl}/people`).then(res => res.data.results)
}

export function getAllPlanets() {
    return axios.get(`${baseUrl}/planets`).then(res => res.data.results)
}

export function getAllStarShips() {
    return axios.get(`${baseUrl}/starships`).then(res => res.data.results)
}