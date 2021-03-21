import Layout from "../../components/layout";
import {getAllStarShips, getStarShipWithId} from "../api/data";
import DataRow from "../../components/data-row";
import {useState} from "react";
import SectionHeader from "../../components/section-header";
import Link from 'next/link'

import styles from '../../styles/StarshipDetailPage.module.scss'

export async function getStaticProps(context) {
    return {
        props: {
            starship: await getStarShipWithId(context.params.id)
        }
    }
}

export async function getStaticPaths() {
    const starships = await getAllStarShips()

    const paths = starships.map(starship => {
        return {
            params: {
                id: starship.id
            }
        }
    })

    return {paths, fallback: false}
}

export default function StarshipDetailPage({starship}) {
    const [randomNumber] = useState(Math.floor(Math.random() * 3) + 1);

    return (
        <Layout>
            <section className={'section'}>
                <Link href={'/starships'}>
                    <a>Back to all Starships</a>
                </Link>
                <img src={'/assets/starship-' + randomNumber + '.jpg' } alt={starship.name} className={styles.image}/>
                <SectionHeader text={starship.name}/>
                <div>
                    <DataRow label={'MGLT'} value={starship.MGLT}/>
                    <DataRow label={'Cargo capacity'} value={starship.cargo_capacity}/>
                    <DataRow label={'Consumables'} value={starship.consumables}/>
                    <DataRow label={'Cost in credits'} value={starship.cost_in_credits}/>
                    <DataRow label={'Crew'} value={starship.crew}/>
                    <DataRow label={'Hyperdrive rating'} value={starship.hyperdrive_rating}/>
                    <DataRow label={'Length'} value={starship.length}/>
                    <DataRow label={'Manufacturer'} value={starship.manufacturer}/>
                    <DataRow label={'Max atmosphering speed'} value={starship.max_atmosphering_speed}/>
                    <DataRow label={'Model'} value={starship.model}/>
                    <DataRow label={'Passengers'} value={starship.passengers}/>
                    <DataRow label={'Starship class'} value={starship.starship_class}/>
                </div>
            </section>
        </Layout>
    )
}
