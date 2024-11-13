import PrivateRoute from "@/components/PrivateRoute";
import { useEffect, useState } from "react";
import formStyle from "@/styles/form.module.css";
import styles from "@/styles/invest.module.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import InvestCard from "@/components/InvestCard/InvestCard";
import { v4 as uuidv4 } from "uuid";

export default function Investments() {
    const [investments, setInvestments] = useState([]);
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [institution, setInstitution] = useState('');
    const [date, setDate] = useState('');
    const [growthTax, setGrowthTax] = useState('');

    useEffect(() => {
        // Carrega os investimentos do usuário logado (identificado pelo email) ao montar o componente
        const email = localStorage.getItem("userEmail");
        if (email) {
            const savedInvestments = JSON.parse(localStorage.getItem(`investments_${email}`)) || [];
            setInvestments(savedInvestments);
        }
    }, []);

    const handleAddInvestment = (e) => {
        e.preventDefault();

        const newInvestment = {
            id: uuidv4(),
            type,
            value: parseFloat(value),
            institution,
            date,
            growthTax: parseFloat(growthTax),
            growth: calculateGrowth(parseFloat(value), parseFloat(growthTax)),
        };

        const email = localStorage.getItem("userEmail")
        if (email) {
            const savedInvestments = JSON.parse(localStorage.getItem(`investments_${email}`)) || [];
            savedInvestments.push(newInvestment);
            localStorage.setItem(`investments_${email}`, JSON.stringify(savedInvestments));
            setInvestments(savedInvestments);
        }

        clearForm();
    };

    const handleDeleteInvestment = (id) => {
        const email = localStorage.getItem("userEmail");
        if (email) {
            const updatedInvestments = investments.filter(investment => investment.id !== id);
            setInvestments(updatedInvestments);
            localStorage.setItem(`investments_${email}`, JSON.stringify(updatedInvestments));
        }
    };

    const clearForm = () => {
        setType('');
        setValue('');
        setDate('');
        setInstitution('');
        setGrowthTax('');
    };

    const calculateGrowth = (initialValue, growthTax) => {
        return initialValue * (growthTax / 100);
    };

    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    <h1 className={styles.investTitle}>Investimentos</h1>
                    <div className={styles.investFormDiv}>
                        <section className={formStyle.formSection}>
                            <h2 className={formStyle.authTitle}>Adicionar investimento</h2>
                            <form className={styles.investForm} onSubmit={handleAddInvestment}>

                                <div className={formStyle.inputDiv}>
                                    <h2 className={formStyle.label}>Tipo de Investimento:</h2>
                                    <input className={formStyle.formInput}
                                        type="text"
                                        placeholder="Tipo de investimento"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={formStyle.inputDiv}>
                                    <h2 className={formStyle.label}>Valor:</h2>
                                    <input className={formStyle.formInput}
                                        type="number"
                                        placeholder="Valor"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={formStyle.inputDiv}>
                                    <h2 className={formStyle.label}>Instituição:</h2>
                                    <input className={formStyle.formInput}
                                        type="text"
                                        placeholder="Nome da instituição"
                                        value={institution}
                                        onChange={(e) => setInstitution(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={formStyle.inputDiv}>
                                    <h2 className={formStyle.label}>Data:</h2>
                                    <input className={formStyle.formInput}
                                        type="date"
                                        placeholder="Data do investimento"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={formStyle.inputDiv}>
                                    <h2 className={formStyle.label}>Taxa:</h2>
                                    <input className={formStyle.formInput}
                                        type="number"
                                        placeholder="Taxa de crescimento ao ano"
                                        value={growthTax}
                                        onChange={(e) => setGrowthTax(e.target.value)}
                                        required
                                    />
                                </div>

                                <button className={styles.investFormBt} type="submit">Adicionar Investimento</button>
                            </form>
                        </section>
                    </div>

                    <h1 className={styles.investListTitle}>Lista de investimentos</h1>
                    <section className={styles.investListSection}>
                        {investments.map((investment) => (
                            <div key={investment.id}>
                                <InvestCard {...investment} onDelete={() => handleDeleteInvestment(investment.id)} />
                            </div>
                        ))}
                    </section>
                </div>
                <Footer />
            </div>
        </PrivateRoute>
    );
}