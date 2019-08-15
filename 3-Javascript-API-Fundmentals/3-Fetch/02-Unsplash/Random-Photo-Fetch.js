const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'l9rFU9YXn7VAhyNt1MuwPHVyU7IpEuxw';
let url;
//search form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
/*These 5 html elements are now renamed and brought into the javascript file for further manipulation
const sets as constant, followed by the new name = document which tells the computer that you are doing
DOM querySelector ('.element) specifies which html element to grab for manipulation*/
//results navigation
const nextBtn = document.querySelector('.next');
//this sets the next page button as a constant and renames it
const previousBtn = document.querySelector('.prev');
// this sets the Previous page button as a constant and renames it.
const nav = document.querySelector('nav'); //why is this not .nav?
//results section
const section = document.querySelector('section');
//use nav variable to set initial style to none
nav.style.display = 'none';
//this hides the nav
let pageNumber = 0;
//creates a page number
let displayNav = false;
//the variable is given a negative value, hiding the nav bar
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
//const searchForm = document.querySelector('form'); (seeing if taking it out works)
function fetchResults(e){
   e.preventDefault();
   url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
   if(startDate.value !== '') {
       console.log(startDate.value)
       url += '&begin_date=' + startDate.value;
   };
   if(endDate.value !== '') {
       url += '&end_date=' + endDate.value;
   };
   fetch(url)
   .then(function(result) {
       console.log(result)
       return result.json();
   }).then(function(json) {
       console.log(json);
       displayResults(json);
   });
}
//function hich is called to display the articles in groups of 10 or less
   function displayResults(json) {
       while (section.firstChild) {
           section.removeChild(section.firstChild);
       }
       console.log("DisplayResults", json);
       let articles = json.response.docs; //articles is set as docs, json.response 
       if(articles.length === 0) {
           console.log("No results");
       } else {
           //articles is given a new definition then is checked for .length using an if else statement
           for(let i = 0; i < articles.length; i++) {
               let article = document.createElement('article');
               let heading = document.createElement('h2');
               let link = document.createElement('a');
               let img = document.createElement('img');
               let para = document.createElement('p');
               let clearfix = document.createElement('div');
               let current = articles[i];//This makes it hold the article info and re write everytime the code is run
               //
               console.log("Current:", current);
               link.href = current.web_url;
               link.textContent = current.headline.main;
               para.textContent = 'Keywords: ';
               for(let j = 0; j < current.keywords.length; j++) {
                   let span = document.createElement('span');
                   span.textContent += current.keywords[j].value + ' ';
                   para.appendChild(span);
               }
               clearfix.setAttribute('class', 'clearfix');
               article.appendChild(heading);
               heading.appendChild(link);
               article.appendChild(para);
               article.appendChild(clearfix);
               section.appendChild(article);
           }
           if(articles.length === 10) {
               nav.style.display = 'block';
           } else {
               nav.style.display = 'none';
           }
           };
       };
function nextPage(){
   console.log("Next button clicked");
}
function previousPage(){
   console.log("Next button clicked");
}
//