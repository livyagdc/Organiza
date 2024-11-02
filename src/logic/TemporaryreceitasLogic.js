import { useEffect, useState } from "react";

export const useReceitas = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("receitas");
    if (savedData) {
      setReceitas(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("receitas", JSON.stringify(receitas));
  }, [receitas]); // Adicione esta linha

  const handleAddReceita = (receita) => {
    setReceitas((prevReceitas) => [...prevReceitas, receita]);
  };

  const handleEditReceita = (index, receita) => {
    setReceitas((prevReceitas) => {
      const updatedReceitas = [...prevReceitas];
      updatedReceitas[index] = receita;
      return updatedReceitas;
    });
  };

  const handleDeleteReceita = (index) => {
    setReceitas((prevReceitas) => prevReceitas.filter((_, i) => i !== index));
  };

  return {
    receitas,
    setReceitas,
    handleAddReceita,
    handleEditReceita,
    handleDeleteReceita,
  };
};
