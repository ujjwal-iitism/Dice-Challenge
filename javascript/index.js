var n1 = Math.random()*6;
n1 = Math.floor(n1) +1;
var randomImg1 = "images/dice" + n1 + ".png";

var n2 = Math.random()*6;
n2 = Math.floor(n2) +1;
var randomImg2 = "images/dice" + n2 + ".png";

document.querySelector("img.img1").setAttribute("src",randomImg1);
document.querySelector("img.img2").setAttribute("src",randomImg2);


// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src",randomImg1);
//
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomImg2);


if(n1===n2) document.querySelector("h1").innerHTML = "Draw";

else if(n1<n2) document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

else document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
