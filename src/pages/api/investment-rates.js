// pages/api/investment-rates.js

export default function handler(req, res) {
    // Simulando uma mudança de dados a cada requisição
    const data = [
        { type: 'CDB', growthRate: Math.random() * 10 }, // Taxas aleatórias para cada requisição
        { type: 'Tesouro Direto', growthRate: Math.random() * 10 },
        { type: 'LCI/LCA', growthRate: Math.random() * 10 },
        { type: 'Ações', growthRate: Math.random() * 10 },
        { type: 'Fundos de Investimento', growthRate: Math.random() * 10 },
    ];

    res.status(200).json(data);
}
