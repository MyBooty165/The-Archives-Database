const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
  const passcode = document.getElementById('passcode').value;

  // check if the passcode is correct
  if (passcode === 'mypassword') {
    // redirect to the specified page
    window.location.href = 'https://example.com';
  } else {
    alert('Invalid passcode. Please try again.');
  }
});
