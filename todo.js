const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
  //누군가 입력을 하고 enter을 눌렀을 때 todo를 생성하고 삭제하고 싶다.
  const li = document.createElement("li"); //비어있는 li만들기
  const delBtn = document.createElement("button"); //버튼 만들기
  delBtn.innerText = "✖";

  const span = document.createElement("span"); //span 만들기
  span.innerText = text

// span과 delete button을 li안에 append한다.
  li.appendChild(span);//뭔가를 그의 father element안에 넣는 것이다. span을 li안에 넣고
  li.appendChild(delBtn); //버튼을 li안에 넣는다.
  
  // li를 ul에다 append한다.
  toDoList.appendChild(li); // toDoList에 li를 넣는다.

}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // submit같은 것
}

function loadToDos(){
  const toDos = localStorage.getItem(TODOS_LS);
  if(toDos !== null){

  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)//이벤트 리스너들을 추가해주고, submit해준다.
}

init();