const { sum } = require('../util/mathUtil.js');

const prodcutList = [
    { id: 1, title: 'Laptop', price: 999 },
    { id: 2, title: 'Phone', price: 499 },
    { id: 3, title: 'Tablet', price: 299 }
];

const getProducts = (req, res) => {
    const names = prodcutList.map(item => item.titre);
    res.json({ products: prodcutList, names });
};

const getSum = (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const result = sum(a, b);
    res.json({ a, b, result });
};

module.exports = { getProducts, getSum };
