function shout(string) {
  return string.toUpperCase()
  }
  
function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  shoutUC = string.toUpperCase;
  string = shoutUC;
  console.log(shoutUC);
}

function logWhisper(string) {
  whisperLC = string.toLowerCase;
  string = whisperLC;
  console.log(whisperLC);
}
