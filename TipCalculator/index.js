const billAmount = document.getElementById("bill");
const tipPercent = document.getElementById("tipP");
const totalDisplay = document.getElementById("total");
function calculate() {
  let tipAmount = (tipPercent.value / 100) * billAmount.value;
  let total = Number(billAmount.value) + tipAmount;
  totalDisplay.textContent = total.toFixed(2);
}
