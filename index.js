var copypopup = document.getElementById("myCopyPopup");

let inputText = document.getElementById("inputText")

let boldText = document.getElementById("boldText")
let italicText = document.getElementById("italicText")
let bolditalicText = document.getElementById("bolditalicText")
let corssedText = document.getElementById("corssedText")
let scriptText = document.getElementById("scriptText")
let boldScriptText = document.getElementById("boldScriptText")
let monospaceText = document.getElementById("monospaceText")
let doublestruckText = document.getElementById("doublestruckText")

let boldBtn = document.getElementById("boldBtn")
let italicBtn = document.getElementById("italicBtn")
let bolditalicBtn = document.getElementById("bolditalicBtn")
let corssedBtn = document.getElementById("corssedBtn")
let scriptBtn = document.getElementById("scriptBtn")
let boldScriptBtn = document.getElementById("boldScriptBtn")
let monospaceBtn = document.getElementById("monospaceBtn")
let doublestruckBtn = document.getElementById("doublestruckBtn")

const text = [
    boldText,
    italicText,
    bolditalicText,
    corssedText,
    scriptText,
    boldScriptText,
    monospaceText,
    doublestruckText
]

const btns = [
    boldBtn,
    italicBtn,
    bolditalicBtn,
    corssedBtn,
    scriptBtn,
    boldScriptBtn,
    monospaceBtn,
    doublestruckBtn
]

const isUpper = (n) => n >= 65 && n < 91;
const isLower = (n) => n >= 97 && n < 123;

// Bold

const upperDiff = "𝗔".codePointAt(0) - "A".codePointAt(0);
const lowerDiff = "𝗮".codePointAt(0) - "a".codePointAt(0);

const bolderize = (char) => {
    const n = char.charCodeAt(0);
    if (isUpper(n)) return String.fromCodePoint(n + upperDiff);
    if (isLower(n)) return String.fromCodePoint(n + lowerDiff);
    return char;
};

const bolderizeWord = (word) => [...word].map(bolderize).join("");

const upperDiffI = "𝘈".codePointAt(0) - "A".codePointAt(0);
const lowerDiffI = "𝘢".codePointAt(0) - "a".codePointAt(0);

// Italic

const italic = (char) => {
    const n = char.charCodeAt(0);
    if (isUpper(n)) return String.fromCodePoint(n + upperDiffI);
    if (isLower(n)) return String.fromCodePoint(n + lowerDiffI);
    return char;
};

const italicWord = (word) => [...word].map(italic).join("");

// Italic Bold

const upperDiffIB = "𝘼".codePointAt(0) - "A".codePointAt(0);
const lowerDiffIB = "𝙖".codePointAt(0) - "a".codePointAt(0);

const italicBold = (char) => {
    const n = char.charCodeAt(0);
    if (isUpper(n)) return String.fromCodePoint(n + upperDiffIB);
    if (isLower(n)) return String.fromCodePoint(n + lowerDiffIB);
    return char;
};

const italicBoldWord = (word) => [...word].map(italicBold).join("");

// Script

const upperDiffS = "𝒜".codePointAt(0) - "A".codePointAt(0);
const lowerDiffS = "𝒶".codePointAt(0) - "a".codePointAt(0);

const script = (char) => {
    const n = char.charCodeAt(0);
    if (isUpper(n)) return String.fromCodePoint(n + upperDiffS);
    if (isLower(n)) return String.fromCodePoint(n + lowerDiffS);
    return char;
};

const scriptWord = (word) => [...word].map(script).join("");

// Script Bold

const upperDiffSB = "𝓐".codePointAt(0) - "A".codePointAt(0);
const lowerDiffSB = "𝓪".codePointAt(0) - "a".codePointAt(0);

const scriptBold = (char) => {
    const n = char.charCodeAt(0);
    if (isUpper(n)) return String.fromCodePoint(n + upperDiffSB);
    if (isLower(n)) return String.fromCodePoint(n + lowerDiffSB);
    return char;
};

const scriptBoldWord = (word) => [...word].map(scriptBold).join("");

// Monospace

const upperDiffMS = "𝙰".codePointAt(0) - "A".codePointAt(0);
const lowerDiffMS = "𝚊".codePointAt(0) - "a".codePointAt(0);

const monospace = (char) => {
    const n = char.charCodeAt(0);
    if (isUpper(n)) return String.fromCodePoint(n + upperDiffMS);
    if (isLower(n)) return String.fromCodePoint(n + lowerDiffMS);
    return char;
};

const monospaceWord = (word) => [...word].map(monospace).join("");

// Doublestrack

const upperDiffDS = "𝔸".codePointAt(0) - "A".codePointAt(0);
const lowerDiffDS = "𝕒".codePointAt(0) - "a".codePointAt(0);

const doublestrack = (char) => {
    const n = char.charCodeAt(0);
    if (isUpper(n)) return String.fromCodePoint(n + upperDiffDS);
    if (isLower(n)) return String.fromCodePoint(n + lowerDiffDS);
    return char;
};

const doublestrackWord = (word) => [...word].map(doublestrack).join("");

// Strike Through

function strikeThrough(text) {
    return text
        .split('')
        .map(char => char + '\u0336')
        .join('')
}

// Changing Value of Output Fields

inputText.addEventListener("keyup", () => {
    boldText.value = bolderizeWord(inputText.value)
    italicText.value = italicWord(inputText.value)
    bolditalicText.value = italicBoldWord(inputText.value)
    corssedText.value = strikeThrough(inputText.value)
    scriptText.value = scriptWord(inputText.value)
    boldScriptText.value = scriptBoldWord(inputText.value)
    monospaceText.value = monospaceWord(inputText.value)
    doublestruckText.value = doublestrackWord(inputText.value)
})

// Clipboard Functions

function copyToClipBoard(text) {
    navigator.clipboard.writeText(text)
}
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        copyToClipBoard(text[i].value);

        copypopup.classList.add("copypopup-show-animation");
        copypopup.style.display = "block";

        setTimeout(function () {
            copypopup.classList.remove("copypopup-show-animation");
            copypopup.classList.add("copypopup-hide-animation");
            setTimeout(function () {
                copypopup.classList.remove("copypopup-hide-animation");
                copypopup.style.display = "none";
            }, 300);
        }, 5000);
    });
}