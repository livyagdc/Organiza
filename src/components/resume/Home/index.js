import React, {useEffect, useState} from "react";
import styles from "../../../components/componentsStyles/resume/homeResume.module.css"
import Resumo from "../Resumo";
import InputForm from "../InputForm";
import Grid from "../Grid";

function Home(){

    const [dadosFin, setDadosFin] = useState(JSON.parse(localStorage.getItem('Financeiro')) ?? []);
    const [saldo, setSaldo] = useState(0);
    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);
    const [atualizaGrid,setAtualizaGrid] = useState(false);

    useEffect(() =>{
        const totalSaida= dadosFin.filter((item)=> item.tipo ===1).map((transaction) => Number(transaction.valor));
        const totalEntrada= dadosFin.filter((item)=> item.tipo ===0).map((transaction) => Number(transaction.valor));

        const Entradas = totalEntrada.reduce((acc, cur)=> acc + cur, 0).toFixed(2);
        const Saidas = totalSaida.reduce((acc, cur)=> acc + cur, 0).toFixed(2);

        const saldoTotal = Entradas - Saidas

        setSaldo(saldoTotal);
        setEntrada(Entradas);
        setSaida(Saidas);
    }, [atualizaGrid])

    function handleSave(dados){
        const data = [...dadosFin, dados];
        setDadosFin(data);
        setAtualizaGrid(!atualizaGrid);
        localStorage.setItem('Financeiro', JSON.stringify(data));
    }

    function onDelete(index){
        const data = dadosFin;
        data.splice(index,1);
        setDadosFin(data);
        setAtualizaGrid(!atualizaGrid);
        localStorage.setItem('Financeiro', JSON.stringify(data));
    }

return(
    //<Container>
    <div className="main">
        <h1 className={styles.resumeTitle}>Resumo</h1>
        <div className={styles.containerSection}>
             <h2 className={styles.secundaryTitle}>Gerenciar Gastos</h2>
            <Resumo saldo={saldo} entrada={entrada} saida={saida}/>
                <div className={styles.formContainer}>
                    <InputForm handleSave={handleSave}/>
                    <InputForm handleSave={handleSave}/>
                </div>
            <Grid dadosFin={dadosFin} onDelete={onDelete}/>
        </div>
    </div>
    //</Container>
)

}

export default Home;