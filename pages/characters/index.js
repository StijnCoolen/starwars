import {useState} from 'react';
import Layout from '../../components/layout';
import SectionHeader from '../../components/section-header';
import {getAllPeople, searchResource} from '../api/data';
import CharacterCard from '../../components/character-card';
import GridContainer from '../../components/grid-container';
import BackButton from '../../components/back-button';
import NotFound from '../../components/not-found';
import SEO from '../../components/seo';

export async function getStaticProps() {
    return {
        props: {
            characters: await getAllPeople()
        }
    };
}

export default function CharactersPage({characters}) {
    const [data, setData] = useState(characters);

    const onSearch = async (query) => {
        const results = await searchResource('people', query);
        setData(results);
    };

    return (
        <Layout onSearch={onSearch} searchPlaceholder="Search by name">
            <SEO title="Characters"/>
            <section className="section">
                {data.length ? (
                    <>
                        <SectionHeader text="All Characters"/>
                        <GridContainer columns={2}>
                            {data.map((character) => (
                                <CharacterCard character={character} key={character.name}/>
                            ))}
                        </GridContainer>
                        <BackButton href="/" title="Back to Home"/>
                    </>
                ) : <NotFound/>}
            </section>
        </Layout>
    );
}
