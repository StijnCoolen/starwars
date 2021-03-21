import Layout from '../components/layout'
import styles from "../styles/Home.module.scss"

import {
    getPopularPeople,
    getPopularPlanets,
    getPopularStarShips
} from './api/data'
import Button from "../components/button";
import SectionHeader from "../components/section-header";
import StarshipCard from "../components/starship-card";
import Slider from "../components/slider";
import PlanetCard from "../components/planet-card";
import CharacterCard from "../components/character-card";

export async function getStaticProps() {
  return {
    props: {
      people: await getPopularPeople(),
      planets: await getPopularPlanets(),
      starships: await getPopularStarShips()
    }
  }
}

export default function Home({people, planets, starships}) {
  return (
    <Layout>
      <section className={"section"}>
        <SectionHeader text="Popular Starships"/>
        <div className={styles.gridContainer3}>
          {starships.map((ship) => (
            <StarshipCard starship={ship} />
          ))}
        </div>
        <Button href="/starships" text="View more"/>
      </section>

      <section className={"section"}>
        <SectionHeader text="Popular Planets"/>
          {planets.map((planet) => (
            <PlanetCard planet={planet}/>
          ))}
      </section>

      <section className={"section"}>
        <SectionHeader text="Popular Characters"/>
        <div className={styles.gridContainer2}>
          {people.map((person, index) => (
            <CharacterCard character={person} index={index + 1}/>
          ))}
        </div>
        <Button href="/characters" text="View more"/>
      </section>
    </Layout>
  )
}
