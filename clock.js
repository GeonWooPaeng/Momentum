const clockContainer = document.querySelector(".js-clock"), // js-clock에서 가져오기
    clockTitle = clockContainer.querySelector("h1"); //js-clock의 h1에서 가져오기

const TIME_LS = "period";

function rangeTime(time){ 
  //시간 범위 정하기 10 이전이면 0을 붙여준다.
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
    setInterval(getTime,1000); // 1초에 한번씩 refresh해준다.
}

init();