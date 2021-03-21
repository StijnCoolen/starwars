import Layout from '../components/layout'

import {
    getPopularPeople,
    getPopularPlanets,
    getPopularStarShips
} from './api/data'
import Button from "../components/button";
import SectionHeader from "../components/section-header";
import StarshipCard from "../components/starship-card";
import Slider from "../components/slider";
import CharacterCard from "../components/character-card";
import GridContainer from "../components/grid-container";

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
        <GridContainer columns={3}>
          {starships.map((ship) => (
            <StarshipCard starship={ship} />
          ))}
        </GridContainer>
        <Button href="/starships" text="View more"/>
      </section>

      <section className={"section"}>
        <SectionHeader text="Popular Planets"/>
        <Slider data={planets}/>
      </section>

      <section className={"section"}>
        <SectionHeader text="Popular Characters"/>
        <GridContainer columns={2}>
          {people.map((person, index) => (
            <CharacterCard character={person} index={index + 1}/>
          ))}
        </GridContainer>
        <Button href="/characters" text="View more"/>
      </section>
    </Layout>
  )
}
