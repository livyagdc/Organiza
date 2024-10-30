import styles from './InitialNavbar.module.css';
import Link from 'next/link';


const InitialNavbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>logo</div>
            <ul className={styles.navLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">Sobre</Link></li>
                <li><Link href="/contact">Contato</Link></li>
            </ul>
            
            <div className={styles.authLinks}>
                <Link href="/auth/login">Login</Link>
                <button className={styles.registerButton}><Link href="/auth/register">Registre-se</Link></button>
            </div>
        </nav>
    );
};

export default InitialNavbar;