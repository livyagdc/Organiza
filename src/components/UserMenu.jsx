import styles from "@/components/componentsStyles/UserMenu.module.css";
import { useState } from "react";
import { MdEdit, MdLogout, MdOutlineAccountCircle, MdSettings } from "react-icons/md";
import Link from 'next/link';
import logout from "@/pages/api/auth/logout";

export default function UserMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const userName = sessionStorage.getItem('userName')

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.userMenu}>
            <div className={styles.icon} onClick={toggleMenu}>
                <MdOutlineAccountCircle size={50}/>
            </div>

            {menuOpen && (
                <div className={styles.menu}>
                    <p>Olá, {userName}!</p>
                    <ul>
                        <li><Link href="/edit"><MdEdit /> Editar perfil</Link></li>
                        <li><Link href="/config"><MdSettings /> Configurações</Link></li>
                        <li className={styles.logout} onClick={logout}> <MdLogout /> Sair</li>
                    </ul>
                </div>
            )}

        </div>
    );
}