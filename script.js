// select currency
let currencies = ["Selecione a moeda", "BRL", "CAD", "USD"];
let currenciesHtml = "";
for (i = 0; i < currencies.length; i++) {
  currenciesHtml += `<option>${currencies[i]}</option>`;
}

document.querySelector("#fromCurrency").innerHTML = currenciesHtml;
document.querySelector("#toCurrency").innerHTML = currenciesHtml;

let fromCurrency = document.querySelector("#fromCurrency");
let toCurrency = document.querySelector("#toCurrency");

/* mais um seletor de moedas indicando conversão de -> para com evento de onchange atualizando valores para cálculo de conversão , sei lá viajei kakaka*/

//convert

let convertBtn = document.querySelector("#convertBtn");

convertBtn.addEventListener("click", function () {
  let usdMultiplier = 5.07; //como recuperar direto do google?
  let cadMultiplier = 3.94;
  let brlMultiplier = 1;
  let currency = parseInt(document.querySelector("#currencyInput").value, 10);
  if (fromCurrency.value == "BRL" && toCurrency.value == "CAD") {
    document.querySelector("#showConvertedCurrency").innerHTML =
      (brlMultiplier / cadMultiplier) * currency;
  } else if (fromCurrency.value == "BRL" && toCurrency.value == "USD") {
    document.querySelector("#showConvertedCurrency").innerHTML =
      (brlMultiplier / usdMultiplier) * currency;
  } else if (fromCurrency.value == "CAD" && toCurrency.value == "BRL")
    document.querySelector("#showConvertedCurrency").innerHTML =
      (cadMultiplier / brlMultiplier) * currency;
  else if (fromCurrency.value == "CAD" && toCurrency.value == "USD")
    document.querySelector("#showConvertedCurrency").innerHTML =
      (cadMultiplier / usdMultiplier) * currency;
  else if (fromCurrency.value == "USD" && toCurrency.value == "BRL")
    document.querySelector("#showConvertedCurrency").innerHTML =
      (usdMultiplier / brlMultiplier) * currency;
  else if (fromCurrency.value == "USD" && toCurrency.value == "CAD")
    document.querySelector("#showConvertedCurrency").innerHTML =
      (usdMultiplier / cadMultiplier) * currency;
  else {
    document.querySelector("#showConvertedCurrency").innerHTML =
      "Favor inserir moedas distintas";
  }
});
