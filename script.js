//etape 2
let message = "Bonjour !";
console.log(message);

let firstname = "Clément";
message = `Bonjour ${firstname} !`;
console.log(message);


//etape 3
function sayHello1(name) {
    let message = `Bonjour ${name} !`;
    console.log(message);
}

sayHello1("Matthew Bellamy");


//etape 4
function sayHello2(name, hour) {
    if (hour >= 18) {
        let message = `Bonsoir ${name} !`;
        console.log(message);
    }
    else {
        let message = `Bonjour ${name} !`;
        console.log(message);
    }
}

sayHello2("Roger Federer", 11);
sayHello2("Roger Federer", 18);
sayHello2("Roger Federer", 17);

//etape 6
let name = prompt("Qui va là ?");
function sayHello3(name) {
    let message = `Bonjour ${name} !`;
    document.querySelector('p').innerHTML = message;
}

sayHello3(name);