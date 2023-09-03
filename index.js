let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randImage = "/images/dice" + randomNumber1 + ".png";
let getImgAtt = document.querySelectorAll("img")[0].setAttribute("src", randImage)
console.log(getImgAtt)
    // console.log(randImage)
    // let p1 = getImgAtt.

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randImage2 = "/images/dice" + randomNumber2 + ".png";
let getImgAtt2 = document.querySelectorAll("img")[1].setAttribute("src", randImage2)
console.log(getImgAtt2)

let playerScore = document.querySelector(".container h1");

if (randomNumber1 < randomNumber2) {
    playerScore.innerHTML = "Player 2 wins!!"
} else if (randomNumber1 > randomNumber2) {
    playerScore.innerHTML = "Player 1 wins!!";
} else {
    playerScore.innerHTML = "it's a draw!!";
}