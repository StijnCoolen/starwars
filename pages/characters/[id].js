import Link from 'next/link';
import {useState} from 'react'
import Layout from '../../components/layout';
import {getAllPeople, getCharacterWithId} from '../api/data';
import styles from '../../styles/StarshipDetailPage.module.scss';
import SectionHeader from '../../components/section-header';
import DataRow from '../../components/data-row';

export async function getStaticProps(context) {
    return {
        props: {
            character: await getCharacterWithId(context.params.id)
        }
    }
}

export async function getStaticPaths() {
    const characters = await getAllPeople()

    const paths = characters.map(character => {
        return {
            params: {
                id: character.id
            }
        }
    })

    return {paths, fallback: false}
}

export default function CharacterDetailPage({character}) {
    const [randomNumber] = useState(Math.floor(Math.random() * 4) + 1);

    return (
        <Layout>
            <section className="section">
                <Link href="/characters">
                    <a>Back to all Characters</a>
                </Link>
                <img src={'/assets/character-' + randomNumber + '.jpg' } alt={character.name} className={styles.image}/>
                <SectionHeader text={character.name}/>
                <div>
                    <DataRow label="Height" value={character.height}/>
                    <DataRow label="Mass" value={character.mass}/>
                    <DataRow label="Hair color" value={character.hair_color}/>
                    <DataRow label="Skin color" value={character.skin_color}/>
                    <DataRow label="Eye color" value={character.eye_color}/>
                    <DataRow label="Birth year" value={character.birth_year}/>
                    <DataRow label="Gender" value={character.gender}/>
                </div>
            </section>
        </Layout>
    )
}
