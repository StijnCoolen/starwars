import Layout from "../../components/layout";
import SectionHeader from "../../components/section-header";
import {getAllPeople} from "../api/data";
import CharacterCard from "../../components/character-card";
import GridContainer from "../../components/grid-container";

export async function getStaticProps() {
    return {
        props: {
            characters: await getAllPeople()
        }
    }
}

export default function CharactersPage({characters}) {
    return (
        <Layout>
            <section className={"section"}>
                <SectionHeader text={"All Characters"}/>
                <GridContainer columns={2}>
                    {characters.map((character) => (
                        <CharacterCard character={character}/>
                    ))}
                </GridContainer>
            </section>
        </Layout>
    )
}
