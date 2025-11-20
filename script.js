
let tasks = {
  "Daily": {
    "Recurring": ["voicemail", "email"],
    "Ad hoc": ["plan report", "design brief"]
  },
  "Weekly": {
    "Monday": ["Mexican Monday"],
    "Tuesday": ["Taco Tuesday", "staff meeting"],
    "Wednesday": ["Wild buritto"],
    "Thursday": ["Tamales Thursday"],
    "Friday": ["Fiesta Friday"],
    "Saturday": ["Salsa Saturday"],
    "Sunday": ["Sunday siesta"]
   }
}

// nav
const timePeriod = Object.keys(tasks).join(" ").split(" ");
const anchor = document.getElementById("anchor");

  anchor.innerText = timePeriod.join(" ");

const periods = anchor.innerText.split(" ");

  anchor.innerHTML = periods.map(el => `<button>${el}</button>`).join("");

// daily
const addDaily = document.getElementById("add-daily");
const insertDaily = document.getElementById("insert-daily");
const insertDailyTask = document.getElementById("insert-daily-task");
const edit = document.getElementById("edit");
const editDaily = document.getElementById("edit-daily");
const editDailyTask = document.getElementById("edit-daily-task");
const closeEditAdHoc = document.getElementById("close-edit-ad-hoc");
const updateDaily = document.getElementById("update-daily");
const updateDailyTask = document.getElementById("update-daily-task");
const modifyDaily = document.getElementById("modify-daily");
const dailyModify = document.getElementById("daily-modify");
const deleteDaily = document.getElementById("delete-daily");
let modifyAdHoc;
const closeAdHoc = document.getElementById("close-ad-hoc");
const closeUpdateAdHoc = document.getElementById("close-update-ad-hoc");
const title = document.getElementById("title");
const taskList = document.getElementById("task-list");
const adHocTitle = document.getElementById("ad-hoc-title");
const adHocList = document.getElementById("ad-hoc-list");
const dailyInput = document.getElementById("daily-input");

// weekly
const days = document.querySelectorAll("h2");
const weekly = document.getElementById("weekly");
const weekDay = document.querySelectorAll(".day");
const modifyWeekly = document.getElementById("modify-weekly");
const addWeekly = document.getElementById("add-weekly");
const selectWeeklyTaskList = document.getElementById("select-weekly-task-list");
const selectWeeklyTask = document.getElementById("select-weekly-task");
const insertWeekly = document.getElementById("insert-weekly");
const weeklyInput = document.getElementById("weekly-input");
const closeWeekly = document.getElementById("close-weekly");
const insertWeeklyTask = document.getElementById("insert-weekly-task");
const closeAddWeekly = document.getElementById("close-add-weekly");
const editWeekly = document.getElementById("edit-weekly");
const editWeeklyTaskList = document.getElementById("edit-weekly-task-list");
const editWeeklyTask = document.getElementById("edit-weekly-task");
const closeEditWeekly = document.getElementById("close-edit-weekly");
const updateWeekly = document.getElementById("update-weekly");
const deleteWeekly = document.getElementById("delete-weekly");
const updateWeeklyTask = document.getElementById("update-weekly-task");
const closeUpdateWeekly = document.getElementById("close-update-weekly");
const weeklyModify = document.getElementById("weekly-modify");
const deleteWeeklyTask = document.getElementById("delete-weekly-task");
const deleteWeeklyTaskItem = document.getElementById("delete-weekly-task-item");
let selectDay;
const confirmModifyWeekly = document.getElementById("confirm-modify-weekly");
const closeDeleteWeekly = document.getElementById("close-delete-weekly");
const confirmDeleteWeekly = document.getElementById("confirm-delete-weekly");
const cancelDeleteWeekly = document.getElementById("cancel-delete-weekly");

// date
const thisDate = new Date();
let thisDay = thisDate.getDate();
let thisMonth = thisDate.getMonth();
let thisYear = thisDate.getFullYear();

