import Layout from '../components/layout';

import Button from '../components/button';
import SectionHeader from '../components/section-header';
import StarshipCard from '../components/starship-card';
import Slider from '../components/slider';
import CharacterCard from '../components/character-card';
import GridContainer from '../components/grid-container';
import SEO from '../components/seo';
import {
    getPopularPeople,
    getPopularPlanets,
    getPopularStarShips
} from '../lib/swapi';

export async function getStaticProps() {
  return {
    props: {
      people: await getPopularPeople(),
      planets: await getPopularPlanets(),
      starships: await getPopularStarShips()
    }
  };
}

export default function Home({people, planets, starships}) {
  return (
    <Layout hideSearch={true}>
       <SEO/>
      <section className="section">
        <SectionHeader text="Popular Starships"/>
        <GridContainer columns={3}>
          {starships.map((ship) => (
            <StarshipCard starship={ship} key={ship.name}/>
          ))}
        </GridContainer>
        <Button href="/starships" text="View more"/>
      </section>

      <section className="section">
        <SectionHeader text="Popular Planets"/>
        <Slider data={planets}/>
        <Button href="/planets" text="View more"/>
      </section>

      <section className="section">
        <SectionHeader text="Popular Characters"/>
        <GridContainer columns={2}>
          {people.map((person, index) => (
            <CharacterCard character={person} index={index + 1} key={person.name}/>
          ))}
        </GridContainer>
        <Button href="/characters" text="View more"/>
      </section>
    </Layout>
  );
}
