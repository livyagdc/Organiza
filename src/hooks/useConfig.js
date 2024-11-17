import { useEffect, useState } from "react";


const requestNotificationPermisson = () => {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission !== 'granted') {
                console.log('Permissão para notificações negada');
            }
        })
    };
};

const showNotification = (title, body) => {
    if (Notification.permission === 'granted') {
        new Notification(title, {
            body,
            icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/png/bell.png',
        });
    } else {
        console.log('Permissão para notificações não concedida');
    }
};

export default function useConfig() {
    const [notifications, setNotifications] = useState([]);
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        requestNotificationPermisson();

        const email = localStorage.getItem('userEmail');
        if (email) {
            const savedNotifications = JSON.parse(localStorage.getItem(`notifications_${email}`) || '[]');
            setNotifications(savedNotifications);
        }
    }, []);

    useEffect(() => {
        const checkNotifications = () => {
            const now = new Date();

            const updatedNotifications = notifications.map(notification => {
                const notificationDate = new Date(notification.date);
                
                if (now >= notificationDate && !notification.notified) {
                    showNotification(notification.title, `Lembrete: ${notification.type}`);
                    return { ...notification, notified: true};
                }
                return notification;
            });

            const notificationsToKeep = updatedNotifications.filter(notification => !notification.notified);

            setNotifications(notificationsToKeep);

            const email = localStorage.getItem('userEmail');
            if (email) {
                localStorage.setItem(`notifications_${email}`, JSON.stringify(notificationsToKeep));
            }

        };

        const interval = setInterval(checkNotifications, 10000);

        return () => clearInterval(interval);
    }, [notifications]);

    const handleAddNotification = () => {
        const newNotification = {
            id: Date.now().toString(),
            type,
            title,
            date,
            notified: false,
        };

        const updatedNotifications = [...notifications, newNotification];
        setNotifications(updatedNotifications);

        const email = localStorage.getItem('userEmail');
        if (email) {
            localStorage.setItem(`notifications_${email}`, JSON.stringify(updatedNotifications));
        }
        setTitle('');
        setType('');
        setDate('');
    };

    const handleDeleteNotification = (id) => {
        const updatedNotifications = notifications.filter(n => n.id !== id);

        setNotifications(updatedNotifications);

        const email = localStorage.getItem('userEmail');
        if (email) {
            localStorage.setItem(`notifications_${email}`, JSON.stringify(updatedNotifications));
        }
    };
    
    return {
        notifications,
        title,
        setTitle,
        type,
        setType,
        date,
        setDate,
        handleAddNotification,
        handleDeleteNotification,
    };
}

