const userEl = document.getElementById("userinput")

const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minuteEl = document.getElementById("minute")
const secondsEl = document.getElementById("seconds")

userEl.addEventListener('input',hunt)

function hunt(e) {
    let userinput = userEl.value;
    let targetinput = new Date(userinput)
    let future = targetinput.getTime()

    let now = new Date()
    let nowMil = now.getTime()
    let intervalTime = future - nowMil;

    let daysed = Math.floor(intervalTime / (1000 * 60 * 60 * 24))
    let daysedremain = intervalTime % (1000 * 60 * 60 * 24)
    console.log(daysed);


    let hours = Math.floor(daysedremain / (1000 * 60 * 60))
    let soatqoldigi = daysedremain % (1000 * 60 * 60)

    console.log(hours)

    let minutes = Math.floor(soatqoldigi / (1000 * 60))
    let minutescall = soatqoldigi % (1000 * 60)
    console.log(minutes)

    let seconds = Math.floor(minutescall / (1000))
    console.log(seconds)

    daysEl.innerHTML = daysed;
    hoursEl.innerHTML = hours;
    minuteEl.innerHTML = minutes ;
    secondsEl.innerHTML = seconds;
}
setInterval(() => {
    hunt()
}, 1000);
