function calculateTip() {
  const amount = parseInt(billAmount.value);
  const tip = tipPercentage.value;

  if (isNaN(amount) || tip == "") {
    alert("please fill the fields");
  } else {
    const tipAmount = (amount * tip) / 100;
    totalBill = amount + tipAmount;

    const tipAmountField = document.querySelector("#tipAmount");
    const totalBillField = document.querySelector("#totalBill");
    tipAmountField.innerHTML = `$${tipAmount}`;
    totalBillField.innerHTML = `$${totalBill}`;
  }
}

function clearFields() {
  billAmount.value = "";
  tipPercentage.value = "";

  const tipAmountField = document.querySelector("#tipAmount");
  const totalBillField = document.querySelector("#totalBill");
  tipAmountField.innerHTML = "$0.00";
  totalBillField.innerHTML = "$0.00";
}
