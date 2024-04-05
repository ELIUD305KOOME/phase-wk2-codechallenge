// function that accepts a string as input and swaps the case of each character
let inputString = prompt("Enter a string")
function swapCase(inputString) {
    let swappedString = "";
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char >= 'a' && char <= 'z') {
            swappedString += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char;
        }
    }
    return swappedString;
}
console.log(swapCase(inputString)); 