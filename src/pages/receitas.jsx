// Receitas.js
import { useReceitasDespesas } from "@/logic/TemporaryuseReceitasDespesasLogic";

export default function Receitas({ handleEdit, handleDelete }) {
  const { receitas } = useReceitasDespesas();

  return (
    <div>
      <h2>Receitas</h2>
      <ul>
        {receitas.map((item, index) => (
          <li key={index}>
            {item.descricao} - R$ {item.valor.toFixed(2)}
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
