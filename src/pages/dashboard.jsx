// /dashboard
import BudgetChart from "@/components/BudgetChart/BudgetChart";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import PrivateRoute from "@/components/PrivateRoute";
import styles from "@/styles/dashboard.module.css";
import Resumo from "@/components/resume/Resumo";
import useIncomeHome from "@/hooks/useIncomeHome";


export default function Dashboard() {

const {
    saldo,
    saida,
    entrada,
} = useIncomeHome()

    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    <div className={styles.budgetDiv}>
                        <section>
                            <Resumo saldo={saldo} entrada={entrada} saida={saida} />
                        </section>

                        <section className={styles.budgetSection}>
                            <h1>Orçamentos e gastos</h1>
                            <BudgetChart />
                            
                            
                        </section>
                        
                        
                    </div>
                </div>
                <Footer />
            </div>
        </PrivateRoute>
    )
}