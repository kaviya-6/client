import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/BudgetList.css';
const BudgetList = ({ triggerUpdate }) => {
  const [budgets, setBudgets] = useState([]);

  const fetchBudgets = async () => {
    try {
      const response = await axios.get('https://unique-u4xh.onrender.com/budgets');
      setBudgets(response.data);
    } catch (error) {
      console.error('Error fetching budgets:', error);
    }
  };
useEffect(() => {
    fetchBudgets();
  }, [triggerUpdate]); 
  return (
    <div className="budget-list-container">
      <h3>All Budgets</h3>
      <ul className="budget-list">
        {budgets.map((budget, index) => (
          <li key={budget._id || index} className="budget-item">
            <div><strong>Title:</strong> {budget.title}</div>
            <div><strong>Amount:</strong> ${budget.amount}</div>
            <div><strong>Category:</strong> {budget.category}</div>
            <div><strong>Date:</strong> {budget.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BudgetList;
