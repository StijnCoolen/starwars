import Link from 'next/link';
import styles from '../styles/Button.module.scss'

export default function Button({text, href}) {
    return (
        <Link href={href}>
            <a className={styles.button}>{text}</a>
        </Link>
    )
}
