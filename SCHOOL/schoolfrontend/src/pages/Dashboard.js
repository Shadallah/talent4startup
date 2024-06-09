import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchExpenses = async () => {
      try {

        const res = await axios.get('http://localhost:3001/api/expense'. data);
        setExpenses(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExpenses();
  }, []);

  const handleAddExpense = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/expense'. data, { title, item, quantity, price });
      setExpenses([...expenses, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <form onSubmit={handleAddExpense} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Item</label>
            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Add Expense
          </button>
        </form>
        <div>
          <h2 className="text-xl font-bold mb-4">Expenses</h2>
          <ul>
            {expenses.map((expense) => (
              <li key={expense._id} className="mb-2">
                {expense.title} - {expense.item} - {expense.quantity} - ${expense.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className='p-2 bg-sky-300 m-8'
        onClick={handleAddExpense}
        >
          Submit
        </button>
    </div>
  );
};

export default Dashboard;
