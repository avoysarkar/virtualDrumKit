/*for single button with named function*/
// document.querySelector("button").addEventListener("click",buttonClicked);

// function buttonClicked(){
//     alert("Button clicked!");
// }

/*For Multiple buttons with anonymous function*/

for(var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        buttonAnimate(this.innerHTML);
    }); 
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimate(event.key);
});

function makeSound(key_value){
    switch(key_value){
        case "w": new Audio("sounds/tom-1.mp3").play();
                  break;
        case "a": new Audio("sounds/tom-2.mp3").play();
                  break;
        case "s": new Audio("sounds/tom-3.mp3").play();
                  break;
        case "d": new Audio("sounds/tom-4.mp3").play();
                  break;
        case "j": new Audio("sounds/crash.mp3").play();
                  break;
        case "k": new Audio("sounds/kick-bass.mp3").play();
                  break;
        case "l": new Audio("sounds/snare.mp3").play();
                  break;              
        default:  console(this.innerHTML);
    }
}

function buttonAnimate(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },100);
}