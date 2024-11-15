import React, { useState } from 'react';
import { Container, RadioGroup, SelectCategoria, Input } from './styles';
import styles from '@/components/resumeStyles/homeInput.module.css'
import DynamicForm from '@/components/DynamicForm/DynamicForm';


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
      
      <DynamicForm
                            title="Receitas/ Despesas"
                            fields={inputHomeFields}
                            buttonLabel="Adicionar Receita"
                            onSubmit={Salvar}
                        />
     
      </div>
  );
}

export default InputForm;
