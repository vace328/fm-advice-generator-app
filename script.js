const adviceTitle = document.getElementById("advice-title");
const adviceText = document.getElementById("advice-text");
const newAdviceBtn = document.getElementById("new-advice-btn");

let randomAdvice = {};

// Display new advice
function newAdvice() {    
    adviceTitle.innerText = `Advice #${randomAdvice.slip.id}`;
    adviceText.innerText = randomAdvice.slip.advice;   
}

// Get advice from API
async function getAdvice() {
 const apiUrl = "https://api.adviceslip.com/advice";
  try {    
    const response = await fetch(apiUrl);
    randomAdvice = await response.json();    
    newAdvice();
    // console.log(randomAdvice);
  } catch (error) {
    console.log(error);
  }
}

// On button click
newAdviceBtn.addEventListener('click', getAdvice);