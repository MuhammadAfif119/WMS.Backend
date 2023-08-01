/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express')
const bodyParser = require('body-parser')
const router = require ('../functions/router/router')
const axios = require('axios');


const cors = require('cors');

const app = express ()
const port = 3050
app.use(cors());

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json())
app.use('/',router)

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
