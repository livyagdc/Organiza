import styles from "./componentsStyles/Layout.module.css"
import Footer from "./Footer";
import HomeNavbar from "./HomeNavbar";
import Navbar from "./NavBar";


export default function Layout({ children }) {

    const isLoggedIn = () => {
        return sessionStorage.getItem('token') !== null;
    };

    return (
        <div className={styles.wrapper}>
            <header>
                {isLoggedIn ? <HomeNavbar /> : <Navbar /> }
            </header>
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
}
