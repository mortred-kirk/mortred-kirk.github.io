"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    
    if (noCount >= 6) { 
      play = false;
      noButton.style.backgroundColor = "#ccc"; // Turns button gray
      noButton.style.cursor = "not-allowed";   // Changes cursor to disabled icon
    }
  }
});
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "UYYY:3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;
  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "sure naba yan po?",
    "naka depende ba kung 3 yan?",
    "luh ayaw talaga tigas mo te ha",
    "ayun tumutulo na luha ko:(",
    "kawawi man ako uy ouch:(",
    "Ayan nasira mo dmo na tuloy mapindot" 
  ];
  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}
  ];
  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(name) {
  catImg.src = `cat-${name}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
