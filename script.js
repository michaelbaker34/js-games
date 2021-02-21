"use-strict";

$(document).ready(function() {

    const randomShapes = ["square", "circle", "triangle", "rectangle", "pentagon", "diamond"];
    const randomColors = ["red", "green", "blue", "yellow", "purple", "orange"];
    let randomShapeSelector = function randomShape(randomShapes) { 
            return randomShapes[Math.floor(Math.random() * randomShapes.length)];
        }
    let randomColorSelector = function randomColor(randomColors) {
            return randomColors[Math.floor(Math.random() * randomColors.length)];
        }
    
    let renderShape = [
        {
            "shape": randomShapeSelector(randomShapes),
            "color": randomColorSelector(randomColors)
        }
    ]
    let $numberOfShapes = $("#number-of-shapes-input");
    console.log(renderShape);

    $("#submit-number-of-shapes").click(function (e) {
        console.log($numberOfShapes.val())
    });

});