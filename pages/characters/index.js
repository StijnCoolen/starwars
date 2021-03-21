import Layout from "../../components/layout";
import SectionHeader from "../../components/section-header";
import {getAllPeople} from "../api/data";
import CharacterCard from "../../components/character-card";

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
                <div className={"gridContainer2"}>
                    {characters.map((character) => (
                        <CharacterCard character={character}/>
                    ))}
                </div>
            </section>
        </Layout>
    )
}
