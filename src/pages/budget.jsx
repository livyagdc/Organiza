import BudgetAlert from "@/components/BudgetAlert/BudgetAlert";
import BudgetChart from "@/components/BudgetChart/BudgetChart";
import BudgetForm from "@/components/BudgetForm/BudgetForm";
import BudgetList from "@/components/BudgetsList/BudgetList";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import PrivateRoute from "@/components/PrivateRoute";
import styles from "@/styles/budget.module.css"


export default function Budget() {

    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    <h1 className={styles.budgetTitle}>Gestão de Orçamento</h1>
                    <BudgetAlert />
                    <BudgetForm />
                    <BudgetList />
                    <BudgetChart />
                </div>
                <Footer />
            </div>
        </PrivateRoute>
    )
}