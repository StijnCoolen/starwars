import styles from '../styles/GridContainer.module.scss';

export default function GridContainer({columns, children}) {
    return (
        <div className={columns === 2 ? styles.gridContainer2 : styles.gridContainer3}>
            {children}
        </div>
    );
}
