const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = []; // 할일 저장 공간

function saveToDos(){
  // toDos를 가져와서 localStorage에 저장하는 function
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON.stringify은 모든 js object를 string으로 바꿔준다.
}

function paintToDo(text){
  //누군가 입력을 하고 enter을 눌렀을 때 todo를 생성하고 삭제하고 싶다.
  const li = document.createElement("li"); //비어있는 li만들기
  const delBtn = document.createElement("button"); //버튼 만들기
  const span = document.createElement("span"); //span 만들기
  const newId = toDos.length+1; //순서 만들기

  delBtn.innerText = "✖";
  span.innerText = text

  li.id = newId; // li에 순서를 넣어주기
// span과 delete button을 li안에 append한다.
  li.appendChild(span);//뭔가를 그의 father element안에 넣는 것이다. span을 li안에 넣고
  li.appendChild(delBtn); //버튼을 li안에 넣는다.
  
  // li를 ul에다 append한다.
  toDoList.appendChild(li); // toDoList에 li를 넣는다.

  const toDoObj = {
    //text라는 key에 이 text가 value로 올 것이다.
    text: text,
    id: newId
  };
  toDos.push(toDoObj); //array에 정보 넣어주기
  saveToDos();

}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // submit같은 것
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    //toDos를 불러오는 작업다루기

  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)//이벤트 리스너들을 추가해주고, submit해준다.
}

init();