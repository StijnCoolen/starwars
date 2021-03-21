import { useState } from 'react';
import Layout from '../../components/layout';
import {getAllPlanets, searchResource} from '../api/data';
import SectionHeader from '../../components/section-header';
import GridContainer from '../../components/grid-container';
import PlanetCard from '../../components/planet-card';
import NotFound from '../../components/not-found';
import BackButton from '../../components/back-button';
import SEO from '../../components/seo';

export async function getStaticProps () {
    return {
        props: {
            planets: await getAllPlanets()
        }
    };
}

export default function PlanetsPage({planets}) {
    const [data, setData] = useState(planets);

    const onSearch = async (query) => {
        const results = await searchResource('planets', query);
        setData(results);
    };

    return(
        <Layout onSearch={onSearch} searchPlaceholder="Search by name">
            <SEO title="PLanets"/>
            <section className="section">
                {data.length ? (
                    <>
                        <SectionHeader text="All Planets"/>
                        <GridContainer columns={3}>
                            {data.map((planet) => (
                                <PlanetCard planet={planet} key={planet.name}/>
                            ))}
                        </GridContainer>
                        <BackButton href="/" title="Back to home"/>
                    </>
                ) : <NotFound/>
                }
            </section>
        </Layout>
    );
}
