console.log("Hola Chefo!")

window.onload = function () {
window.genCard = function () {

    var suit = ["♦","♥","♠","♣"];
    var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

        function randomCard(){
            var randomSuit = suit[Math.floor(Math.random() * suit.length)];
            var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

            document.querySelector(".iconTop").innerHTML = randomSuit;
            document.querySelector(".cardNumber").innerHTML = randomNumber;
            document.querySelector(".iconBottom").innerHTML = randomSuit;

       
            if (randomSuit == "♦" || randomSuit == "♥"){
                document.querySelector("#cardContainer").style.color = "red";
            }   

            else if (randomSuit == "♠" || randomSuit == "♣"){
                document.querySelector("#cardContainer").style.color = "black"
            }
        }
    randomCard();

};

    window.genCard();
};