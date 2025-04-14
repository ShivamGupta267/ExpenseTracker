const Income = require('../models/incomeModel');

const addIncome = async(req, res) => {
    console.log(req.body)
    const {title , amount, category , description, date} = req.body;

    const incomeData = new Income({
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
        await incomeData.save()
        res.status(200).json({message: "income added"})
        console.log(incomeData);
    } catch (err) {
        res.status(500).json({message: "internal server error"})
    }
}

const getIncomes = async (req , res) => {
    try{
        const incomes = await Income.find().sort({createdAt: -1});
        res.status(200).json(incomes)
    } catch (err) {
        res.status(500).json({message: "server error"})
    }
}
const deleteIncomes = async (req , res) => {
    const {id} = req.params;
    try{
        const deletedIncome = await Income.findByIdAndDelete(id)
        if (!deletedIncome) {
            return res.status(404).json({ message: "Income not found" });
        }
        res.status(200).json({message: "income deleted"})

    } catch (err) {
        res.status(500).json({message: "server error"})
    } 
}

module.exports = {
    addIncome,
    getIncomes,
    deleteIncomes
};