import styles from "./IncomeForm.module.css";

export default function IncomeForm() {
    
    const incomeFormFields = [
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
            placeholder: "Descriçao",
            required: true
        },
        {
            label: "Categoria",
            type: "text",
            style: "select",
            options: [
                { value: 'Alimentação', label: 'Alimentação' },
                { value: 'Aluguel', label: 'Aluguel' },
                { value: 'Bonus', label: 'Bonus' },
                { value: 'Pets', label: 'Pets' },
                { value: 'Compras', label: 'Compras' },
                { value: 'Construção', label: 'Construção' },
                { value: 'Contas', label: 'Contas' },
                { value: 'Doação', label: 'Doação' },
                { value: 'Educação', label: 'Educação' },
                { value: 'Cartão', label: 'Cartão' },
                { value: 'Imposto/multa', label: 'Imposto/multa' },
                { value: 'Investimento', label: 'Investimento' },
                { value: 'Lazer', label: 'Lazer' },
                { value: 'Moradia', label: 'Moradia' },
                { value: 'Salário', label: 'Salário' },
                { value: 'Saúde', label: 'Saúde' },
                { value: 'Seguro', label: 'Seguro' },
                { value: 'Serviços', label: 'Serviços' },
                { value: 'Transporte', label: 'Transporte' },
                { value: 'Vestiário', label: 'Vestiário' },
                { value: 'Outras', label: 'Outras' }
            ],
            value: categoriaSelecionada,
            onChange: setCategoriaSelecionada,
            placeholder: "Selecione a categoria",
            required: true
        },
    ];

    return (
        <div className={styles.incomeFormDiv}>
            <DynamicForm
                title="Receitas/ Despesas"
                fields={inputHomeFields}
                buttonLabel="Adicionar Receita"
                onSubmit={Salvar}
            />
        </div>
    );
}