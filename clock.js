const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

const TIME_LS = "period";

function rangeTime(time){
    return time < 10 ? `0${time}` : time;
}

function getTime(){
    const date = new Date();
    const hours = rangeTime(date.getHours());
    const minutes = rangeTime(date.getMinutes());
    const seconds = rangeTime(date.getSeconds());
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();