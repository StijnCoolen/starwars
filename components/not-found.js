import styles from '../styles/NotFound.module.scss';

export default function NotFound() {
    return (
        <div className={styles.wrapper}>
            <h3>No results here...</h3>
            <img src="https://media.giphy.com/media/eJnXPUTnDE7V6/giphy.gif" alt="Not found..."/>
        </div>
    );
}
