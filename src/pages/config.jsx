import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import NotificationForm from "@/components/NotificationForm/NotificationForm";
import NotificationList from "@/components/NotificationList/NotificationList";
import PrivateRoute from "@/components/PrivateRoute";
import styles from "@/styles/config.module.css";


export default function Config() {
    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    <h2 className={styles.configTitle}>Configurações de Notificações</h2>
                    <NotificationForm />
                    <h2 className={styles.configTitle}>Notificações</h2>
                    <NotificationList/>
                </div>
                <Footer />
            </div>
        </PrivateRoute>
    );
}