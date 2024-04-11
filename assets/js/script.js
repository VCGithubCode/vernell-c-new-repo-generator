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

displayWorkingMessage();

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn-confirm',
    cancelButton: 'btn-cancel'
  },
  buttonsStyling: false
});
const jsConfetti = new JSConfetti();

// Function to trigger the alert and confetti
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
      window.location.href = 'https://github.com/VCGithubCode/vernell-c-new-repo-generator';
    }
  });
}

// Listen for right-click context menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  showAlertAndConfetti();
});

// Function to handle awarding badges
function awardBadge(badgeName) {
  const badgeContainer = document.createElement('div');
  const words = badgeName.split(' '); // Split the badge name into words
  badgeContainer.className = 'badge-container';
  
  // Create HTML with each word wrapped in a span
  badgeContainer.innerHTML = `<div class="badge">${
    words.map(word => `<span>${word}</span>`).join(' ')
  } Badge Awarded!</div>`;
  
  document.body.appendChild(badgeContainer);
  
  // Remove the badge after some time
  setTimeout(() => {
    badgeContainer.remove();
  }, 5000);
}



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