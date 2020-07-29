const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

//USER_LS = user local storage
const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveName(text){
  localStorage.setItem(USER_LS, text); //localStorage에 저장해준다.
}

function handleSubmit(event){
  // event의 preventDefault
  // event의 기본동작(기본값)을 막는 방법(입력하고 enter을 쳐도 입력값이 사라지지 않는다.)
  event.preventDefault();
  const currentValue = input.value; //입력값을 currentValue에 저장한다.
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  //user에게 이름 요청
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit) //form을 submit하는 것 == 입력값을 전송받는것(html의 form에 이것을 넣는다.)
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN); //form을 지운다.
  greeting.classList.add(SHOWING_CN); //나에게 greeting을 보여준다.
  greeting.innerText = `Hello ${text}` //내가 보낸 text를 넣어준다. 
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