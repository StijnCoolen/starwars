import Layout from '../components/layout'
import Link from 'next/link'

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
      <section>
        <h2>Popular Starships</h2>
        <ul>
          {starships.map((ship) => (
            <li>{ship.name}</li>
          ))}
        </ul>
        <Link href="/starships">
          <a>View more</a>
        </Link>
      </section>
      
      <section>
        <h2>Popular Planets</h2>
        <ul>
          {planets.map((planet) => (
            <li>{planet.name}</li>
          ))}
        </ul>
      </section>
      
      <section>
        <h2>Popular Characters</h2>
        <ul>
          {people.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      </section>
      <Link href="/characters">
          <a>View more</a>
        </Link>
    </Layout>
  )
}
