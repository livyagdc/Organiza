import { useEffect, useState } from "react";
import PrivateRoute from "@/components/PrivateRoute";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/invest.module.css";
import DynamicForm from "@/components/DynamicForm/DynamicForm";
import InvestmentList from "@/components/InvestList/InvestmentList";
import useInvestments from "@/hooks/useInvestments";
import InvestmentGrowthChart from "@/components/InvestmentGrowthChart"; // Importando o gráfico

export default function Investments({ growthData }) {
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

                    <div className={styles.investsDiv}> {/* Aqui está o Flexbox */}
                        <section className={styles.investFormSection}>
                            <DynamicForm
                                title="Adicionar investimento"
                                fields={investmentFields}
                                buttonLabel="Adicionar Investimento"
                                onSubmit={handleAddInvestment}
                            />
                        </section>

                        <section className={styles.investFormSection}> 
                            <InvestmentGrowthChart data={growthData} />
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

// Função getStaticProps para implementar ISR
export async function getStaticProps() {
    try {
        const res = await fetch("http://localhost:3000/api/investment-rates"); // Ajuste para seu endpoint de API
        const growthData = await res.json();

        return {
            props: {
                growthData,
            },
            revalidate: 60, // Regenerar a página a cada 60 segundos
        };
    } catch (error) {
        console.error("Erro ao buscar dados de crescimento", error);
        return {
            props: {
                growthData: [], // Caso o fetch falhe, passamos um array vazio
            },
            revalidate: 60, // Continuar com a regeneração a cada 60 segundos
        };
    }
}
