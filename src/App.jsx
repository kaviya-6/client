import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BudgetList from './components/BudgetList';
import './styles/App.css';
import BudgetForm from './components/BudgetForm';
import axios from 'axios';

const App = () => {
  const [budgets, setBudgets] = useState([]);

  const fetchBudgets = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/budgets');
      setBudgets(response.data);
    } catch (error) {
      console.error('Error fetching budgets:', error);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  const addBudget = async (budget) => {
    try {
      await axios.post('http://localhost:5000/api/budgets', budget);
      fetchBudgets();
    } catch (error) {
      console.error('Error adding budget:', error);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                  <h2>Welcome to Budget Manager</h2>
                  <p>Track your expenses, plan your finances, and manage your budgets efficiently.</p>
                  <img
                    className="home-image"
                    src="bm-1.webp"
                    alt="Budget Management"
                  />
                </div>
              }
            />
            <Route
              path="/add-budget"
              element={
                <div className="add-budget-page">
                  <h1>Add New Budget Entry</h1>
                  <h2>Keep your spending under control by adding budget entries here.</h2>
                  <BudgetForm addBudget={addBudget} />
                </div>
              }
            />
            <Route
              path="/view-budgets"
              element={
                <div className="view-budget-page">
                  <h1>Your Budget Records</h1>
                  <h4>Here are all the budgets you've added so far.</h4>
                  <BudgetList budgets={budgets} />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
