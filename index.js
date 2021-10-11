
  var imagesArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
  var randomOfNumbers = imagesArray.length;
  var randomNumber1 = imagesArray[Math.floor(Math.random() * randomOfNumbers)];

function myFunction(imagesArray) {
  return randomNumber1;
}


document.querySelector(".img1").setAttribute("src", myFunction(imagesArray[randomNumber1]));
