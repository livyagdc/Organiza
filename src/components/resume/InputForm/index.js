import React from 'react';
import styles from './homeInput.module.css';
import DynamicForm from '@/components/DynamicForm/DynamicForm';
import useIncomeForm from '@/hooks/useIncomeForm';

function InputForm({ handleSave }) {
    const { inputHomeFields, salvar } = useIncomeForm(handleSave);

    return (
        <div className={styles.container}>
            <DynamicForm
                title="Receitas/ Despesas"
                fields={inputHomeFields}
                buttonLabel="Adicionar Receita"
                onSubmit={salvar}
            />
        </div>
    );
}

export default InputForm;
