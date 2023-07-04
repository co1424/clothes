// Define an array of possible colors for each clothing item
const pantsColors: string[] = ['blue', 'red', 'yellow', 'orange', 'green'];
const shirtColors: string[] = ['black', 'white', 'pink', 'purple', 'gray'];
const shoeColors: string[] = ['brown', 'tan', 'black', 'white'];

// Get references to the clothing item elements
const pantsElement = document.getElementById('pants');
const shirtElement = document.getElementById('shirt');
const shoesElement = document.getElementById('shoes');

// Add event listener to the randomize button
const randomizeButton = document.getElementById('randomizeButton');
if (randomizeButton !== null) {
  randomizeButton.addEventListener('click', randomizeColors);
}

// Function to randomly select a color from an array
function getRandomColor(colors: string[]): string {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function to randomize the colors of the clothing items
function randomizeColors() {
  if (pantsElement !== null && shirtElement !== null && shoesElement !== null) {
    const randomPantsColor = getRandomColor(pantsColors);
    const randomShirtColor = getRandomColor(shirtColors);
    const randomShoeColor = getRandomColor(shoeColors);

    pantsElement.style.backgroundColor = randomPantsColor;
    shirtElement.style.backgroundColor = randomShirtColor;
    shoesElement.style.backgroundColor = randomShoeColor;
  }
}
