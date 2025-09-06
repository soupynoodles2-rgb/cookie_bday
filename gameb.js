const cordHandle = document.querySelector('.cord-handle');
const pullSection = document.querySelector('.pull-cord-section');
const loveSection = document.querySelector('.love-section');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const congratsSection = document.querySelector('.congrats-section');
const returnBtn = document.getElementById('return-btn');
const purpleBoxesSection = document.querySelector('.purple-boxes-section');
const cordLine = document.querySelector('.cord-line');

let noTries = 0;

// Pull cord with wiggle and glow
cordHandle.addEventListener('mousedown', () => {
  cordHandle.style.transform = 'translateY(150px)'; // slide down
  setTimeout(() => {
    pullCordSection.classList.add('hidden');
    loveSection.classList.remove('hidden');
    cordHandle.style.transform = 'translateY(0px)'; // reset if needed
  }, 600); // matches CSS transition duration
});


  // wiggle animation
  cordHandle.animate([
    { transform: 'translateY(150px) rotate(0deg)' },
    { transform: 'translateY(150px) rotate(10deg)' },
    { transform: 'translateY(150px) rotate(-10deg)' },
    { transform: 'translateY(150px) rotate(0deg)' }
  ], {
    duration: 500,
    iterations: 2
  });

  setTimeout(() => {
    pullSection.classList.add('hidden');
    loveSection.classList.remove('hidden');
    cordHandle.classList.remove('glow');
    cordLine.classList.remove('glow');
  }, 600);
});

// No button dodging
noBtn.addEventListener('mouseenter', () => {
  if(noTries < 3) {
    noBtn.style.position = 'absolute';
    noBtn.style.top = Math.random() * 300 + 'px';
    noBtn.style.left = Math.random() * 300 + 'px';
    noTries++;
  } else {
    noBtn.style.display = 'none';
  }
});

// Yes button
yesBtn.addEventListener('click', () => {
  loveSection.classList.add('hidden');
  congratsSection.classList.remove('hidden');
  createConfetti(); // one-time confetti across the whole page
});

// Return button to purple boxes
returnBtn.addEventListener('click', () => {
  congratsSection.classList.add('hidden');
  purpleBoxesSection.classList.remove('hidden');
});

// Confetti function
function createConfetti() {
  const confettiContainer = document.getElementById('confetti-container');
  const colors = ['#ff0a54', '#ff477e', '#ff85a1', '#fbb1b1', '#f9bec7'];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '8px';
    confetti.style.height = '8px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.top = '-10px';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.opacity = Math.random();
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confettiContainer.appendChild(confetti);

    const fallDuration = Math.random() * 2 + 3; // 3-5 seconds
    confetti.animate([
      { transform: `translateY(0px)` },
      { transform: `translateY(${window.innerHeight}px)` }
    ], {
      duration: fallDuration * 1000,
      iterations: 1,
      easing: 'ease-out',
      fill: 'forwards'
    });

    setTimeout(() => confetti.remove(), fallDuration * 1000);
  }
}
