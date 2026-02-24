document.getElementById("cashout-btn").addEventListener('click', function(){
    const cashoutNumberInput = document.getElementById("cashout-nmbr");
    const cashoutNumbber = cashoutNumberInput.value;
    console.log(cashoutNumbber);
    if(cashoutNumbber.length != 11){
        alert("Invalid Agent Number");
        return;
    }

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    const balanceElement = document.getElementById("balance");
    const balanceAmount = balanceElement.innerText;
    const newBalance = Number(balanceAmount) - Number(cashoutAmount);
    
    if(newBalance < 0){
        alert("Amount Exceeds Balance!");
        return;
    }

    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    if(pin === '1234'){
        alert("Cashout Succesful");
        balanceElement.innerText = newBalance;
        return;
    }else {
        alert("Invalid Pin!");
        return;
    }
})