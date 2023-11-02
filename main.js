const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
    const duration = Math.random() * (10 - 5) + 5;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.top = `${Math.random() * window.innerHeight}px`;
});
