import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/auth'


firebase.initializeApp({
  apiKey: "AIzaSyBIrK3bwnKoDwV7oz9_qx_zelpE_9CR_YI",
  authDomain: "donate-me-d7d24.firebaseapp.com",
  projectId: "donate-me-d7d24",
  storageBucket: "donate-me-d7d24.appspot.com",
  messagingSenderId: "1075734922168",
  appId: "1:1075734922168:web:eb8eb5d47cce15cdfb854d"
})


firebase.functions().useEmulator("localhost", 5001);
firebase.firestore().useEmulator("localhost", 8080);
firebase.auth().useEmulator('http://localhost:9099/');

const App = () => {
  const sayHello = firebase.functions().httpsCallable('sayHello')
  const snapTransaction = firebase.functions().httpsCallable('snapTransaction')

  const handleClick = () => {
    // snap.createTransaction(parameter)
    //   .then((transaction) => {
    //     let transactionToken = transaction.token
    //     console.log('transactionToken', transactionToken)
    //   })
    //   .catch((err) => {
    //     console.log('Error: ', err.message)
    //   })
    sayHello().then(result => {
      console.log(result.data)
    })
    snapTransaction().then(result => {
      console.log(result.data)
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
