// Create an array of words
const word = [ 'fat', 'lazy', 'hungary' ];
// Select words randomly
var randNum = Math.floor( Math.random() * word.length );
var selectedWord = word[ randNum ];
var underScore = [];
console.log( selectedWord );
// Create the underscore based on length of word
var generateUnderscore = () => {
  for ( var i = 0; i < selectedWord.length; i++) {
    underScore.push( '_' );
  }
  return underScore;
}
console.log( generateUnderscore() );
// Get users guess
document.addEventListener( 'keypress', (event) => {
  var keyword = String.fromCharCode( event.keyCode );
  console.log( keyword );
});
// Check if guess is right

// if yes, push to right array

// if no, push to wrong array