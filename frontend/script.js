let totalExpense = 0;

async function addExpense() {

    let title = document.getElementById("title").value;

    let amount = document.getElementById("amount").value;

    if(title === "" || amount === ""){

        alert("Please fill all fields");

        return;
    }

    await fetch('http://localhost:5000/expenses', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            title,
            amount
        })

    });

    document.getElementById("title").value = "";

    document.getElementById("amount").value = "";

    loadExpenses();
}

async function loadExpenses() {

    let response = await fetch('http://localhost:5000/expenses');

    let data = await response.json();

    let list = document.getElementById("expense-list");

    list.innerHTML = "";

    totalExpense = 0;

    data.forEach((expense,index) => {

        totalExpense += Number(expense.amount);

        let li = document.createElement("li");

        li.innerHTML = `
        
        <span>
        ${expense.title} - ₹${expense.amount}
        </span>

        <button class="delete-btn"
        onclick="deleteExpense(${index})">
        Delete
        </button>
        
        `;

        list.appendChild(li);

    });

    document.getElementById("total").innerText =
    "₹" + totalExpense;
}

async function deleteExpense(index){

    let response = await fetch('http://localhost:5000/expenses');

    let data = await response.json();

    data.splice(index,1);

    await fetch('http://localhost:5000/reset',{

        method:'POST',

        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify(data)

    });

    loadExpenses();
}

loadExpenses();