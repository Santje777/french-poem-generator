function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "c'que tu penses de moi",
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
