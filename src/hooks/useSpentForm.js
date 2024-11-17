import { useState } from 'react';

export default function useSpentForm(handleSaveSpent) {
    const [descricaoSpent, setDescricaoSpent] = useState('');
    const [dataSpent, setDataSpent] = useState('');
    const [spent, setSpent] = useState();
    const [tipo, setTipo] = useState(1);
    const [categoriaSelecionadaSpent, setCategoriaSelecionadaSpent] = useState('');

    const inputSpentFields = [
        {
            label: "Data",
            type: "date",
            value: dataSpent,
            onChange: setDataSpent,
            placeholder: "Data",
            required: true,
        },
        {
            label: "Descrição",
            type: "text",
            value: descricaoSpent,
            onChange: setDescricaoSpent,
            placeholder: "Descrição",
            required: true,
        },
        {
            label: "Categoria",
            type: "text",
            style: "select",
            options: [
                { value: "Alimentação", label: "Alimentação" },
                { value: "Animais de estimação", label: "Animais de estimação" },
                { value: "Compras", label: "Compras" },
                { value: "Construção", label: "Construção" },
                { value: "Contas", label: "Contas" },
                { value: "Doações e caridade", label: "Doações e caridade" },
                { value: "Educação", label: "Educação" },
                { value: "Extra", label: "Extra" },
                { value: "Fatura Cartão", label: "Fatura Cartão" },
                { value: "Gift card", label: "Gift card" },
                { value: "Imposto, juros e multa", label: "Imposto, juros e multa" },
                { value: "Investimento", label: "Investimento" },
                { value: "Lazer", label: "Lazer" },
                { value: "Mercado", label: "Mercado" },
                { value: "Moradia", label: "Moradia" },
                { value: "Recarga", label: "Recarga" },
                { value: "Saúde", label: "Saúde" },
                { value: "Seguros", label: "Seguros" },
                { value: "Serviços", label: "Serviços" },
                { value: "Transporte", label: "Transporte" },
                { value: "Vestuário", label: "Vestuário" },
                { value: "Viagem", label: "Viagem" },
                { value: "Outra", label: "Outra" }
            ],
            value: categoriaSelecionadaSpent,
            onChange: setCategoriaSelecionadaSpent,
            placeholder: "Selecione a categoria",
            required: true,
        },
        {
            label: "Valor (Saída)",
            type: "number",
            value: spent,
            onChange: setSpent,
            placeholder: "Insira o valor da saída",
            required: true,
        },
    ];

    function SaveSpent(event) {
        event.preventDefault();

        if (!descricaoSpent || !dataSpent || spent <= 0) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        const dadosFinanceiro = {
            dataSpent,
            categoriaSelecionadaSpent,
            descricaoSpent,
            spent,
            tipo,
        };

    handleSaveSpent(dadosFinanceiro);

    // Resetando os campos do formulário
    setDescricaoSpent('');
    setCategoriaSelecionadaSpent('');
    setDataSpent('');
    setSpent(0);
    setTipo(1);
}

    return {
        inputSpentFields,
        SaveSpent,
    };
}
