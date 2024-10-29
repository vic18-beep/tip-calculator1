function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || billAmount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid bill amount.";
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    // Display the result along with the thank-you message
    document.getElementById("result").innerHTML = `
        Tip Amount: $${tipAmount.toFixed(2)}, Total Amount: $${totalAmount.toFixed(2)}<br>
        <p>Ačiū už jūsų auką, susitiksime kitoje matematikos konsultacijoje</p>
    `;
}
