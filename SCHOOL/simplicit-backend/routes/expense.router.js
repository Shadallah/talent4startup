const express = require('express')
const Expense = require('../models/expenseModel.js');
const router = express.Router();
const {getExpenses, getExpense, createExpense, updateExpense, deleteExpense} = require('../controllers/expense.controller.js');

// GET all epenses
router.get('/', getExpenses)

// GET student by Id
router.get('/:id', getExpense)

// Create expense
router.post('/', createExpense)

// Modify expense by Id
router.put('/:id', updateExpense)

//Delete expense by Id
router.delete('/:id', deleteExpense)


module.exports = router;