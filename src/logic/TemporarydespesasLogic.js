import { useEffect, useState } from "react";

export const useDespesas = () => {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("despesas");
    if (savedData) {
      setDespesas(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("despesas", JSON.stringify(despesas));
  }, [despesas]); // Adicione esta linha

  const handleAddDespesa = (despesa) => {
    setDespesas((prevDespesas) => [...prevDespesas, despesa]);
  };

  const handleEditDespesa = (index, despesa) => {
    setDespesas((prevDespesas) => {
      const updatedDespesas = [...prevDespesas];
      updatedDespesas[index] = despesa;
      return updatedDespesas;
    });
  };

  const handleDeleteDespesa = (index) => {
    setDespesas((prevDespesas) => prevDespesas.filter((_, i) => i !== index));
  };

  return {
    despesas,
    setDespesas,
    handleAddDespesa,
    handleEditDespesa,
    handleDeleteDespesa,
  };
};
