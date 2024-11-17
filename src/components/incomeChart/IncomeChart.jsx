import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Cores para os setores
const cores = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A569BD', '#E74C3C'];

function IncomeChart({ dadosFin }) {
    const agruparPorCategoria = (dadosFin) => {
        return dadosFin
            .filter(item => item.tipo === 0) // Filtrar apenas os dados de "spent" (tipo === 1)
            .reduce((acc, cur) => {
                const categoria = cur.categoriaSelecionadaIncome;
                const valor = Number(cur.income) || 0;

                if (acc[categoria]) {
                    acc[categoria] += valor;
                } else {
                    acc[categoria] = valor;
                }
                return acc;
            }, {});
    };

    const dadosAgrupados = Object.entries(agruparPorCategoria(dadosFin)).map(([categoria, valor]) => ({
        name: categoria,
        value: valor,
    }));

    // Se não houver dados agrupados, criamos um objeto vazio com um valor 0
      if (dadosAgrupados.length === 0) {
        dadosAgrupados.push({ name: 'Sem Dados', value: 0 });
    }

    return (
        <PieChart width={500} height={332}>
            <Pie
                data={dadosAgrupados}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                fill="#8884d8"
                label={({ name, value }) => `R$${value.toFixed(2)}`} // Exibir dentro das fatias
                labelLine={false} // Ocultar linha dos rótulos para fora
            >
                {dadosAgrupados.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
                ))}
            </Pie>

            <Tooltip />
            <Legend />
        </PieChart>
    );
}

export default IncomeChart;
