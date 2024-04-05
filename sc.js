const exchangeRate = 1.33; // Exchange rate between CAD and USD

function convertCurrency() { 
    //getting user input
    let usdAmount = document.getElementById('usdAmount').value;
    //Validaiting the user input
    if (!usdAmount || isNaN(usdAmount) || usdAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
   
    document.getElementById('cadAmount').value = (usdAmount * exchangeRate).toFixed(3);
}
function swapCurrencies() {
    
    let usdFlag = document.querySelector('.usd-input-div .flag');
    let cadFlag = document.querySelector('.usd-input-div + .interchange-icon + .usd-input-div .flag');

   
    let tempFlag = usdFlag.textContent;  //Temporarirl storing the flag
    usdFlag.textContent = cadFlag.textContent;
    cadFlag.textContent = tempFlag;

 
    let usdAmount = document.getElementById('usdAmount');
    let cadAmount = document.getElementById('cadAmount');
    let tempAmount = usdAmount.value;
    usdAmount.value = cadAmount.value;  //Swaping the value between cad and usd.
    cadAmount.value = tempAmount;
}
