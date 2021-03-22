import Link from 'next/link';
import {useState} from 'react';

import styles from '../styles/StarshipCard.module.scss';

export default function StarshipCard({starship}) {
    const [randomNumber] = useState(Math.floor(Math.random() * 6) + 1);

    return (
        <div className={styles.wrapper}>
            <div className={styles.cardImage}>
                <img src={'/assets/starship-' + (randomNumber) + '.jpg'} alt={starship.name}/>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{starship.name}</h3>
                <p className={styles.cardDescription}>Is a {starship.model} manufactured by {starship.manufacturer}, it can carry {starship.cargo_capacity} kgs.</p>
                <Link href={'/starships/' + starship.id }>
                    <a className={styles.cardButton}>
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </Link>
            </div>
        </div>
    );
}
