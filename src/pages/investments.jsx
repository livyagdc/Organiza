import PrivateRoute from "@/components/PrivateRoute";
import { useEffect, useState } from "react";
import styles from "@/styles/invest.module.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import InvestCard from "@/components/InvestCard/InvestCard";
import { v4 as uuidv4 } from "uuid";
import DynamicForm from "@/components/DynamicForm/DynamicForm";

export default function Investments() {
    const [investments, setInvestments] = useState([]);
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [institution, setInstitution] = useState('');
    const [date, setDate] = useState('');
    const [growthTax, setGrowthTax] = useState('');

    useEffect(() => {
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

    const investmentFields = [
        {
            label: "Tipo de Investimento",
            type: "text",
            value: type,
            onChange: setType,
            placeholder: "Tipo de investimento",
            required: true
        },
        {
            label: "Valor",
            type: "number",
            value: value,
            onChange: setValue,
            placeholder: "Valor",
            required: true
        },
        {
            label: "Instituição",
            type: "text",
            value: institution,
            onChange: setInstitution,
            placeholder: "Nome da instituição",
            required: true
        },
        {
            label: "Data",
            type: "date",
            value: date,
            onChange: setDate,
            required: true
        },
        {
            label: "Taxa",
            type: "number",
            value: growthTax,
            onChange: setGrowthTax,
            placeholder: "Taxa de crescimento ao ano",
            required: true
        },
    ];

    return (
        <PrivateRoute>
            <div className="cont">
                <Navbar />
                <div className="main">
                    <h1 className={styles.investTitle}>Investimentos</h1>
                    <div className={styles.investFormDiv}>
                        <DynamicForm
                            title="Adicionar investimento"
                            fields={investmentFields}
                            buttonLabel="Adicionar Investimento"
                            onSubmit={handleAddInvestment}
                        />
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
