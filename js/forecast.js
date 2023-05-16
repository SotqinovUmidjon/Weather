const KEY = '96b947a45d33d7dc1c49af3203966408'

const getData = async (city)=>{
	const base = "https://api.openweathermap.org/data/2.5/weather"
	const query = `?q=${city}&units=metric&appid=${KEY}`

	const req = await fetch(base + query);
	const data = await req.json();

	return data
}

// getData("London").then((data)=> console.log(data))
