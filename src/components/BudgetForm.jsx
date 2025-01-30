import React, { useState } from 'react';
import "../styles/BudgetForm.css";
const BudgetForm = ({ addBudget }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    const budget = { title, amount, category, date };
    addBudget(budget);
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
  };
return (
    <div className="budget-form-container">
      <h3>Add a New Budget</h3>
      <form onSubmit={handleSubmit} className="budget-form">
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <button type="submit">Add Budget</button>
      </form>
    </div>
  );
};
export default BudgetForm;
