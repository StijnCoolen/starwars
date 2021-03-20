import Searchbar from "./searchbar";
import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Header.module.scss"

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.logo}>
                    <Image src={'/assets/logo.png'} width={100} height={43} alt={"Star Wars"} />
                </a>
            </Link>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <Image src={'/assets/logo.png'} width={100} height={43} alt={"Star Wars"} />
                    <h1>Directory</h1>
                </div>
                <p className={styles.subtitle}>Find your favorite Characters, Films, Species, Starships and Planets</p>
                <Searchbar/>
            </div>
        </header>
    )
}
