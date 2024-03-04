function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3734of2cfc5035aca32f96t5a9b478fb";
  let prompt = `Generate a French poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem and seperate each line wit a <br /> from HTML. You enter nothing else then the french language. At the end you sign the poem with 'Made by SheCodes AI' in <i> and <small> element from HTML.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<div class="blink">⏳️ Generating a French poem about ${instructionsInput.value}...
    </div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