let diff = new Date(thisYear, thisMonth, thisDay).getTime();

  anchor.addEventListener("click", event => {

    // daily
    if (event.target.innerText === "Daily") {

      if (edit.classList.length !== 2) {
        return;
      }

      if (updateDailyTask.classList.length !== 1) {
        return;
      }

      if (insertDailyTask.classList == "hidden") {
        addDaily.classList.toggle("hidden");
        editDaily.classList.toggle("hidden");
      }

      title.classList.toggle("hidden");
      taskList.classList.toggle("hidden");
      adHocTitle.classList.toggle("hidden");
      adHocList.classList.toggle("hidden");

      if (modifyWeekly.classList !== "hidden") {
        modifyWeekly.classList.add("hidden");
      }

      if (selectWeeklyTask.classList !== "hidden") {
        selectWeeklyTask.classList.add("hidden");
      }

      if (insertWeeklyTask.classList !== "hidden") {
        insertWeeklyTask.classList.add("hidden");
      }

      if (weekly.classList[1] !== "hidden") {
        weekly.classList.add("hidden");
      }

      if (editWeeklyTask.classList !== "hidden") {
        editWeeklyTask.classList.add("hidden");
      }

      // recurring
      title.innerHTML = `<h2 class="heading2">${Object.keys(tasks[event.target.innerText])[0]}</h2>`;
      taskList.innerHTML = tasks[event.target.innerText]["Recurring"].map(el => `
      <input type="checkbox" />
      <li>
        <label>
          ${el}
        </label>
      </li>`).join("");

       // ad hoc
       adHocTitle.innerHTML = `<h2 class="heading2">${Object.keys(tasks[event.target.innerText])[1]}</h2>`;
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

      modifyWeekly.classList.toggle("hidden");

      if (insertDailyTask.classList.length !== 1) {
        return;
      }

      if (edit.classList.length !== 2) {
        return;
      }

      if (updateDailyTask.classList.length !== 1) {
        return;
      }

      if (selectWeeklyTask.classList !== "hidden") {
        selectWeeklyTask.classList.add("hidden");
      }

      if (insertWeeklyTask.classList !== "hidden") {
        insertWeeklyTask.classList.add("hidden");
      }

      let weeklyIncrementor = 1000*24*60*60;

      weekly.classList.toggle("hidden");

      if (insertDailyTask.classList !== "hidden") {
        addDaily.classList.add("hidden");
        editDaily.classList.add("hidden");
      }

      if (taskList.classList[1] !== "hidden") {
        taskList.classList.add("hidden");
      }

      if (title.classList[1] !== "hidden") {
        title.classList.add("hidden");
      }

      if (adHocTitle.classList[1] !== "hidden") {
        adHocTitle.classList.add("hidden");
      }

      if (adHocList.classList[1] !== "hidden") {
        adHocList.classList.add("hidden");
      }

      if (editWeeklyTask.classList !== "hidden") {
        editWeeklyTask.classList.add("hidden");
      }

      for (let i = 0; i < days.length; i++) {

        let weeklyDate = new Date(diff + weeklyIncrementor);

          weekDay[i].innerHTML = `<h2 class="short">${new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "short" })} ${weeklyDate.getDate()}</h2>`;
          weekDay[i].innerHTML += `<h2 class="long">${new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "long" })} ${weeklyDate.getDate()}</h2>`;

        if (new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "short" })) {
          weekDay[i].innerHTML += `<ul>${tasks[event.target.innerText][new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "long" })].map(el => `<li>${el}</li>`).join("")}</ul>`;
        }

        weeklyIncrementor += 1000*24*60*60;

      }

    }

  });

  // add ad hoc
  addDaily.addEventListener("click", event => {
    addDaily.classList.toggle("hidden");
    insertDailyTask.classList.toggle("hidden");
    title.classList.toggle("hidden");
    taskList.classList.toggle("hidden");
    editDaily.classList.toggle("hidden");
  });

  // insert ad hoc
  insertDaily.addEventListener("click", event => {

    if (dailyInput.value === "") {
      return;
    } else {
        tasks["Daily"]["Ad hoc"].push(dailyInput.value);
        dailyInput.value = "";

        // ad hoc
        adHocTitle.innerHTML = `<h2 class="heading2">${Object.keys(tasks["Daily"])[1]}</h2>`;
        adHocList.innerHTML = tasks["Daily"]["Ad hoc"].map(el => `
        <input type="checkbox" />
        <li>
          <label>
            ${el}
          </label>
        </li>`).join("");

        addDaily.classList.toggle("hidden");
        insertDailyTask.classList.toggle("hidden");

        title.classList.remove("hidden");
        taskList.classList.remove("hidden");
        adHocTitle.classList.remove("hidden");
        adHocList.classList.remove("hidden");
        editDaily.classList.toggle("hidden");

    }

  });

  // close ad hoc
  closeAdHoc.addEventListener("click", event => {

    addDaily.classList.remove("hidden");
    title.classList.remove("hidden");
    taskList.classList.remove("hidden");
    adHocTitle.classList.remove("hidden");
    adHocList.classList.remove("hidden");
    insertDailyTask.classList.toggle("hidden");
    editDaily.classList.toggle("hidden");

  });

  // edit ad hoc
  editDaily.addEventListener("click", event => {

    addDaily.classList.toggle("hidden");
    editDaily.classList.toggle("hidden");
    title.classList.toggle("hidden");
    taskList.classList.toggle("hidden");
    adHocTitle.classList.toggle("hidden");
    adHocList.classList.toggle("hidden");

    modifyAdHoc = "";

    editDailyTask.innerHTML = tasks["Daily"]["Ad hoc"].map(el => `
      <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value)" />
      <li>
        <label id="edit">
          ${el}
        </label>
      </li>`).join("");

    edit.classList.toggle("hidden");

  });

  // update ad hoc
  updateDaily.addEventListener("click", event => {

    if (modifyAdHoc == null || modifyAdHoc === "") {
      return;
    }

    dailyModify.value = modifyAdHoc;
    edit.classList.toggle("hidden");
    updateDailyTask.classList.toggle("hidden");

  });

  // close edit ad hoc
  closeEditAdHoc.addEventListener("click", event => {

    modifyAdHoc = "";

    edit.classList.toggle("hidden");
    addDaily.classList.toggle("hidden");
    editDaily.classList.toggle("hidden");
    title.classList.remove("hidden");
    taskList.classList.remove("hidden");
    adHocTitle.classList.remove("hidden");
    adHocList.classList.remove("hidden");

    // recurring
    title.innerHTML = `<h2 class="heading2">${Object.keys(tasks["Daily"])[0]}</h2>`;
    taskList.innerHTML = tasks["Daily"]["Recurring"].map(el => `
    <input type="checkbox" />
      <li>
        <label>
          ${el}
        </label>
      </li>`).join("");

     // ad hoc
     adHocTitle.innerHTML = `<h2 class="heading2">${Object.keys(tasks["Daily"])[1]}</h2>`;
     adHocList.innerHTML = tasks["Daily"]["Ad hoc"].map(el => `
     <input type="checkbox" />
     <li>
       <label>
         ${el}
       </label>
     </li>`).join("");

  });

  // modify ad hoc
  modifyDaily.addEventListener("click", event => {

    let modifyItem = tasks["Daily"]["Ad hoc"];

    for (let i = 0; i < modifyItem.length; i++) {
      if (modifyItem[i] === modifyAdHoc) {
        tasks["Daily"]["Ad hoc"][i] = dailyModify.value;
        modifyAdHoc = "";
      }
    }

      editDailyTask.innerHTML = tasks["Daily"]["Ad hoc"].map(el => `
        <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value)" />
        <li>
          <label id="edit">
            ${el}
          </label>
        </li>`).join("");

    edit.classList.toggle("hidden");

    updateDailyTask.classList.toggle("hidden");

  });

  // close update ad hoc
  closeUpdateAdHoc.addEventListener("click", event => {

    editDailyTask.innerHTML = tasks["Daily"]["Ad hoc"].map(el => `
     <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value)" />
     <li>
       <label>
         ${el}
       </label>
     </li>`).join("");

    modifyAdHoc = "";

    edit.classList.toggle("hidden");

    updateDailyTask.classList.toggle("hidden");

  });

  // delete ad hoc

  const editAdHoc = item => modifyAdHoc = item;

  deleteDaily.addEventListener("click", event => {

    let removeItem = tasks["Daily"]["Ad hoc"];

    for (let i = 0; i < removeItem.length; i++) {
      if (removeItem[i] === modifyAdHoc) {
        tasks["Daily"]["Ad hoc"].splice(i, 1);
        modifyAdHoc = "";
      }
    }

      editDailyTask.innerHTML = tasks["Daily"]["Ad hoc"].map(el => `
        <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value)" />
        <li>
          <label id="edit">
            ${el}
          </label>
        </li>`).join("");

  });

  // modify weekly
  modifyWeekly.addEventListener("click", event => {

    modifyAdHoc = "";

    selectWeeklyTaskList.innerHTML = Object.keys(tasks["Weekly"]).map(el => `
      <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value)" />
      <li>
        <label>
          ${el}
        </label>
      </li>`).join("");

    modifyWeekly.classList.toggle("hidden");
    selectWeeklyTask.classList.toggle("hidden");
    weekly.classList.toggle("hidden");

  });

  // close weekly
  closeWeekly.addEventListener("click", event => {

    weeklyInput.value = "";
    modifyAdHoc = "";

      let weeklyIncrementor = 1000*24*60*60;

      for (let i = 0; i < days.length; i++) {

        let weeklyDate = new Date(diff + weeklyIncrementor);

          weekDay[i].innerHTML = `<h2 class="short">${new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "short" })} ${weeklyDate.getDate()}</h2>`;
          weekDay[i].innerHTML += `<h2 class="long">${new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "long" })} ${weeklyDate.getDate()}</h2>`;

        if (new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "short" })) {
          weekDay[i].innerHTML += `<ul>${tasks["Weekly"][new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "long" })].map(el => `<li>${el}</li>`).join("")}</ul>`;
        }

        weeklyIncrementor += 1000*24*60*60;

      }

    selectWeeklyTaskList.innerHTML = Object.keys(tasks["Weekly"]).map(el => `
      <input type="radio" name="edit" value="${el}" onclick="selectDay = this.value;" />
      <li>
        <label>
          ${el}
        </label>
      </li>`).join("");

    modifyWeekly.classList.toggle("hidden");
    selectWeeklyTask.classList.toggle("hidden");
    weekly.classList.toggle("hidden");

  });

  // weekly selection list

  selectWeeklyTaskList.innerHTML = Object.keys(tasks["Weekly"]).map(el => `
    <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value)" />
    <li>
      <label>
        ${el}
      </label>
    </li>`).join("");

  // add weekly
  addWeekly.addEventListener("click", event => {

    if (!modifyAdHoc) {
      return;
    }

    selectWeeklyTask.classList.toggle("hidden");
    insertWeeklyTask.classList.toggle("hidden");

  });

  // insert weekly
  insertWeekly.addEventListener("click", event => {

    if (weeklyInput.value === "") {
      return;
    } else {
        tasks["Weekly"][modifyAdHoc].push(weeklyInput.value);
        dailyInput.value = "";

        // weekly task list

        let weeklyIncrementor = 1000*24*60*60;

        for (let i = 0; i < days.length; i++) {

          let weeklyDate = new Date(diff + weeklyIncrementor);

            weekDay[i].innerHTML = `<h2 class="short">${new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "short" })} ${weeklyDate.getDate()}</h2>`;
            weekDay[i].innerHTML += `<h2 class="long">${new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "long" })} ${weeklyDate.getDate()}</h2>`;

          if (new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "short" })) {
            weekDay[i].innerHTML += `<ul>${tasks["Weekly"][new Date(weeklyDate + weeklyIncrementor).toLocaleString("default", { weekday: "long" })].map(el => `<li>${el}</li>`).join("")}</ul>`;
          }

          weeklyIncrementor += 1000*24*60*60;

        }

        weeklyInput.value = "";
        modifyAdHoc = "";

        selectWeeklyTaskList.innerHTML = Object.keys(tasks["Weekly"]).map(el => `
          <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value)" />
          <li>
            <label>
              ${el}
            </label>
          </li>`).join("");

        insertWeeklyTask.classList.toggle("hidden");
        weekly.classList.toggle("hidden");
        modifyWeekly.classList.toggle("hidden");

    }

  });

  // close add weekly
  closeAddWeekly.addEventListener("click", event => {

    weeklyInput.value = "";
    modifyAdHoc = "";

    selectWeeklyTaskList.innerHTML = Object.keys(tasks["Weekly"]).map(el => `
      <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value)" />
      <li>
        <label>
          ${el}
        </label>
      </li>`).join("");

    insertWeeklyTask.classList.toggle("hidden");
    weekly.classList.toggle("hidden");
    modifyWeekly.classList.toggle("hidden");

  });

  // edit weekly
  editWeekly.addEventListener("click", event => {

    if (!modifyAdHoc) {
      return;
    }

    selectWeeklyTaskList.innerHTML = Object.keys(tasks["Weekly"]).map(el => `
      <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value);" />
      <li>
        <label>
          ${el}
        </label>
      </li>`).join("");

    editWeeklyTaskList.innerHTML = tasks["Weekly"][modifyAdHoc].map(el => `
      <input type="radio" name="edit" value="${el}" onclick="selectDay = this.value;" />
      <li>
        <label id="edit">
          ${el}
        </label>
      </li>`).join("");

    selectWeeklyTask.classList.toggle("hidden");
    editWeeklyTask.classList.toggle("hidden");

  });

  // close edit weekly
  closeEditWeekly.addEventListener("click", event => {

    selectDay = "";

    selectWeeklyTaskList.innerHTML = Object.keys(tasks["Weekly"]).map(el => `
      <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value);" />
      <li>
        <label>
          ${el}
        </label>
      </li>`).join("");

    selectWeeklyTask.classList.toggle("hidden");
    editWeeklyTask.classList.toggle("hidden");

  });

  // close update weekly
  closeUpdateWeekly.addEventListener("click", event => {

    updateWeeklyTask.classList.toggle("hidden");
    editWeeklyTask.classList.toggle("hidden");

  });

  // update weekly
  updateWeekly.addEventListener("click", event => {

    if (!selectDay) {
      return;
    }

    editWeeklyTask.classList.toggle("hidden");
    updateWeeklyTask.classList.toggle("hidden");
    weeklyModify.value = selectDay;

  });

  // delete weekly
  deleteWeekly.addEventListener("click", event => {

    if (!selectDay) {
      return;
    }

    editWeeklyTask.classList.toggle("hidden");
    deleteWeeklyTask.classList.toggle("hidden");
    deleteWeeklyTaskItem.innerText = selectDay;

  });

  // confirm modify weekly
  confirmModifyWeekly.addEventListener("click", event => {

    let modifyItem = tasks["Weekly"][modifyAdHoc];

    for (let i = 0; i < modifyItem.length; i++) {

      if (modifyItem[i] === selectDay) {
        tasks["Weekly"][modifyAdHoc][i] = weeklyModify.value;
        break;
      }
    }

    editWeeklyTaskList.innerHTML = tasks["Weekly"][modifyAdHoc].map(el => `
      <input type="radio" name="edit" value="${el}" onclick="selectDay = this.value;" />
      <li>
        <label id="edit">
          ${el}
        </label>
      </li>`).join("");

    selectWeeklyTaskList.innerHTML = Object.keys(tasks["Weekly"]).map(el => `
      <input type="radio" name="edit" value="${el}" onclick="editAdHoc(this.value);" />
      <li>
        <label>
          ${el}
        </label>
      </li>`).join("");

    updateWeeklyTask.classList.toggle("hidden");
    editWeeklyTask.classList.toggle("hidden");
    selectDay = "";

  });

  // close weekly delete
  closeDeleteWeekly.addEventListener("click", event => {

    editWeeklyTask.classList.toggle("hidden");
    deleteWeeklyTask.classList.toggle("hidden");

  });

  // confirm delete weekly
  confirmDeleteWeekly.addEventListener("click", event => {

    let removeItem = tasks["Weekly"][modifyAdHoc];

    for (let i = 0; i < removeItem.length; i++) {
      if (removeItem[i] === selectDay) {
        tasks["Weekly"][modifyAdHoc].splice(i, 1);
        selectDay = "";
      }
    }

    editWeeklyTaskList.innerHTML = tasks["Weekly"][modifyAdHoc].map(el => `
      <input type="radio" name="edit" value="${el}" onclick="selectDay = this.value;" />
      <li>
        <label id="edit">
          ${el}
        </label>
      </li>`).join("");

      if (tasks["Weekly"][modifyAdHoc].length === 0) {
        modifyAdHoc = "";
        selectDay = "";
        deleteWeeklyTask.classList.toggle("hidden");
        selectWeeklyTask.classList.toggle("hidden");
        return;
      }

      editWeeklyTask.classList.toggle("hidden");
      deleteWeeklyTask.classList.toggle("hidden");

  });

  // cancel delete weekly
  cancelDeleteWeekly.addEventListener("click", event => {

    editWeeklyTask.classList.toggle("hidden");
    deleteWeeklyTask.classList.toggle("hidden");

  });
