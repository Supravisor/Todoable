
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
const monday = document.getElementById("Monday");
const tuesday = document.getElementById("Tuesday");

// monthly
const thisDate = new Date();
let thisDay = thisDate.getDate();
let thisMonth = thisDate.getMonth();
let thisYear = thisDate.getFullYear();

let diff = new Date(thisYear, thisMonth, thisDay).getTime();
let incrementor = 0;

  anchor.addEventListener("click", event => {

    // daily
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

    // weekly
    if (event.target.innerText === "Weekly") {
      weekly.classList.toggle("hidden");
      monday.innerHTML = tasks[event.target.innerText]["Monday"].map(el => `<li>${el}</li>`).join("");
      tuesday.innerHTML = tasks[event.target.innerText]["Tuesday"].map(el => `<li>${el}</li>`).join("");
    }

    // monthly
    const table = document.querySelector("table");
    const months = document.querySelectorAll("th");

    if (event.target.innerText === "Monthly") {

        month.classList.toggle("hidden");

      if (taskList.classList[1] !== "hidden") {
        taskList.classList.add("hidden");
      }

      if (weekly.classList[1] !== "hidden") {
        weekly.classList.add("hidden");
      }

        incrementor = 0;

      for (let j = 0; j < months.length; j++) {
        let date = new Date(diff + incrementor)
        months[j].innerHTML = `${new Date(date + incrementor).toLocaleString("default", { weekday: "short" })} ${date.getDate()}`;
        incrementor += 1000*24*60*60;
      }

    }

  });
