let div = document.getElementById("div")
let input = document.querySelector("input");
let button = document.querySelector("button");
let h2 = document.createElement("h2");
let img = document.createElement("img")
div.appendChild(h2);
button.addEventListener('click', function (event) {
    h2.innerHTML = ""
    let city = input.value;
    const f = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=93e2bc7c37d1e435b1f01164f6b326bb`)
    .then((response)=> {
        return response.json()
    }) 
     .then(result => {
        console.log(result);
        let w = result.weather;
        let weather = w[0];
        let t = result.main;
        h2.innerHTML = weather.main + " " + weather.description + " " + t.temp 
        let icon = weather.icon
      img.setAttribute("src", `http://openweathermap.org/img/wn/${icon}.png` )
      img.innerHTML
     });
     input.value = ""
    });
