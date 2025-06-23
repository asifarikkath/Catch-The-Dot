let score = 0;
let dotInterval;

function startGame() {
  score = 0;
  document.getElementById('score').innerText = score;
  clearInterval(dotInterval);
  spawnDot();
  dotInterval = setInterval(spawnDot, 1000);
}

function spawnDot() {
  const gameArea = document.getElementById('gameArea');
  gameArea.innerHTML = '';

  const dot = document.createElement('div');
  dot.classList.add('dot');

  // Random position
  const x = Math.random() * (gameArea.clientWidth - 30);
  const y = Math.random() * (gameArea.clientHeight - 30);
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  // Click event
  dot.onclick = () => {
    score++;
    document.getElementById('score').innerText = score;
    spawnDot();
  };

  gameArea.appendChild(dot);
}
