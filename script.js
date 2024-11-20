const startButton = document.getElementById('start-game');
const difficultySelect = document.getElementById('difficulty');
const imageSetSelect = document.getElementById('image-set');
const timerElement = document.getElementById('timer');
const movesElement = document.getElementById('moves');
const gameBoard = document.getElementById('game-board');
const leaderboardElement = document.getElementById('leaderboard');

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = 0;
let timerInterval;
let leaderboard = [];

// Image sets
const images = {
  animals: ['🐶', '🐱', '🐭', '🦊', '🐻', '🐼', '🐸', '🐔'],
  fruits: ['🍎', '🍊', '🍌', '🍇', '🍓', '🍍', '🥝', '🍒'],
  shapes: ['🔺', '🔵', '🟥', '🟩', '⭐', '🟨', '🟪', '⬛']
};

// Difficulty levels
const gridSizes = {
  easy: 4, // 4x4 grid
  medium: 6, // 6x6 grid
  hard: 8 // 8x8 grid
};

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generateCards() {
  const difficulty = difficultySelect.value;
  const imageSet = images[imageSetSelect.value];
  const gridSize = gridSizes[difficulty];
  const numPairs = (gridSize * gridSize) / 2;
  const selectedImages = shuffle(imageSet).slice(0, numPairs);
  const cardImages = shuffle([...selectedImages, ...selectedImages]);
  return cardImages;
}

function createBoard() {
  const gridSize = gridSizes[difficultySelect.value];
  gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gameBoard.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  cards = generateCards();
  gameBoard.innerHTML = '';
  cards.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;
    card.innerHTML = '';
    gameBoard.appendChild(card);
  });
}

function startGame() {
  resetGame();
  createBoard();
  startTimer();
}

function flipCard(card) {
    if (card.classList.contains('flipped') || card.classList.contains('matched')) {
      return; // Ignore clicks on already flipped or matched cards
    }
  
    const index = card.dataset.index;
    card.innerHTML = cards[index];
    card.classList.add('flipped');
    flippedCards.push(card);
  
    // Check for a match if two cards are flipped
    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
  

  function checkMatch() {
    const [card1, card2] = flippedCards;
    const index1 = card1.dataset.index;
    const index2 = card2.dataset.index;
  
    if (cards[index1] === cards[index2]) {
      // If the cards match, mark them as matched
      card1.classList.add('matched');
      card2.classList.add('matched');
      matchedPairs++;
  
      // Check if all pairs are matched
      if (matchedPairs === cards.length / 2) {
        endGame();
      }
    } else {
      // If the cards do not match, hide them after a short delay
      setTimeout(() => {
        card1.innerHTML = '';
        card1.classList.remove('flipped');
        card2.innerHTML = '';
        card2.classList.remove('flipped');
      }, 1000);
    }
  
    // Reset flipped cards array and increment moves
    flippedCards = [];
    moves++;
    movesElement.textContent = moves;
  }
  

function startTimer() {
  timer = 0;
  timerInterval = setInterval(() => {
    timer++;
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  const time = timerElement.textContent;
  alert(`You won! Time: ${time}, Moves: ${moves}`);
  saveToLeaderboard(time, moves);
}

function resetGame() {
  clearInterval(timerInterval);
  timerElement.textContent = '00:00';
  movesElement.textContent = '0';
  moves = 0;
  matchedPairs = 0;
  flippedCards = [];
}

function saveToLeaderboard(time, moves) {
  leaderboard.push({ time, moves });
  leaderboard = leaderboard.sort((a, b) => a.moves - b.moves).slice(0, 5);
  renderLeaderboard();
}

function renderLeaderboard() {
  leaderboardElement.innerHTML = leaderboard
    .map(
      (entry, index) =>
        `<li>${index + 1}. Time: ${entry.time}, Moves: ${entry.moves}</li>`
    )
    .join('');
}

gameBoard.addEventListener('click', (e) => {
  const card = e.target;
  if (card.classList.contains('card') && !card.classList.contains('flipped')) {
    flipCard(card);
  }
});

startButton.addEventListener('click', startGame);
const stopButton = document.getElementById('stop-game');

// Function to stop the game
function stopGame() {
  clearInterval(timerInterval); // Stop the timer
  resetGame(); // Reset game state
  gameBoard.innerHTML = ''; // Clear the game board
  alert('Game stopped! Returning to the start menu.');
}

// Add event listener to stop button
stopButton.addEventListener('click', stopGame);
