"use-strict";

$(document).ready(function() {

    const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
    const colorSelector = function randomColor(colors) {
            return colors[Math.floor(Math.random() * colors.length)];
        }
    
    $("#game-start").click((e) => {
        console.log(colorSelector);
    });

});