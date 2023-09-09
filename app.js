const dateClock = setInterval(function dateTime() {
    const today = new Date();
    let date = today.getDate();
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];
  
    dateContainer.innerHTML = [`<p>Current Day Of TheWeek:</p><p>${day}</p> <p></p> <p></p><p>${date}</p> <p>${month}</p>`];
  }, 1000);
  
          setInterval(()=>{
              const time = document.querySelector(".time");
          let date = new Date();
          let hours = date.getHours()
          let minutes = date.getMinutes()
          let seconds = date.getSeconds()
          let milliseconds = date.getMilliseconds();
          let day_night = 'AM';
          if (hours > 12){
              day_night = 'PM'
              hours = hours - 12;
          }
          if (minutes < 10){
              minutes = '0' + minutes;
          }
          if (hours < 10){
              hours = '0' + hours;
          }
          if (seconds < 10){
              seconds = '0' + seconds;
          }
          if (milliseconds < 10){
              seconds = '0' + milliseconds;
          }
         
          time.textContent = 'Current UTC Time:' + hours + ':' + minutes + ':' + seconds +':'+ milliseconds + ' ' + day_night;
          })
  
  

let dateContainer = document.querySelector(".date");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
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
  "December",
];



    // // JavaScript to display the current day of the week
    // const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const today = new Date();
    // const currentDay = daysOfWeek[today.getUTCDay()];
    // document.querySelector("currentDayOfTheWeek").textContent = currentDay;
    // document.querySelector("currentUTCTime"x).textContent = currentUTCTime;

    // // JavaScript to display the current UTC time in milliseconds
    // const currentUTCTime = Date.now();
    // document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;











// document.getElementById('day').innerHTML = day;


// const d = new Date();
// let time = d.getTime();

