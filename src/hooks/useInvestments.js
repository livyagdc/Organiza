import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useInvestments() {
    const [investments, setInvestments] = useState([]);
    const [type, setType] = useState("");
    const [value, setValue] = useState("");
    const [institution, setInstitution] = useState("");
    const [date, setDate] = useState("");
    const [growthTax, setGrowthTax] = useState("");

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

        const email = localStorage.getItem("userEmail");
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
            const updatedInvestments = investments.filter((investment) => investment.id !== id);
            setInvestments(updatedInvestments);
            localStorage.setItem(`investments_${email}`, JSON.stringify(updatedInvestments));
        }
    };

    const clearForm = () => {
        setType("");
        setValue("");
        setDate("");
        setInstitution("");
        setGrowthTax("");
    };

    const calculateGrowth = (initialValue, growthTax) => {
        return initialValue * (growthTax / 100);
    };

    const investmentFields = [
        {
            label: "Tipo de Investimento",
            type: "text",
            style: "select",
            options: [
                { value: "cdb", label: "CDB" },
                { value: "tesouro_direto", label: "Tesouro Direto" },
                { value: "lci_lca", label: "LCI/LCA" },
                { value: "acoes", label: "Ações" },
                { value: "fundos_investimento", label: "Fundos de Investimento" },
                { value: "fixa", label: "Renda Fixa" },
                { value: "variavel", label: "Renda Variável" },
                { value: "criptomoedas", label: "Criptomoedas" },
                { value: "outro", label: "Outro" },
            ],
            value: type,
            onChange: setType,
            placeholder: "Tipo de investimento",
            required: true,
        },
        {
            label: "Valor",
            type: "number",
            value: value,
            onChange: setValue,
            placeholder: "Valor",
            required: true,
        },
        {
            label: "Instituição",
            type: "text",
            value: institution,
            onChange: setInstitution,
            placeholder: "Nome da instituição",
            required: true,
        },
        {
            label: "Data",
            type: "date",
            value: date,
            onChange: setDate,
            required: true,
        },
        {
            label: "Taxa",
            type: "number",
            value: growthTax,
            onChange: setGrowthTax,
            placeholder: "Taxa de crescimento ao ano",
            required: true,
        },
    ];

    return {
        investments,
        handleAddInvestment,
        handleDeleteInvestment,
        investmentFields,
    };
}
