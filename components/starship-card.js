import Link from 'next/link'
import {useState} from 'react'

import styles from '../styles/StarshipCard.module.scss'

export default function StarshipCard({starship}) {
    const [randomNumber] = useState(Math.floor(Math.random() * 6) + 1);

    return (
        <div className={styles.wrapper}>
            <div className={styles.cardImage}>
                <img src={'/assets/starship-' + (randomNumber) + '.jpg'} alt={starship.name}/>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{starship.name}</h3>
                <p className={styles.cardDescription}>Is a {starship.model} manufactured by {starship.manufacturer}.</p>
                <Link href={'/starships/' + starship.id }>
                    <a className={styles.cardButton}>Read More</a>
                </Link>
            </div>
        </div>
    )
}
