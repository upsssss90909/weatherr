const image = document.querySelector("#middle i");
const temp = document.querySelector("#middle .temp");
const city = document.querySelector("#middle .city");

const wind = document.querySelector(".left .details h3");
const humid = document.querySelector(".right .details h3");

const input = document.querySelector("#top input");
const search = document.querySelector("#top i");

let img = document.querySelector("#img");


let target;
let url;
search.addEventListener("click", function () {
  target = input.value;
  city.innerHTML = target;
  url = `https://api.weatherapi.com/v1/current.json?key=323cb02c89d34c11978183421232808&q=${target}`;
  console.log(url);
 
  abc();
});

function abc() {
  fetch(url)
    .then(function (raw) {
      return raw.json();
    })
    .then(function (response) {
      img.src = response.current.condition.icon;
      wind.innerHTML = response.current.wind_kph;
      humid.innerHTML = response.current.humidity;
      temp.innerHTML = response.current.temp_c;

    });
}
