
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
