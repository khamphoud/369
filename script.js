// Define arrays for card values and suits
const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cardSuits = ['♠', '♣', '♦', '♥'];

// Initialize an array to store drawn cards
let drawnCards = [];

// Function to generate a random card
function generateRandomCard() {
  if (drawnCards.length >= cardValues.length * cardSuits.length) {
    Swal.fire({
        title: 'ໄພ້ຖືກຈົ່ວໝົດແລ້ວ!',
        icon: 'info',
        confirmButtonText: 'ຕົກລົງ' 
      });
    document.getElementById('generate-btn').style.display = 'block';
    document.getElementById('start-new-btn').style.display = 'block';
    return;
  }

  let randomValue, randomSuit, card;
  do {
    randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];
    randomSuit = cardSuits[Math.floor(Math.random() * cardSuits.length)];
    card = randomValue + randomSuit;
  } while (drawnCards.includes(card));

  // Display the card
  const valueElement = document.querySelector('.card-value');
  const suitElement = document.querySelector('.card-suit');
  valueElement.textContent = randomValue;
  suitElement.textContent = randomSuit;
  
  // Check if the suit is '♥' or '♦' and apply the 'red' class
  if (randomSuit === '♦' || randomSuit === '♥') {
    valueElement.classList.add('red');
    suitElement.classList.add('red');
  } else {
    // Remove 'red' class if not hearts or diamonds
    valueElement.classList.remove('red');
    suitElement.classList.remove('red');
  }

  // Add the card to the drawn cards array
  drawnCards.push(card);

  // Update the card counter
  document.getElementById('counter').textContent = `ຈຳນວນໄພ້ທັງໝົດ: ${drawnCards.length}/${cardValues.length * cardSuits.length}`;
}

// Add event listener to the generate button
document.getElementById('generate-btn').addEventListener('click', generateRandomCard);

// Add event listener to the start new deck button
document.getElementById('start-new-btn').addEventListener('click', function() {
  drawnCards = [];
  document.getElementById('generate-btn').style.display = 'block';
  document.getElementById('start-new-btn').style.display = 'block';
  generateRandomCard(); // Generate the first card of the new deck
});

// Generate a random card initially
generateRandomCard();
