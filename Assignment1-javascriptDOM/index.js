
//w3schools.com used for eventlistener referencing/refreshing 
document.getElementById("h1").addEventListener("mouseenter", mouseEnter); //when the mouse enters h1 call on mouseEnter functio
document.getElementById("h1").addEventListener("mouseleave", mouseLeave); //when the mouse leaves h1 call on mouseLeave function

document.getElementById('first-button').addEventListener("click", buttonOne); //when first button is clicked, trigger buttonOne function
function buttonOne() { //buttonOne function changes the background color, text color and font for both buttons on the screen 
    document.getElementById("h1").innerHTML = "First Assignment";
    document.getElementById("h1").style.fontFamily = "Abril Fatface";
    //first button changes
    document.getElementById("first-button").style.color = "#38a8ab";
    document.getElementById("first-button").style.backgroundColor = "#0c5c5e";
    document.getElementById("first-button").style.fontFamily = "Abril Fatface";
    //second button changes
    document.getElementById("second-button").style.color = "#38a8ab";
    document.getElementById("second-button").style.backgroundColor = "#0c5c5e";
    document.getElementById("second-button").style.fontFamily = "Abril Fatface";

}
document.getElementById('second-button').addEventListener("click", buttonTwo); //when second button is clicked, trigger buttonTwo function
function buttonTwo(){
    document.getElementById("h1").innerHTML = "Javascript and DOM";
    document.getElementById("h1").style.fontFamily = "Bebas Neue";
    //first button changes
     document.getElementById("first-button").style.color = "#ab6538";
     document.getElementById("first-button").style.backgroundColor = "#5e3216";
     document.getElementById("first-button").style.fontFamily = 'Bebas Neue';
     //second button changes
     document.getElementById("second-button").style.color = "#ab6538";
     document.getElementById("second-button").style.backgroundColor = "#5e3216";
     document.getElementById("second-button").style.fontFamily = 'Bebas Neue';
}

function mouseEnter() { //function that changes h1 text color to red 
  document.getElementById("h1").style.color = "red";
}

function mouseLeave() { //function that changes h1 text color to black 
  document.getElementById("h1").style.color = "black";
}