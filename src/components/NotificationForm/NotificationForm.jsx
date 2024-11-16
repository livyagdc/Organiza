import useConfig from "@/hooks/useConfig2";
import DynamicForm from "../DynamicForm/DynamicForm";
import styles from "./NotificationForm.module.css";

export default function NotificationForm() {

    const {
        handleAddNotification,
        title,
        setTitle,
        type,
        setType,
        date,
        setDate,
    } = useConfig();

    const notificationFields = [
        {
            label: "Título",
            type: "text",
            value: title,
            onChange: setTitle,
            placeholder: "Título da notificação",
            required: true
        },
        {
            label: "Tipo",
            type: "text",
            style: "select",
            options: [
                { value: "Boleto", label: "Boleto" },
                { value: "Investimento", label: "Investimento" },
                { value: "Holerite", label: "Holerite" },
                { value: "Outro", label: "Outro" },
            ],
            value: type,
            onChange: setType,
            required: true,
        },
        {
            label: "Data",
            type: "date",
            value: date,
            onChange: setDate,
            required: true
        },
    ];

    return (
        <div className={styles.notificationFormDiv}>
            <DynamicForm
                title="Adicionar Notificação"
                fields={notificationFields}
                buttonLabel="Adicionar"
                onSubmit={handleAddNotification}
            />
        </div>
    );
}