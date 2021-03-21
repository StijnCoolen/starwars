import styles from '../styles/CharacterCard.module.scss'
import {useState} from 'react'

import Link from 'next/link'

export default function CharacterCard({character, index}) {
    const [randomNumber] = useState(Math.floor(Math.random() * 4) + 1);

    return (
        <div className={styles.card}>
            <img className={styles.image} src={'/assets/character-' + randomNumber + '.jpg'} alt={character.name}/>
            <div className={styles.content}>
                <h3>{character.name}</h3>
                <span>{character.gender}, born {character.birth_year}</span>
                <Link href={'/characters/' + character.id}>
                    <a className={styles.link}>Read More</a>
                </Link>
            </div>
        </div>
    )
}
