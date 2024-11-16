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

// let longString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// let cellBlocksArray = longString.split("\n");

// for (bigString of cellBlocksArray) {
//     let lilStringsArray = bigString.split(",");
//     let cell1 = "";
//     let cell2 = "";
//     let cell3 = "";
//     let cell4 = "";
//     for (let i = 0; i < lilStringsArray.length; i++) {
//         if (i === 0) {
//             cell1 += lilStringsArray[i];
//         }
//         if (i === 1) {
//             cell2 += lilStringsArray[i];
//         }
//         if (i === 2) {
//             cell3 += lilStringsArray[i];
//         }
//         if (i === 3) {
//             cell4 += lilStringsArray[i];
//         }
//     };
//     console.log("This is a new cell block: " + cell1, cell2, cell3,cell4);
// };

// R-ALAB:

// PART 1: REFACTORING OLD CODE

// let longString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// let cellBlocksArray = longString.split("\n");

// for (bigString of cellBlocksArray) {
//     let lilStringsArray = bigString.split(",");
    // console.log(lilStringsArray);
//     console.log("This is a new cell block: " + lilStringsArray[0], lilStringsArray[1], lilStringsArray[2], lilStringsArray[3]);
// };

// PART 2: EXPANDING FUNCTIONALITY

// let longString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let cellBlocksArray = longString.split("\n");

// let arrOfLilStringsArray = [];

// for (bigString of cellBlocksArray) {
//     let lilStringsArray = bigString.split(",");
//     console.log(lilStringsArray);

//     arrOfLilStringsArray.push(lilStringsArray);

//     let numberOfColumns = lilStringsArray.length;
//     // console.log(numberOfColumns);

//     let stringToReturn = "This is a new cell block: ";
//     for (let i = 0; i < numberOfColumns; i++) {
//         stringToReturn += `${lilStringsArray[i]} `;
//     };
//     console.log(stringToReturn);
// };
// console.log(arrOfLilStringsArray);

// PART 3: TRANSFORMING DATA

let longString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cellBlocksArray = longString.split("\n");

let arrOfLilStringsArray = [];
let arrOfObjects = [];

for (bigString of cellBlocksArray) {
    let lilStringsArray = bigString.split(",");
    // console.log(lilStringsArray);

    arrOfLilStringsArray.push(lilStringsArray);

    let numberOfColumns = lilStringsArray.length;
    let stringToReturn = "This is a new cell block: ";
    for (let i = 0; i < numberOfColumns; i++) {
        stringToReturn += `${lilStringsArray[i]} `;
    };
    console.log(stringToReturn);
};

let header = arrOfLilStringsArray[0];
for (let i = 1; i < arrOfLilStringsArray.length; i++) {
    let rowObject = {};
    // console.log(arrOfLilStringsArray[i]);
    for (let x = 0; x < arrOfLilStringsArray[i].length; x++) {
        // console.log(arrOfLilStringsArray[i][x]);
        rowObject[header[x].toLowerCase()] = arrOfLilStringsArray[i][x];
    }
    arrOfObjects.push(rowObject);
};
// console.log(arrOfObjects);

// PART 4: SORTING AND MANIPULATING DATA

// 1. Remove the last element from the sorted array.
    arrOfObjects.pop();
    // console.log(arrOfObjects);

// 2. Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
    arrOfObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
    // console.log(arrOfObjects);

// 3. Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
    arrOfObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
    console.log(arrOfObjects);

let totalAge = 0;
for (let a = 0; a < arrOfObjects.length; a++) {
    // console.log(arrOfObjects[a].age);
    totalAge += parseInt(arrOfObjects[a].age);
    // console.log(totalAge);
};
let averageAge = totalAge / arrOfObjects.length;
// console.log(averageAge);

// PART 5: FULL CIRCLE

let arrOfHeaders = [];
let newString = "";
let firstObject = arrOfObjects[0];
let lastKey = "";

for (let key in arrOfObjects[0]) {
    arrOfHeaders.push(key); 
};

for (let h = 0; h < arrOfHeaders.length; h++) {
    if (h === arrOfHeaders.length - 1) {
        lastKey = arrOfHeaders[h];
        newString += `${arrOfHeaders[h].toLocaleUpperCase()}\n`;
    } else {
        newString += `${arrOfHeaders[h].toLocaleUpperCase()}, `;
    };
};

for (let c = 0; c < arrOfObjects.length; c++) {
    for (let key in arrOfObjects[c]) {
        let lastObjectKey = arrOfObjects[c][lastKey];
        if (arrOfObjects[c][key] === lastObjectKey) {
            newString += `${arrOfObjects[c][key]}\n`;
        } else {
            newString += `${arrOfObjects[c][key]}, `;
        }
    };
};

console.log(newString);