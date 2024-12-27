const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");


const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^1?\s*(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneNumberRegex.test(phoneNumber);
}


const checkUserInput = () => {
  const userInputValue = userInput.value;
  
  if (!userInputValue) {
    alert("Please provide a phone number");
    return;
  }

  resultsDiv.textContent = isValidPhoneNumber(userInputValue) ? `Valid US Number: ${userInputValue}` : `Invalid US Number: ${userInputValue}`;
}


checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.textContent = "";
});
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkUserInput();
  }
});


