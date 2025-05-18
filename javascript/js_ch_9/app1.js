/* let para1 = document.createElement("p");
para1.innerText = " Hey i'm red ";
para1.style.color = "red";
let body = document.querySelector("body");
body.appendChild(para1);

let h3 = document.createElement("h3");
h3.innerText = "i'm a blue h3 ";
h3.style.color = "blue";
body.appendChild(h3);


let div = document.createElement("div");
div.style.border="50px solid black";
div.style.backgroundColor = "pink";
body.appendChild(div);

let h1 = document.createElement("h1");
h1.innerText = "i'm in a div";
let para2 = document.createElement("p");
para2.innerText = "me too";

div.appendChild(h1,);
div.appendChild(para2);

*/

let para1 = document.createElement("p");
para1.innerText = "hey i am shivam";
document.querySelector("body").append(para1);
para1.classList.add("red");


let h3 = document.createElement("h3");
h3.innerText = "hey i am ashu";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = " i am inner div";
para2.innerText = " ME TOO! ";

div.append(h1);
div.append(para2);

div.classList.add("box");
document.querySelector("body").append(div);

//CreateanewinputandbuttonelementonthepageusingJavaScriptonly.Setthetextofbuttonto“Clickme”
let body = document.querySelector("body");
let input = document.createElement("input");
let btn1 = document.createElement("button");
btn1.innerText = "Click me";
body.append(input);
body.append(btn1)

//Addfollowingattributestotheelement
// :-Changeplaceholdervalueofinputto“username”-
// Changetheidofbuttonto“btn
btn1.setAttribute("id", "btn1");
input.setAttribute("placeholder", "username");

//AccessthebtnusingthequerySelectorandbuttonid.Changethebuttonbackgroundcolortoblueandtextcolortowhite
let btn2 = document.querySelector("#btn1");
console.dir(btn2);
btn2.style.backgroundColor = "blue";
btn2.style.color = "white";

//Createanh1elementonthepageandsetitstextto“DOMPractice”underlined.Changeitscolortopurple
let head = document.createElement("h1");
head.innerText = "DOM Pratice";
body.append(head)
head.style.textDecoration = "underline"; // OR h1.innerHTML="<u>DOMPractice</u>";
head.style.color = "purple";

//Createaptagonthepageandsetitstextto“ApnaCollegeDeltaPractice”,whereDeltaisbold
let p = document.createElement("p");
p.innerHTML= "shivam you will get <b> job </b> soon";
body.append(p);
