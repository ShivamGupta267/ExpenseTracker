const express = require('express');
const router = express();
const {addIncome , getIncomes , deleteIncomes} = require('../controllers/incomeController');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expenseController');

//incomeTransactions
router.post("/income/" , addIncome);
router.get("/income/" , getIncomes);
router.delete("/income/:id/" , deleteIncomes);

//expenseTransactions
router.post("/expense/", addExpense);
router.get("/expense/", getExpense);
router.delete("/expense/:id", deleteExpense);


router.get('/', (req,res) => {
    res.send("helllo")
})

module.exports = router;