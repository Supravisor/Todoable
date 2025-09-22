
let tasks = {
  "Daily": {
    "Recurring": ["check phone messages", "check emails"]
  },
  "Weekly": ["Progress updates"],
  "Monthly": ["Status reports"]
}

const timePeriod = Object.keys(tasks).join(" ").split(" ");
const anchor = document.getElementById("anchor");

  anchor.innerText = timePeriod.join(" ");

const periods = anchor.innerText.split(" ")

  anchor.innerHTML = periods.map(el => `<li>${el}</li>`).join("");

const tasksList = document.getElementById("tasks");

  anchor.addEventListener("click", event => {

    if (event.target.innerText === "Daily") {
     tasksList.innerHTML = tasks[event.target.innerText]["Recurring"].map(el => `<li><input type="checkbox" />${el}</li>`).join("");
    }
  
  });
