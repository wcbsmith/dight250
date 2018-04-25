// shuffle: () => {
//     let cards = document.querySelectorAll('card');

//     for (const card of cards) {
//         console.log('success');
//         // if (card.getAttribute('class') === 'reverse') {
            
//         // }
//     }
// }

// helloWorld: () => {
//     console.log('Hello World!')
// }

console.log('Hello World!');

function remix() {

    let cards = document.getElementsByClassName('card');
    
    let count = 0;

    for (const card of cards) {
        

        count++;

        if (card.classList.contains('reverse') === true) {
            //console.log('Success');
        
            card.classList.remove('reverse');
        
        } else { //(card.classList.contains('reverse') === false) 
           
            card.classList.add('reverse');
        
        }
    }

    return count;
};

let test = document.querySelector("button");

console.log({test});

test.addEventListener('click', remix);

