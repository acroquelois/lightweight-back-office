const functions = require('firebase-functions')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//initialize express server
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({ origin: true }))

// Expose Express API as a single Cloud Function:
exports.getToken = functions.region('europe-west1').https.onRequest(app)

app.post('/', function (req: any, res: any) {
    try {
        console.log(`[INFO]: Body: ${req.body}`)
        res.status(200)
    } catch (e) {
        console.log(`[ERROR]: Error in the payload`)
        res.status(500).json({ msg: 'Error in the payload' })
    }
})

app.get('/', function (req: any, res: any) {
    res.send('Get token')
})