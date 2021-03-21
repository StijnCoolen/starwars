import styles from '../styles/DataRow.module.scss';

export default function DataRow({label, value}) {
    return (
        <div className={styles.row}>
            <p className={styles.label}>{label}</p>
            <span>{value}</span>
        </div>
    );
}
