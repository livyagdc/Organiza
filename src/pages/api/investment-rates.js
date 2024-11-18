// pages/api/investment-rates.js

export default function handler(req, res) {
    const data = [
        { type: 'CDB', growthRate: 6 },
        { type: 'Tesouro Direto', growthRate: 5 },
        { type: 'LCI/LCA', growthRate: 7 },
        { type: 'Ações', growthRate: 10 },
        { type: 'Fundos de Investimento', growthRate: 8 },
    ];

    res.status(200).json(data);
}
