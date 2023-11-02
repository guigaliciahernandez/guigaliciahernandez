const phrases = ["Smile", "Have a great day", "The sun shines everyday"];
const colorSchemes = [
    { text: 'rgb(255,130,226)', background: 'rgb(0,18,168)', font: 'Nunito' },
    { text: 'rgb(0,18,168)', background: 'rgb(255,130,226)', font: 'Montserrat' },
    { text: 'rgb(255,255,255)', background: 'rgb(0,0,0)', font: 'Roboto' },
];

let currentPhraseIndex = 0;
let currentColorIndex = 0;

function changePhraseAndStyle() {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    currentColorIndex = (currentColorIndex + 1) % colorSchemes.length;
    
    document.getElementById("positive-phrase").innerText = phrases[currentPhraseIndex];
    document.body.style.backgroundColor = colorSchemes[currentColorIndex].background;
    document.getElementById("positive-phrase").style.color = colorSchemes[currentColorIndex].text;
    document.getElementById("positive-phrase").style.fontFamily = colorSchemes[currentColorIndex].font;
}

document.body.addEventListener("click", changePhraseAndStyle);
