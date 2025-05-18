/*let newimg = document.getElementById("mainImg"); // by id
let smig = document.getElementsByClassName("oldImg"); // by className

for(let i = 0 ; i < smig.length; i++){
    console.dir(smig[i].src);
    console.dir(smig[i].src = "assets/spiderman_img.png");
    console.log(`value of img no ${i} is changed`);

}
document.getElementsByTagName("p")[0].innerText = " shivam"; // by tagname
//query selector   */


/*console.dir(document.querySelector("h1"));//always remember query selector returns 1st select element 
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));//select 1st element with classname oldImg
console.dir(document.querySelector("div a"));// div ke ander wala 1st anchar tag 


console.dir(document.querySelectorAll("div a")); // all anchr tag //NodeList(4)
console.dir(document.querySelectorAll("h1")); // selecting all h1 tags*/

/*
let para = document.querySelector("p");
console.dir(para);
console.log(para.innerText); // it does not shows the hidden content  it shows only the text which is display in the screen only like if we done any tag style = "display : none "
console.log(para.innerHTML); // full html code
console.log(para.textContent); // its shows hidden contents wo text show karta jo acutall humne html file me likha hai
para.innerText = "abs";
para.innerHTML = "hi i am <b>shivam jaiswal</b>";
let heading = document.querySelector("h1");
console.dir(heading.innerText);
heading.innerHTML = ("<u>spider man </>") //or heading.innerHTML = `<u>${heading.innerText}</u>`;
*/
/*
let img = document.querySelector("img");
img.getAttribute("id"); //'mainImg'
img.setAttribute("id" , "spiderman-img");
*/


/*
let heading = document.querySelector("h1");
console.log(heading.style);
heading.style.color = "purple";


let links = document.querySelectorAll("div a");
console.log(links)*/


/// style manipulation 
/* using class lis */
/*
let img = document.querySelector("img");
console.log(img.classList); // DOMTokenList [value: '']
// add class to img tag 
img.setAttribute("class" , "spimg");
console.log(img.classList); //DOMTokenList ['spimg', value: 'spimg'] 
let heading = document.querySelector("h1");
console.log(heading.classList); 
// go and create new class in css 
heading.classList.add("bgclor");
heading.classList.add("underline");  // see we have added more than 1 class property
//heading.setAttribute("class" , "bgclor"); // we can also use these but in these we can apply only class.

heading.remove("underline");// it will remove 
heading.classList.contains("bgclor"); // true
heading.classList.toggle("bgclor"); // it will remove the bgclor class and return false
heading.classList.toggle("bgclor"); // it will add and the bgclor class and retun True
heading.classList.toggle("underline"); // if these class not added then it will and return true or if it is exists the it will remove and return false 
// add a bg clor to div box class
let box = document.querySelector(".box");
console.log(box);
box.classList.add("bgclor"); // not work  then check in the css file the box is define before the bgclor  if it still not work then check is there any inline css 
*/

//Navigation  = parentElement, Children, previousElement or NextElement
/*
let h4 = document.querySelector("h4");
console.log(h4.parentElement); //div.box
console.log(h4.children); //HTMLCollection []

let box = document.querySelector(".box");
console.log(box.children);

let ul = document.querySelector("ul");
console.log(ul.childElementCount); // 3
console.log(ul.children); //HTMLCollection(3) [li, li, li]
console.log(ul.parentElement); //div.box
console.log(ul.children[0]);
*/

// indirectly acces the h1 tag
/*
let img = document.querySelector("img");
console.log(img.previousElementSibling); // h1
console.log(img.previousElementSibling.style.color = "yellow") ;*/

// adding elements 
/*document.createElement("p");
appendchild (ele)
append (ele)
prepend (ele)
insertAdjacent(where, ele) */

/*
let newp = document.createElement("p");
console.log(newp);

newp.innerText = "hi i am a para";     
let body = document.querySelector("body");
 body.appendChild(newp);

let box = document.querySelector(".box");
console.log(box);
box.appendChild(newp);
let btn = document.createElement("button");

btn.innerText = "click me";
box.appendChild(btn);
newp.append(btn);
newp.append(" new para");

btn.innerHTML ="new button";
let p = document.querySelector("#description");
p.insertAdjacentElement("beforebegin" , btn); 
p.insertAdjacentElement("afterbegin" , btn );
p.insertAdjacentElement("beforeend" , btn);
p.insertAdjacentElement("afterend" , btn);
*/

// removechild (ele)
// remove (ele)
//1st access and then change
/*
 let box = document.querySelector(".box");
let btn = document.createElement("button");
btn.innerHTML="click me";
box.appendChild(btn);

box.removeChild(btn); */

//pratie question 
