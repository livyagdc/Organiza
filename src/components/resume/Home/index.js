import React from "react";
import styles from "@/styles/homeResume.module.css";
import Resumo from "../Resumo";
import Grid from "../Grid";
import useIncomeHome from "@/hooks/useIncomeHome";
import useIncomeForm from '@/hooks/useIncomeForm';
import DynamicForm from "@/components/DynamicForm/DynamicForm";

function Home() {
    const { dadosFin, saldo, entrada, saida, handleSave, onDelete } = useIncomeHome();

    const { inputHomeFields, salvar } = useIncomeForm(handleSave);

    return (
        <div className="main">
            <h1 className={styles.resumeTitle}>Resumo</h1>
            <Resumo saldo={saldo} entrada={entrada} saida={saida} />
            <div className={styles.containerSection}>
                <h2 className={styles.secundaryTitle}>Gerenciar Gastos</h2>
                    <div className={styles.formContainer}>
                        <DynamicForm
                        title="Receitas"
                        fields={inputHomeFields}
                        buttonLabel="Adicionar Receita"
                        onSubmit={salvar}
                        state="income"
                        
                        />
                        <DynamicForm
                            title="Despesas"
                            fields={inputHomeFields}
                            buttonLabel="Adicionar Receita"
                            onSubmit={salvar}
                            state="spent"
                        />
                    </div>
                <Grid dadosFin={dadosFin} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default Home;
