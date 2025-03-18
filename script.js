let heartCount = 0;
const totalHearts = 10;
const hearts = [];
const gameArea = document.querySelector('.game-area');
const message = document.getElementById('message');
const heartCountElement = document.getElementById('heart-count');
const timerElement = document.getElementById('timer');
const endMessage = document.getElementById('endMessage');
const fireworksContainer = document.getElementById('fireworks');

let startTime = Date.now();

// Function to generate hearts falling
function createHeart() {
    if (heartCount < totalHearts) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💖';
        heart.style.left = `${Math.random() * 90}%`; // Positioned randomly
        gameArea.appendChild(heart);

        heart.addEventListener('click', () => {
            heart.remove();
            heartCount++;
            heartCountElement.textContent = heartCount;
            if (heartCount === totalHearts) {
                showFireworks();
                setTimeout(() => {
                    showEndMessage();
                }, 2000);
            }
        });
    }
}

// Function to update timer
function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const seconds = String(elapsed % 60).padStart(2, '0');
    timerElement.textContent = `${minutes}:${seconds}`;
}

// Function to show fireworks
function showFireworks() {
    fireworksContainer.style.display = 'block';
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.animationDelay = `${Math.random() * 2}s`;
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
}

// Function to show the final love letter
function showEndMessage() {
    message.style.display = 'none';
    endMessage.style.display = 'block';
}

// Function to reload the page
function reloadPage() {
    location.reload();
}

// Create hearts every 1 second
setInterval(createHeart, 1000);
setInterval(updateTimer, 1000); // Update the timer every second
