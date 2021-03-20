import styles from '../styles/PlanetCard.module.scss'
import { useState } from 'react'

export default function PlanetCard({planet}) {
    const [randomNumber] = useState(Math.floor(Math.random() * 3) + 1);

    return (
        <div className={styles.card}>
            <img src={'/assets/planet-' + randomNumber + '.jpg'} alt={planet.name}/>
            <div className={styles.content}>
                <p>{planet.name}</p>
            </div>
        </div>
    )
}
