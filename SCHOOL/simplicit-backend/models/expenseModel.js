const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema(

    {
    
        title: String,
        item: String,
        quantity: String,
        price: Number
        

    }
)

const expenseModel = mongoose.model('expense', ExpenseSchema);
module.exports = expenseModel;