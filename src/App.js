import React, { useEffect, useState } from "react";
import Search from './components/Search'
import TransactionForm from './components/TransactionForm'
import Transaction from './components/Transaction'
import Header from './components/Header'
import './App.css';
import Filter from "./components/Filter";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortingCriterion, setSortingCriterion] = useState(null);

  const getAccounts = async () => {
    try {
      const response = await fetch("https://wk1-cc.onrender.com/transactions");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAccounts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

 




  const addTransaction = async (transactionData) => {
    try {
      const response = await fetch("https://wk1-cc.onrender.com/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      });
      if (!response.ok) {
        throw new Error('Failed to create Account');
      }
      getAccounts();
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://wk1-cc.onrender.com/transactions/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error('Failed to delete account');
      }
      setAccounts((items) => items.filter((item) => item.id !== id));
      console.log("Account Deleted successfully");
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const filteredAccounts = accounts.filter(
    (account) =>
      account.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.amount.toString().includes(searchTerm)
  );



  const sortedAccounts = [...filteredAccounts].sort((a, b) => {
    if (sortingCriterion === "description") {
      return a.description.localeCompare(b.description);
    } else if (sortingCriterion === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className='container'>
      <Header/>
      <Search setSearchTerm={setSearchTerm}/>
      <Filter setSortingCriterion={setSortingCriterion} />
      <TransactionForm addTransaction={addTransaction}/>
      <Transaction accounts={sortedAccounts} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
