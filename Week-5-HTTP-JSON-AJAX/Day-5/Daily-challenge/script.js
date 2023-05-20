
async function fetchCurrencies() {
    try {
      const response = await fetch("https://api.exchangerate-api.com/v4/symbols");
      const data = await response.json();
      return data.symbols;
    } catch (error) {
      console.log("Error fetching currencies:", error);
    }
  }

  // Fetch conversion rate
  async function fetchConversionRate(fromCurrency, toCurrency) {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      return data.rates[toCurrency];
    } catch (error) {
      console.log("Error fetching conversion rate:", error);
    }
  }

  // Perform currency conversion
  function convertCurrency(amount, fromCurrency, toCurrency) {
    fetchConversionRate(fromCurrency, toCurrency)
      .then((conversionRate) => {
        const convertedAmount = amount * conversionRate;
        const resultElement = document.getElementById("conversionResult");
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      })
      .catch((error) => {
        console.log("Currency conversion failed:", error);
      });
  }

  // Populate currency options
  function populateCurrencyOptions(currencies) {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");

    for (const currency in currencies) {
      const option = document.createElement("option");
      option.value = currency;
      option.textContent = currency;
      fromCurrencySelect.appendChild(option.cloneNode(true));
      toCurrencySelect.appendChild(option);
    }
  }

  // Currency conversion button click handler
  const convertButton = document.getElementById("convertButton");
  convertButton.addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    convertCurrency(amount, fromCurrency, toCurrency);
  });

  // Switch currencies button click handler
  const switchButton = document.getElementById("switchButton");
  switchButton.addEventListener("click", function() {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");
    const fromCurrencyValue = fromCurrencySelect.value;
    const toCurrencyValue = toCurrencySelect.value;
    fromCurrencySelect.value = toCurrencyValue;
    toCurrencySelect.value = fromCurrencyValue;
  });

  // Initialize the currency converter
  fetchCurrencies().then((currencies) => {
    populateCurrencyOptions(currencies);
  });