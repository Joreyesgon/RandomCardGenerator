window.onload = function () {
window.genCard = function () {

    let suits = ["♦","♥","♠","♣"];
    let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

        function randomCard(){
            let randomSuit = suits[Math.floor(Math.random() * suits.length)];
            let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

            document.querySelector(".iconTop").innerHTML = randomSuit;
            document.querySelector(".cardNumber").innerHTML = randomNumber;
            document.querySelector(".iconBottom").innerHTML = randomSuit;

       
            if (randomSuit === "♦" || randomSuit === "♥"){
                document.querySelector("#cardContainer").style.color = "red";
            }   

            else if (randomSuit === "♠" || randomSuit === "♣"){
                document.querySelector("#cardContainer").style.color = "black"
            }
        }
    randomCard();
};

    window.genCard();
};