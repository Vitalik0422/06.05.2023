const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const validate = require('../components/schema')
const router = express.Router()
const { name } = require('ejs');
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb+srv://vitaliy19980422:qwerty123@cluster0.uftxgn1.mongodb.net/mongo?retryWrites=true&w=majority') 

router.get('/', (req,res) => {
    res.render('index')
})

router.post('/data', upload.none(), (req,res) => {
    console.log(req.body);
    test(req.body)
})

const test = async (data) => {
    const valid = await validate(data)
    console.log('valid',valid)
    await client.connect()
    console.log('done');
    const users = client.db().collection('users')
    console.log('done');
    console.log(data);
    const user = await users.insertOne({data})
}   

module.exports = router;