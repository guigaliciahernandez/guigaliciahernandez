let words = ['EMBRACE', 'THE', 'MOMENT,', 'FOR', 'EACH', 'DAY', 'BRINGS', 'A', 'NEW', 'BEGINNING.'];
let initialSize = 5;  // font size in em
let scalingFactor = 1.5;  // how much we increase the size each time
let maxSize = 50;  // the size in em when we want to cover the screen
let currentSize = initialSize;

let wordIndex = 0;

document.getElementById('liquidWord').addEventListener('click', function() {
    wordIndex = (wordIndex + 1) % words.length;
    currentSize = Math.min(maxSize, currentSize * scalingFactor);
    this.style.fontSize = currentSize + "em";

    this.innerHTML = words[wordIndex];
    
    // Liquid-like transform animation
    anime({
        targets: this,
        skewX: [0, 15, -15, 0],
        skewY: [0, 15, -15, 0],
        easing: 'easeInOutQuad',
        duration: 800
    });
});

// Automatic Animation Every 3 seconds
setInterval(() => {
    document.getElementById('liquidWord').click();
}, 3000);

