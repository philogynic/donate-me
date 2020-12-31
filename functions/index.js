const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

a = 'helo bang'
exports.sayHello = functions.https.onCall((data, context) => {
    return a
})


const midtransClient = require('midtrans-client');
// Create Snap API instance
exports.snapTransaction = functions.https.onCall(async (data, context) => {
    let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction : false,
        serverKey : 'SB-Mid-server-RPIkHxFpG3BBH1zazgRyYwEd'
    });

    const number = Math.round(Math.random() * 1000)

    let parameter = {
        "transaction_details": {
            "order_id": "YOUR-ORDERID-" + number,
            "gross_amount": 10000
        },
        "credit_card":{
            "secure" : true
        },
        "customer_details": {
            "first_name": "budi",
            "last_name": "pratama",
            "email": "budi.pra@example.com",
            "phone": "08111222333"
        }
    };

    transactionToken = snap.createTransaction(parameter)
        .then((transaction)=>{
            // transaction token
            const transactionToken = transaction.token;
            console.log('transactionToken:',transactionToken);
            return transactionToken
        })
        .catch((err) => {
            console.log(err.message)
        })
    
    return transactionToken
})


