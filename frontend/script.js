async function addExpense(){

    let title = document.getElementById("title").value;

    let amount = document.getElementById("amount").value;

    await fetch('http://localhost:5000/expenses',{

        method:'POST',

        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify({
            title,
            amount
        })

    });

    loadExpenses();

}

async function loadExpenses(){

    let response = await fetch('http://localhost:5000/expenses');

    let data = await response.json();

    let list = document.getElementById("expense-list");

    list.innerHTML = "";

    data.forEach(expense=>{

        let li = document.createElement("li");

        li.innerHTML = expense.title + " - ₹" + expense.amount;

        list.appendChild(li);

    });

}

loadExpenses();