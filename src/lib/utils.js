import confetti from 'canvas-confetti';

const shootFireworks = () => {
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function fireworkInterval() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount: 70,
      origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount: 70,
      origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 },
    });

    return undefined;
  }, 250);
};

export default shootFireworks;
