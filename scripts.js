// Cotaçāo de moedas do dia
const USD = 5.41;
const EUR = 6.35;
const GBP = 7.31;

//Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "USD $ ");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€ ");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£ ");
      break;
  }
};

// Funçāo para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotaçāo da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula o valor total.
    let total = amount * price;
    total = formatCurrencyBRL(total);

    // Exibe o resultado total.
    result.textContent = `${total}`;

    // Aplica a classe que exiber o footer com o resultado da conversāo.
    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");
    console.log(error);
    alert(
      "Não foi possível converter o valor, retorne mais tarde para uma nova tentativa."
    );
  }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  // Converte para número para utilizar o toLocaleString para formatar no padrāo BRL (R$ 00,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
