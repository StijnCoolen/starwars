import {useState} from 'react';
import Layout from '../../components/layout';
import styles from '../../styles/StarshipDetailPage.module.scss';
import SectionHeader from '../../components/section-header';
import DataRow from '../../components/data-row';
import {getAllPlanets, getPlanetWithId} from '../../lib/swapi';
import BackButton from '../../components/back-button';
import SEO from '../../components/seo';

export async function getStaticProps(context) {
    return {
        props: {
            planet: await getPlanetWithId(context.params.id)
        }
    };
}

export async function getStaticPaths() {
    const planets = await getAllPlanets();

    const paths = planets.map(planet => {
        return {
            params: {
                id: planet.id
            }
        };
    });

    return {paths, fallback: false};
}

export default function PlanetDetailPage({planet}) {
    const [randomNumber] = useState(Math.floor(Math.random() * 3) + 1);

    return (
        <Layout hideSearch={true}>
            <section className="section">
                <SEO title={planet.name}/>
                <img src={'/assets/planet-' + randomNumber + '.jpg' } alt={planet.name} className={styles.image}/>
                <SectionHeader text={planet.name}/>
                <DataRow label="Cimate" value={planet.climate}/>
                <DataRow label="Diameter" value={planet.diameter}/>
                <DataRow label="Gravity" value={planet.gravity}/>
                <DataRow label="Orbital period" value={planet.orbital_period}/>
                <DataRow label="Population" value={planet.population}/>
                <DataRow label="Rotation period" value={planet.rotation_period}/>
                <DataRow label="Surface water" value={planet.surface_water}/>
                <DataRow label="Terrain" value={planet.terrain}/>
                <BackButton href="/planets" title="Back to all Planets"/>
            </section>
        </Layout>
    );
}
