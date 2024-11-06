// components/InvestmentCard.js
import { useState } from "react";
import styles from "./componentsStyles/InvestCard.module.css";
import { MdDeleteForever } from "react-icons/md";

export default function InvestCard({ id, type, value, institution, growthTax, growth, onDelete }) {  
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        setShowModal(true);
    };

    const confirmDelete = () => {
        onDelete(id);
        setShowModal(false);
    };

    const cancelDelete = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{type}</h3>
                <button className={styles.deleteButton} onClick={handleDelete}>
                    <MdDeleteForever />
                </button>
            </div>
            <p><strong>Instituição:</strong> {institution}</p>
            <p><strong>Valor:</strong> R$ {value.toFixed(2)}</p>
            <p><strong>Taxa de crescimento:</strong> {growthTax}%</p>
            <p><strong>Crescimento esperado em um ano:</strong><span className={styles.growthSpan}> + R$ {growth.toFixed(2)}</span></p>

            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <p>Tem certeza que deseja excluir este investimento?</p>
                        <button onClick={confirmDelete} className={styles.confirmButton}>Sim</button>
                        <button onClick={cancelDelete} className={styles.cancelButton}>Não</button>
                    </div>
                </div>
            )}
        </div>
    );
}
