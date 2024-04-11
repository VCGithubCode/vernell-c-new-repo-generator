// Check if the user has achieved all 5 star badges
const badgeCount = parseInt(localStorage.getItem('badgeCount')) || 0;
const messageAlreadyDisplayed = localStorage.getItem('thankYouMessageDisplayed') === '';

if (badgeCount >= 5 && !messageAlreadyDisplayed) {
  const message = document.createElement("p");
  message.textContent = "Vernell thanks you so much for being a part of his tech journey! Keep in touch!";
  message.style.fontSize = "1em"; // Adjust font size to match paragraph
  message.style.marginTop = "10px"; // Add some margin top for spacing
  document.body.appendChild(message);

  // Set flag to indicate that the message has been displayed
  localStorage.setItem('thankYouMessageDisplayed', 'true');
}

// Function to display the working message
function displayWorkingMessage() {
  const paragraph = document.createElement("p");
  paragraph.textContent = "It's working! Yay!";
  document.body.appendChild(paragraph);

  setInterval(() => {
    if (paragraph.style.animation === "") {
      paragraph.style.animation = "1s color-change infinite";
    }
  }, 500);
  }

// Display the working message
displayWorkingMessage();

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn-confirm',
    cancelButton: 'btn-cancel'
  },
  buttonsStyling: false
});
const jsConfetti = new JSConfetti();

// Trigger the alert and confetti
function showAlertAndConfetti() {
  jsConfetti.addConfetti({
    emojis: ['⭐', '🌟', '💫', '✩', '✮', '🎸'],
    emojiSize: 50,
    confettiNumber: 70,
  });
  
  swalWithBootstrapButtons.fire({
    title: 'Interested in the source code?',
    text: 'Hey 🎸⭐️ Rockstar ⭐️🎸 Instead of only inspecting my code this way... How about you take a second to fork my repo and give it a star ✩ ? Thanks a ton!!! 😌',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, take me there!',
    cancelButtonText: 'No, thank you.',
    reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    localStorage.setItem('visitedGithub', 'true'); // Store the user's action
    awardBadge('Star'); // Award the badge on trust
  
    window.location.href = 'https://github.com/VCGithubCode/vernell-c-new-repo-generator';
  }
});
}

// Listen for right-click context menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  showAlertAndConfetti();
});

// Award badges
function awardBadge(badgeName) {
  const badgeContainer = document.createElement('div');
  const words = badgeName.split(' '); // Split the badge name into words
  badgeContainer.className = 'badge-container';
  
  // Create HTML with each word wrapped in a span
  badgeContainer.innerHTML = `<div class="badge">${
    words.map(word => `<span>${word}</span>`).join(' ')
  } Badge Awarded!</div>`;
  
  document.body.appendChild(badgeContainer);
  
  // Increment the badge count in localStorage
  let badgeCount = parseInt(localStorage.getItem('badgeCount')) || 0;
  badgeCount++;
  localStorage.setItem('badgeCount', badgeCount);

  // Remove the badge after some time
  setTimeout(() => {
    badgeContainer.remove();
  }, 5000);
}

// Check for text selection
function checkForSelection() {
  const selection = window.getSelection();
  const interactiveWord = document.getElementById('interactive-word');
  if (selection.containsNode(interactiveWord, true)) {
    awardBadge('World Highlighter');
  }
}

// Add mouseup event listener to check for selection
document.addEventListener('mouseup', checkForSelection);
document.addEventListener('touchend', checkForSelection); // For touch devices


// Create an input field
function createInputField() {
  const inputContainer = document.createElement('div');
  inputContainer.className = 'input-container';
  inputContainer.innerHTML = `
    <label for="secret-code">Enter the password if you know the code:</label>
    <input type="text" id="secret-code" name="secret-code">
    <button id="submit-button">Submit</button>
  `;
  document.body.appendChild(inputContainer);

  const submitButton = inputContainer.querySelector('#submit-button');
  submitButton.addEventListener('click', handleSubmitButtonClick);
}

// Handle submit button click
function handleSubmitButtonClick() {
  checkPasswordAndAwardBadge();
}

