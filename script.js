"use-strict";

$(document).ready(function() {

    let randomShapes = ["square", "circle", "triangle", "rectangle", "pentagon", "diamond"];
    let randomColors = ["red", "green", "blue", "yellow", "purple", "orange"];
    const randomShapeSelector = function randomShape(randomShapes) { 
            return randomShapes[Math.floor(Math.random() * randomShapes.length)];
        }
    const randomColorSelector = function randomColor(randomColors) {
            return randomColors[Math.floor(Math.random() * randomColors.length)];
        }
    
    let createShapeObject = [
        {
            "shape": randomShapeSelector(randomShapes),
            "color": randomColorSelector(randomColors)
        }
    ]
    let $numberOfShapes = $("#number-of-shapes-input");

    console.log(createShapeObject);

    $("#submit-number-of-shapes").click((e) => {
        console.log($numberOfShapes.val())
        let $numberOfShapesInput = $numberOfShapes.val();
        
        for (let i = 0; i < $numberOfShapesInput; i++) {
            function renderShapeObjects(i) {
                i.forEach((value) => {
                    let $shapeDiv = $("<div>",{id:'shape' + i});
                    console.log($shapeDiv);
                });
            }
            
        }

    });

});