// function that accepts two numbers and generates an array between them
let start = parseInt(prompt("Enter the start number"));
let end = parseInt(prompt("Enter the end number"));

function generateArray(start, end) {
    let result = [];
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            result.push(i);
        }
    }
    return result;
}
console.log(generateArray(start, end));