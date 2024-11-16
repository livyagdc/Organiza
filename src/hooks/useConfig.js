import { useEffect, useState } from "react";

// Função para solicitar permissão de notificações
const requestNotificationPermission = () => {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission !== 'granted') {
                console.log('Permissão para notificações negada');
            }
        });
    }
};

// Função para mostrar uma notificação
const showNotification = (title, body) => {
    if (Notification.permission === 'granted') {
        new Notification(title, {
            body,
            icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/bell.svg',
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
        // Solicitar permissão ao carregar o componente
        requestNotificationPermission();
        
        const email = localStorage.getItem('userEmail');
        if (email) {
            const savedNotifications = JSON.parse(localStorage.getItem(`notifications_${email}`) || '[]');
            setNotifications(savedNotifications);
        }
    }, []);

    useEffect(() => {
        // Checar se as notificações precisam ser disparadas
        const checkNotifications = () => {
            const now = new Date();
            const currentDateString = now.toISOString().slice(0, 10); // 'YYYY-MM-DD'

            const updatedNotifications = notifications.map(notification => {
                const notificationDate = new Date(notification.date);
                const notificationDateString = notificationDate.toISOString().slice(0, 10); // 'YYYY-MM-DD'

                // Verifica se a data atual é igual à data da notificação
                if (currentDateString === notificationDateString && !notification.notified) {
                    // Dispara a notificação
                    showNotification(notification.title, `Lembrete: ${notification.type}`);
                    // Marca a notificação como 'notificada'
                    return { ...notification, notified: true };
                }
                return notification;
            });

            // Filtra as notificações para manter apenas as não notificadas
            const notificationsToKeep = updatedNotifications.filter(notification => !notification.notified);

            setNotifications(notificationsToKeep);

            // Salva as notificações restantes no localStorage apenas se necessário
            const email = localStorage.getItem('userEmail');
            if (email) {
                localStorage.setItem(`notifications_${email}`, JSON.stringify(notificationsToKeep));
            }
        };

        // Checar a cada minuto (60000ms)
        const interval = setInterval(checkNotifications, 10000);

        // Limpar o intervalo quando o componente for desmontado
        return () => clearInterval(interval);
    }, [notifications]);

    const handleSave = () => {
        const email = localStorage.getItem('userEmail');
        if (email) {
            localStorage.setItem(`notifications_${email}`, JSON.stringify(notifications));
            alert('Configurações salvas com sucesso!');
        }
    };

    const handleAddNotification = () => {
        const newNotification = {
            id: Date.now().toString(),
            type,
            title,
            date,
            enabled: true,
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
        handleSave,
        handleAddNotification,
        handleDeleteNotification,
    };
}
