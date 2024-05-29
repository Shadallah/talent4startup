const Expense = require('../models/expenseModel')

const getExpenses = async (req, res)=>{

    try {
        const Expensegets = await Expense.find({})
        res.status(200).json(Expensegets)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getExpense = async (req, res)=>{
    try {
        
        const {id} = req.params;
        const expense = await Expense.findById(id)
        // to check if the student present in the database
        res.status(200).json(expense)

    } catch (error) {
        res.status(500).json({message: error.message})
    } 
}

const createExpense = async (req, res)=>{
    try{
        const expense = await Expense.create(req.body)
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const updateExpense = async (req, res)=>{
    try {
        const{id} = req.params;
        const expenseUpdate  = await Expense.findByIdAndUpdate(id, req.body)
        if(!expenseUpdate){
            res.status(404).json({message: "Double check the Id ?"})
        }
        const updatedExpense = await Expense.findById(id)
        res.status(200).json(updatedExpense)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteExpense = async (req, res)=>{
    try {
        const {id} = req.params;
        const expenseDel = await Expense.findByIdAndDelete(id)
        if(!expenseDel){
            return res.status(404).json({message: "Expense Details not Found"})  
        }

        res.status(200).json({message: "Expense Detail Deleted Successfully!"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



module.exports = {
    getExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense
}