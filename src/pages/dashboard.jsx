// /dashboard
import BudgetChart from "@/components/BudgetChart/BudgetChart";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import PrivateRoute from "@/components/PrivateRoute";
import styles from "@/styles/dashboard.module.css";
import GeralChart from "@/components/DashboardCharts/GeralChart";

export default function Dashboard() {
    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    <div className={styles.budgetDiv}>
                        <section className={styles.budgetSection}>
                            <h1>Orçamentos e gastos</h1>
                            <BudgetChart />
                        </section>
                        <GeralChart />
                    </div>
                </div>
                <Footer />
            </div>
        </PrivateRoute>
    )
}