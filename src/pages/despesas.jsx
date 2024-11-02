// Despesas.js
import { useReceitasDespesas } from "@/logic/TemporaryuseReceitasDespesasLogic";

export default function Despesas({ handleEdit, handleDelete }) {
  const { despesas } = useReceitasDespesas();

  return (
    <div>
      <h2>Despesas</h2>
      <ul>
        {despesas.map((item, index) => (
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
