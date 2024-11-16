'use client';
import React, { useState, useEffect } from 'react';

export default function useConfig() {
    const [notifications, setNotifications] = useState([]);
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const email = localStorage.getItem('userEmail');
        if (email) {
            const savedNotifications = JSON.parse(localStorage.getItem(`notifications_${email}`) || '[]');
            setNotifications(savedNotifications);
        }
    }, []);

    const saveToLocalStorage = (updatedNotifications) => {
        const email = localStorage.getItem('userEmail');
        if (email) {
            localStorage.setItem(`notifications_${email}`, JSON.stringify(updatedNotifications));
        }
    };

    const handleAddNotification = () => {
        const newNotification = {
            id: Date.now().toString(),
            type,
            title,
            date,
            enabled: true,
        };
        const updatedNotifications = [...notifications, newNotification];
        setNotifications(updatedNotifications);
        saveToLocalStorage(updatedNotifications);
        setTitle('');
        setType('');
        setDate('');
    };

    const handleDeleteNotification = (id) => {
        const updatedNotifications = notifications.filter(n => n.id !== id);
        setNotifications(updatedNotifications);
        saveToLocalStorage(updatedNotifications);
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
