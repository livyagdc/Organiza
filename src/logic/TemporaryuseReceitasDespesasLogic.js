import { useEffect, useState } from "react";
import { useReceitas } from "./TemporaryreceitasLogic";
import { useDespesas } from "./TemporarydespesasLogic";

export const useReceitasDespesas = () => {
  const { receitas, setReceitas } = useReceitas();
  const { despesas, setDespesas } = useDespesas();

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isExpense, setIsExpense] = useState(false);

  useEffect(() => {
    // Carregar dados de receitas do localStorage no lado do cliente
    const savedReceitas = localStorage.getItem("receitas");
    if (savedReceitas) {
      setReceitas(JSON.parse(savedReceitas));
    }

    // Carregar dados de despesas do localStorage no lado do cliente
    const savedDespesas = localStorage.getItem("despesas");
    if (savedDespesas) {
      setDespesas(JSON.parse(savedDespesas));
    }
  }, [setReceitas, setDespesas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { descricao, valor: parseFloat(valor) };

    if (isExpense) {
      handleAddDespesa(newEntry);
    } else {
      handleAddReceita(newEntry);
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

  return {
    receitas,
    despesas,
    descricao,
    valor,
    isEditing,
    isExpense,
    handleSubmit,
    setDescricao,
    setValor,
    setIsExpense,
    setIsEditing,
    setEditIndex,
  };
};
