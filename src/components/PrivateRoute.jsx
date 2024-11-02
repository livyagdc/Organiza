import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PrivateRoute({ children }) {
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            router.push('/auth/login')
        }
    }, [router]);

    return <>{children}</>
};