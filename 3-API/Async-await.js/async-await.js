async function myFn() {
    // await
}

const myFn = async () => {
    // await
}

const myFn = () => {
    //await - this will throw an error - you can't use await unless it's an async function
}

async function fn() {
    return 'hello';
}

fn().then(console.log);

function fn() {
    return promise.resolve('hello');
}

fn().then(console.log);

async function foo(){
    throw error('this is a mistake');
}

//foo().then(conaole.log);
foo().catch(console.log)
//Errors: No Data, No Signal, Basically tells you whats wrong

fetch(url)
.then(reponse => Response.json)
.then(json => console.log(json))
.catch(error => console.log(error));

const request = async () => {
const response = await fetch('https://random.dog/woof.json');
const json = await response.json();
console.log(json);
}