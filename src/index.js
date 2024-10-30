let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function formatDate(date) {
  let inputDay = weekdays[date.getDay()];
  let inputHour = date.getHours();
  let inputMinute = date.getMinutes();

  return `${inputDay} ${inputHour}:${inputMinute}`;
}

function updateCurrentTime() {
  let currentTimeElement = document.querySelector("#current-time");
  currentTimeElement.innerHTML = `${formatDate(new Date())}`;
}

updateCurrentTime();

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  let searchElement = document.querySelector("#search-input");
  cityElement.innerHTML = searchElement.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
