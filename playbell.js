// Function to play the audio file
function playAudio() {
  var audio = new Audio();
  audio.src = browser.extension.getURL('bell-audio.mp3'); // Path to your audio file
  audio.play();
}

// Example: Play audio when extension button is clicked
browser.browserAction.onClicked.addListener(function(tab) {
  playAudio();
});