import styles from "./NotificationCard.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";

export default function NotificationCard({ id, title, type, date, onDelete }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <DeleteButton onClick={() => onDelete(id)} />
            </div>
            <p><strong>Tipo:</strong> {type}</p>
            <p><strong>Data:</strong> {date}</p>
        </div>
    );
}
