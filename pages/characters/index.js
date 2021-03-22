import {useState} from 'react';
import Select from 'react-select';
import Layout from '../../components/layout';
import SectionHeader from '../../components/section-header';
import {getAllPeople, searchResource} from '../../lib/swapi';
import CharacterCard from '../../components/character-card';
import GridContainer from '../../components/grid-container';
import BackButton from '../../components/back-button';
import NotFound from '../../components/not-found';
import SEO from '../../components/seo';
import styles from '../../styles/CharactersPage.module.scss';

export async function getStaticProps() {
    return {
        props: {
            characters: await getAllPeople()
        }
    };
}

const options = [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
    {value: 'n/a', label: 'No gender (robot)'},
];

export default function CharactersPage({characters}) {
    const [data, setData] = useState(characters);

    const onSearch = async (query) => {
        const results = await searchResource('people', query);
        setData(results);
    };

    const onSelect = (e) => {
        const results = characters.filter((user) => user.gender === e.value);
        setData(results);
    };

    return (
        <Layout onSearch={onSearch} searchPlaceholder="Search by name">
            <SEO title="Characters"/>
            <section className="section">
                {data.length ? (
                    <>
                        <div className={styles.wrapper}>
                            <span>Filter</span>
                            <Select options={options} onChange={onSelect} placeholder="Filter by gender" className={styles.select}/>
                        </div>
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
