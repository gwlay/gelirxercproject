const OperationNameEl = document.getElementById("operationName");
const OperationAmountEl = document.getElementById("operationAmount");
const operationBtnEl = document.querySelector(".save-btn");
const profitBoxEl = document.getElementById("profitBox");
const expenseBoxEl = document.getElementById("lossBox");
const balanceBoxEl = document.getElementById("balance");
const operationListEl = document.querySelector(".operation-list")

let profit = 0;
let expense = 0;

function HandleOperation() {
    let OperationNameValue = OperationNameEl.value;
    let OperationAmountValue = +OperationAmountEl.value;

    if (OperationAmountValue > 0) {
        profit = profit + OperationAmountValue;
    } else {
        expense = expense - OperationAmountValue;
    }
    profitBoxEl.innerText = `$${profit
        }`
    expenseBoxEl.innerText = `$${expense
    }`

    console.log(`bizim qazancimiz ${profit
        }`)
    console.log(`bizim xercimiz ${expense
        }`)

    CalculateTotalProfit()
    addOperationToOperationList(OperationNameValue , OperationAmountValue)

}

function CalculateTotalProfit(){
    const totalProfit = profit - expense;
    balanceBoxEl.innerText = totalProfit;
}

function addOperationToOperationList( title , amount) {
    operationListEl.innerHTML += `
    <li class="operation-item profit-box">
        <button class="remove-btn">X</button>
        <span>${title}</span>
        <span>${amount}</span>
    </li> 
    `
    
}





operationBtnEl.addEventListener("click", HandleOperation)