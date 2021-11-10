// var drumbuttons=document.querySelectorAll(".drum").length;
// for(var i=0;i<=drumbuttons ;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("I got Clicked");
//     }); //or
    // document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
    //  function clicked(){
    //     alert("I got Clicked");
    //  } Here Used as anonymous function
//}
// clicked vs clicked() == without parenthesis the function call  takes place on occurance of event and with parenthesis it is a straight method call that executes function asa the script tag loads.
// function multiply(a,b)
// {
//     console.log(a*b);
// }
// function add(a,b)
// {
//     console.log(a+b);
// }
// function subtract(a,b)
// {
//     console.log(a-b);
// }
// function division(a,b)
// {
//     console.log(a/b);
// }
// function calculator(a,b,operator)
// {
//     return operator(a,b);
// }

// function BellBoy(name,age,lic,exp)
// {
//     this.name=name;
//     this.yearexp=exp;
//     this.age=age;
//     this.license=lic;
// }
// var bellBoy= new BellBoy("Timmy",20,"Yes",5);//creating an object.
//Detecting clicks
var noOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML);
    });
}
//Detecting Keyboard Presses
document.addEventListener("keydown",function(event)
{
   makeSound(event.key);
   buttonAnimation(event.key);
});
function makeSound(key){
        switch(key)
        {
                case 'w':
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
                case 's':
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
                case 'a':
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
                case 'd':
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
                case 'j':
                var tom5=new Audio("sounds/crash.mp3");
                tom5.play();
                break;
                case 'k':
                var tom6=new Audio("sounds/kick-bass.mp3");
                tom6.play();
                break;
                case 'l':
                var tom7=new Audio("sounds/snare.mp3");
                tom7.play();
                break;
                
        }
}
function buttonAnimation(currentKey)
{
   var activeButton= document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function()
   {
       activeButton.classList.remove("pressed");
   },100
   );}