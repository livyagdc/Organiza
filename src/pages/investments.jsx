import { useEffect, useState } from "react";
import PrivateRoute from "@/components/PrivateRoute";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/invest.module.css";
import DynamicForm from "@/components/DynamicForm/DynamicForm";
import InvestmentList from "@/components/InvestList/InvestmentList";
import useInvestments from "@/hooks/useInvestments";
import InvestmentGrowthChart from "@/components/InvestmentGrowthChart"; // Importando o gráfico

export default function Investments({ initialGrowthData }) {
    const {
        investments,
        handleAddInvestment,
        handleDeleteInvestment,
        investmentFields,
    } = useInvestments();

    const [growthData, setGrowthData] = useState(initialGrowthData);

    // Se a API for dinâmica e você quiser garantir que os dados se atualizem toda vez que a página carregar
    useEffect(() => {
        const fetchGrowthData = async () => {
            try {
                const res = await fetch(`/api/investment-rates?timestamp=${Date.now()}`);
                if (!res.ok) throw new Error("Erro ao buscar dados");
                const data = await res.json();
                setGrowthData(data); // Atualiza os dados
            } catch (error) {
                console.error("Erro ao buscar os dados de crescimento", error);
            }
        };
    
        fetchGrowthData(); // Chama a função assim que a página for carregada
    }, []); // Executa apenas uma vez ao carregar a página
    
    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    <h1 className={styles.investTitle}>Investimentos</h1>

                    <div className={styles.investsDiv}>
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

// Função getStaticProps simplificada
export async function getStaticProps() {
    try {
        const res = await fetch("http://localhost:3000/api/investment-rates"); // Buscar dados de crescimento da API
        const growthData = await res.json();

        return {
            props: {
                initialGrowthData: growthData, // Passando os dados da API para a página
            },
            revalidate: 60, // Regenerar a página a cada 60 segundos
        };
    } catch (error) {
        console.error("Erro ao buscar dados de crescimento", error);
        return {
            props: {
                initialGrowthData: [], // Caso falhe, passar um array vazio
            },
            revalidate: 60,
        };
    }
}
