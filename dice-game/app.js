/*
var name = 'Sarah';
console.log(name);

var lastName = 'Kainth';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/
/*var age = 27;
console.log(name + " " + age);

var job, isMarried;
job = 'designer';
isMarried = true;

console.log(name + " is a " + age + " year old " + job + ". Is she married? " + isMarried);

var lastName = prompt('What is your last name?');

alert(name + " is a " + age + " year old " + job + ". Is she married? " + isMarried);
*/
/*var heightJohn = 35;
var heightFriend = 45;
var heightTom = 60

var ageJohn = 27;
var ageFriend = 32;
var ageTom = 22;




var scoreJohn = heightJohn + (ageJohn * 5);
var scoreFriend = heightFriend + (ageFriend * 5);
var scoreTom = heightTom + (ageTom * 5);

if (scoreJohn > scoreFriend && scoreJohn > scoreTom){
  console.log("John wins the game with " + scoreJohn + " points")
} else if (scoreFriend > scoreJohn && scoreFriend > scoreTom) {
  console.log("Friend wins the game with " + scoreFriend + " points")
} else {
    console.log("Tom wins the game with " + scoreTom + " points")
  };


var ginger = {
  name: "Ginger",
  lastName: "Kainth",
  yearOfBirth: 2013,
  gender: "female",
  breed: "dsh",
  color: "tortie",
  family: ["Delia", "Maya"],
  calculateAge: function() {
    this.age = 2017 - this.yearOfBirth;
  }
};

ginger.calculateAge();
console.log(ginger);


var iceCream = ["cookie dough", "strawberry", "reeses"];
for (var i = iceCream.length - 1; i >= 0 ; i--) {
  console.log(iceCream[i]);
}
var i = 0;
while(i < iceCream.length) {
  console.log(iceCream[i]);
  i++;
}
*/

/*var years2 = [1085, 1999, 2001];
var ages = [];
var values = [];

function printFullAge(years) {
  for(i=0; i < years.length; i++) {
   ages.push(2017 - years[i]);
  }
  console.log(ages);
  for(i=0; i < ages.length; i++) {
    if(ages[i] >= 18) {
      console.log(ages[i] + "This person is of full age.")
     }
     else {
       console.log(ages[i] + "This person is a child.")
     }
  }
  for(i=0; i < ages.length; i++) {
    var ofFullAge = ages[i] >= 18
      values.push(ofFullAge);
}
}

printFullAge(myYears);
printFullAge(years2);

var full_1 = printFullAge(myYears);
var full_2 = printFullAge(years2);
console.log(values);
*/

var scores, roundScore, activePlayer, dice, diceTwo, gamePlaying, dicePrev, winningScore, diceTwoPrev;

init();

//document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
    dice = Math.floor(Math.random() * 6) + 1;
    diceTwo = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    var diceTwoDOM = document.querySelector('.diceTwo');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    diceTwoDOM.style.display = 'block';
    diceTwoDOM.src = 'dice-' + diceTwo + '.png';

//if diceTwo is one player loses
//if either dice or diceTwo are 6 twice, player loses
      if (dice !== 1 && diceTwo !== 1 && dice !== 6 || (dice !== 1 && diceTwo !== 1 && dicePrev !== 6)) {
        dicePrev = dice;
        diceTwoPrev = diceTwo;
        roundScore += dice + diceTwo;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        console.log('here');

      } else if (dicePrev !== 6 && dice === 6 || dicePrev !== 6 && diceTwo === 6) {
        dicePrev = dice;
        diceTwoPrev = diceTwo;
        roundScore += dice + diceTwo;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        //document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        console.log('fack');

      } else if (dice === 6 && dicePrev === 6 || dice === 6 && diceTwo === 6) {
        scores[activePlayer] === 0;
          nextPlayer();
          console.log('finally');
          dicePrev = 0;

      } else {
        console.log(1);
        nextPlayer();
        dicePrev = 0;

      }

      }
  });

document.querySelector('.btn-hold').addEventListener('click', function() {
  //Add current score to global score
  if(gamePlaying) {
    //adding round score to active player score
  scores[activePlayer] += roundScore;
  //update UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  //check if player won game
  if (scores[activePlayer] >= winningScore) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.diceTwo').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
  } else {
    nextPlayer();
  }}
});

//listen for changes, take value as max
document.querySelector('#number').addEventListener('click', setWinning);

function setWinning() {
  //variable changes depending on user input
  winningScore = document.querySelector('#number').value;
}



function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

  function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.diceTwo').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
