// Test script to make sure link from index.html is working
function displayWorkingMessage() {
  try {
    const paragraphElement = document.createElement("p");
    paragraphElement.innerHTML = "It's working. Yay!";
    document.body.appendChild(paragraphElement);

    const bodyFirstChild = document.getElementFirstChild("body");
    if (bodyFirstChild) {
      bodyFirstChild.classList.add("red");
    }
  } catch (error) {
    console.error(error);
  }
}

displayWorkingMessage();