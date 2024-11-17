import React from "react";
import styles from "@/styles/homeResume.module.css";
import Resumo from "../Resumo";
import Grid from "../Grid";
import useIncomeHome from "@/hooks/useIncomeHome";
import useIncomeForm from '@/hooks/useIncomeForm';
import useSpentForm from '@/hooks/useSpentForm';
import DynamicForm from "@/components/DynamicForm/DynamicForm";

function Home() {
    const { dadosFin, saldo, entrada, saida, handleSaveIncome, handleSaveSpent, onDelete, dadosCombinados } = useIncomeHome();

    const { inputIncomeFields, SaveIncome} = useIncomeForm(handleSaveIncome);
    const { inputSpentFields,  SaveSpent } = useSpentForm(handleSaveSpent);

    

    return (
        <div className="main">
            <h1 className={styles.resumeTitle}>Resumo</h1>
            <Resumo saldo={saldo} entrada={entrada} saida={saida} />
            <div className={styles.containerSection}>
                <h2 className={styles.secundaryTitle}>Gerenciar Gastos</h2>
                    <div className={styles.formContainer}>
                        <DynamicForm
                        title="Receitas"
                        fields={inputIncomeFields}
                        buttonLabel="Adicionar Receita"
                        onSubmit={SaveIncome}
                        state="income"
                        
                        />
                        <DynamicForm
                            title="Despesas"
                            fields={inputSpentFields}
                            buttonLabel="Adicionar Despesa"
                            onSubmit={SaveSpent}
                            state="spent"
                        />
                    </div>
                <Grid dadosFin={dadosCombinados} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default Home;
