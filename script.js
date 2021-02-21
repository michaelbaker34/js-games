"use-strict";

$(document).ready(function() {

// top-left square
    let gameSquare0 = document.getElementById("game-square-0").getContext("2d");
    gameSquare0.fillStyle = "red";
    gameSquare0.rect(0, 0, 200, 200);
    gameSquare0.fill();

// top-right square
    let gameSquare1 = document.getElementById("game-square-1").getContext("2d");
    gameSquare1.fillStyle = "blue";
    gameSquare1.rect(0, 0, 200, 200);
    gameSquare1.fill();

// bottom-left square
    let gameSquare2 = document.getElementById("game-square-2").getContext("2d");
    gameSquare2.fillStyle = "green";
    gameSquare2.rect(0, 0, 200, 200);
    gameSquare2.fill();
    
// bottom-right square
    let gameSquare3 = document.getElementById("game-square-3").getContext("2d");
    gameSquare3.fillStyle = "yellow";
    gameSquare3.rect(0, 0, 200, 200);
    gameSquare3.fill();

    $("#game-start").click((e) => {
        
    });

});