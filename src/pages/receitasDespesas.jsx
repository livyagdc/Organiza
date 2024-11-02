// ReceitasDespesas.js
import { useReceitas } from "@/logic/TemporaryreceitasLogic";
import { useDespesas } from "@/logic/TemporarydespesasLogic";
import Receitas from "./receitas";
import Despesas from "./despesas";
import { useState } from "react";

export default function ReceitasDespesas() {
  const {
    receitas,
    handleAddReceita,
    handleEditReceita,
    handleDeleteReceita,
    setReceitas,
  } = useReceitas();
  
  const {
    despesas,
    handleAddDespesa,
    handleEditDespesa,
    handleDeleteDespesa,
    setDespesas,
  } = useDespesas();

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isExpense, setIsExpense] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { descricao, valor: parseFloat(valor) };

    if (isExpense) {
      if (isEditing) {
        handleEditDespesa(editIndex, newEntry);
      } else {
        handleAddDespesa(newEntry);
      }
    } else {
      if (isEditing) {
        handleEditReceita(editIndex, newEntry);
      } else {
        handleAddReceita(newEntry);
      }
    }
    resetForm();
  };

  const resetForm = () => {
    setDescricao("");
    setValor("");
    setIsExpense(false);
    setIsEditing(false);
    setEditIndex(null);
  };

  return (
    <div className="receitasDespesas">
      <h1>Receitas e Despesas</h1>

      <div>
        <button onClick={() => setIsExpense(false)}>Adicionar Receita</button>
        <button onClick={() => setIsExpense(true)}>Adicionar Despesa</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Descrição:</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Valor:</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isEditing ? "Editar" : isExpense ? "Adicionar Despesa" : "Adicionar Receita"}</button>
      </form>

      <Receitas handleEdit={setEditIndex} handleDelete={handleDeleteReceita} />
      <Despesas handleEdit={setEditIndex} handleDelete={handleDeleteDespesa} />
    </div>
  );
}
