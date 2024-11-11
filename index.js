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

for (let n = 14; x < n; n++) {
    while ((n + 1) % x > 0) {
        x++;
    }
    console.log("This is the value of n + 1: " + (n + 1));
    console.log((n + 1) + " is no longer prime because it is divisible by: " + x);
    // if ((n + 1) % 2 === 0) {
    //     console.log("This is not a prime number because it is divisible by 2");
    //     break;
    // }
}