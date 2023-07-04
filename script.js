// Define an array of possible colors for each clothing item
var pantsColors = ['blue', 'red', 'yellow', 'orange', 'green'];
var shirtColors = ['black', 'white', 'pink', 'purple', 'gray'];
var shoeColors = ['brown', 'tan', 'black', 'white'];
// Get references to the clothing item elements
var pantsElement = document.getElementById('pants');
var shirtElement = document.getElementById('shirt');
var shoesElement = document.getElementById('shoes');
// Add event listener to the randomize button
var randomizeButton = document.getElementById('randomizeButton');
if (randomizeButton !== null) {
    randomizeButton.addEventListener('click', randomizeColors);
}
// Function to randomly select a color from an array
function getRandomColor(colors) {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
// Function to randomize the colors of the clothing items
function randomizeColors() {
    if (pantsElement !== null && shirtElement !== null && shoesElement !== null) {
        var randomPantsColor = getRandomColor(pantsColors);
        var randomShirtColor = getRandomColor(shirtColors);
        var randomShoeColor = getRandomColor(shoeColors);
        pantsElement.style.backgroundColor = randomPantsColor;
        shirtElement.style.backgroundColor = randomShirtColor;
        shoesElement.style.backgroundColor = randomShoeColor;
    }
}
