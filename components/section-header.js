import styles from '../styles/SectionHeader.module.scss';

export default function SectionHeader({text}) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.sectionHeader}>{text}</h2>
            <hr className={styles.line}/>
        </div>
    );
}
