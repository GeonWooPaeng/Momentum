*javascript에는 ECMAScript(Specification의 명칭)이 있다.
=> Specification(설명문)에 대한 업데이트(ES5 == ECMAScript5)

*js file은 항상 body 아래에 있어야한다.

*변수를 초기화하거나 생성할 때 let를 써야한다.

*const - 변하지 않는다.

*document.getElementById("id이름") : js에서 id이름의 내용을 가져온다.

*DOM : document object model

*Document.querySelector(): 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환한다. 일치하는 요소가 없으면 null 반환한다.

* 함수()가 있으면 함수 즉시 호출이고 ()없으면 함수 즉시 호출이 아니다.

* title을 click하면 blue색으로 변한다.
function handleClick(){
  title.style.color = "blue";
}
title.addEventListener("click",handleClick) // "" 부분이 mdn에서 찾고 handleClick은 함수이다.

*==와 ===차이점
https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons
=> ==은 큰 틀에서 같다는 것을 알려준다. ===은 세세하게 같은지 생각을 하는 것이다.

*prompt : 유저에게 뭘 물어볼 수 있는 것 // 요즘 잘 사용하지 않는다.

* javascript dom event mdn => js의 이벤트를 알고 싶을 경우 찾기


*// querySelector 은 element의 자식을 탐색한다(첫번째 것)

*querySelector all은 모든 걸을 가져온다(array)

*setInterval(함수, 실행할 시간 간격(millionseocnd)) - 함수를 시간 간격으로 실행한다.


*get element by tag name은 태그로 element를 가져오는 것이다(input, body, html, div, section)

*local storage - 작은 정보를 저장하는 곳

*${} - {}안에 넣어주는 것을 할때 작은 따옴표가 아니라 ~표시이다