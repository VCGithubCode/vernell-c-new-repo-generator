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


const closeSpan = document.getElementsByClassName("close")[0]; 

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn-confirm',
    cancelButton: 'btn-cancel'
  },
  buttonsStyling: false
});

const jsConfetti = new JSConfetti();
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  jsConfetti.addConfetti({
    emojis: ['⭐', '🌟', '💫', '✩', '✮', '🎸'],
    emojiSize: 50,
    confettiNumber: 70,
  });

  swalWithBootstrapButtons.fire({
    title: 'Interested in the source code?',
    text: 'Hey 🎸⭐️ Rockstar ⭐️🎸 Instead of inspecting my code this way... How about you fork my repo and give it a star ✩ ? Thanks a ton!!! 😌',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, take me there!',
    cancelButtonText: 'No, thank you.',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'https://github.com/VCGithubCode/vernell-c-new-repo-generator';
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'No worries, feel free to continue exploring!',
        'error'
      );
    }
  });
});