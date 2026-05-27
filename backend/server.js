const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

let expenses = [];

app.get('/expenses',(req,res)=>{

    res.json(expenses);

});

app.post('/expenses',(req,res)=>{

    expenses.push(req.body);

    res.json({
        message:"Expense Added Successfully"
    });

});

app.post('/reset',(req,res)=>{

    expenses = req.body;

    res.json({
        message:"Updated"
    });

});

app.listen(5000,'0.0.0.0',()=>{

    console.log("Server running on port 5000");

});