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

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  Swal.fire({
    title: 'Interested in the source code?',
    text: 'Instead of inspecting my code this way... How about you fork my repo and give it a star instead?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, take me there!',
    cancelButtonText: 'No, thank you.',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'https://github.com/VCGithubCode/vernell-c-new-repo-generator';
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'No worries, feel free to continue exploring!',
        'error'
      );
    }
  });
});