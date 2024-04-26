import React from 'react'
import TransactionList from './TransactionList'

function Transaction({ accounts ,handleDelete}) {
  return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {accounts.map((account) => (
          <TransactionList key={account.id} account={account} handleDelete={handleDelete}/>
          ))}
        </tbody>
      </table>
  )
}

export default Transaction