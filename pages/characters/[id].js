import {useState} from 'react';
import Layout from '../../components/layout';
import {getAllPeople, getCharacterWithId} from '../../lib/swapi';
import styles from '../../styles/StarshipDetailPage.module.scss';
import SectionHeader from '../../components/section-header';
import DataRow from '../../components/data-row';
import BackButton from '../../components/back-button';
import SEO from '../../components/seo';

export async function getStaticProps(context) {
    return {
        props: {
            character: await getCharacterWithId(context.params.id)
        }
    };
}

export async function getStaticPaths() {
    const characters = await getAllPeople();

    const paths = characters.map(character => {
        return {
            params: {
                id: character.id
            }
        };
    });

    return {paths, fallback: false};
}

export default function CharacterDetailPage({character}) {
    const [randomNumber] = useState(Math.floor(Math.random() * 4) + 1);

    return (
        <Layout hideSearch={true}>
            <section className="section">
                <SEO title={character.name}/>
                <img src={'/assets/character-' + randomNumber + '.jpg' } alt={character.name} className={styles.image}/>
                <SectionHeader text={character.name}/>
                <DataRow label="Height" value={character.height}/>
                <DataRow label="Mass" value={character.mass}/>
                <DataRow label="Hair color" value={character.hair_color}/>
                <DataRow label="Skin color" value={character.skin_color}/>
                <DataRow label="Eye color" value={character.eye_color}/>
                <DataRow label="Birth year" value={character.birth_year}/>
                <DataRow label="Gender" value={character.gender}/>
                <BackButton href="/characters" title="Back to all Characters"/>
            </section>
        </Layout>
    );
}
