import React, { useState } from "react";

function TransactionForm({addTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionData = {
      date,
      description,
      amount: parseFloat(amount),
      category,
    };
    addTransaction(transactionData);
    setDate("");
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="div-container">
      <form onSubmit={handleSubmit} >
        <div className="form-container">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="date" required />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Description" />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required placeholder="Category" />
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}placeholder="Amount" />
        </div>
        <div class="button-container">
        <button typeof="submit">Add Transaction</button>
        </div>
      </form>

    </div>
  );
}

export default TransactionForm;
