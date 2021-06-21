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

// Create Dates
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear,tempMonth,tempDay+10,11,30,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// Get the Month (e.g. June)
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

// Get the Weekday (e.g. Sunday)
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// Future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    /*
        1s = 1000ms
        1m = 60s
        1hr = 60m
        1d = 24hr
        Values in milliseconds

    */
    
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // Calculate all values
    let days = t/oneDay;
    days = Math.floor(days);

    let hours = Math.floor((t % oneDay)/oneHour);
    let minutes = Math.floor((t % oneHour)/oneMinute);
    let seconds = Math.floor((t% oneMinute)/1000);

    // Set Values Array
    const values = [days,hours,minutes,seconds];

    // Function to Format Values
    function format(item) {
        if (item<10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function(item,index) {
        item.innerHTML = format(values[index]);
    });

    // Display Expiry Message if Deadline has passed
    if (t<0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }

}

// Countdown
let countdown = setInterval(getRemainingTime,1000);
// Set Initial Values
getRemainingTime();