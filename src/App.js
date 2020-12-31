import React from 'react'

function App() {
  const midtransClient = require('midtrans-client')

  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: 'SB-Mid-server-RPIkHxFpG3BBH1zazgRyYwEd'
  })

  let parameter = {
    'transaction_details': {
      'order_id': 'ID-123',
      'gross_amount': 100000
    },
    'credit_card': {
      'secure': true
    },
    'customer_details': {
      'first_name': 'bimo',
      'last_name': 'satrio',
      'email': 'bimo.satrio@gmail.com',
      'phone': '08111111001'
    }
  }
  const handleClick = () => {
    snap.createTransaction(parameter)
      .then((transaction) => {
        let transactionToken = transaction.token
        console.log('transactionToken', transactionToken)
      })
  }
  

  return (
    <div>
      hello world
      <div>
        <button onClick={handleClick}>click me</button>
      </div>
    </div>
  );
}

export default App;
