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

router.post('/write', upload.none(), async (req,res) => {
    console.log(req.body);
    //validTest(req.body);
})

router.post('/mongo', async (req,res)=> {
    const data = await hi();
    console.log(data);
    res.json(data);
})


const hi = async () => {
    await client.connect()
    const users = client.db().collection('users')
    const data = await users.find().toArray()
    return data;
}

const validTest = async (data) => {
    const valid = await validate(data) ? write(data) : console.log("error");
}   

const write = async (data) => {
    log
    await client.connect()
    const users = client.db().collection('users')
    const user = await users.insertOne({data})
}

module.exports = router;