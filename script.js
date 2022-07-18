let weather = {
    apiKey : "f37f0958ebe0fc0cb78e953f89595712",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        +"&units=metric&appid=" 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },

    displayWeather : function (data){
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main
        const  {speed} = data.wind

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/hr";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?1600×900/?"+ name +"')"
    },

        search : function () {
            this.fetchWeather(document.querySelector(".search-bar").value)
        }
}

document.querySelector(".search button").addEventListener("click", function() {
        weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
        if (event.key == "Enter") {
            weather.search();
        }
});

weather.fetchWeather("Lagos")

// API KEY FROM openweathermap.org