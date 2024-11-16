import React from 'react';
import NotificationCard from "../NotificationCard/NotificationCard";
import useConfig from "@/hooks/useConfig";
import styles from "./NotificationList.module.css";

export default function NotificationList() {
    const { notifications, handleDeleteNotification } = useConfig();

    return (
        <section className={styles.notificationsSection}>
            {notifications.length === 0 ? (
                <p>Não há notificações configuradas.</p>
            ) : (
                notifications.map((notification) => (
                    <div key={notification.id}>
                        <NotificationCard 
                            {...notification} 
                            onDelete={handleDeleteNotification}
                        />
                    </div>
                ))
            )}
        </section>
    );
}
