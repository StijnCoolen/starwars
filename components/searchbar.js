import styles from "../styles/Searchbar.module.scss"

export default function Searchbar () {
    return (
        <form className={styles.bar}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input className={styles.input} type="text" name="search" placeholder="Enter a search term"/>
        </form>
    )
}
