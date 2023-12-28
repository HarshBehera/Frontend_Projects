
const circle1 = document.getElementById("circle1")
const circle2 = document.getElementById("circle2")
const circle3 = document.getElementById("circle3")
const circle4 = document.getElementById("circle4")
const circle5 = document.getElementById("circle5")
const arr = [circle1, circle2, circle3, circle4, circle5]
console.log(arr)
function mouseOver(circle) {

    circle.style.color = "white";
    circle.style.backgroundColor = "hsl(25, 97%, 53%)"
}

function mouseOut(circle) {

    if (circle.style.color != "wheat") {
        circle.style.color = "hsl(216, 12%, 54%)"
        circle.style.backgroundColor = "hsl(213, 19%, 18%)"
    }
}
function mouseUnclick() {

    for (var i = 0; i < 5; i++) {

        c = arr[i]
        c.style.color = "hsl(216, 12%, 54%)"
        c.style.backgroundColor = "hsl(213, 19%, 18%)"


    }
}


function mouseClick(circle) {
    mouseUnclick()
    circle.style.color = "wheat"
    circle.style.backgroundColor = "hsl(217, 12%, 63%)"

}

function mouseOverBtn(btn){
    btn.style.color="hsl(25, 97%, 53%)"
    btn.style.backgroundColor="white"
 }
 function mouseOutBtn(btn){
    btn.style.color="white" 
    btn.style.backgroundColor="hsl(25, 97%, 53%)"
 }
function buttonClick(btn){
    console.log("working")
}







