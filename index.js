// Get a reference to the canvas element and its 2d context
const canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;
const ctx = canvas.getContext('2d');

// Define your game variables and initialize them here
let rectangleX = canvas.width / 2;
let rectangleY = canvas.height / 2;
let playerSpeed = 5;

// Flags to track key states
let isArrowUpPressed = false;
let isArrowLeftPressed = false;
let isArrowRightPressed = false;
let isArrowDownPressed = false;

// Game loop function
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update game logic here

  // Handle diagonal movement when Arrow Up is pressed with Arrow Left or Right
  if (isArrowUpPressed) {
    if (
      isArrowLeftPressed &&
      rectangleX - playerSpeed > 0 &&
      rectangleY - playerSpeed > 0
    ) {
      rectangleX -= playerSpeed;
      rectangleY -= playerSpeed;
    } else if (
      isArrowRightPressed &&
      rectangleX + playerSpeed + 50 < canvas.width &&
      rectangleY - playerSpeed > 0
    ) {
      rectangleX += playerSpeed;
      rectangleY -= playerSpeed;
    } else if (rectangleY - playerSpeed > 0) {
      rectangleY -= playerSpeed;
    }
  }

  if (isArrowRightPressed && rectangleX + playerSpeed + 50 < canvas.width) {
    rectangleX += playerSpeed;
  }

  if (isArrowLeftPressed && rectangleX - playerSpeed > 0) {
    rectangleX -= playerSpeed;
  }

  if (isArrowDownPressed) {
    if (
      isArrowLeftPressed &&
      rectangleX - playerSpeed > 0 &&
      rectangleY + playerSpeed + 50 < canvas.height
    ) {
      rectangleX -= playerSpeed;
      rectangleY += playerSpeed;
    } else if (
      isArrowRightPressed &&
      rectangleX + playerSpeed + 50 < canvas.width &&
      rectangleY + playerSpeed + 50 < canvas.height
    ) {
      rectangleX += playerSpeed;
      rectangleY += playerSpeed;
    } else if (rectangleY + playerSpeed + 50 < canvas.height) {
      rectangleY += playerSpeed;
    }
  }

  // Draw the player
  ctx.fillStyle = 'blue';
  ctx.fillRect(rectangleX, rectangleY, 50, 50);

  // Request the next frame
  requestAnimationFrame(gameLoop);
}

// Start the game loop
requestAnimationFrame(gameLoop);

// Handle player input or other game events here
document.addEventListener('keydown', (event) => {
  // Set the corresponding flag when arrow keys are pressed
  if (event.key === 'ArrowLeft') {
    isArrowLeftPressed = true;
  } else if (event.key === 'ArrowRight') {
    isArrowRightPressed = true;
  } else if (event.key === 'ArrowUp') {
    isArrowUpPressed = true;
  } else if (event.key === 'ArrowDown') {
    isArrowDownPressed = true;
  }
});

document.addEventListener('keyup', (event) => {
  // Clear the corresponding flag when arrow keys are released
  if (event.key === 'ArrowLeft') {
    isArrowLeftPressed = false;
  } else if (event.key === 'ArrowRight') {
    isArrowRightPressed = false;
  } else if (event.key === 'ArrowUp') {
    isArrowUpPressed = false;
  } else if (event.key === 'ArrowDown') {
    isArrowDownPressed = false;
  }
});
