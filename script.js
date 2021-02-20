"use-strict";

// (function () {

// randomized variables
    const randomShapes = ["square", "circle", "triangle", "rectangle", "pentagon"];
    const randomColors = ["red", "green", "blue", "yellow", "purple"];
    let randomShapeSelector = function randomShape(randomShapes) { 
            return randomShapes[Math.floor(Math.random() * randomShapes.length)];
        }
    let randomColorSelector = function randomColor(randomColors) {
            return randomColors[Math.floor(Math.random() * randomColors.length)];
        }
// html
    let $numberOfShapes = $("#number-of-shapes-input");
    let renderShape = [
        {
            "shape": randomShapeSelector(randomShapes),
            "color":  randomColorSelector(randomColors)
        }
    ]

    // console.log(randomShapes);
    // console.log(randomColors);
    // console.log(randomShapeSelector(randomShapes));
    // console.log(randomColorSelector(randomColors));
    console.log(renderShape);
    
// });