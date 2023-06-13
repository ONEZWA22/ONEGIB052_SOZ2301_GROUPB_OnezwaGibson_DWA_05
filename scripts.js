const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  if (divider <= 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again.";
    console.error("Invalid number provided", new Error().stack);
    return;
  }

  if (isNaN(dividend) || isNaN(divider) ) {
      result.innerText = "Something critical went wrong. Please reload the page.";
      console.error("Critical error occurred", new Error().stack);
      document.body.innerHTML =
        "<h1>Something critical went wrong. Please reload the page.</h1>";
      return;
    }

  const divisionResult = Math.floor(dividend / divider);
  result.innerText = divisionResult;

  
});

