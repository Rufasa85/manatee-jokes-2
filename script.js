var setupEl = document.getElementById("joke-setup")
var punchlineEl = document.getElementById("joke-punchline")
var newJokeBtn = document.getElementById("joke-btn")
var punchlineBtn = document.getElementById("punchline-btn")

function updateDom (setup, punchline) {
  punchlineEl.textContent = punchline
  punchlineEl.setAttribute("style", "display: hidden")
  setupEl.textContent = joke
}

function showPunchline() {
  punchlineEl.classList.remove("hidden")
  punchlineBtn.classList.add("hidden")
  newJokeBtn.classList.remove("hidden")
}


punchlineBtn.addEventListener("click", showPunchline)