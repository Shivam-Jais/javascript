 let gameseq = [];
 let userseq = [];

 let heigest_score = 0;
 let hs = document.querySelector("#hs");

let btns = ["red","yellow","green","purple" ];


let started = false ;
let level = 0 ;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});


function updateheigestscore (){
    if(level > heigest_score){
        heigest_score = level;
        hs.innerText = `Highest score : ${heigest_score}`;
    }
}

function gameFlash (btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    },250);
}
function userflash (btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    //random btn choose then flashs that btn 
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randbtn);


}
function overflash (btn){
   btn.classList.add("over");
   setTimeout(() => {
    btn.classList.remove("over");
   }, 180);
}

function checkAns(idx){
   // console.log("curr level ", level);
    // let idx = level-1;
    if(userseq[idx] === gameseq[idx]){
      //  console.log("matching");
        if(userseq.length == gameseq.length){
            setTimeout(() => {
                levelUp();
                updateheigestscore();
                
            }, 1000);
        }
    }else{
       // console.log("game over");
        h2.innerHTML = `game over! your score was <b> ${level} </b> <br> press any key to start`;
        let body =  document.querySelector("body");
        overflash(body);
        reset();
    }
}


function btnpress (){

 //   console.log("butten pressed");
 //  console.log(this);

  let btn = this;
  userflash(btn);

  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  console.log(userseq);

  checkAns(userseq.length-1);

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" , btnpress);
}
function reset(){
    started = false;
    gameseq =[];
    userseq = [];
    level = 0 ;
}