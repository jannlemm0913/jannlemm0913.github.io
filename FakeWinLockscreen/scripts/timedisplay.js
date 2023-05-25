// Get the text display for the time and day
const timeTextEl = document.querySelector('.time-text');
const dateTextEl = document.querySelector('.date-text');



// Days of the week/Months of the year (used for text display)
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"];

// * * * * * * * * * *

function getDate() {
  return new Date();
}

// Setting and updaing the clock
function setClock() {

  // Get the current date
  let currentDate = getDate();

  // Update the text display - time
  updateTimeDisplay(currentDate);

  // Update the text display - day and date
  updateDayAndDateDisplay(currentDate);
}

function updateTimeDisplay(currentDate) {
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  timeTextEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}
function updateDayAndDateDisplay(currentDate) {
  let date = currentDate.getDate();
  let day = currentDate.getDay();
  let month = currentDate.getMonth();
  dateTextEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// Call setClock now to you don't need to wait the interval after the page loads uo update display
setClock();

// Recall to update the display
setInterval(() => {
  setClock();
}, 1000);

