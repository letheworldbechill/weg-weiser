const steps = [
  { text: "Ich bin hier. Ich bin sicher.", time: 5000 },
  { text: "Atme: 4 ein • 1 halten • 5 aus", time: 10000 },
  { text: "Lampe. Tür. Tisch. • Präsenz.", time: 10000 },
  { text: "Frage: Tut das meinem Leben gut?", time: 4000 },
  { text: "Ich gehe dahin, wo mein System atmen kann.", time: 1000 }
];

let index = 0;
let running = false;

const stepEl = document.getElementById("step");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  if (running) return;
  running = true;
  index = 0;
  runStep();
});

function runStep() {
  if (index >= steps.length) {
    running = false;
    stepEl.textContent = "Fertig.";
    return;
  }

  stepEl.textContent = steps[index].text;

  setTimeout(() => {
    index++;
    runStep();
  }, steps[index].time);
}
