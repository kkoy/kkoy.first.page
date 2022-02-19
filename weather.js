//user의 위치(Geolocation)을 주는 함수

const API_KEY ="bcad8abb34c326feca6bd502c69316fc"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
     //*화씨를 섭씨로 : url 끝에 &units=metric
    fetch(url)//js가 url을 대신 부른다.
    .then(response => response.json())
    .then((data) => {
        //console.log(data.name, data.weather[0].main);
          const weather= document.querySelector("#weather span:first-child");
          const city= document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    //promise 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것.
}
function onGeoError(){
    alert("Can't find you. No wheather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//bcad8abb34c326feca6bd502c69316fc : API key