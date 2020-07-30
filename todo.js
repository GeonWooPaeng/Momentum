const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = []; // 할일 저장 공간

function filterFn(toDo){
  return toDo.id == 1
}

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode; //버튼 누른 id를 알려준다.
  toDoList.removeChild(li); //li의 하위 노드를 제거하고 제거된 노드를 return한다.
  const cleanToDos = toDos.filter(filterFn); //각각의 item과 같이 실행된다.
}

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
  delBtn.addEventListener("click",deleteToDo); // delete button click 이벤트
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
    const parsedToDos = JSON.parse(loadedToDos);// 가져온 것을 js object로 변환해준다.
    //밑에 괄호안의 함수를 parsedToDos에 있는 것들 각각에 대해 실행해줄 것이다.
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);//parsedToDos를 화면에 보여주기
    });
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)//이벤트 리스너들을 추가해주고, submit해준다.
}

init();