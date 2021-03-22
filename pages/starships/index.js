import { useState } from 'react';
import Layout from '../../components/layout';
import SectionHeader from '../../components/section-header';
import StarshipCard from '../../components/starship-card';
import {getAllStarShips, searchResource} from '../../lib/swapi';
import GridContainer from '../../components/grid-container';
import NotFound from '../../components/not-found';
import BackButton from '../../components/back-button';
import SEO from '../../components/seo';

export async function getStaticProps () {
  return {
    props: {
      starships: await getAllStarShips()
    }
  };
}

export default function StarshipsPage ({ starships }) {
  const [data, setData] = useState(starships);

  const onSearch = async (query) => {
    const results = await searchResource('starships', query);
    setData(results);
  };

  return (
        <Layout onSearch={onSearch} searchPlaceholder="Search by name or model">
            <SEO title="Starships"/>
            <section className="section">
                {data.length ? (
                    <>
                        <SectionHeader text="All Starships"/>
                        <GridContainer columns={3}>
                            {data.map((starship) => (
                                <StarshipCard starship={starship} key={starship.name}/>
                            ))}
                        </GridContainer>
                        <BackButton href="/" title="Back to home"/>
                    </>
                ) :
                    <NotFound/>
                }

            </section>
        </Layout>
  );
}
