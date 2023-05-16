const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')

const updateUI = (weather) => {
	// console.log(weather);
	details.innerHTML = `
					<h5 class="mb-3">${weather.name}, ${weather.sys.country}</h5>
          <p class="mb-3">${weather.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(weather.main.temp)}</span>
            <span>&deg;C</span>
					</div>
	`

	if (card.classList.contains("d-none")){
		card.classList.remove("d-none")
	}

	weatherIcon.src = `https://openweathermap.org/img/wn/10d@2x.png`

}	
//get weather
const getWeather = async (city) => {
	const data = await getData(city)
	return data
}

//get Location
changeLocation.addEventListener("submit", (e) => {
	e.preventDefault()
	const cityName = changeLocation.city.value.trim();
	changeLocation.reset()
	getWeather(cityName).then((data) => updateUI(data));
})
