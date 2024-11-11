// Part 1: FIZZ BUZZ

// let counter = 1;
// while (counter <= 100) {
//     if (counter % 3 === 0 && counter % 5 === 0) {
//         console.log("Fizz Buzz");
//     }
//     else if (counter % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (counter % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(counter);
//     }
//     counter++;
// }

// Part 2: PRIME TIME

// prime number examples: 5,7,11,13,17,19,23,29

let x = 2;

for (let n = 1408; x < n; n++) {
    x = 2;
    while ((n + 1) % x > 0) {
        x++;
        if (x === n) {
            console.log(`The next prime number is: ${n + 1}!`)
        }
    }
}