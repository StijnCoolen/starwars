import Layout from "../../components/layout";
import SectionHeader from "../../components/section-header";
import StarshipCard from "../../components/starship-card";
import {getAllStarShips} from "../api/data";
import styles from "../../styles/Home.module.scss";

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
                <SectionHeader text="Popular Starships"/>
                <div className={styles.gridContainer3}>
                    {starships.map((starship) => (
                        <StarshipCard starship={starship} />
                    ))}
                </div>
            </section>
        </Layout>
    )
}
