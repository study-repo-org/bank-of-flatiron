import React from 'react'

function TransactionList({account, handleDelete}) {
  return (
    <tr>
      <td>{account.date}</td>
      <td>{account.description}</td>
      <td>{account.category}</td>
      <td>{account.amount}</td>
      <td><button onClick={() => handleDelete(account.id)}>Delete</button></td>
    </tr>
  )
}

export default TransactionList