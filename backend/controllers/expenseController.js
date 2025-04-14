const Expense = require('../models/expenseModel');

const addExpense = async(req, res) => {
    const {title , amount, category , description, date} = req.body;

    const expenseData = new Expense({
        title,
        amount, 
        category,
        description,
        date,
    });

    try{
        //validations
        if(!title || !category || !amount || !description || !date){
            return res.status(400).json({message: "All Fields are required"})
        }
        if (amount <= 0 || typeof amount !== 'number') {
            return res.status(400).json({ message: "Minimum Amount must be more than 0" });
        }
        await expenseData.save()
        res.status(200).json({message: "expense added"})
        console.log(expenseData);
    } catch (err) {
        res.status(500).json({message: "internal server error"})
    }
}

const getExpense = async (req , res) => {
    try{
        const expense = await Expense.find().sort({createdAt: -1});
        res.status(200).json(expense)
    } catch (err) {
        res.status(500).json({message: "server error"})
    }
}
const deleteExpense = async (req , res) => {
    const {id} = req.params;
    try{
        const deletedExpense = await Expense.findByIdAndDelete(id)
        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.status(200).json({message: "expense deleted"})

    } catch (err) {
        res.status(500).json({message: "server error"})
    } 
}

module.exports = {
    getExpense,
    deleteExpense,
    addExpense,
};