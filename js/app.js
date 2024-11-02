const surpriseButton = document.getElementById('surprise');
const messages = [
  "🎉 Have an amazing day!",
  "🌟 You're awesome!",
  "🎈 Keep shining!",
  "🎁 Enjoy your special day!",
  "✨ Make a wish!"
];

function showRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  alert(messages[randomIndex]);
}

surpriseButton.addEventListener('click', showRandomMessage);

// Add confetti effect
function createConfetti() {
  const colors = ['#ff69b4', '#87ceeb', '#dda0dd', '#90ee90'];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = '1000';

    document.body.appendChild(confetti);

    const animation = confetti.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: Math.random() * 2000 + 1000,
      easing: 'linear'
    });

    animation.onfinish = () => confetti.remove();
  }
}

surpriseButton.addEventListener('click', createConfetti);
