// Select the elements
const card = document.querySelector('#pokemonCard');
const errorDiv = document.querySelector('#errorContainer');
const img = document.querySelector('#pokemonImg');
const imgBorder = document.querySelector('#cardImgBorder');
const innerCardContainer = document.querySelector('#innerCardContainer');
const h2 = document.querySelector('#pokemonCardName');
const p1 = document.querySelector('#pokemonHeight');
const p2 = document.querySelector('#pokemonWeight');
const p3 = document.querySelector('#pokemonType');

// List of pokemon types and their associated color
const pokemonTypeColors = {
  "normal": "#A8A77A",
  "fire": "#EE8130",
  "water": "#6390F0",
  "electric": "#F7D02C",
  "grass": "#7AC74C",
  "ice": "#96D9D6",
  "fighting": "#C22E28",
  "poison": "#A33EA1",
  "ground": "#E2BF65",
  "flying": "#A98FF3",
  "psychic": "#F95587",
  "bug": "#A6B91A",
  "rock": "#B6A136",
  "ghost": "#735797",
  "dragon": "#6F35FC",
  "dark": "#705746",
  "steel": "#B7B7CE",
  "fairy": "#D685AD"
};

// Create event listener for the form submission'
document.getElementById('pokemonForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the pokemon name from the input field
  const pokemonName = document.getElementById('pokemonName').value;

  // Make the fetch request
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {

      console.log(data.name)

      errorDiv.style.display = 'none'; // Hide the error message if it's displayed
      card.style.display = 'flex'; // Show the card

      const type = data.types[0].type.name;

      img.src = data.sprites.front_default; // The URL of the pokemon's image

      // Set the background color of the card to the color of the pokemon's type
      innerCardContainer.style.backgroundColor = pokemonTypeColors[type];

      // Set the pokemon info
      h2.textContent = data.name;
      p1.textContent = `Height: ${data.height}ft`;
      p2.textContent = `Weight: ${data.weight}lbs`;
      p3.textContent = `Type: ${type}`;
    })
    .catch((error) => {
      // If error occurs, log it to the console and display an error message
      console.error(error)

      // Hide the card and display the error message
      card.style.display = 'none';
      errorDiv.style.display = 'block';
    });
});

// Add event listener to the close button
document.querySelector('#close').addEventListener('click', function() {
  // Close the card when the close button is clicked
  card.style.display = 'none';
});

document.getElementById('pokemonCard').addEventListener('mousemove', function(e) {
  let width = this.offsetWidth;
  let xVal = e.layerX;
  let yRotation = 20 * ((xVal - width / 2) / width);

  this.style.transform = `rotateY(${yRotation}deg)`;
  
  // Adjust the drop shadow
  let depth = 15;
  let shadow = depth * (yRotation / 15);
  this.style.boxShadow = `${-shadow}px 0px ${2 * depth}px rgba(0,0,0,0.5)`;

});

document.getElementById('pokemonCard').addEventListener('mouseout', function() {
  this.style.boxShadow = `0px 0px 20px rgba(0,0,0,0.5)`; // Reset the drop shadow
  this.style.transform = `rotateX(0) rotateY(0)`;
});