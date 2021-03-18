import Layout from '../components/layout'
import { getAllPeople, getAllPlanets, getAllStarShips } from './api/data'

export async function getStaticProps() {
  return {
    props: {
      people: await getAllPeople(),
      planets: await getAllPlanets(),
      starships: await getAllStarShips()
    }
  }
}

export default function Home({people, planets, starships}) {
  return (
    <Layout>
      <ul>
        {people.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>

      <ul>
        {planets.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
      
      <ul>
        {starships.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </Layout>
  )
}
