const form = document.querySelector('form');
const cryptoInput = document.getElementById('cryptoInput');
const cryptoSelect = document.getElementById('cryptoSelect');
const fiatAmount = document.getElementById('fiatAmount');
const exchangeRate = document.getElementById('exchangeRate');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const crypto = cryptoSelect.value;
  const amount = cryptoInput.value;

  fetch(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=USD,EUR,GBP`)
    .then(response => response.json())
    .then(data => {
      const usdRate = data.USD;
      const fiat = usdRate * amount;

      fiatAmount.textContent = fiat.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      exchangeRate.textContent = `1 ${crypto.toUpperCase()} = ${usdRate.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
    });
});
