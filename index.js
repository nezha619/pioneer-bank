// login button event handler 


const login = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");

login.addEventListener("click", function(){
    document.getElementById("login-area").style.display = "none";

    transactionArea.style.display = "block";
});


const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount");


    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBalance", depositNumber)

    document.getElementById("depositAmount",).value = "";
})

// Withdraw event handler 

const addWithdraw = document.getElementById("addWithdraw");
addWithdraw.addEventListener("click", function(){

    const withdrawNumber = getInputNumber("withdrawAmount")
    // alert(withdrawNumber);
})

function getInputNumber (id) {
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;
}


function updateSpanText(id, depositNumber){

    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const totalAmount = depositNumber + currentNum;

    document.getElementById(id).innerText = totalAmount;
}


