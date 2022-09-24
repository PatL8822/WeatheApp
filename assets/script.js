
const cityInput = document.querySelector('#city');
const submitBtn = document.querySelector('#submit');
const cityRef = document.querySelector('#cityRef');
const crntWeather = document.querySelector('#currentWeather');
const fiveDay = document.querySelector('#fiveDayForcast');

var apiKey = "eea20da06cb196d467d9e8ec12c0d5bd";
var city;
var cityName;
var cities = [];

submitBtn.addEventListener('click', citySearchHistory);

function citySearchHistory(){
    cityRef.classList.remove('hide');
    var newUl = document.createElement('ul');
    var btn = document.createElement('button');
    cityRef.appendChild(newUl);
    newUl.appendChild(btn);
    cityName = cityInput.value;
    cities.push(cityName);
    btn.textContent = cityName;
    localStorage.setItem("City",JSON.stringify(cities))
    localStorage.getItem("City");
    fetchWeather()
}

function fetchWeather(){

    var weatherURLTwo = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(weatherURLTwo).then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
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