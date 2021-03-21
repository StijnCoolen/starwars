import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/PlanetCard.module.scss';

export default function PlanetCard({planet}) {
    const [randomNumber] = useState(Math.floor(Math.random() * 3) + 1);

    return (
        <Link href={'/planets/' + planet.id}>
            <a className={styles.card}>
                <img src={'/assets/planet-' + randomNumber + '.jpg'} alt={planet.name}/>
                <div className={styles.content}>
                    <h4>{planet.name}</h4>
                    <span>A {planet.climate} planet with {planet.population} inhabitants</span>
                </div>
            </a>
        </Link>
    );
}
