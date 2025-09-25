
let tasks = {
  "Daily": {
    "Recurring": ["voicemail", "email"]
  },
  "Weekly": {
    "Monday": ["Progress updates"],
    "Tuesday": ["tacos", "staff meeting"],
    "Wednesday": ["client lunch"]
   },
  "Monthly": ["Status reports"]
}

const timePeriod = Object.keys(tasks).join(" ").split(" ");
const anchor = document.getElementById("anchor");

  anchor.innerText = timePeriod.join(" ");

const periods = anchor.innerText.split(" ")

  anchor.innerHTML = periods.map(el => `<li>${el}</li>`).join("");

const taskList = document.getElementById("task-list");

// weekly
const weekly = document.getElementById("weekly");

  anchor.addEventListener("click", event => {

    if (event.target.innerText === "Daily") {

      if (weekly.classList[0] === "weekly") {
        weekly.classList.add("hidden");
      }

       taskList.innerHTML = ``;
       title.innerHTML = `<h2>${Object.keys(tasks[event.target.innerText])[0]}</h2>`;
       taskList.innerHTML = tasks[event.target.innerText]["Recurring"].map(el => `
       <input type="checkbox" />
     <li>
       <label>
         ${el}
       </label>
     </li>`).join("");

    }
  
  });
