import useCashflow from '@/hooks/useCashflow';
import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function GeralChart() {

  const {
    income,
    expense,
    investments
  } = useCashflow();

  const data = [
    { name: 'Receitas', value: {investments} },
    { name: 'Despesas', value: {expense} },
    { name: 'Investimentos', value: {income} },
  ];

  useEffect
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={150}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}


