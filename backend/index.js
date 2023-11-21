const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())


app.listen(3002,()=>{
    console.log('Server is running on port 3002')
})


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'petdb',
})


app.post('/register',(req,res)=>{
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password


    const SQL = 'INSERT INTO users (email,username,password) VALUES(?,?,?)'
    const Values = [sentEmail,sentUserName,sentPassword]
    
    db.query(SQL,Values,(err,results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({messsage: 'User added!'})
        }
    })
})


app.post('/login',(req,res)=>{
    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword


    const SQL = 'SELECT * FROM users WHERE username = ? && password = ? '
    const Values = [sentLoginUserName,sentLoginPassword]


    db.query(SQL,Values,(err,results)=>{
       if(err){
        res.send({error: err})
       }
       if(results.length > 0){
        res.send(results)
       }
       else{
        res.send({messsage: `Credentials dont match!`})
       }
    })
})