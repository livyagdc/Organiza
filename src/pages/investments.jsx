'use client';
import PrivateRoute from "@/components/PrivateRoute";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/invest.module.css";
import DynamicForm from "@/components/DynamicForm/DynamicForm";
import InvestmentList from "@/components/InvestList/InvestmentList";
import useInvestments from "@/hooks/useInvestments"

export default function Investments() {
    const {
        investments,
        handleAddInvestment,
        handleDeleteInvestment,
        investmentFields,
    } = useInvestments();

    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">

                    <h1 className={styles.investTitle}>Investimentos</h1>
                    <div className={styles.investFormDiv}>
                        <section className={styles.investFormSection}>
                            <DynamicForm
                                title="Adicionar investimento"
                                fields={investmentFields}
                                buttonLabel="Adicionar Investimento"
                                onSubmit={handleAddInvestment}
                            />
                        </section>
                    </div>

                    <h1 className={styles.investListTitle}>Lista de Investimentos</h1>
                    <InvestmentList
                        investments={investments}
                        onDelete={handleDeleteInvestment}
                    />
                </div>
                <Footer />
            </div>
        </PrivateRoute>
    );
}
