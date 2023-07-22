// script for typying effect

function typeWriter() {
  const textArray = "I am Gary M. ";
  const typingElement = document.getElementById("typing-text");
  const typeDelay = 200;

  typedText(textArray, typingElement, typeDelay);
}

function typedText(textArray, typingElement, typeDelay) {
  for (let i = 0; i < textArray.length; i++) {
    setTimeout(() => {
      typingElement.textContent += textArray.charAt(i);
    }, typeDelay * i);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
