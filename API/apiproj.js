fetch('https://ghibliapi.herokuapp.com/films')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
    })

const searchform = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchform.addEventListener('submit', fetchSpace);

function fetchSpace(event) {
event.preventDefault();
fetch(baseURL)
.then(result => {
    console.log(result)
    return result.json();
})
.then(json =>{
    //console.log(json);
    displayRockets(json)
})
}

function displayRockets(data){
console.log('results', data);

let rockets = data.forEach(element => {
    console.log(element);
let rocket = document.createElement('tr');
let rocketName = document.createElement('td');
let rocketCost = document.createElement('td');

rocketName.innerText = element.name;
rocketCost.innerText = element.cost_per_launch

spaceShips.appendChild(rocket);
rocket.appendChild(rocketName);
rocket.appendChild(rocketCost);
})
}