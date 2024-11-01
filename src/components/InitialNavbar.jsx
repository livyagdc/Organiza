import styles from './InitialNavbar.module.css';
import Link from 'next/link';


const InitialNavbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}><Link href="/"><img src="https://res.cloudinary.com/dcbd1dnvk/image/upload/v1730427036/rganiza__2_-removebg-preview_2_rdnqbn.png" alt="logo" /></Link></div>
            <ul className={styles.navLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">Sobre</Link></li>
                <li><Link href="/contact">Contato</Link></li>
            </ul>
            
            <div className={styles.authLinks}>
                <button className={styles.loginButton}><Link href="/auth/login">Login</Link></button>
                <button className={styles.registerButton}><Link href="/auth/register">Registre-se</Link></button>
            </div>
        </nav>
    );
};

export default InitialNavbar;