/*fetch('https://ghibliapi.herokuapp.com/films')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
    })*/

const baseURL="https://ghibliapi.herokuapp.com/films"

const searchform = document.querySelector('form');
const title = document.querySelector('table');

searchform.addEventListener('submit', fetchSpace);

function vocal() {
document.body.style.backgroundImage = "../API/assets/vocalPercussion.gif"
}

function fetchSpace(event) {
event.preventDefault();
fetch(baseURL)
.then(result => {
    console.log(result)
    return result.json();
})
.then(json =>{
    //console.log(json);
    showMovie(json)
})
}

function showMovie(data){
console.log('results', data);

let movieInfo = data.forEach(element => {
    console.log(element);
let movie = document.createElement('tr');
let movieTitle = document.createElement('td');
let movieDescription = document.createElement('td');
let movieDirector = document.createElement('td');

movieTitle.innerText = element.title;
movieDescription.innerText = element.description;
movieDirector.innertext = element.director;

title.appendChild(movie);
movie.appendChild(movieTitle);
movie.appendChild(movieDescription);
movie.appendChild(movieDirector)
})
}