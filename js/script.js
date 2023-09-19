const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");

searchInput.addEventListener("change", () => {
  searchBtn.addEventListener("click", () => {
    let city = searchInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=945c80522d913f5adf83f41dc55306c8&units=metric`)
    .then((res) => {
      return res;
    }).then((info) => {
      return info.json();
    }).then((obj) => {
      const speed = document.querySelector(".speed");
      const city = document.querySelector(".city");
      const temp = document.querySelector(".temp-info");
      const humidity = document.querySelector(".percentage");
      const icon = document.querySelector(".state");
      const state = obj.weather[0].main;

      if(state === "Clouds"){
        icon.removeAttribute("src");
        icon.setAttribute("src", "files/clouds.png");
      } 
      else if (state === "Rain") {
        icon.removeAttribute("src");
        icon.setAttribute("src", "files/rain.png");
      } 
      else if (state === "Mist") {
        icon.removeAttribute("src");
        icon.setAttribute("src", "files/mist.png");
      }
      else if (state === "Clear") {
        icon.removeAttribute("src");
        icon.setAttribute("src", "files/clear.png");
      } 
      else if (state === "Drizzle") {
        icon.removeAttribute("src");
        icon.setAttribute("src", "files/drizzle.png");
      }
      else if (state === "Snow") {
        icon.removeAttribute("src");
        icon.setAttribute("src", "files/snow.png");
      }

      temp.innerHTML = `${obj.main["temp"]}°c`;
      city.innerHTML = `${obj.name}`;
      humidity.innerHTML = `${obj.main["humidity"]}%`;
      speed.innerHTML = `${obj.wind["speed"]} km/h`;
    })
  })
})
