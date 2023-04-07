var setupEl = document.getElementById("joke-setup");
var punchlineEl = document.getElementById("joke-punchline");
var newJokeBtn = document.getElementById("joke-btn");
var punchlineBtn = document.getElementById("punchline-btn");

function updateDom(setup, punchline) {
  punchlineEl.textContent = punchline;
  setupEl.textContent = setup;
  newJokeBtn.classList.add("hidden")
  punchlineBtn.classList.remove("hidden")
  punchlineEl.classList.add("hidden")
}

function showPunchline() {
  punchlineEl.classList.remove("hidden");
  punchlineBtn.classList.add("hidden");
  newJokeBtn.classList.remove("hidden");
}

function fetchJoke() {
  fetch("https://manateejokesapi.herokuapp.com/manatees/random")
  .then((data) => data.json())
  .then((data) => {
    updateDom(data.setup, data.punchline);
  });
}

punchlineBtn.addEventListener("click", showPunchline);
newJokeBtn.addEventListener("click", fetchJoke);
fetchJoke()