// Set Up Months and Weekdays
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// Apply Query Selectors
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// Create Date
let futureDate = new Date(2021,6,1,8,0,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// Get the Month (e.g. June)
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

// Get the Weekday (e.g. Sunday)
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${year} ${hours}:${minutes}am`;

// Future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    // Values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // Calculate all values
    let days = t/oneDay;
    

}

getRemainingTime();