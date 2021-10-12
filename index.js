// alert("Working");

//------------------it's code from the course ----------------------------------

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if Player 1 wins
if (randomImageSource > randomImageSource2){
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}
//if Player 2 winns
else if (randomImageSource < randomImageSource2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}
//if numbers are equals
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


// ------------------- it's my code -------------------------
//
//   var imagesArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
//   var randomOfNumbers = imagesArray.length;
//   var randomNumber1 = imagesArray[Math.floor(Math.random() * randomOfNumbers)];
//   var randomNumber2 = imagesArray[Math.floor(Math.random() * randomOfNumbers)];
//
// function myFunction1(imagesArray) {
//   return randomNumber1;
// }
//
// function myFunction2 (imagesArray) {
//   return randomNumber2;
// }
//
// document.querySelector(".img1").setAttribute("src", myFunction1(imagesArray[randomNumber1]));
// document.querySelector(".img2").setAttribute("src", myFunction2(imagesArray[randomNumber2]));
//
// if (myFunction1(imagesArray[randomNumber1]) > myFunction2(imagesArray[randomNumber2])){
//   document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
// }
// else if (myFunction1(imagesArray[randomNumber1]) < myFunction2(imagesArray[randomNumber2])){
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
