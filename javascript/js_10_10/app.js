// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     console.log("btn was clicked");
//     alert("i love coding");
// }
    //OR
    
// function sayHello () {
//     alert("hello")
// }
// btn.onclick = sayHello;   // btn.onclick = sayHello(); don't use () here if u use then it will start exceting from here

   //OR

   // selecting all button at a time 

//    let btns = document.querySelectorAll("button"); // acces all buttons 
//    function sayhello (){
//     alert("hello");
//    }

//    for( b of btns ){ // every btn comes and store in b variable 
//         b.onclick = sayhello; // every btn has onclick property accesing 
//         b.onmouseenter = function () {
//             console.log("you entered in a button");
//         };
//         console.dir(b);
//    }

//    for(let i = 0 ; i< btns.length ; i++){
//     btns[i].onclick=sayhello; // btn[0] pe jb v click ho then call sayhello function
//    }

  /*addEventListener*/ // we can add multiple events by addEventListener search mdn for info

// let btns = document.querySelectorAll("button");
// function sayhello(){
//     alert("hello");
// }
// function sayname(){
//     alert("shivam and ashu")
// }
// for(btn of btns){
// // btn.addEventListener("click" , sayhello);
// // btn.addEventListener("click", sayname);
// btn.addEventListener("dblclick" , function () { 
//     console.log("you double click on it");
// });
// };

/*
let para = document.querySelector("p");
para.addEventListener("click",function(){
    console.log("the para is clicked");
});*/


/*
let box = document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("you entered in a div");
});*/

//this in Event Listener
// let p = document.createElement("p");
// p.innerHTML = "<h1>This is a <b>paragraph </b> </h1>" // blod is not working 
// document.querySelector("body").prepend(p);
// p.style.backgroundColor = "pink";
// p.setAttribute("id","para");
// let para = document.querySelector("#para");
// //console.dir(para);
// p.getAttribute("id"); // para 

// p.addEventListener("click",function(){
//     console.log(this); // this = obj 
//     console.log(this.innerText);
//     this.style.backgroundColor ="brown";
// });


// let par = document.querySelector("#wp");
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");

// par.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "yellow";
// });
// h1.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "yellow";
// });
// h2.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "yellow";
// });

//      OR

// function changecolor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "yellow"; // to fir yaha per jo this hai wo har obj ke liya uska this banjayage
// }
// par.addEventListener("click", changecolor); // par call karega changecolor and uske ander ka this is eqal to par
// h1.addEventListener("click", changecolor);   // same h1 ka this h1
// h2.addEventListener("click", changecolor); // h2 ka this h2


// // keyboard Events 
// // default argument 
// let btn = document.querySelector("button");

// btn.addEventListener("click" ,function(e){ // e or event kuch v likha sakte hai and it is the default argument
//     console.log(e); // the e means its a mouse pointer bole to
//     console.log(" button clicked");

// });

// btn.addEventListener("dblclick" , function(e) {
//     console.log(e);
//     console.log("double cliked "); // button clicked , button clicked , double click
// });

// let input = document.querySelector("input");
// input.setAttribute("placeholder" , "type something");
// input.addEventListener("keydown",function() {
//     console.log("key was pressed "); //when we press any key is called keydownd
// });


// let input = document.querySelector("input");
// input.setAttribute("placeholder" , "type something");
// input.addEventListener("keydown",function(e) {
//     console.log("key = " ,e.key);// it will return the key value which is press by user
//     console.log("code = " ,e.code) // it will retunr the code of the press key
//     console.log("key was pressed "); // here we can press any key for long time and when we get out our fingure from the key it count one
// });

// let input = document.querySelector("input");
// input.setAttribute("palceholder", "type something");
// input.addEventListener("keydown" , function(e){
//     console.log("code = " ,e.code); //ArroUp , ArroDown , ArroLeft , ArroRigh 
//     if(e.code == "ArrowUp" || e.code == "KeyW"){
//         console.log("character moves forward");
//     }else if (e.code == "ArrowDown" || e.code == "KeyS"){
//         console.log("arrow moves down");
//     }else if (e.code == "ArrowLeft" || e.code == "KeyA"){
//         console.log("arrow movies left");
//     }else if (e.code == "ArrowRight" || e.code == "KeyD"){
//         console.log("character moves right");
//     }
// });

// let form = document.querySelector("form");
// form.addEventListener("submit" , function(evt) {
//     evt.preventDefault(); // to stay in same page 

//     //  let user = document.querySelector("#user");
//     //  let pass = document.querySelector("#pass");
//     //  alert(`user name =  ${user.value} password set to be ${pass.value}`);


//         //  let user = this.elements[0]; // elements is the property of form obj
//         // let pass = this.elements[1];
//         // alert(`user name =  ${user.value} password set to be ${pass.value}`);


// });

//more events 

// change event track the change between the intial state and the final state


// let inpt = document.querySelector("input");
// inpt.addEventListener("change" , function(){
//     console.log("Event change");
//     console.log("final Event = " , this.value);
// });
// inpt.addEventListener("input" , function(){
//     //console.log("input Event");
//     console.log("final Event = " , this.value);
// });


// let inpt = document.querySelector("input");
// let p = document.querySelector("p");

// inpt.addEventListener("input" , function(){
//     p.innerText= this.value;
// });


