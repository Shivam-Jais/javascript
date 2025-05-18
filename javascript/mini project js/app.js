// event bubbling - means automatically changes are apply to they parent element also.
// let div = document.createElement("div");
// let ul = document.createElement("ul");


// let items = ["eat" , "code" , "sleep"];
// for(item of items){
//     let li = document.createElement("li");
//     li.innerText = item;
//     ul.appendChild(li);
// }
// div.append(ul);
// document.querySelector("body").append(div);

// let list = document.querySelectorAll("li");
// console.log(list);
// list.forEach(li => console.log(li.innerText));

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let list = document.querySelectorAll("li");

//  div.addEventListener("click" , function(evt){
//     console.log("div was click");
//  });
 
//  ul.addEventListener("click" , function(evt){
//     evt.stopPropagation(); // used to stop the event bubbling it a property of event object
//     console.log("ul was click");
//  });
 
// for (list of list ){
//     list.addEventListener("click" , function (evt) {
//         evt.stopPropagation();
//         console.log("list was click");
//     });
// }
/*let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = inp.value;


    let dltbtn = document.createElement("button");
    dltbtn.innerText = "dlt me";
    dltbtn.classList.add("delet")


    item.appendChild(dltbtn);
    console.log(inp.value);
    ul.appendChild(item);
    inp.value = "";

});*/
// let delbtns = document.querySelectorAll(".delet");

// for(btn of delbtns){ // acces all btns of class delet
//     btn.addEventListener("click" , function(){
//         let par = this.parentElement; // button ka parent li 
//         console.log(par);
//         par.remove(); // removed li
//     });
// }
//Event delegation - if we want that old elements eventlistener are also applicable on the new element we use event delegation
/*ul.addEventListener("click", function(evt){

    //console.dir(evt.target.nodeName);
   if(evt.target.nodeName == "BUTTON"){
    let listitem = evt.target.parentElement;
    console.log(listitem);
    listitem.remove();
    console.log("deleted");
   }
   else{
    console.log("don't delet");
   }
});*/

let btn = document.querySelector("button");
let list = document.querySelectorAll("li");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" , function(){
    let newlist = document.createElement("li");
    newlist.innerText = inp.value;
    let newbtn = document.createElement("button");
    newbtn.innerText = "delete";
    newbtn.classList.add("delet");


    newlist.appendChild(newbtn);
    ul.appendChild(newlist);
    inp.value = "";
});

let dltbtn = document.querySelectorAll(".delet");

// for (btn of dltbtn){
//     btn.addEventListener("click",function(){
//        let par =  this.parentElement;
//        console.dir(par);
//        par.remove();
//     });
// }

ul.addEventListener("click" , function (evt) {
    //console.log(evt.target.nodeName);// giving answer in capital letter
    // if(evt.target.nodeName == "BUTTON"){
    //     let par = evt.target.parentElement;
    //     par.remove();
    // }
    if(evt.target.classList.contains("delet")){
     evt.target.parentElement.remove();
    }
})

