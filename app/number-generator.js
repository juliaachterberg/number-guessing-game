const smallValue = 1;
const bigValue = 1000;
const secretNumber = generateNumber();

function generateNumber() {
    return parseInt(Math.random() * bigValue + 1);
}

console.log(`Secret Number: ${secretNumber}`);

const elementSmallValue = document.getElementById("small-value");
elementSmallValue.innerHTML = smallValue;
const elementBigValue = document.getElementById("big-value");
elementBigValue.innerHTML = bigValue;