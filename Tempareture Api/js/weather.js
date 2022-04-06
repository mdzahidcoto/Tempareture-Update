
// API call from server
// Weather key
const myKey = `06d385a704bbbeecf21504c8e2da5b7f`;
// weather fetch call
function temperatureSearch(){
    const city = document.getElementById('cityNameInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}&units=metric`;
    
    fetch (url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}
//inner text call function
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
//inner text set function
//with icon and condition
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('weatherCondition', temperature.weather[0].main);
    
    // set weather icon
    const url = ``;
    const imageIcon = document.getElementById('weatherIcon');
    imageIcon.setAttribute('src', url);
}


// console.log('I am chatting with Chhoa');
// Cemi-Failed Part of code
// getInput();

// submit();

// function submit() {
//     document.getElementById('inputButton').addEventListener('click', (e) => {
//         const inputValue = document.getElementById('cityNameInput').value;
        
//     })
// }
// function showTemp() {


//     document.getElementById('city').innerText = cityName;
//     document.getElementById('temperature').innerText = tempValue;
//     document.getElementById('weatherCondition').innerText = weatherCondition;
// }

// document.getElementById('cityNameInput').addEventListener('click', (e) => {
//     const inputValue = e.target.value;
//     console.log(inputValue);
//     }
// )

