// Set the number of chances
var maxChance = 10;

// Create an array of words
var word = [ 'ultron', 'wanda', 'thanos', 'tchalla', 'hulk' ];
// Select words randomly
var randNum = Math.floor( Math.random() * word.length );
var selectedWord = word[ randNum ];
var rightWord = [];
var wrongWord = [];
var underScore = [];


var docUnderScore = document.getElementsByClassName( 'underScore' );
var docRightGuess = document.getElementsByClassName( 'rightGuess' );
var docWrongGuess = document.getElementsByClassName( 'wrongGuess' );
// Testing if it works
console.log( selectedWord );
// Create the underscore based on length of word
var generateUnderscore = () => {
  for ( var i = 0; i < selectedWord.length; i++) {
    underScore.push( '_' );
  }
  return underScore;
}
// console.log( generateUnderscore() );

// Get users guess
document.addEventListener( 'keypress', (event) => {
  var keyword = String.fromCharCode( event.keyCode );
  
  if ( selectedWord.indexOf( keyword ) > -1 ) {
    rightWord.push( keyword );
    underScore[ selectedWord.indexOf( keyword ) ] = keyword;
    docUnderScore[0].innerHTML = underScore.join( ' ' );
    docRightGuess[0].innerHTML = rightWord;

    if (underScore.join( '' ) == selectedWord) {
      alert( 'You Win!' );
    }
  }
  else {
    wrongWord.push( keyword );
    docWrongGuess[0].innerHTML = wrongWord;
  }
});

docUnderScore[0].innerHTML = generateUnderscore().join( ' ' );