// Check password entry and award badge
function checkPasswordAndAwardBadge() {
  const inputField = document.getElementById('secret-code');
  const enteredText = inputField.value.trim().toUpperCase();
  const passwords = ['IS THERE', 'ISTHERE', 'IS THERE?', 'ISTHERE?'];

  if (passwords.includes(enteredText)) {
    // Correct password entered
    awardBadge('Question Everything');
    inputField.value = ''; // Clear the input field
    removeInputContainer();
  } else {
    // Incorrect password entered
    inputField.value = ''; // Clear the input field
    showFeedbackMessage("Find the code, find the clue...");
  }
}

// Remove the input container
function removeInputContainer() {
  const inputContainer = document.querySelector('.input-container');
  if (inputContainer) {
    inputContainer.remove();
  }
}

// Show feedback message
function showFeedbackMessage(message) {
  const feedbackMessage = document.createElement('div');
  feedbackMessage.textContent = message;
  feedbackMessage.className = 'feedback-message';
  document.body.appendChild(feedbackMessage);

  // Remove the feedback message after some time
  setTimeout(() => {
    feedbackMessage.remove();
  }, 2000);
}

// Add dblclick event listener to badge container
document.addEventListener('dblclick', function(event) {
  if (event.target.className.includes('badge')) {
    createInputField();
  }
});

document.addEventListener('keydown', function(event) {
  // Check for keys used to open DevTools
  if (event.keyCode === 123 || // F12
      (event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I (Windows/Linux)
      (event.metaKey && event.shiftKey && event.keyCode === 73)) { // Cmd+Shift+I (Mac)
    event.preventDefault();
    showAlertAndConfetti();
    awardBadge('Curiosity');
  }
});

const inputField = document.getElementById('secret-code');


// Check Konami code entry
function checkKonamiCode() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA', 'Enter'];
  let konamiIndex = 0;

  document.addEventListener('keydown', function (e) {
    if (e.code === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        // Konami code entered successfully
        showHiddenText();
        awardBadge('True Hacker'); // Award the True Hacker badge
        konamiIndex = 0; // Reset index for future use
        updateInputText();
      }
    } else {
      konamiIndex = 0; // Reset index if the wrong key is pressed
    }
  });

  // Check password entry
  const passwords = ['IS THERE', 'ISTHERE', 'IS THERE?', 'IS THEre?'];
  let passwordIndex = 0;
  inputField.addEventListener('input', () => {
    if (inputField.value.trim().toUpperCase() === passwords[passwordIndex]) {
      passwordIndex++;
      if (passwordIndex === passwords.length) {
        // Password entered successfully
        awardBadge('True Hacker');
        passwordIndex = 0; // Reset index for future use
      }
    } else {
      passwordIndex = 0; // Reset index if the wrong password is entered
    }
  });

  }
// Start listening for the Konami code
checkKonamiCode();

function showHiddenText() {
  const hiddenTextContainer = document.createElement('div');
  hiddenTextContainer.id = 'hidden-text-container';
  hiddenTextContainer.innerHTML = '<p id="hidden-text"><span>T</span><span>H</span><span>E</span><span>R</span><span>E</span><span>I</span><span>S</span><span>N</span><span>O</span><span>S</span><span>P</span><span>O</span><span>O</span><span>N</span></p>';
  document.body.appendChild(hiddenTextContainer);

  // Remove the hidden text after 3 seconds
  setTimeout(() => {
    hiddenTextContainer.remove();
  }, 3000);

  const hiddenText = hiddenTextContainer.querySelector('#hidden-text');
  hiddenText.addEventListener('mouseup', function () {
    const selection = window.getSelection().toString();
    if (selection === 'THERE IS NO SPOON') {
      awardBadge('True Hacker');
      // Remove the hidden text container after successfully revealing the hidden message
      hiddenTextContainer.remove();
    }
  });
}

// Update input field text
function updateInputText() {
  const inputLabel = document.querySelector('label[for="secret-code"]');
  if (inputLabel) {
    inputLabel.textContent = "YOU KNOW THE EDOC!";
  }
}

if (localStorage.getItem('visitedGithub') === 'true') {
  awardBadge('Real One');
}
