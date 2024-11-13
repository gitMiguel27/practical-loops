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

// let x = 2;

// for (let n = 1408; x < n; n++) {
//     x = 2;
//     while ((n + 1) % x > 0) {
//         x++;
//         if (x === n) {
//             console.log(`The next prime number is: ${n + 1}!`)
//         }
//     }
// }

// Part 3: Feeling Loopy


let str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n";
let cellNumber = 1;
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

// loop through string adding each character to a cell
for (let i = 0; i < str.length; i++) {
    // when the loop reaches a comma, close that cell, and start a new cell.

}
// when the loop reaches a break sequence, end the row and console log each cell.