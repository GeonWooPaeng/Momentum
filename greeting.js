const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit") //빈칸에 전송받기
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = 'Hello ${text}'
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
  }
  else{
    paintGreeting(currentUser);
  }
}

function init(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser == null){
        askForName();
    }
    else{
        showGreeting(currentUser);
    }
}

init();