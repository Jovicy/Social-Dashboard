// Theme Changer
var content = document.getElementsByTagName("body")[0];
var darkMode = document.getElementById("theme-changer");
var header = document.querySelectorAll(".heading");
var cardBody = document.querySelectorAll(".property-card");
var regularCard = document.querySelectorAll(".regular-cards");
darkMode.addEventListener('click', function () {
    darkMode.classList.toggle("active");
    content.classList.toggle("light");
    cardBody.forEach(function(cardBodys){
        cardBodys.classList.toggle("white");
    });
    regularCard.forEach(function(regularCards){
        regularCards.classList.toggle("shine");
    });
    header.forEach(function(headers){
        headers.classList.toggle("black");
    });
});
