import {
  Pemilu2029_backend
} from "../../declarations/Pemilu2029_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button1 = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await Pemilu2029_backend.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;

  let votesCandidate1 = 0;
  let votesCandidate2 = 0;

  function vote(candidate) {
    if (candidate === 'candidate1') {
      votesCandidate1++;
      document.getElementById('votes-candidate1').innerText = votesCandidate1;
    } else if (candidate === 'candidate2') {
      votesCandidate2++;
      document.getElementById('votes-candidate2').innerText = votesCandidate2;
    }
  }
});