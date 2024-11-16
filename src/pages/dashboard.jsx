// /dashboard
import BudgetChart from "@/components/BudgetChart/BudgetChart";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import PrivateRoute from "@/components/PrivateRoute";
import styles from "@/styles/dashboard.module.css";
import Resumo from "@/components/resume/Resumo";
import useIncomeHome from "@/hooks/useIncomeHome";
import SpentChart from "@/components/SpentChart/spentChart";


export default function Dashboard() {

    const {
        saldo,
        saida,
        entrada,
        dadosFin,
    } = useIncomeHome()

    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    <div className={styles.dashboardDiv}>

                        <section>
                            <Resumo saldo={saldo} entrada={entrada} saida={saida} />
                        </section>

                        <section className={styles.chartSection}>

                            <div className={styles.budgetSection}>
                                <h1>Orçamentos e gastos</h1>
                                <BudgetChart />
                            </div>

                            <div className={styles.spentSection}>
                                <h1>Despesas</h1>
                                <SpentChart dadosFin={dadosFin} />
                            </div>

                        </section>

                    </div>
                </div>
                <Footer />
            </div>
        </PrivateRoute>
    )
}