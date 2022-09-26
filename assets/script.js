
const cityInput = document.querySelector('#city');
const submitBtn = document.querySelector('#submit');
const cityRef = document.querySelector('#cityRef');
const crntWeather = document.querySelector('#currentWeather');
const fiveDay = document.querySelector('#fiveDayForcast');
var apiKey = "eea20da06cb196d467d9e8ec12c0d5bd";
var city;
var cityName;
var cities = [];
var calc = [1,2,3,4,5]

submitBtn.addEventListener('click', setCitySearchHistory);

function setCitySearchHistory(){
    
    cityName = cityInput.value;
    
    if (cityName){
    cityRef.classList.remove('hide');
    var newUl = document.createElement('ul');
    var btn = document.createElement('button');
    cityRef.appendChild(newUl);
    newUl.appendChild(btn);
    cities.push(cityName);
    btn.textContent = cityName;
    }
    apiWeatherFetch()
    fiveDayForcast()
}

function apiWeatherFetch(){

    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;

    fetch(weatherURL)
        .then(function(response){
        return response.json();
    })
    .then(function(data){
        brodcastWeather(data);
    })
}

function brodcastWeather(weather){
    console.log(weather)
    var city = document.createElement('h2');
    city.textContent = weather.name;
    crntWeather.appendChild(city);

    // current temp
    var temp = document.createElement('p');
    temp.textContent = 'Current Temp:' + ' ' + weather.main.temp + '°F';
    crntWeather.appendChild(temp);

    // humidity
    var  humidity = document.createElement('p');
    humidity.textContent = 'Humidity:' + ' ' + weather.main.humidity;
    crntWeather.appendChild(humidity);

    // wind
    var  wind = document.createElement('p');
    wind.textContent = 'Wind speed:' + ' ' + weather.wind.speed +
     ' ' + 'MPH';
    crntWeather.appendChild(wind);

    //wind direction
    var windDeg = document.createElement('p');
    windDeg.textContent = 'Wind Direction:' + ' ' + weather.wind.deg + '°';
    crntWeather.appendChild(windDeg);
}

function fiveDayForcast(){
    var fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;

    fetch(fiveDayURL)
        .then(function(response){
        return response.json();
    })
    .then(function(data){
        dayList(data);
        console.log(data)
    })
}

function dayList(list){
    
    // for loop for 5 day forcast with 3 hour inrements for each day
    for (var i = 0; i < list.list.length; i++){
        var divEl = document.createElement('div');
        var h2El = document.createElement('h2');
        var tempEl = document.createElement('p');
        var windEl = document.createElement('p');
        var humidityEl = document.createElement('p');
        var dateEl = document.createElement('p');
        h2El.textContent = list.city.name;
        tempEl.textContent = 'Temp:' + ' ' + list.list[i].main.temp;
        windEl.textContent = 'Wind:' + ' ' + list.list[i].wind.speed;
        humidityEl.textContent = 'Humidity:' + ' ' + list.list[i].main.
        humidity;
        dateEl.textContent = 'Date' + ' ' + list.list[i].dt_txt;
        fiveDay.appendChild(divEl);
        divEl.appendChild(dateEl);
        divEl.appendChild(h2El);
        divEl.appendChild(tempEl);
        divEl.appendChild(windEl);
        divEl.appendChild(humidityEl);
    
    }
}











// saveButton.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     var studentGrade = {
//       student: student.value,
//       grade: grade.value,
//       comment: comment.value.trim()
//     };
    
//     localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//     renderMessage();
    
//     });
    
//     function renderMessage() {
//       var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//       if (lastGrade !== null) {
//         document.querySelector(".message").textContent = lastGrade.student + 
//         " received a/an " + lastGrade.grade
//       }
//     }