// Test script to make sure link from index.html is working

function displayWorkingMessage() {
  const paragraph = document.createElement("p");
  paragraph.textContent = "It's working! Yay!";

  document.body.appendChild(paragraph);

  let isGreen = true;

  setInterval(() => {
    if (isGreen) {
      paragraph.style.color = "green";
      isGreen = false;
    } else {
      paragraph.style.color = "";
      isGreen = true;
    }
  }, 500);
}

displayWorkingMessage();