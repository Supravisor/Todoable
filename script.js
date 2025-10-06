
let tasks = {
  "Daily": {
    "Recurring": ["voicemail", "email"],
    "Ad hoc": []
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

  anchor.innerHTML = periods.map(el => `<button>${el}</button>`).join("");

// daily
const addDaily = document.getElementById("add-daily");
const insertDailyTask = document.getElementById("insert-daily-task");
const insertDaily = document.getElementById("insert-daily");
const title = document.getElementById("title");
const taskList = document.getElementById("task-list");
const adHocTitle = document.getElementById("ad-hoc-title");
const adHocList = document.getElementById("ad-hoc-list");

// weekly
const addDaily = document.getElementById("add-daily");
const days = document.querySelectorAll("h2");
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

      addDaily.classList.toggle("hidden");
      title.classList.toggle("hidden");
      taskList.classList.toggle("hidden");

      if (weekly.classList[1] !== "hidden") {
        weekly.classList.add("hidden");
      }

      if (month.classList[1] !== "hidden") {
        month.classList.add("hidden");
      }

      // recurring
      title.innerHTML = `<h2>${Object.keys(tasks[event.target.innerText])[0]}</h2>`;
      taskList.innerHTML = tasks[event.target.innerText]["Recurring"].map(el => `
       <input type="checkbox" />
     <li>
       <label>
         ${el}
       </label>
     </li>`).join("");

       // ad hoc
       adHocTitle.innerHTML = `<h2>${Object.keys(tasks[event.target.innerText])[1]}</h2>`;
       adHocList.innerHTML = tasks[event.target.innerText]["Ad hoc"].map(el => `
       <input type="checkbox" />
     <li>
       <label>
         ${el}
       </label>
     </li>`).join("");

    }

    // weekly
    if (event.target.innerText === "Weekly") {
      let weeklyIncrementor = 0;

      weekly.classList.toggle("hidden");

      if (taskList.classList[1] !== "hidden") {
        taskList.classList.add("hidden");
      }
      if (title.classList[1] !== "hidden") {
        title.classList.add("hidden");
      }

      if (month.classList[1] !== "hidden") {
        month.classList.add("hidden");
      }

      for (let i = 0; i < days.length; i++) {
        let weeklyDate = new Date(diff + weeklyIncrementor)
        days[i].innerHTML = `${new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "short" })} ${weeklyDate.getDate()}`;
        weeklyIncrementor += 1000*24*60*60;
      }

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

      if (title.classList[1] !== "hidden") {
        title.classList.add("hidden");
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

  addDaily.addEventListener("click", event => {
    addDaily.classList.toggle("hidden");
    insertDaily.classList.toggle("hidden");
    title.classList.toggle("hidden");
    taskList.classList.toggle("hidden");
  });
