'use client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PrivateRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;  // Retorna null se o cookie não for encontrado
    }
    

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = getCookie("token");
            if (!token) {
                router.push('/auth/login');
            } else {
                setLoading(false);
            }
        }
    }, [router]);

    if (loading) return <div>Carregando...</div>;

    return <>{children}</>;
};
