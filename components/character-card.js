import styles from '../styles/CharacterCard.module.scss'

import Link from 'next/link'

export default function CharacterCard({character, index}) {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={'/assets/character-' + index + '.jpg'} alt={character.name}/>
            <div className={styles.content}>
                <h4>{character.name}</h4>
                <span>{character.gender}, born {character.birth_year}</span>
                <Link href={'/characters/' + character.id}>
                    <a className={styles.link}>Read More</a>
                </Link>
            </div>
        </div>
    )
}
