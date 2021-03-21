import Layout from "../../components/layout";
import SectionHeader from "../../components/section-header";
import StarshipCard from "../../components/starship-card";
import {getAllStarShips} from "../api/data";
import GridContainer from "../../components/grid-container";

export async function getStaticProps() {
    return {
        props: {
            starships: await getAllStarShips()
        }
    }
}

export default function StarshipsPage({starships}) {
    return (
        <Layout>
            <section className={"section"}>
                <SectionHeader text="All Starships"/>
                <GridContainer columns={3}>
                    {starships.map((starship) => (
                        <StarshipCard starship={starship} />
                    ))}
                </GridContainer>
            </section>
        </Layout>
    )
}
