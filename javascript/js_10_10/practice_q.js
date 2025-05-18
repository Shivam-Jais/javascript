//1
let div = document.querySelector("div");
div.addEventListener("mouseout",function(){
    console.log("mouseout");
});

let inp = document.querySelector("input");
// inp.addEventListener("keypress", function(){
//     console.log("key pressed",this.value);
// } );

window.addEventListener("scroll", function(){
    console.log("page is scrolling");
});

let img = document.querySelector("img");
img.addEventListener("load", function() {
    console.log("Image is completely loaded!");
});


//2
let btn = document.createElement("button");
btn.innerText = "click me";
btn.setAttribute("id" , "btn");
document.querySelector("body").append(btn);
btn.addEventListener("click",function(){
btn.classList.add("color");
})
//3

let head = document.querySelector("h2");
inp.addEventListener("input" , function(){
    head.innerText = this.value;
});