import React, { useState } from 'react';
import { Container, RadioGroup, SelectCategoria, Input } from './styles';
import styles from '@/components/resumeStyles/homeInput.module.css'

function InputForm({ handleSave }) {
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState(0);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(''); // Nova categoria selecionada
  const [categorias, setCategorias] = useState([
    'Alimentação', 
    'Aluguel',
    'Bonus',
    'Pets',
    'Compras', 
    'Construção', 
    'Contas',
    'Doação', 
    'Educação', 
    'Cartão', 
    'Imposto/multa', 
    'Investimento', 
    'Lazer', 
    'Moradia',
    'Salário', 
    'Saúde', 
    'Seguro', 
    'Serviços', 
    'Transporte',
    'Vestiário',
    'Outras']);

  function Salvar(event) {
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

    event.target.reset();

    setDescricao('');
    setCategoriaSelecionada('');
    setData('');
    setValor(0);
    setTipo(0);
    
    
    
  }

  return (
    <div className={styles.container}>
      
      <form className={styles.form} onSubmit={Salvar}>
      <section className={styles.inputForm}>
        <input
          className={styles.inputField}
          type="date"
          placeholder="Informe a data (Ex. 02/05/2023)"
          onChange={(e) => setData(e.target.value)}/>
          
        <select className={SelectCategoria} value={categoriaSelecionada} onChange={(e) => setCategoriaSelecionada(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            {categorias.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
        </select>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Informe a descrição"
          onChange={(e) => setDescricao(e.target.value)}/>
          
          <input
          className={styles.inputField}
          type="text"
          placeholder="Informe o valor"
          onChange={(e) => {
            const valorFormatado = e.target.value.replace(',', '.');
            setValor(Number(valorFormatado)); // Converte para número)
          }} />
          

        <section className={styles.RadioGroup}>
          <input
            type="radio"
            id="rblEntrada"
            defaultChecked
            name="group1"
            onChange={() => setTipo(0)}
          />
          <label htmlFor="rblEntrada">Entrada</label>

          <input
            type="radio"
            id="rblSaida"
            name="group1"
            onChange={() => setTipo(1)}
          />
          <label htmlFor="rblSaida">Saída</label>
          </section>

        <button type="submit" className="btn btn-primary">Cadastrar</button>
        </section>
      </form>
     
      </div>
  );
}

export default InputForm;
