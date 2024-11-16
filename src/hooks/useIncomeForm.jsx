import { useState } from 'react';

export default function useIncomeForm(handleSave) {
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [valor, setValor] = useState(0);
    const [tipo, setTipo] = useState(0);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

    const inputHomeFields = [
        {
            label: "Data",
            type: "date",
            value: data,
            onChange: setData,
            placeholder: "Data",
            required: true
        },
        {
            label: "Valor",
            type: "number",
            value: valor,
            onChange: setValor,
            placeholder: "Insira o Valor",
            required: true
        },
        {
            label: "Descrição",
            type: "text",
            value: descricao,
            onChange: setDescricao,
            placeholder: "Descrição",
            required: true
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
                { value: "Outra", label: "Outra" }],
            value: categoriaSelecionada,
            onChange: setCategoriaSelecionada,
            placeholder: "Selecione a categoria",
            required: true
        },
    ];

    function salvar(event) {
        event.preventDefault();

        if (!descricao || !data || valor <= 0) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        const dadosFinanceiro = {
            data,
            categoriaSelecionada,
            descricao,
            valor,
            tipo,
        };

        handleSave(dadosFinanceiro);

        // Resetando os campos do formulário
        setDescricao('');
        setCategoriaSelecionada('');
        setData('');
        setValor(0);
        setTipo(0);
    }

    return {
        inputHomeFields,
        salvar
    };
}
