var magic8Ball = {};
magic8Ball.listOfAnswers = ["I'm not sure", "Don't count on it", "Yes", "No", "Definitely", "In your dreams"];
magic8Ball.askQuestion = function (question)

{
var randomNumber = Math.random();
var randomNumberArray = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor (randomNumberArray);
var randomAnswer = this.listOfAnswers [randomIndex];

console.log (question);
console.log (randomAnswer);
};
magic8Ball.askQuestion ("");
