const texts = [
  "online payments",
  "seamless transactions",
  "financial automation",
  "global acceptance",
  " business growth",
];

const texts2 = [
  "enhance your security",
  "streamline your operations",
  "financial automation",
  "expand your global reach",
  "grow your business",
];

const animatedText = document.querySelector(".animated-text");
const animatedText2 = document.querySelector(".animated-text2");

const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenTexts = 1000;

function animateAnyText(texts, animatedText) {
  let currentText = "";
  let isTyping = true;
  let currentTextIndex = 0;

  function animateText() {
    if (isTyping) {
      if (currentText !== texts[currentTextIndex]) {
        currentText = texts[currentTextIndex].slice(0, currentText.length + 1);
        animatedText.textContent = currentText;
        setTimeout(() => {
          animateText();
        }, typingSpeed);
      } else {
        isTyping = false;
        setTimeout(() => {
          animateText();
        }, delayBetweenTexts);
      }
    } else {
      if (currentText !== "") {
        currentText = currentText.slice(0, -1);
        animatedText.textContent = currentText;
        setTimeout(() => {
          animateText();
        }, erasingSpeed);
      } else {
        isTyping = true;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(() => {
          animateText();
        }, typingSpeed);
      }
    }
  }

  animateText();
}

animateAnyText(texts, animatedText);
animateAnyText(texts2, animatedText2);
