const body = document.querySelector("body");

const IMG_NUMBER = 1;

function paintInage(imgNumber){
  const image = new Image();
  image.src = `/images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom(){
  //사진의 번호 무자기로 뽑기
  const number = Math.floor(Math.random()*2);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintInage(randomNumber);
}

init();