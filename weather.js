const weather = document.querySelector(".js-weather");


const API_KEY = "079defc9c171eef43ee7cc2d4ff65272";
const COORDS = 'coords';

//refresh없이 데이터를 계속 가져오는 것
function getWeather(lat, lng){
  //api 데이터 얻는 방법
  // 사이트 api call을 가져온 뒤 앞에 https://를 넣어준다. -> 데이터를 얻을 수 있다.
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
    return response.json() // then은 fetch가 완료되길 기다려야 하기 때문에 사용
  }).then(function(json){
    const temperature = json.main.temp; //온도 얻어오기
    const place = json.name; //장소얻어오기 
    weather.innerText = `${place} ${temperature}℃ `;
  });
  

}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
  //좌표값이 없을 때에만 실행된다.
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){

}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)// 위치 정보를 읽어 오는 방법

}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords == null){
    askForCoords();
  }
  else{
    //getWeather
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }
}

function init(){
  loadCoords();

}

init();