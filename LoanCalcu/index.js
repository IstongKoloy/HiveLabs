// First form, automatically gets the result
document.addEventListener("DOMContentLoaded", function() {
    const loanAmount = 100000;
    const loanTerm = 12;
    const annualInterestRate = 3.5;
    const monthlyInterestRate = (annualInterestRate / 100) / 12;

    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -loanTerm);
    const monthlyInstallment = (loanAmount * monthlyInterestRate) / denominator;

    const monthlyInstallmentElement = document.getElementById("monthlyInstallment");
    monthlyInstallmentElement.textContent = "Monthly Installment: ₱" + monthlyInstallment.toFixed(2);
});

document.getElementById("calc").addEventListener("click", function() {
    // get values from inputs
    let loan = document.getElementById('loan').value;
    let monthly = document.getElementById('pay').value;
    let rate = document.getElementById('rate').value;
    let monthlyRate = (rate / 100) / 12;

    const denominator = 1 - Math.pow(1 + monthlyRate, -monthly);
    const monthlyInstallment = (loan * monthlyRate) / denominator;

      const formContainer = document.getElementById("formContainer");
      formContainer.innerHTML = `
        <p>Monthly Installment: ₱${monthlyInstallment.toFixed(2)}</p>
        <button id="goBackBtn">Try Again</button>
      `;

      document.getElementById("goBackBtn").addEventListener("click", function() {
        location.reload();
        ;
      });
})