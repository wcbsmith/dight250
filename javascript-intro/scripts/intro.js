// function greeting () {
//     console.log('Welcome to the jungle!!!!');
// }

// const greeting = function () {
//     console.log('Welcome to the jungle!!!!');
// };

// greeting(); broken record

// function greeting(name) {
//     console.log("Greetings, " + name);  <- Old way
// }

// greeting("Javascript.");
// greeting("World.");
// greeting("Caleb!");

let mood = "hangry";

// === compares values and types, called strict comparison
// == compares only values not types therefore 13 == "13"

// function greeting(name) {
//     if (name === "Dave") {
//         console.log("Daisy, daisy.");
//     } else {
//         console.log(`Hello,  ${name}`);
//     }
// }

// greeting("Javascript.");
// greeting("Dave");
// greeting("pizza!");

// const names = [
//     "Chad",
//     "Dave",
//     "Javascript",
//     "@",
//     "World",
// ];

// console.log(names[2]);

// for (let i = 0, i < names.length; i++) { <-old way

// } 

// names.forEach(
//     function (name) { 
//         greeting(name);
//     }
// );

//same as
//  names.forEach( 
//     (name) => {
//         greeting(name);
//     }
// );

//same as
// names.forEach(name => greeting(name));

function greeting(name) {
        if (name === "Dave") {
            document.write("<p>Daisy, daisy.</p>");
        } else {
            document.write(`<p>Hello,  ${name}</p>`);
        }
    }
    
    greeting("Javascript.");
    greeting("Dave");
    greeting("pizza!");
    
    const names = [
        "Chad",
        "Dave",
        "Javascript",
        "@",
        "World",
    ];
    
    console.log(names[2]);