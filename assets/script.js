
const cityInput = document.querySelector('#city');
const submitBtn = document.querySelector('#submit');
const cityRef = document.querySelector('#cityRef');
// var APIKEY =
var city;
var cityName;

submitBtn.addEventListener('click', () => {
    console.log("Inside event Listener");
    console.log("val of cityInput", cityInput.value );
    cityName =cityInput.value;
    var newLI = document.createElement('li');
    var btn = document.createElement('button');
    btn.textContent = cityName;
    cityRef.appendChild(newLI);
    newLI.appendChild(btn);
});

// localStorage.getItem("data");
// var cities=[city1,city2]

// localStorage.setItem("data",JSON.stringify(cities))